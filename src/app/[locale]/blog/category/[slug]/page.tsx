import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import {
  getBlogCategories,
  getCategoryBySlug,
  getBlogPostsByCategorySlug,
  getAllCategorySlugs,
  categoryToSlug,
} from "@/lib/blog";
import { type Locale, locales } from "@/i18n/config";
import { generateAlternates, getOGImageUrl, defaultTwitterMetadata } from "@/lib/metadata";
import { getServiceForCategory } from "@/lib/category-utils";
import { getServices } from "@/data/services";
import { BlogCategoryPage } from "./client";

export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];

  for (const locale of locales) {
    const slugs = getAllCategorySlugs(locale);
    for (const slug of slugs) {
      params.push({ locale, slug });
    }
  }

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const category = getCategoryBySlug(slug, locale as Locale);

  if (!category) {
    return {};
  }

  const t = await getTranslations({ locale, namespace: "blogCategoryPage" });

  const title = `${category.name} | ${t("blogTitle")}`;
  const description = t("metaDescription", { category: category.name });
  const ogImageUrl = getOGImageUrl(category.name, "Robuust Marketing", "blog");

  return {
    title,
    description,
    alternates: generateAlternates(`/blog/category/${slug}`, locale),
    openGraph: {
      title,
      description,
      images: [{ url: ogImageUrl, width: 1200, height: 630 }],
    },
    twitter: defaultTwitterMetadata,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale as Locale);

  const category = getCategoryBySlug(slug, locale as Locale);

  if (!category) {
    notFound();
  }

  const posts = getBlogPostsByCategorySlug(slug, locale as Locale);
  const allCategories = getBlogCategories(locale as Locale);

  // Filter out "Alle artikelen" / "All articles" from categories
  const allLabel = locale === "en" ? "All articles" : "Alle artikelen";
  const categories = allCategories
    .filter((c) => c.name !== allLabel)
    .map((c) => ({
      ...c,
      slug: categoryToSlug(c.name),
      isActive: c.name === category.name,
    }));

  // Look up matching service for this category
  const serviceId = getServiceForCategory(category.name);
  let matchedService: {
    id: string;
    name: string;
    description: string;
    href: string;
  } | null = null;

  if (serviceId) {
    const services = getServices(locale as Locale);
    const service = services.find((s) => s.id === serviceId);
    if (service) {
      matchedService = {
        id: service.id,
        name: service.name,
        description: service.description,
        href: service.href,
      };
    }
  }

  return (
    <BlogCategoryPage
      category={category}
      posts={posts}
      categories={categories}
      currentSlug={slug}
      matchedService={matchedService}
    />
  );
}
