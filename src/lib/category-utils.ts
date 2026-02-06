import type { Locale } from "@/i18n/config";

/**
 * Explicit NL↔EN category slug mapping.
 * Each entry: [nlCategoryName, nlSlug, enCategoryName, enSlug]
 */
const categoryMappings: [string, string, string, string][] = [
  ["Cloudflare", "cloudflare", "Cloudflare", "cloudflare"],
  ["E-mail", "e-mail", "Email", "email"],
  ["Hosting & Servers", "hosting-en-servers", "Hosting & Servers", "hosting-and-servers"],
  ["Marketing & SEO", "marketing-en-seo", "Marketing & SEO", "marketing-and-seo"],
  ["MKB Tips", "mkb-tips", "SMB Tips", "smb-tips"],
  ["SEO", "seo", "SEO", "seo"],
  ["Social Media", "social-media", "Social Media", "social-media"],
  ["Social Media Marketing", "social-media-marketing", "Social Media Marketing", "social-media-marketing"],
  ["Webontwikkeling", "webontwikkeling", "Web Development", "web-development"],
  ["Website", "website", "Website", "website"],
  ["WordPress", "wordpress", "WordPress", "wordpress"],
  ["Zoekmachine Optimalisatie", "zoekmachine-optimalisatie", "Search Engine Optimization", "search-engine-optimization"],
];

// Build lookup maps for fast access
const nlNameToSlug = new Map<string, string>();
const enNameToSlug = new Map<string, string>();
const nlSlugToName = new Map<string, string>();
const enSlugToName = new Map<string, string>();
const nlSlugToEnSlug = new Map<string, string>();
const enSlugToNlSlug = new Map<string, string>();
const allNlSlugs = new Set<string>();
const allEnSlugs = new Set<string>();

for (const [nlName, nlSlug, enName, enSlug] of categoryMappings) {
  nlNameToSlug.set(nlName.toLowerCase(), nlSlug);
  enNameToSlug.set(enName.toLowerCase(), enSlug);
  nlSlugToName.set(nlSlug, nlName);
  enSlugToName.set(enSlug, enName);
  nlSlugToEnSlug.set(nlSlug, enSlug);
  enSlugToNlSlug.set(enSlug, nlSlug);
  allNlSlugs.add(nlSlug);
  allEnSlugs.add(enSlug);
}

/**
 * Convert category name to URL-safe slug (locale-aware).
 * If the category name belongs to the other locale, translates the slug to the target locale.
 * Falls back to generic slugification if category not found in mapping.
 */
export function categoryToSlug(category: string, locale?: Locale): string {
  const lower = category.toLowerCase();

  if (locale === "en") {
    const slug = enNameToSlug.get(lower);
    if (slug) return slug;
    // Category name might be NL — find the NL slug and translate to EN
    const nlSlug = nlNameToSlug.get(lower);
    if (nlSlug) return nlSlugToEnSlug.get(nlSlug) ?? nlSlug;
  } else if (locale === "nl") {
    const slug = nlNameToSlug.get(lower);
    if (slug) return slug;
    // Category name might be EN — find the EN slug and translate to NL
    const enSlug = enNameToSlug.get(lower);
    if (enSlug) return enSlugToNlSlug.get(enSlug) ?? enSlug;
  }

  // Try both maps if no locale specified
  const nlSlug = nlNameToSlug.get(lower);
  if (nlSlug) return nlSlug;
  const enSlug = enNameToSlug.get(lower);
  if (enSlug) return enSlug;

  // Fallback: generic slugification
  return category
    .toLowerCase()
    .replace(/[&]/g, "en")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/--+/g, "-")
    .trim();
}

/**
 * Get category slug for a specific locale.
 * Alias for categoryToSlug with required locale.
 */
export function getCategorySlug(categoryName: string, locale: Locale): string {
  return categoryToSlug(categoryName, locale);
}

/**
 * Translate a category slug from one locale to another.
 */
export function translateCategorySlug(slug: string, fromLocale: Locale, toLocale: Locale): string | null {
  if (fromLocale === toLocale) return slug;

  if (fromLocale === "nl") {
    return nlSlugToEnSlug.get(slug) ?? null;
  }
  return enSlugToNlSlug.get(slug) ?? null;
}

/**
 * Get category name from slug for a specific locale.
 */
export function getCategoryNameFromSlug(slug: string, locale: Locale): string | null {
  if (locale === "nl") {
    return nlSlugToName.get(slug) ?? null;
  }
  return enSlugToName.get(slug) ?? null;
}

/**
 * Check if a slug is a valid category slug for a given locale.
 */
export function isValidCategorySlug(slug: string, locale: Locale): boolean {
  if (locale === "nl") return allNlSlugs.has(slug);
  return allEnSlugs.has(slug);
}

/**
 * Get all category slugs for a given locale.
 */
export function getAllCategorySlugsForLocale(locale: Locale): string[] {
  if (locale === "nl") return Array.from(allNlSlugs);
  return Array.from(allEnSlugs);
}

/**
 * Map blog category names to service IDs.
 * Returns null if no matching service exists.
 */
const categoryServiceMap: Record<string, string> = {
  // NL categories
  "zoekmachine optimalisatie": "seo",
  "cloudflare": "hosting",
  "webontwikkeling": "development",
  "social media marketing": "social-media",
  "marketing & seo": "online-marketing",
  "hosting & servers": "hosting",
  "wordpress": "development",
  "social media": "social-media",
  "seo": "seo",
  "website": "development",
  "e-mail": "email-marketing",
  // EN-only categories (shared keys like "hosting & servers" already covered above)
  "search engine optimization": "seo",
  "web development": "development",
  "email": "email-marketing",
  "smb tips": "online-marketing",
  "mkb tips": "online-marketing",
};

export function getServiceForCategory(categoryName: string): string | null {
  return categoryServiceMap[categoryName.toLowerCase()] ?? null;
}
