import { getAllBlogPosts, getBlogCategories } from "@/lib/blog";
import { BlogHero, BlogCategoryFilter, BlogNewsletter } from "@/components/blog";

export const metadata = {
  title: "Blog | Robuust Marketing",
  description:
    "Tips, trends en diepgaande artikelen over SEO, social media en online marketing.",
};

export default async function BlogPage() {
  // Fetch data directly in server component - no API call needed
  const posts = getAllBlogPosts();
  const allCategories = getBlogCategories();

  // Filter out "Alle artikelen" from categories for the filter component
  const categories = allCategories.filter((c) => c.name !== "Alle artikelen");

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
