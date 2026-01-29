import { setRequestLocale } from "next-intl/server";
import {
  getGuidesByCategory,
  getCategoryInfo,
  type CategorySlug,
} from "@/lib/kennisbank";
import {
  KennisbankHero,
  KennisbankFeaturedGuides,
  KennisbankCategories,
  KennisbankCTA,
} from "@/components/kennisbank";
import { type Locale } from "@/i18n/config";
import { generateAlternates, getOGImageUrl, defaultTwitterMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const titles = {
    nl: "Kennisbank | Robuust Marketing",
    en: "Knowledge Base | Robuust Marketing",
  };

  const descriptions = {
    nl: "Diepgaande guides en tutorials over webdevelopment, SEO en hosting.",
    en: "In-depth guides and tutorials about web development, SEO and hosting.",
  };

  const pageTitle = locale === "nl" ? "Kennisbank" : "Knowledge Base";
  const ogImageUrl = getOGImageUrl(pageTitle, "Robuust Marketing", "kennisbank");

  return {
    title: titles[locale as Locale] || titles.nl,
    description: descriptions[locale as Locale] || descriptions.nl,
    alternates: generateAlternates("/kennisbank", locale),
    openGraph: {
      title: titles[locale as Locale] || titles.nl,
      description: descriptions[locale as Locale] || descriptions.nl,
      images: [{ url: ogImageUrl, width: 1200, height: 630 }],
    },
    twitter: defaultTwitterMetadata,
  };
}

export default async function KennisbankPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  // Fetch data directly in server component - no API call needed
  const categoryKeys: CategorySlug[] = ["development", "seo", "hosting"];

  const categories = categoryKeys.map((slug) => {
    const info = getCategoryInfo(slug, locale as Locale);
    const guides = getGuidesByCategory(slug, locale as Locale);

    return {
      slug,
      name: info.name,
      description: info.description,
      guides: guides.map((guide) => ({
        ...guide,
        categorySlug: slug,
      })),
    };
  });

  // Get featured guides (first guide from each category)
  const featuredGuides = categories
    .filter((cat) => cat.guides.length > 0)
    .map((cat) => ({
      ...cat.guides[0],
      categorySlug: cat.slug,
    }))
    .slice(0, 3);

  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section - Client component for animations */}
      <KennisbankHero />

      {/* Featured Guides - Client component for animations */}
      <KennisbankFeaturedGuides guides={featuredGuides} />

      {/* Categories - Client component for animations */}
      <KennisbankCategories categories={categories} />

      {/* CTA Section - Client component for animations */}
      <KennisbankCTA />
    </div>
  );
}
