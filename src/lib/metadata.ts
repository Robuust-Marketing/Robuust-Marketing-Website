import { routing } from "@/i18n/routing";

const BASE_URL = "https://robuustmarketing.nl";

/**
 * Translate a Dutch path to its English equivalent using the routing configuration.
 * Handles exact matches and prefix matches for nested routes.
 */
function translatePathToEnglish(nlPath: string): string {
  const pathnames = routing.pathnames;

  // Try exact match first
  if (nlPath in pathnames) {
    const config = pathnames[nlPath as keyof typeof pathnames];
    if (typeof config === "object" && "en" in config) {
      return config.en;
    }
    // Same path for both languages
    return nlPath;
  }

  // Try prefix matches for dynamic routes (e.g., /kennisbank/development/slug)
  // Sort by length descending to match most specific prefix first
  const prefixes = Object.keys(pathnames)
    .filter((key) => !key.includes("["))
    .sort((a, b) => b.length - a.length);

  for (const prefix of prefixes) {
    if (nlPath.startsWith(prefix + "/")) {
      const config = pathnames[prefix as keyof typeof pathnames];
      if (typeof config === "object" && "en" in config) {
        return config.en + nlPath.slice(prefix.length);
      }
    }
  }

  // No translation needed
  return nlPath;
}

/**
 * Generate alternates object for hreflang tags
 * @param path - The path without locale prefix (e.g., "/blog", "/diensten/seo")
 * @param locale - Current locale
 */
export function generateAlternates(path: string, locale: string) {
  // Ensure path starts with /
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  // Build URLs - homepage gets trailing slash, other pages don't
  const isHomepage = normalizedPath === "/";
  const nlUrl = isHomepage ? `${BASE_URL}/` : `${BASE_URL}${normalizedPath}`;

  // Translate path for English URL using routing configuration
  const enPath = translatePathToEnglish(normalizedPath);
  const enUrl = isHomepage ? `${BASE_URL}/en/` : `${BASE_URL}/en${enPath}`;

  return {
    canonical: locale === "nl" ? nlUrl : enUrl,
    languages: {
      nl: nlUrl,
      en: enUrl,
      "x-default": nlUrl,
    },
  };
}

/**
 * Generate alternates for dynamic routes with different slugs per locale
 * @param nlPath - Full path for Dutch version (e.g., "/blog/mijn-artikel")
 * @param enPath - Full path for English version (e.g., "/blog/my-article"), or null if not available
 * @param locale - Current locale
 */
export function generateDynamicAlternates(
  nlPath: string | null,
  enPath: string | null,
  locale: string
) {
  const languages: Record<string, string> = {};

  if (nlPath) {
    languages.nl = BASE_URL + nlPath;
    languages["x-default"] = BASE_URL + nlPath;
  }

  if (enPath) {
    languages.en = BASE_URL + "/en" + enPath;
  }

  // Determine canonical based on current locale
  let canonical: string;
  if (locale === "en" && enPath) {
    canonical = BASE_URL + "/en" + enPath;
  } else if (nlPath) {
    canonical = BASE_URL + nlPath;
  } else if (enPath) {
    canonical = BASE_URL + "/en" + enPath;
  } else {
    canonical = BASE_URL + "/";
  }

  return {
    canonical,
    languages,
  };
}
