import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://robuust.marketing";

  // Hoofdpagina's
  const mainPages = [
    { url: "", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/contact", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/offerte", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/tarieven", priority: 0.8, changeFrequency: "monthly" as const },
  ];

  // Diensten
  const servicePages = [
    { url: "/diensten", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/diensten/onderhoud", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/diensten/design", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/diensten/development", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/diensten/hosting", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/diensten/seo", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/diensten/online-marketing", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/diensten/email-marketing", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/diensten/branding", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/diensten/tracking", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/diensten/crm", priority: 0.8, changeFrequency: "monthly" as const },
  ];

  // Werkwijze & Tooling
  const processPages = [
    { url: "/werkwijze", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/tooling", priority: 0.7, changeFrequency: "monthly" as const },
  ];

  // Over Robuust
  const companyPages = [
    { url: "/over", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/portfolio", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/referenties", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/partners", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/vacatures", priority: 0.7, changeFrequency: "weekly" as const },
  ];

  // Kennisbank & Blog
  const contentPages = [
    { url: "/blog", priority: 0.8, changeFrequency: "daily" as const },
    { url: "/kennisbank", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/kennisbank/glossary", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/faq", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/support", priority: 0.7, changeFrequency: "monthly" as const },
  ];

  // SEO Landingspagina's
  const landingPages = [
    { url: "/website-laten-maken", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/website-laten-maken-zwijndrecht", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/video-laten-maken", priority: 0.8, changeFrequency: "monthly" as const },
  ];

  // Juridische pagina's
  const legalPages = [
    { url: "/privacy", priority: 0.4, changeFrequency: "yearly" as const },
    { url: "/avg", priority: 0.4, changeFrequency: "yearly" as const },
    { url: "/voorwaarden", priority: 0.4, changeFrequency: "yearly" as const },
  ];

  const allPages = [
    ...mainPages,
    ...servicePages,
    ...processPages,
    ...companyPages,
    ...contentPages,
    ...landingPages,
    ...legalPages,
  ];

  return allPages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
