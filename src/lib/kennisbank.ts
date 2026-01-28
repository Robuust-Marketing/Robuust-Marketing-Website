import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { type Locale, defaultLocale } from "@/i18n/config";

function getKennisbankDir(locale: Locale): string {
  return path.join(process.cwd(), `content/${locale}/kennisbank`);
}

// Legacy path for backward compatibility during migration
const LEGACY_KENNISBANK_DIR = path.join(process.cwd(), "content/kennisbank");

export interface Guide {
  slug: string;
  title: string;
  description: string;
  content: string;
  category: string;
  categorySlug: CategorySlug;
  readTime: string;
  order?: number;
  icon?: string;
  locale: Locale;
  isFallback?: boolean;
  translations?: {
    nl?: string;
    en?: string;
  };
}

export interface GuideMeta {
  slug: string;
  title: string;
  description: string;
  category: string;
  categorySlug: CategorySlug;
  readTime: string;
  order?: number;
  icon?: string;
  locale: Locale;
  isFallback?: boolean;
  translations?: {
    nl?: string;
    en?: string;
  };
}

export type CategorySlug = "development" | "seo" | "hosting" | "social-media";

export const categoryInfo: Record<
  Locale,
  Record<CategorySlug, { name: string; description: string }>
> = {
  nl: {
    development: {
      name: "Development",
      description: "Alles over webdevelopment, frameworks en best practices",
    },
    seo: {
      name: "SEO",
      description: "Zoekmachine optimalisatie en organische vindbaarheid",
    },
    hosting: {
      name: "Hosting & Infrastructuur",
      description: "Servers, performance, Cloudflare en beveiliging",
    },
    "social-media": {
      name: "Social Media",
      description: "Strategieën voor Instagram, LinkedIn en andere platforms",
    },
  },
  en: {
    development: {
      name: "Development",
      description: "Everything about web development, frameworks and best practices",
    },
    seo: {
      name: "SEO",
      description: "Search engine optimization and organic discoverability",
    },
    hosting: {
      name: "Hosting & Infrastructure",
      description: "Servers, performance, Cloudflare and security",
    },
    "social-media": {
      name: "Social Media",
      description: "Strategies for Instagram, LinkedIn and other platforms",
    },
  },
};

function calculateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min`;
}

function getActiveDirectory(locale: Locale, category?: CategorySlug): { dir: string; isFallback: boolean } {
  const localeDir = category
    ? path.join(getKennisbankDir(locale), category)
    : getKennisbankDir(locale);

  // First try locale-specific directory
  if (fs.existsSync(localeDir)) {
    return { dir: localeDir, isFallback: false };
  }

  // If locale is not default and locale dir doesn't exist, try fallback to default
  if (locale !== defaultLocale) {
    const defaultDir = category
      ? path.join(getKennisbankDir(defaultLocale), category)
      : getKennisbankDir(defaultLocale);
    if (fs.existsSync(defaultDir)) {
      return { dir: defaultDir, isFallback: true };
    }
  }

  // Legacy path fallback (during migration)
  const legacyDir = category
    ? path.join(LEGACY_KENNISBANK_DIR, category)
    : LEGACY_KENNISBANK_DIR;
  if (fs.existsSync(legacyDir)) {
    return { dir: legacyDir, isFallback: locale !== defaultLocale };
  }

  return { dir: localeDir, isFallback: false };
}

export function getGuidesByCategory(category: CategorySlug, locale: Locale = defaultLocale): GuideMeta[] {
  const { dir, isFallback } = getActiveDirectory(locale, category);

  if (!fs.existsSync(dir)) {
    return [];
  }

  const files = fs.readdirSync(dir).filter((file) => file.endsWith(".mdx"));
  const info = categoryInfo[isFallback ? defaultLocale : locale][category];

  const guides = files
    .map((file) => {
      const slug = file.replace(".mdx", "");
      const filePath = path.join(dir, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);

      return {
        slug,
        title: data.title || "",
        description: data.description || "",
        category: info?.name || category,
        categorySlug: category,
        readTime: data.readTime || calculateReadTime(content),
        order: data.order || 999,
        icon: data.icon,
        locale: isFallback ? defaultLocale : locale,
        isFallback,
        translations: data.translations as { nl?: string; en?: string } | undefined,
      };
    })
    .sort((a, b) => a.order - b.order);

  return guides;
}

export function getGuide(category: CategorySlug, slug: string, locale: Locale = defaultLocale): Guide | null {
  const { dir, isFallback: dirFallback } = getActiveDirectory(locale, category);
  const filePath = path.join(dir, `${slug}.mdx`);

  // Try locale-specific file first
  let actualPath = filePath;
  let isFallback = dirFallback;

  if (!fs.existsSync(actualPath) && locale !== defaultLocale) {
    // Try fallback to default locale
    const defaultDir = path.join(getKennisbankDir(defaultLocale), category);
    const defaultPath = path.join(defaultDir, `${slug}.mdx`);
    if (fs.existsSync(defaultPath)) {
      actualPath = defaultPath;
      isFallback = true;
    } else {
      // Try legacy path
      const legacyPath = path.join(LEGACY_KENNISBANK_DIR, category, `${slug}.mdx`);
      if (fs.existsSync(legacyPath)) {
        actualPath = legacyPath;
        isFallback = true;
      }
    }
  }

  // Also check legacy path if still not found
  if (!fs.existsSync(actualPath)) {
    const legacyPath = path.join(LEGACY_KENNISBANK_DIR, category, `${slug}.mdx`);
    if (fs.existsSync(legacyPath)) {
      actualPath = legacyPath;
      isFallback = locale !== defaultLocale;
    }
  }

  if (!fs.existsSync(actualPath)) {
    return null;
  }

  const fileContent = fs.readFileSync(actualPath, "utf-8");
  const { data, content } = matter(fileContent);
  const info = categoryInfo[isFallback ? defaultLocale : locale][category];

  return {
    slug,
    title: data.title || "",
    description: data.description || "",
    content,
    category: info?.name || category,
    categorySlug: category,
    readTime: data.readTime || calculateReadTime(content),
    order: data.order,
    icon: data.icon,
    locale: isFallback ? defaultLocale : locale,
    isFallback,
    translations: data.translations as { nl?: string; en?: string } | undefined,
  };
}

export function getAllGuides(locale: Locale = defaultLocale): GuideMeta[] {
  const categories: CategorySlug[] = ["development", "seo", "hosting", "social-media"];
  const allGuides: GuideMeta[] = [];

  categories.forEach((category) => {
    const guides = getGuidesByCategory(category, locale);
    allGuides.push(...guides);
  });

  return allGuides;
}

export function getAllGuideSlugs(locale: Locale = defaultLocale): { category: string; slug: string }[] {
  const categories: CategorySlug[] = ["development", "seo", "hosting", "social-media"];
  const slugs: { category: string; slug: string }[] = [];

  categories.forEach((category) => {
    const { dir } = getActiveDirectory(locale, category);

    if (fs.existsSync(dir)) {
      const files = fs.readdirSync(dir).filter((file) => file.endsWith(".mdx"));

      files.forEach((file) => {
        slugs.push({
          category,
          slug: file.replace(".mdx", ""),
        });
      });
    }
  });

  return slugs;
}

// Get category info helper
export function getCategoryInfo(category: CategorySlug, locale: Locale = defaultLocale) {
  return categoryInfo[locale]?.[category] || categoryInfo[defaultLocale][category];
}
