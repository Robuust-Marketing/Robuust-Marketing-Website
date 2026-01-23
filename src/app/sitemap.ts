import { MetadataRoute } from "next";
import { locales, defaultLocale } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://robuustmarketing.nl";

  // Page definitions with priorities and change frequencies
  const pages = [
    // Main pages
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/contact", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/offerte", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/tarieven", priority: 0.8, changeFrequency: "monthly" as const },

    // Services
    { path: "/diensten", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/diensten/onderhoud", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/diensten/design", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/diensten/development", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/diensten/hosting", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/diensten/seo", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/diensten/online-marketing", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/diensten/email-marketing", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/diensten/branding", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/diensten/tracking", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/diensten/crm", priority: 0.8, changeFrequency: "monthly" as const },

    // Process & Tools
    { path: "/werkwijze", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/tooling", priority: 0.7, changeFrequency: "monthly" as const },

    // Company
    { path: "/over", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/portfolio", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/referenties", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/partners", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/vacatures", priority: 0.7, changeFrequency: "weekly" as const },

    // Knowledge Base & Blog
    { path: "/blog", priority: 0.8, changeFrequency: "daily" as const },
    { path: "/kennisbank", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/kennisbank/glossary", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/faq", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/support", priority: 0.7, changeFrequency: "monthly" as const },

    // SEO Landing Pages
    { path: "/website-laten-maken", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/website-laten-maken-zwijndrecht", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/website-laten-maken-dordrecht", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/website-laten-maken-ridderkerk", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/website-laten-maken-barendrecht", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/website-laten-maken-rotterdam-zuid", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/website-laten-maken-papendrecht", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/website-laten-maken-sliedrecht", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/website-laten-maken-hendrik-ido-ambacht", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/website-laten-maken-alblasserdam", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/video-laten-maken", priority: 0.8, changeFrequency: "monthly" as const },

    // Legal
    { path: "/privacy", priority: 0.4, changeFrequency: "yearly" as const },
    { path: "/avg", priority: 0.4, changeFrequency: "yearly" as const },
    { path: "/voorwaarden", priority: 0.4, changeFrequency: "yearly" as const },
  ];

  // Generate sitemap entries for all pages in all locales
  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const page of pages) {
    for (const locale of locales) {
      // Build the URL based on locale
      const url = locale === defaultLocale
        ? `${baseUrl}${page.path}`
        : `${baseUrl}/${locale}${page.path}`;

      // Build alternate language links
      const alternates: Record<string, string> = {};
      for (const altLocale of locales) {
        const altUrl = altLocale === defaultLocale
          ? `${baseUrl}${page.path}`
          : `${baseUrl}/${altLocale}${page.path}`;
        alternates[altLocale] = altUrl;
      }
      // Add x-default pointing to default locale
      alternates["x-default"] = `${baseUrl}${page.path}`;

      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: {
          languages: alternates,
        },
      });
    }
  }

  return sitemapEntries;
}
