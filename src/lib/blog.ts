import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { type Locale, defaultLocale } from "@/i18n/config";

// Re-export categoryToSlug from utils for server-side usage
export { categoryToSlug } from "./category-utils";
import { categoryToSlug } from "./category-utils";

function getBlogDir(locale: Locale): string {
  return path.join(process.cwd(), `content/${locale}/blog`);
}

// Legacy path for backward compatibility during migration
const LEGACY_BLOG_DIR = path.join(process.cwd(), "content/blog");

export interface BlogTranslations {
  nl?: string;
  en?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  author?: string;
  featured?: boolean;
  image?: string;
  locale: Locale;
  isFallback?: boolean; // True if showing Dutch content for English locale
  translations?: BlogTranslations;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author?: string;
  featured?: boolean;
  image?: string;
  locale: Locale;
  isFallback?: boolean;
  translations?: BlogTranslations;
}

function calculateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min`;
}

function getActiveDirectory(locale: Locale): { dir: string; isFallback: boolean } {
  const localeDir = getBlogDir(locale);

  // First try locale-specific directory
  if (fs.existsSync(localeDir)) {
    return { dir: localeDir, isFallback: false };
  }

  // If locale is not default and locale dir doesn't exist, try fallback to default
  if (locale !== defaultLocale) {
    const defaultDir = getBlogDir(defaultLocale);
    if (fs.existsSync(defaultDir)) {
      return { dir: defaultDir, isFallback: true };
    }
  }

  // Legacy path fallback (during migration)
  if (fs.existsSync(LEGACY_BLOG_DIR)) {
    return { dir: LEGACY_BLOG_DIR, isFallback: locale !== defaultLocale };
  }

  return { dir: localeDir, isFallback: false };
}

export function getAllBlogPosts(locale: Locale = defaultLocale): BlogPostMeta[] {
  const { dir, isFallback } = getActiveDirectory(locale);

  if (!fs.existsSync(dir)) {
    return [];
  }

  const files = fs.readdirSync(dir).filter((file) => file.endsWith(".mdx"));

  const posts = files
    .map((file) => {
      const slug = file.replace(".mdx", "");
      const filePath = path.join(dir, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);

      return {
        slug,
        title: data.title || "",
        excerpt: data.excerpt || "",
        category: data.category || "Algemeen",
        date: data.date || "",
        readTime: data.readTime || calculateReadTime(content),
        author: data.author,
        featured: data.featured || false,
        image: data.image,
        locale: isFallback ? defaultLocale : locale,
        isFallback,
        translations: data.translations,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function getBlogPost(slug: string, locale: Locale = defaultLocale): BlogPost | null {
  const { dir, isFallback: dirFallback } = getActiveDirectory(locale);
  const filePath = path.join(dir, `${slug}.mdx`);

  // Try locale-specific file first
  let actualPath = filePath;
  let isFallback = dirFallback;

  if (!fs.existsSync(actualPath) && locale !== defaultLocale) {
    // Try fallback to default locale
    const defaultDir = getBlogDir(defaultLocale);
    const defaultPath = path.join(defaultDir, `${slug}.mdx`);
    if (fs.existsSync(defaultPath)) {
      actualPath = defaultPath;
      isFallback = true;
    } else if (fs.existsSync(LEGACY_BLOG_DIR)) {
      // Try legacy path
      const legacyPath = path.join(LEGACY_BLOG_DIR, `${slug}.mdx`);
      if (fs.existsSync(legacyPath)) {
        actualPath = legacyPath;
        isFallback = true;
      }
    }
  }

  // Also check legacy path if still not found
  if (!fs.existsSync(actualPath)) {
    const legacyPath = path.join(LEGACY_BLOG_DIR, `${slug}.mdx`);
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

  return {
    slug,
    title: data.title || "",
    excerpt: data.excerpt || "",
    content,
    category: data.category || "Algemeen",
    date: data.date || "",
    readTime: data.readTime || calculateReadTime(content),
    author: data.author,
    featured: data.featured || false,
    image: data.image,
    locale: isFallback ? defaultLocale : locale,
    isFallback,
    translations: data.translations,
  };
}

/**
 * Get the translated slug for a blog post
 * @param slug Current slug
 * @param fromLocale Current locale
 * @param toLocale Target locale
 * @returns Translated slug if available, otherwise null
 */
export function getTranslatedSlug(
  slug: string,
  fromLocale: Locale,
  toLocale: Locale
): string | null {
  const post = getBlogPost(slug, fromLocale);
  if (!post || !post.translations) {
    return null;
  }
  return post.translations[toLocale] || null;
}

/**
 * Get all blog slugs with their translations for static params generation
 */
export function getAllBlogSlugsWithTranslations(locale: Locale): {
  slug: string;
  translations?: BlogTranslations;
}[] {
  const dir = getBlogDir(locale);

  if (!fs.existsSync(dir)) {
    return [];
  }

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(".mdx", "");
      const filePath = path.join(dir, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);

      return {
        slug,
        translations: data.translations,
      };
    });
}

export function getBlogPostsByCategory(category: string, locale: Locale = defaultLocale): BlogPostMeta[] {
  const allPosts = getAllBlogPosts(locale);
  return allPosts.filter(
    (post) => post.category.toLowerCase() === category.toLowerCase()
  );
}

/**
 * Get category info by slug
 */
export function getCategoryBySlug(slug: string, locale: Locale = defaultLocale): { name: string; count: number } | null {
  const categories = getBlogCategories(locale);
  return categories.find((cat) => categoryToSlug(cat.name) === slug) || null;
}

/**
 * Get all unique category slugs for static params generation
 */
export function getAllCategorySlugs(locale: Locale = defaultLocale): string[] {
  const categories = getBlogCategories(locale);
  const allLabel = locale === "en" ? "All articles" : "Alle artikelen";
  return categories
    .filter((cat) => cat.name !== allLabel)
    .map((cat) => categoryToSlug(cat.name));
}

/**
 * Get posts by category slug
 */
export function getBlogPostsByCategorySlug(slug: string, locale: Locale = defaultLocale): BlogPostMeta[] {
  const category = getCategoryBySlug(slug, locale);
  if (!category) return [];
  return getBlogPostsByCategory(category.name, locale);
}

export function getFeaturedBlogPost(locale: Locale = defaultLocale): BlogPostMeta | null {
  const allPosts = getAllBlogPosts(locale);
  return allPosts.find((post) => post.featured) || allPosts[0] || null;
}

export function getBlogCategories(locale: Locale = defaultLocale): { name: string; count: number }[] {
  const allPosts = getAllBlogPosts(locale);
  const categoryMap = new Map<string, number>();

  allPosts.forEach((post) => {
    const count = categoryMap.get(post.category) || 0;
    categoryMap.set(post.category, count + 1);
  });

  const categories = Array.from(categoryMap.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);

  const allLabel = locale === "en" ? "All articles" : "Alle artikelen";
  return [{ name: allLabel, count: allPosts.length }, ...categories];
}

export function getAllBlogSlugs(locale: Locale = defaultLocale): string[] {
  const { dir } = getActiveDirectory(locale);

  if (!fs.existsSync(dir)) {
    // Try legacy path
    if (fs.existsSync(LEGACY_BLOG_DIR)) {
      return fs
        .readdirSync(LEGACY_BLOG_DIR)
        .filter((file) => file.endsWith(".mdx"))
        .map((file) => file.replace(".mdx", ""));
    }
    return [];
  }

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(".mdx", ""));
}

export interface Heading {
  level: number;
  text: string;
  id: string;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/--+/g, "-")
    .trim();
}

export function extractHeadings(content: string): Heading[] {
  const headings: Heading[] = [];
  const lines = content.split("\n");

  for (const line of lines) {
    // Match ## and ### headers (h2 and h3)
    const h2Match = line.match(/^##\s+(.+)$/);
    const h3Match = line.match(/^###\s+(.+)$/);

    if (h2Match) {
      const text = h2Match[1].trim();
      headings.push({
        level: 2,
        text,
        id: slugify(text),
      });
    } else if (h3Match) {
      const text = h3Match[1].trim();
      headings.push({
        level: 3,
        text,
        id: slugify(text),
      });
    }
  }

  return headings;
}
