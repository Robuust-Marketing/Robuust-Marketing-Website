import { NextRequest, NextResponse } from "next/server";
import { getServices } from "@/data/services";
import { getPortfolioItems } from "@/data/portfolio";
import { getAllBlogPosts } from "@/lib/blog";
import { getAllGuides } from "@/lib/kennisbank";
import { type Locale, defaultLocale } from "@/i18n/config";

export interface SearchResult {
  type: "service" | "portfolio" | "blog" | "kennisbank";
  title: string;
  description: string;
  href: string;
}

function normalizeText(text: string): string {
  return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function matchesQuery(text: string, query: string): boolean {
  const normalizedText = normalizeText(text);
  const normalizedQuery = normalizeText(query);

  // Check if any word in query matches
  const queryWords = normalizedQuery.split(/\s+/).filter(w => w.length > 1);
  return queryWords.some(word => normalizedText.includes(word));
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("q")?.trim();
  const locale = (searchParams.get("locale") as Locale) || defaultLocale;
  const limit = Math.min(parseInt(searchParams.get("limit") || "10"), 20);

  if (!query || query.length < 2) {
    return NextResponse.json({ results: [] });
  }

  const results: SearchResult[] = [];

  // Search services
  const services = getServices(locale);
  for (const service of services) {
    const searchableText = `${service.name} ${service.description} ${service.features.join(" ")}`;
    if (matchesQuery(searchableText, query)) {
      results.push({
        type: "service",
        title: service.name,
        description: service.description,
        href: service.href,
      });
    }
  }

  // Search portfolio
  const portfolioItems = getPortfolioItems(locale);
  for (const item of portfolioItems) {
    const searchableText = `${item.name} ${item.shortDescription} ${item.description} ${item.tags.join(" ")} ${item.category}`;
    if (matchesQuery(searchableText, query)) {
      results.push({
        type: "portfolio",
        title: item.name,
        description: item.shortDescription,
        href: `/portfolio/${item.slug}`,
      });
    }
  }

  // Search blog posts
  try {
    const blogPosts = await getAllBlogPosts(locale);
    for (const post of blogPosts) {
      const searchableText = `${post.title} ${post.excerpt} ${post.category}`;
      if (matchesQuery(searchableText, query)) {
        results.push({
          type: "blog",
          title: post.title,
          description: post.excerpt,
          href: `/blog/${post.slug}`,
        });
      }
    }
  } catch {
    // Blog might not have content, continue
  }

  // Search kennisbank guides
  try {
    const guides = await getAllGuides(locale);
    for (const guide of guides) {
      const searchableText = `${guide.title} ${guide.description} ${guide.category}`;
      if (matchesQuery(searchableText, query)) {
        const kennisbankPath = locale === "en" ? "/resources" : "/kennisbank";
        results.push({
          type: "kennisbank",
          title: guide.title,
          description: guide.description,
          href: `${kennisbankPath}/${guide.categorySlug}/${guide.slug}`,
        });
      }
    }
  } catch {
    // Kennisbank might not have content, continue
  }

  return NextResponse.json({
    results: results.slice(0, limit),
    total: results.length,
  });
}
