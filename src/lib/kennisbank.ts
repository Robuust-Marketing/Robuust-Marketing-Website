import fs from "fs";
import path from "path";
import matter from "gray-matter";

const KENNISBANK_DIR = path.join(process.cwd(), "content/kennisbank");

export interface Guide {
  slug: string;
  title: string;
  description: string;
  content: string;
  category: string;
  readTime: string;
  order?: number;
  icon?: string;
}

export interface GuideMeta {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  order?: number;
  icon?: string;
}

export type CategorySlug = "development" | "seo" | "hosting";

export const categoryInfo: Record<
  CategorySlug,
  { name: string; description: string }
> = {
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
};

function calculateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min`;
}

export function getGuidesByCategory(category: CategorySlug): GuideMeta[] {
  const categoryDir = path.join(KENNISBANK_DIR, category);

  if (!fs.existsSync(categoryDir)) {
    return [];
  }

  const files = fs.readdirSync(categoryDir).filter((file) => file.endsWith(".mdx"));

  const guides = files
    .map((file) => {
      const slug = file.replace(".mdx", "");
      const filePath = path.join(categoryDir, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);

      return {
        slug,
        title: data.title || "",
        description: data.description || "",
        category: categoryInfo[category]?.name || category,
        readTime: data.readTime || calculateReadTime(content),
        order: data.order || 999,
        icon: data.icon,
      };
    })
    .sort((a, b) => a.order - b.order);

  return guides;
}

export function getGuide(category: CategorySlug, slug: string): Guide | null {
  const filePath = path.join(KENNISBANK_DIR, category, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug,
    title: data.title || "",
    description: data.description || "",
    content,
    category: categoryInfo[category]?.name || category,
    readTime: data.readTime || calculateReadTime(content),
    order: data.order,
    icon: data.icon,
  };
}

export function getAllGuides(): GuideMeta[] {
  const categories: CategorySlug[] = ["development", "seo", "hosting"];
  const allGuides: GuideMeta[] = [];

  categories.forEach((category) => {
    const guides = getGuidesByCategory(category);
    allGuides.push(...guides);
  });

  return allGuides;
}

export function getAllGuideSlugs(): { category: string; slug: string }[] {
  const categories: CategorySlug[] = ["development", "seo", "hosting"];
  const slugs: { category: string; slug: string }[] = [];

  categories.forEach((category) => {
    const categoryDir = path.join(KENNISBANK_DIR, category);

    if (fs.existsSync(categoryDir)) {
      const files = fs.readdirSync(categoryDir).filter((file) => file.endsWith(".mdx"));

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
