import { setRequestLocale } from "next-intl/server";
import { getAllBlogPosts, getBlogCategories } from "@/lib/blog";
import { BlogHero, BlogCategoryFilter, BlogNewsletter } from "@/components/blog";
import { type Locale } from "@/i18n/config";
import { generateAlternates, getOGImageUrl, defaultTwitterMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const titles = {
    nl: "Blog | Robuust Marketing",
    en: "Blog | Robuust Marketing",
  };

  const descriptions = {
    nl: "Tips, trends en diepgaande artikelen over SEO, social media en online marketing.",
    en: "Tips, trends and in-depth articles about SEO, social media and online marketing.",
  };

  const pageTitle = locale === "nl" ? "Blog" : "Blog";
  const ogImageUrl = getOGImageUrl(pageTitle, "Robuust Marketing", "blog");

  return {
    title: titles[locale as Locale] || titles.nl,
    description: descriptions[locale as Locale] || descriptions.nl,
    alternates: generateAlternates("/blog", locale),
    openGraph: {
      title: titles[locale as Locale] || titles.nl,
      description: descriptions[locale as Locale] || descriptions.nl,
      images: [{ url: ogImageUrl, width: 1200, height: 630 }],
    },
    twitter: defaultTwitterMetadata,
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  // Fetch data directly in server component - no API call needed
  const posts = getAllBlogPosts(locale as Locale);
  const allCategories = getBlogCategories(locale as Locale);

  // Filter out "Alle artikelen" / "All articles" from categories for the filter component
  const allLabel = locale === "en" ? "All articles" : "Alle artikelen";
  const categories = allCategories.filter((c) => c.name !== allLabel);

  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section - Client component for animations */}
      <BlogHero />

      {/* Categories & Posts - Client component for interactivity */}
      <BlogCategoryFilter posts={posts} categories={categories} />

      {/* Newsletter CTA - Client component for form interaction */}
      <BlogNewsletter />
    </div>
  );
}
