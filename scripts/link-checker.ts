#!/usr/bin/env npx tsx
/**
 * Internal Link Checker Tool
 *
 * Crawls the site like Ahrefs does and checks:
 * - Broken links (404s)
 * - Redirect chains
 * - Canonical URLs pointing to redirects
 * - Missing hreflang tags
 * - Orphan pages (not linked from anywhere)
 *
 * Usage:
 *   npx tsx scripts/link-checker.ts
 *   npx tsx scripts/link-checker.ts --base-url=https://robuustmarketing.nl
 *   npx tsx scripts/link-checker.ts --verbose
 */

import * as cheerio from "cheerio";

// Configuration
const DEFAULT_BASE_URL = "http://localhost:3000";
const MAX_CONCURRENT_REQUESTS = 5;
const REQUEST_TIMEOUT = 10000;

// Parse CLI arguments
const args = process.argv.slice(2);
const baseUrl = args.find(a => a.startsWith("--base-url="))?.split("=")[1] || DEFAULT_BASE_URL;
const verbose = args.includes("--verbose") || args.includes("-v");
const checkExternal = args.includes("--external");

// Types
interface PageResult {
  url: string;
  status: number;
  isHtml: boolean;
  redirectedTo?: string;
  canonical?: string;
  canonicalStatus?: number;
  canonicalRedirectsTo?: string;
  hreflang: { lang: string; href: string }[];
  internalLinks: string[];
  externalLinks: string[];
  images: { src: string; alt?: string }[];
  errors: string[];
  warnings: string[];
}

interface CrawlReport {
  baseUrl: string;
  timestamp: string;
  totalPages: number;
  totalInternalLinks: number;
  totalExternalLinks: number;
  brokenLinks: { url: string; foundOn: string[]; status: number }[];
  redirects: { from: string; to: string; foundOn: string[] }[];
  canonicalIssues: { url: string; canonical: string; issue: string }[];
  hreflangIssues: { url: string; issue: string }[];
  orphanPages: string[];
  imagesWithoutAlt: { src: string; foundOn: string }[];
  pages: PageResult[];
}

// Normalize URL for comparison
function normalizeUrl(url: string, base: string): string | null {
  try {
    const parsed = new URL(url, base);
    // Remove trailing slash except for root
    let pathname = parsed.pathname;
    if (pathname !== "/" && pathname.endsWith("/")) {
      pathname = pathname.slice(0, -1);
    }
    return `${parsed.origin}${pathname}${parsed.search}`;
  } catch {
    return null;
  }
}

// Check if URL is internal
function isInternalUrl(url: string, base: string): boolean {
  try {
    const parsed = new URL(url, base);
    const baseParsed = new URL(base);
    return parsed.origin === baseParsed.origin;
  } catch {
    return false;
  }
}

// Fetch with timeout and redirect tracking
async function fetchWithDetails(url: string): Promise<{
  status: number;
  redirectedTo?: string;
  html?: string;
  error?: string;
}> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT);

  try {
    const response = await fetch(url, {
      redirect: "manual",
      signal: controller.signal,
      headers: {
        "User-Agent": "RobuustLinkChecker/1.0",
        "Accept": "text/html,application/xhtml+xml",
      },
    });

    clearTimeout(timeout);

    // Handle redirects
    if (response.status >= 300 && response.status < 400) {
      const location = response.headers.get("location");
      return {
        status: response.status,
        redirectedTo: location ? normalizeUrl(location, url) || location : undefined,
      };
    }

    const html = response.headers.get("content-type")?.includes("text/html")
      ? await response.text()
      : undefined;

    return { status: response.status, html };
  } catch (error) {
    clearTimeout(timeout);
    return {
      status: 0,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

// Follow redirects and return final URL
async function followRedirects(url: string, maxRedirects = 5): Promise<{
  finalUrl: string;
  status: number;
  redirectChain: string[];
}> {
  const redirectChain: string[] = [];
  let currentUrl = url;
  let status = 0;

  for (let i = 0; i < maxRedirects; i++) {
    const result = await fetchWithDetails(currentUrl);
    status = result.status;

    if (result.redirectedTo) {
      redirectChain.push(currentUrl);
      currentUrl = result.redirectedTo;
    } else {
      break;
    }
  }

  return { finalUrl: currentUrl, status, redirectChain };
}

// Parse page and extract links, canonical, hreflang
function parsePage(html: string, pageUrl: string): Omit<PageResult, "url" | "status" | "redirectedTo" | "canonicalStatus" | "canonicalRedirectsTo"> {
  const $ = cheerio.load(html);
  const errors: string[] = [];
  const warnings: string[] = [];

  // Extract canonical
  const canonical = $('link[rel="canonical"]').attr("href") || undefined;

  // Extract hreflang
  const hreflang: { lang: string; href: string }[] = [];
  $('link[rel="alternate"][hreflang]').each((_, el) => {
    const lang = $(el).attr("hreflang");
    const href = $(el).attr("href");
    if (lang && href) {
      hreflang.push({ lang, href });
    }
  });

  // Extract internal and external links
  const internalLinks: Set<string> = new Set();
  const externalLinks: Set<string> = new Set();

  $("a[href]").each((_, el) => {
    const href = $(el).attr("href");
    if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("javascript:")) {
      return;
    }
    // Skip Cloudflare email protection URLs (false positives)
    if (href.includes("/cdn-cgi/l/email-protection")) {
      return;
    }

    const normalized = normalizeUrl(href, pageUrl);
    if (!normalized) {
      warnings.push(`Invalid URL: ${href}`);
      return;
    }

    if (isInternalUrl(normalized, pageUrl)) {
      internalLinks.add(normalized);
    } else {
      externalLinks.add(normalized);
    }
  });

  // Extract images
  const images: { src: string; alt?: string }[] = [];
  $("img[src]").each((_, el) => {
    const src = $(el).attr("src");
    const alt = $(el).attr("alt");
    if (src) {
      images.push({ src, alt: alt || undefined });
    }
  });

  return {
    canonical,
    hreflang,
    internalLinks: Array.from(internalLinks),
    externalLinks: Array.from(externalLinks),
    images,
    errors,
    warnings,
  };
}

// Get all known routes from sitemap or start URLs
async function getStartUrls(base: string): Promise<string[]> {
  const urls: Set<string> = new Set();

  // Try to fetch sitemap
  const sitemapUrls = [
    `${base}/sitemap.xml`,
    `${base}/sitemap-index.xml`,
  ];

  for (const sitemapUrl of sitemapUrls) {
    try {
      const response = await fetch(sitemapUrl);
      if (response.ok) {
        const xml = await response.text();
        // Extract URLs from sitemap
        const matches = xml.matchAll(/<loc>([^<]+)<\/loc>/g);
        for (const match of matches) {
          const url = match[1];
          // If it's a sitemap index, fetch child sitemaps
          if (url.includes("sitemap") && url.endsWith(".xml")) {
            const childResponse = await fetch(url);
            if (childResponse.ok) {
              const childXml = await childResponse.text();
              const childMatches = childXml.matchAll(/<loc>([^<]+)<\/loc>/g);
              for (const childMatch of childMatches) {
                urls.add(childMatch[1]);
              }
            }
          } else {
            urls.add(url);
          }
        }
      }
    } catch {
      // Sitemap not available, continue
    }
  }

  // Always include homepage
  urls.add(base);
  urls.add(`${base}/`);

  return Array.from(urls);
}

// Crawl a single page
async function crawlPage(url: string): Promise<PageResult> {
  const result: PageResult = {
    url,
    status: 0,
    isHtml: false,
    hreflang: [],
    internalLinks: [],
    externalLinks: [],
    images: [],
    errors: [],
    warnings: [],
  };

  const fetchResult = await fetchWithDetails(url);
  result.status = fetchResult.status;

  if (fetchResult.redirectedTo) {
    result.redirectedTo = fetchResult.redirectedTo;
  }

  if (fetchResult.error) {
    result.errors.push(fetchResult.error);
    return result;
  }

  if (!fetchResult.html) {
    return result;
  }

  result.isHtml = true;

  const parsed = parsePage(fetchResult.html, url);
  Object.assign(result, parsed);

  // Check canonical URL
  if (result.canonical) {
    const canonicalResult = await followRedirects(result.canonical);
    result.canonicalStatus = canonicalResult.status;
    if (canonicalResult.redirectChain.length > 0) {
      result.canonicalRedirectsTo = canonicalResult.finalUrl;
      result.errors.push(`Canonical URL redirects: ${result.canonical} -> ${canonicalResult.finalUrl}`);
    }
  }

  return result;
}

// Process URLs with concurrency limit
async function processWithConcurrency<T, R>(
  items: T[],
  processor: (item: T) => Promise<R>,
  concurrency: number,
  onProgress?: (completed: number, total: number) => void
): Promise<R[]> {
  const results: R[] = [];
  let index = 0;
  let completed = 0;

  async function worker() {
    while (index < items.length) {
      const currentIndex = index++;
      const item = items[currentIndex];
      const result = await processor(item);
      results[currentIndex] = result;
      completed++;
      onProgress?.(completed, items.length);
    }
  }

  const workers = Array(Math.min(concurrency, items.length))
    .fill(null)
    .map(() => worker());

  await Promise.all(workers);
  return results;
}

// Main crawl function
async function crawl(): Promise<CrawlReport> {
  console.log(`\n🔍 Starting link check on ${baseUrl}\n`);

  // Get start URLs
  const startUrls = await getStartUrls(baseUrl);
  console.log(`📋 Found ${startUrls.length} URLs from sitemap\n`);

  // Crawl all pages
  const visited = new Set<string>();
  const toVisit = new Set(startUrls.map(u => normalizeUrl(u, baseUrl)).filter(Boolean) as string[]);
  const allResults: PageResult[] = [];
  const linkSources = new Map<string, Set<string>>(); // Track where each link is found

  let iteration = 0;
  while (toVisit.size > 0) {
    iteration++;
    const batch = Array.from(toVisit);
    toVisit.clear();

    console.log(`🌐 Iteration ${iteration}: Crawling ${batch.length} pages...`);

    const results = await processWithConcurrency(
      batch,
      async (url) => {
        if (visited.has(url)) return null;
        visited.add(url);
        if (verbose) console.log(`  → ${url}`);
        return crawlPage(url);
      },
      MAX_CONCURRENT_REQUESTS,
      (completed, total) => {
        if (!verbose) {
          process.stdout.write(`\r  Progress: ${completed}/${total}`);
        }
      }
    );

    if (!verbose) console.log("");

    for (const result of results) {
      if (!result) continue;
      allResults.push(result);

      // Track link sources and add new URLs to visit
      for (const link of result.internalLinks) {
        const normalized = normalizeUrl(link, baseUrl);
        if (normalized && !visited.has(normalized)) {
          toVisit.add(normalized);
        }
        if (normalized) {
          if (!linkSources.has(normalized)) {
            linkSources.set(normalized, new Set());
          }
          linkSources.get(normalized)!.add(result.url);
        }
      }
    }
  }

  console.log(`\n✅ Crawled ${allResults.length} pages\n`);

  // Analyze results
  const report: CrawlReport = {
    baseUrl,
    timestamp: new Date().toISOString(),
    totalPages: allResults.length,
    totalInternalLinks: new Set(allResults.flatMap(r => r.internalLinks)).size,
    totalExternalLinks: new Set(allResults.flatMap(r => r.externalLinks)).size,
    brokenLinks: [],
    redirects: [],
    canonicalIssues: [],
    hreflangIssues: [],
    orphanPages: [],
    imagesWithoutAlt: [],
    pages: allResults,
  };

  // Find broken links
  const checkedLinks = new Map<string, number>();
  for (const result of allResults) {
    checkedLinks.set(result.url, result.status);
  }

  // Check all internal links that weren't crawled as pages
  const uncheckedLinks = new Set<string>();
  for (const result of allResults) {
    for (const link of result.internalLinks) {
      const normalized = normalizeUrl(link, baseUrl);
      if (normalized && !checkedLinks.has(normalized)) {
        uncheckedLinks.add(normalized);
      }
    }
  }

  if (uncheckedLinks.size > 0) {
    console.log(`🔗 Checking ${uncheckedLinks.size} additional internal links...`);
    const linkResults = await processWithConcurrency(
      Array.from(uncheckedLinks),
      async (url) => {
        const result = await fetchWithDetails(url);
        return { url, status: result.status, redirectedTo: result.redirectedTo };
      },
      MAX_CONCURRENT_REQUESTS
    );

    for (const result of linkResults) {
      checkedLinks.set(result.url, result.status);
      if (result.redirectedTo) {
        const sources = linkSources.get(result.url);
        report.redirects.push({
          from: result.url,
          to: result.redirectedTo,
          foundOn: sources ? Array.from(sources) : [],
        });
      }
    }
  }

  // Compile broken links
  for (const [url, status] of checkedLinks) {
    if (status >= 400 || status === 0) {
      const sources = linkSources.get(url);
      report.brokenLinks.push({
        url,
        status,
        foundOn: sources ? Array.from(sources) : [],
      });
    }
  }

  // Compile redirects from page results
  for (const result of allResults) {
    if (result.redirectedTo) {
      const sources = linkSources.get(result.url);
      report.redirects.push({
        from: result.url,
        to: result.redirectedTo,
        foundOn: sources ? Array.from(sources) : [],
      });
    }
  }

  // Check canonical issues (skip redirected and non-HTML pages)
  for (const result of allResults) {
    if (result.redirectedTo || !result.isHtml) continue;
    if (result.canonical) {
      // Check if canonical points to a redirect
      if (result.canonicalRedirectsTo) {
        report.canonicalIssues.push({
          url: result.url,
          canonical: result.canonical,
          issue: `Canonical redirects to ${result.canonicalRedirectsTo}`,
        });
      }
      // Check if canonical doesn't match the page URL (and isn't a valid alternate)
      const normalizedCanonical = normalizeUrl(result.canonical, baseUrl);
      const normalizedUrl = normalizeUrl(result.url, baseUrl);
      if (normalizedCanonical && normalizedUrl && normalizedCanonical !== normalizedUrl) {
        // This might be intentional (e.g., pagination), but flag it for review
        if (!result.canonicalRedirectsTo) {
          report.canonicalIssues.push({
            url: result.url,
            canonical: result.canonical,
            issue: "Canonical URL differs from page URL (review if intentional)",
          });
        }
      }
    } else {
      report.canonicalIssues.push({
        url: result.url,
        canonical: "",
        issue: "Missing canonical tag",
      });
    }
  }

  // Check hreflang issues (skip redirected and non-HTML pages)
  for (const result of allResults) {
    if (result.redirectedTo || !result.isHtml) continue;
    if (result.hreflang.length === 0) {
      report.hreflangIssues.push({
        url: result.url,
        issue: "Missing hreflang tags",
      });
    } else {
      // Check for missing x-default
      if (!result.hreflang.some(h => h.lang === "x-default")) {
        report.hreflangIssues.push({
          url: result.url,
          issue: "Missing x-default hreflang",
        });
      }
      // Check for self-referencing hreflang
      const normalizedUrl = normalizeUrl(result.url, baseUrl);
      const hasSelfreferencing = result.hreflang.some(h => {
        const normalizedHref = normalizeUrl(h.href, baseUrl);
        return normalizedHref === normalizedUrl;
      });
      if (!hasSelfreferencing) {
        report.hreflangIssues.push({
          url: result.url,
          issue: "Missing self-referencing hreflang",
        });
      }
    }
  }

  // Find orphan pages (in sitemap but not linked from anywhere)
  const linkedPages = new Set(allResults.flatMap(r => r.internalLinks).map(l => normalizeUrl(l, baseUrl)));
  for (const result of allResults) {
    const normalizedUrl = normalizeUrl(result.url, baseUrl);
    if (normalizedUrl && !linkedPages.has(normalizedUrl) && normalizedUrl !== normalizeUrl(baseUrl, baseUrl)) {
      report.orphanPages.push(result.url);
    }
  }

  // Find images without alt text
  for (const result of allResults) {
    for (const img of result.images) {
      if (!img.alt && !img.src.includes("data:")) {
        report.imagesWithoutAlt.push({
          src: img.src,
          foundOn: result.url,
        });
      }
    }
  }

  return report;
}

// Print report
function printReport(report: CrawlReport) {
  console.log("\n" + "=".repeat(60));
  console.log("📊 LINK CHECK REPORT");
  console.log("=".repeat(60));
  console.log(`Base URL: ${report.baseUrl}`);
  console.log(`Timestamp: ${report.timestamp}`);
  console.log(`Total pages crawled: ${report.totalPages}`);
  console.log(`Total internal links: ${report.totalInternalLinks}`);
  console.log(`Total external links: ${report.totalExternalLinks}`);

  // Critical issues
  if (report.brokenLinks.length > 0) {
    console.log("\n" + "─".repeat(60));
    console.log(`❌ BROKEN LINKS (${report.brokenLinks.length})`);
    console.log("─".repeat(60));
    for (const link of report.brokenLinks.slice(0, 20)) {
      console.log(`  ${link.status === 0 ? "ERR" : link.status} ${link.url}`);
      // Always show where the broken link was found
      if (link.foundOn.length > 0) {
        console.log(`      Found on:`);
        for (const source of link.foundOn.slice(0, 5)) {
          console.log(`        - ${source}`);
        }
        if (link.foundOn.length > 5) {
          console.log(`        ... and ${link.foundOn.length - 5} more pages`);
        }
      } else {
        console.log(`      Found on: (source unknown - possibly from sitemap)`);
      }
    }
    if (report.brokenLinks.length > 20) {
      console.log(`  ... and ${report.brokenLinks.length - 20} more`);
    }
  }

  // Canonical issues (only redirects)
  const canonicalRedirects = report.canonicalIssues.filter(c => c.issue.includes("redirects"));
  if (canonicalRedirects.length > 0) {
    console.log("\n" + "─".repeat(60));
    console.log(`⚠️  CANONICAL POINTING TO REDIRECT (${canonicalRedirects.length})`);
    console.log("─".repeat(60));
    for (const issue of canonicalRedirects.slice(0, 20)) {
      console.log(`  ${issue.url}`);
      console.log(`    Canonical: ${issue.canonical}`);
      console.log(`    Issue: ${issue.issue}`);
    }
    if (canonicalRedirects.length > 20) {
      console.log(`  ... and ${canonicalRedirects.length - 20} more`);
    }
  }

  // Redirects
  if (report.redirects.length > 0) {
    console.log("\n" + "─".repeat(60));
    console.log(`🔄 INTERNAL REDIRECTS (${report.redirects.length})`);
    console.log("─".repeat(60));
    for (const redirect of report.redirects.slice(0, 20)) {
      console.log(`  ${redirect.from}`);
      console.log(`    → ${redirect.to}`);
    }
    if (report.redirects.length > 20) {
      console.log(`  ... and ${report.redirects.length - 20} more`);
    }
  }

  // Missing canonicals
  const missingCanonicals = report.canonicalIssues.filter(c => c.issue === "Missing canonical tag");
  if (missingCanonicals.length > 0) {
    console.log("\n" + "─".repeat(60));
    console.log(`⚠️  MISSING CANONICAL TAG (${missingCanonicals.length})`);
    console.log("─".repeat(60));
    for (const issue of missingCanonicals.slice(0, 10)) {
      console.log(`  ${issue.url}`);
    }
    if (missingCanonicals.length > 10) {
      console.log(`  ... and ${missingCanonicals.length - 10} more`);
    }
  }

  // Orphan pages
  if (report.orphanPages.length > 0) {
    console.log("\n" + "─".repeat(60));
    console.log(`🏝️  ORPHAN PAGES (${report.orphanPages.length})`);
    console.log("─".repeat(60));
    for (const page of report.orphanPages.slice(0, 10)) {
      console.log(`  ${page}`);
    }
    if (report.orphanPages.length > 10) {
      console.log(`  ... and ${report.orphanPages.length - 10} more`);
    }
  }

  // Images without alt
  if (report.imagesWithoutAlt.length > 0) {
    console.log("\n" + "─".repeat(60));
    console.log(`🖼️  IMAGES WITHOUT ALT TEXT (${report.imagesWithoutAlt.length})`);
    console.log("─".repeat(60));
    const uniqueImages = new Map<string, string[]>();
    for (const img of report.imagesWithoutAlt) {
      if (!uniqueImages.has(img.src)) {
        uniqueImages.set(img.src, []);
      }
      uniqueImages.get(img.src)!.push(img.foundOn);
    }
    let count = 0;
    for (const [src] of uniqueImages) {
      if (count++ >= 10) break;
      console.log(`  ${src}`);
    }
    if (uniqueImages.size > 10) {
      console.log(`  ... and ${uniqueImages.size - 10} more`);
    }
  }

  // Summary
  console.log("\n" + "=".repeat(60));
  console.log("📈 SUMMARY");
  console.log("=".repeat(60));

  const criticalIssues = report.brokenLinks.length + canonicalRedirects.length;
  const warnings = report.redirects.length + missingCanonicals.length + report.orphanPages.length;

  if (criticalIssues === 0 && warnings === 0) {
    console.log("✅ No issues found!");
  } else {
    if (criticalIssues > 0) {
      console.log(`❌ Critical issues: ${criticalIssues}`);
    }
    if (warnings > 0) {
      console.log(`⚠️  Warnings: ${warnings}`);
    }
  }

  console.log("\n");
}

// Run
async function main() {
  try {
    const report = await crawl();
    printReport(report);

    // Exit with error code if critical issues found
    const criticalIssues = report.brokenLinks.length +
      report.canonicalIssues.filter(c => c.issue.includes("redirects")).length;

    if (criticalIssues > 0) {
      process.exit(1);
    }
  } catch (error) {
    console.error("Error during crawl:", error);
    process.exit(1);
  }
}

main();
