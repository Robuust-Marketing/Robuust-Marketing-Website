/**
 * Convert category name to URL-safe slug
 * This is a client-safe utility function
 */
export function categoryToSlug(category: string): string {
  return category
    .toLowerCase()
    .replace(/[&]/g, "en")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/--+/g, "-")
    .trim();
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
};

export function getServiceForCategory(categoryName: string): string | null {
  return categoryServiceMap[categoryName.toLowerCase()] ?? null;
}
