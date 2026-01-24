import { getAllBlogPosts } from "./blog";
import { getAllGuides, type CategorySlug } from "./kennisbank";
import { getPortfolioItems } from "@/data/portfolio";
import { type Locale, locales, defaultLocale } from "@/i18n/config";

const BASE_URL = "https://robuustmarketing.nl";

// Route translations for URL localization
const routeTranslations: Record<string, Record<Locale, string>> = {
  diensten: { nl: "diensten", en: "services" },
  tarieven: { nl: "tarieven", en: "pricing" },
  offerte: { nl: "offerte", en: "quote" },
  kennisbank: { nl: "kennisbank", en: "resources" },
  werkwijze: { nl: "werkwijze", en: "approach" },
  over: { nl: "over", en: "about" },
  voorwaarden: { nl: "voorwaarden", en: "terms" },
  avg: { nl: "avg", en: "gdpr" },
  onderhoud: { nl: "onderhoud", en: "maintenance" },
  referenties: { nl: "referenties", en: "references" },
  vacatures: { nl: "vacatures", en: "careers" },
};

export interface SitemapEntry {
  loc: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: number;
  alternates?: { locale: string; url: string }[];
}

function getLocalizedPath(path: string, locale: Locale): string {
  if (locale === "nl") return path;

  let localizedPath = path;
  Object.entries(routeTranslations).forEach(([, mapping]) => {
    localizedPath = localizedPath.replace(
      new RegExp(`/${mapping.nl}(/|$)`, "g"),
      `/${mapping[locale]}$1`
    );
  });

  return localizedPath;
}

function buildUrl(path: string, locale: Locale): string {
  const localizedPath = getLocalizedPath(path, locale);
  return locale === defaultLocale
    ? `${BASE_URL}${localizedPath}`
    : `${BASE_URL}/${locale}${localizedPath}`;
}

function buildAlternates(path: string): { locale: string; url: string }[] {
  const alternates: { locale: string; url: string }[] = [];

  for (const locale of locales) {
    alternates.push({
      locale,
      url: buildUrl(path, locale),
    });
  }

  // Add x-default pointing to default locale
  alternates.push({
    locale: "x-default",
    url: `${BASE_URL}${path}`,
  });

  return alternates;
}

function formatDate(date?: string | Date): string {
  if (!date) return new Date().toISOString().split("T")[0];
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toISOString().split("T")[0];
}

// Generate XML for a single sitemap
export function generateSitemapXml(entries: SitemapEntry[]): string {
  const urlElements = entries
    .map((entry) => {
      const alternatesXml = entry.alternates
        ? entry.alternates
            .map(
              (alt) =>
                `    <xhtml:link rel="alternate" hreflang="${alt.locale}" href="${alt.url}"/>`
            )
            .join("\n")
        : "";

      return `  <url>
    <loc>${entry.loc}</loc>${entry.lastmod ? `\n    <lastmod>${entry.lastmod}</lastmod>` : ""}${entry.changefreq ? `\n    <changefreq>${entry.changefreq}</changefreq>` : ""}${entry.priority !== undefined ? `\n    <priority>${entry.priority.toFixed(1)}</priority>` : ""}
${alternatesXml}
  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlElements}
</urlset>`;
}

// Generate sitemap index XML
export function generateSitemapIndexXml(sitemaps: { loc: string; lastmod?: string }[]): string {
  const sitemapElements = sitemaps
    .map(
      (sitemap) => `  <sitemap>
    <loc>${sitemap.loc}</loc>${sitemap.lastmod ? `\n    <lastmod>${sitemap.lastmod}</lastmod>` : ""}
  </sitemap>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapElements}
</sitemapindex>`;
}

// Get sitemap index entries
export function getSitemapIndex(): { loc: string; lastmod: string }[] {
  const today = formatDate();

  return [
    { loc: `${BASE_URL}/sitemap/pages.xml`, lastmod: today },
    { loc: `${BASE_URL}/sitemap/services.xml`, lastmod: today },
    { loc: `${BASE_URL}/sitemap/blog.xml`, lastmod: today },
    { loc: `${BASE_URL}/sitemap/kennisbank.xml`, lastmod: today },
    { loc: `${BASE_URL}/sitemap/portfolio.xml`, lastmod: today },
    { loc: `${BASE_URL}/sitemap/landing-pages.xml`, lastmod: today },
  ];
}

// Main pages sitemap
export function getPagesSitemap(): SitemapEntry[] {
  const pages = [
    { path: "", priority: 1.0, changefreq: "weekly" as const },
    { path: "/contact", priority: 0.9, changefreq: "monthly" as const },
    { path: "/offerte", priority: 0.9, changefreq: "monthly" as const },
    { path: "/tarieven", priority: 0.8, changefreq: "monthly" as const },
    { path: "/werkwijze", priority: 0.8, changefreq: "monthly" as const },
    { path: "/tooling", priority: 0.7, changefreq: "monthly" as const },
    { path: "/over", priority: 0.8, changefreq: "monthly" as const },
    { path: "/referenties", priority: 0.8, changefreq: "monthly" as const },
    { path: "/partners", priority: 0.7, changefreq: "monthly" as const },
    { path: "/vacatures", priority: 0.7, changefreq: "weekly" as const },
    { path: "/faq", priority: 0.7, changefreq: "monthly" as const },
    { path: "/support", priority: 0.7, changefreq: "monthly" as const },
    { path: "/privacy", priority: 0.4, changefreq: "yearly" as const },
    { path: "/avg", priority: 0.4, changefreq: "yearly" as const },
    { path: "/voorwaarden", priority: 0.4, changefreq: "yearly" as const },
  ];

  const entries: SitemapEntry[] = [];

  for (const page of pages) {
    for (const locale of locales) {
      entries.push({
        loc: buildUrl(page.path, locale),
        lastmod: formatDate(),
        changefreq: page.changefreq,
        priority: page.priority,
        alternates: buildAlternates(page.path),
      });
    }
  }

  return entries;
}

// Services sitemap
export function getServicesSitemap(): SitemapEntry[] {
  const services = [
    { path: "/diensten", priority: 0.9 },
    { path: "/diensten/onderhoud", priority: 0.8 },
    { path: "/diensten/design", priority: 0.8 },
    { path: "/diensten/development", priority: 0.8 },
    { path: "/diensten/hosting", priority: 0.8 },
    { path: "/diensten/seo", priority: 0.8 },
    { path: "/diensten/online-marketing", priority: 0.8 },
    { path: "/diensten/email-marketing", priority: 0.8 },
    { path: "/diensten/branding", priority: 0.8 },
    { path: "/diensten/tracking", priority: 0.8 },
    { path: "/diensten/crm", priority: 0.8 },
  ];

  const entries: SitemapEntry[] = [];

  for (const service of services) {
    for (const locale of locales) {
      entries.push({
        loc: buildUrl(service.path, locale),
        lastmod: formatDate(),
        changefreq: "monthly",
        priority: service.priority,
        alternates: buildAlternates(service.path),
      });
    }
  }

  return entries;
}

// Blog sitemap with actual post dates
export function getBlogSitemap(): SitemapEntry[] {
  const entries: SitemapEntry[] = [];

  // Blog index pages
  for (const locale of locales) {
    entries.push({
      loc: buildUrl("/blog", locale),
      lastmod: formatDate(),
      changefreq: "daily",
      priority: 0.8,
      alternates: buildAlternates("/blog"),
    });
  }

  // Individual blog posts - use Dutch posts as source of truth
  const posts = getAllBlogPosts("nl");

  for (const post of posts) {
    const path = `/blog/${post.slug}`;

    for (const locale of locales) {
      entries.push({
        loc: buildUrl(path, locale),
        lastmod: formatDate(post.date),
        changefreq: "monthly",
        priority: 0.7,
        alternates: buildAlternates(path),
      });
    }
  }

  return entries;
}

// Kennisbank sitemap
export function getKennisbankSitemap(): SitemapEntry[] {
  const entries: SitemapEntry[] = [];
  const categories: CategorySlug[] = ["development", "seo", "hosting"];

  // Kennisbank index pages
  for (const locale of locales) {
    entries.push({
      loc: buildUrl("/kennisbank", locale),
      lastmod: formatDate(),
      changefreq: "weekly",
      priority: 0.8,
      alternates: buildAlternates("/kennisbank"),
    });

    // Glossary page
    entries.push({
      loc: buildUrl("/kennisbank/glossary", locale),
      lastmod: formatDate(),
      changefreq: "monthly",
      priority: 0.6,
      alternates: buildAlternates("/kennisbank/glossary"),
    });
  }

  // Category pages and guides
  for (const category of categories) {
    const categoryPath = `/kennisbank/${category}`;

    // Category index
    for (const locale of locales) {
      entries.push({
        loc: buildUrl(categoryPath, locale),
        lastmod: formatDate(),
        changefreq: "weekly",
        priority: 0.7,
        alternates: buildAlternates(categoryPath),
      });
    }

    // Individual guides - use Dutch as source
    const guides = getAllGuides("nl").filter((g) => g.categorySlug === category);

    for (const guide of guides) {
      const guidePath = `/kennisbank/${category}/${guide.slug}`;

      for (const locale of locales) {
        entries.push({
          loc: buildUrl(guidePath, locale),
          lastmod: formatDate(),
          changefreq: "monthly",
          priority: 0.6,
          alternates: buildAlternates(guidePath),
        });
      }
    }
  }

  return entries;
}

// Portfolio sitemap
export function getPortfolioSitemap(): SitemapEntry[] {
  const entries: SitemapEntry[] = [];

  // Portfolio index pages
  for (const locale of locales) {
    entries.push({
      loc: buildUrl("/portfolio", locale),
      lastmod: formatDate(),
      changefreq: "weekly",
      priority: 0.8,
      alternates: buildAlternates("/portfolio"),
    });
  }

  // Individual portfolio items
  const items = getPortfolioItems("nl");

  for (const item of items) {
    const path = `/portfolio/${item.slug}`;

    for (const locale of locales) {
      entries.push({
        loc: buildUrl(path, locale),
        // Use year as approximate last modified
        lastmod: formatDate(`${item.year}-06-01`),
        changefreq: "monthly",
        priority: 0.7,
        alternates: buildAlternates(path),
      });
    }
  }

  return entries;
}

// Landing pages sitemap (Dutch only - these are local SEO pages)
export function getLandingPagesSitemap(): SitemapEntry[] {
  const landingPages = [
    { path: "/website-laten-maken", priority: 0.9 },
    { path: "/website-laten-maken-zwijndrecht", priority: 0.8 },
    { path: "/website-laten-maken-dordrecht", priority: 0.8 },
    { path: "/website-laten-maken-ridderkerk", priority: 0.8 },
    { path: "/website-laten-maken-barendrecht", priority: 0.8 },
    { path: "/website-laten-maken-rotterdam-zuid", priority: 0.8 },
    { path: "/website-laten-maken-papendrecht", priority: 0.8 },
    { path: "/website-laten-maken-sliedrecht", priority: 0.8 },
    { path: "/website-laten-maken-hendrik-ido-ambacht", priority: 0.8 },
    { path: "/website-laten-maken-alblasserdam", priority: 0.8 },
    { path: "/video-laten-maken", priority: 0.8 },
  ];

  // Only Dutch for local SEO landing pages
  return landingPages.map((page) => ({
    loc: `${BASE_URL}${page.path}`,
    lastmod: formatDate(),
    changefreq: "monthly" as const,
    priority: page.priority,
    // No alternates - these are Dutch-only pages
  }));
}
