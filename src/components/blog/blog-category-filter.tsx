"use client";

import { useState } from "react";
import { BlogPostCard } from "./blog-post-card";
import { BlogFeaturedPost } from "./blog-featured-post";

interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

interface Category {
  name: string;
  count: number;
}

interface BlogCategoryFilterProps {
  posts: BlogPostMeta[];
  categories: Category[];
}

export function BlogCategoryFilter({
  posts,
  categories,
}: BlogCategoryFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Filter posts by selected category
  const filteredPosts =
    selectedCategory === null
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  const featuredPost = filteredPosts.find((p) => p.featured) || filteredPosts[0];
  const otherPosts = featuredPost
    ? filteredPosts.filter((p) => p.slug !== featuredPost.slug)
    : filteredPosts.slice(1);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-12">
            <BlogFeaturedPost post={featuredPost} />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-3">
            <div className="sticky top-32">
              <h3 className="text-lg font-semibold text-white mb-4">
                Categorieen
              </h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`flex items-center justify-between w-full px-3 py-2 rounded-lg text-left transition-colors ${
                      selectedCategory === null
                        ? "bg-accent text-white"
                        : "text-muted-foreground hover:bg-surface hover:text-white"
                    }`}
                  >
                    <span>Alle artikelen</span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        selectedCategory === null ? "bg-white/20" : "bg-surface"
                      }`}
                    >
                      {posts.length}
                    </span>
                  </button>
                </li>
                {categories
                  .filter((c) => c.name !== "Alle artikelen")
                  .map((category) => (
                    <li key={category.name}>
                      <button
                        onClick={() => setSelectedCategory(category.name)}
                        className={`flex items-center justify-between w-full px-3 py-2 rounded-lg text-left transition-colors ${
                          selectedCategory === category.name
                            ? "bg-accent text-white"
                            : "text-muted-foreground hover:bg-surface hover:text-white"
                        }`}
                      >
                        <span>{category.name}</span>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full ${
                            selectedCategory === category.name
                              ? "bg-white/20"
                              : "bg-surface"
                          }`}
                        >
                          {category.count}
                        </span>
                      </button>
                    </li>
                  ))}
              </ul>
            </div>
          </div>

          {/* Posts Grid */}
          <div className="lg:col-span-9">
            {otherPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {otherPosts.map((post, index) => (
                  <BlogPostCard key={post.slug} post={post} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-muted-foreground">
                {selectedCategory
                  ? `Geen artikelen gevonden in "${selectedCategory}".`
                  : "Nog geen artikelen beschikbaar."}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
