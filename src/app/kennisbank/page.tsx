import {
  getGuidesByCategory,
  categoryInfo,
  type CategorySlug,
} from "@/lib/kennisbank";
import {
  KennisbankHero,
  KennisbankFeaturedGuides,
  KennisbankCategories,
  KennisbankCTA,
} from "@/components/kennisbank";

export const metadata = {
  title: "Kennisbank | Robuust Marketing",
  description:
    "Diepgaande guides en tutorials over webdevelopment, SEO en hosting.",
};

export default async function KennisbankPage() {
  // Fetch data directly in server component - no API call needed
  const categoryKeys: CategorySlug[] = ["development", "seo", "hosting"];

  const categories = categoryKeys.map((slug) => {
    const info = categoryInfo[slug];
    const guides = getGuidesByCategory(slug);

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
