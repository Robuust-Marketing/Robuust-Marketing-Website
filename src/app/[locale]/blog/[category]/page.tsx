import { notFound, redirect } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import {
  getBlogCategories,
  getBlogPostsByCategorySlug,
  getAllBlogPosts,
} from "@/lib/blog";
import {
  isValidCategorySlug,
  getAllCategorySlugsForLocale,
  getCategoryNameFromSlug,
  categoryToSlug,
  translateCategorySlug,
} from "@/lib/category-utils";
import { type Locale, locales } from "@/i18n/config";
import { generateDynamicAlternates, getOGImageUrl, defaultTwitterMetadata } from "@/lib/metadata";
import { getServiceForCategory } from "@/lib/category-utils";
import { getServices } from "@/data/services";
import { BlogCategoryPage } from "./client";

export async function generateStaticParams() {
  const params: { locale: string; category: string }[] = [];

  for (const locale of locales) {
    const slugs = getAllCategorySlugsForLocale(locale);
    for (const slug of slugs) {
      params.push({ locale, category: slug });
    }
  }

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; category: string }>;
}) {
  const { locale, category: categorySlug } = await params;

  if (!isValidCategorySlug(categorySlug, locale as Locale)) {
    return {};
  }

  const categoryName = getCategoryNameFromSlug(categorySlug, locale as Locale);
  if (!categoryName) return {};

  const posts = getBlogPostsByCategorySlug(categorySlug, locale as Locale);
  const count = posts.length;

  const t = await getTranslations({ locale, namespace: "blogCategoryPage" });

  const title = `${categoryName} | ${t("blogTitle")}`;
  const description = t("metaDescription", { category: categoryName });
  const ogImageUrl = getOGImageUrl(categoryName, "Robuust Marketing", "blog");

  // Build hreflang alternates with translated category slugs
  const nlCategorySlug = locale === "nl" ? categorySlug : (translateCategorySlug(categorySlug, locale as Locale, "nl") || categorySlug);
  const enCategorySlug = locale === "en" ? categorySlug : (translateCategorySlug(categorySlug, locale as Locale, "en") || categorySlug);

  const nlPath = `/blog/${nlCategorySlug}`;
  const enPath = `/blog/${enCategorySlug}`;
  const alternates = generateDynamicAlternates(nlPath, enPath, locale);

  return {
    title,
    description,
    alternates,
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
  params: Promise<{ locale: string; category: string }>;
}) {
  const { locale, category: categorySlug } = await params;
  setRequestLocale(locale as Locale);

  // Check if this is a valid category slug
  if (!isValidCategorySlug(categorySlug, locale as Locale)) {
    // Fallback: check if this is a blog post slug (old flat URL)
    const allPosts = getAllBlogPosts(locale as Locale);
    const matchedPost = allPosts.find((p) => p.slug === categorySlug);
    if (matchedPost) {
      // Redirect old flat URL to new categorized URL
      redirect(`/${locale}/blog/${matchedPost.categorySlug}/${matchedPost.slug}`);
    }

    notFound();
  }

  const categoryName = getCategoryNameFromSlug(categorySlug, locale as Locale);
  if (!categoryName) {
    notFound();
  }

  const posts = getBlogPostsByCategorySlug(categorySlug, locale as Locale);
  const allCategories = getBlogCategories(locale as Locale);

  // Filter out "Alle artikelen" / "All articles" from categories
  const allLabel = locale === "en" ? "All articles" : "Alle artikelen";
  const categories = allCategories
    .filter((c) => c.name !== allLabel)
    .map((c) => ({
      ...c,
      slug: categoryToSlug(c.name, locale as Locale),
      isActive: c.name === categoryName,
    }));

  // Look up matching service for this category
  const serviceId = getServiceForCategory(categoryName);
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
      category={{ name: categoryName, count: posts.length }}
      posts={posts}
      categories={categories}
      currentSlug={categorySlug}
      matchedService={matchedService}
    />
  );
}
