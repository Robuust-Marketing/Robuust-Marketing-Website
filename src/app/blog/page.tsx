"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useMemo } from "react";

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

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPostMeta[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("/api/blog");
        const data = await res.json();
        setPosts(data.posts);
        setCategories(data.categories);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  // Filter posts by selected category
  const filteredPosts = useMemo(() => {
    if (!selectedCategory) return posts;
    return posts.filter((post) => post.category === selectedCategory);
  }, [posts, selectedCategory]);

  const featuredPost = filteredPosts.find((p) => p.featured) || filteredPosts[0];
  const otherPosts = featuredPost
    ? filteredPosts.filter((p) => p.slug !== featuredPost.slug)
    : filteredPosts.slice(1);

  if (loading) {
    return (
      <div className="min-h-screen pt-32 flex items-center justify-center">
        <div className="text-muted-foreground">Laden...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="relative pb-20">
        <div className="absolute inset-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]"
            style={{
              background:
                "radial-gradient(ellipse, rgba(197, 60, 11, 0.1) 0%, transparent 60%)",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-4"
          >
            Blog
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Insights &
            <br />
            <span className="text-gradient-accent">artikelen</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            Tips, trends en diepgaande artikelen over SEO, social media en
            online marketing.
          </motion.p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Link href={`/blog/${featuredPost.slug}`} className="block group">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 overflow-hidden hover:border-accent/40 transition-colors"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 text-xs font-medium bg-accent text-white rounded-full">
                        Uitgelicht
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {featuredPost.category}
                      </span>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-accent transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-sm text-muted-foreground">
                        {featuredPost.date}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-2 text-accent font-medium group-hover:gap-3 transition-all">
                      Lees artikel
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                  <div className="hidden lg:flex items-center justify-center">
                    <div className="w-full h-64 rounded-2xl bg-accent/20 flex items-center justify-center">
                      <span className="text-6xl font-bold text-accent/40">
                        {featuredPost.category.charAt(0)}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
        </section>
      )}

      {/* Categories & Posts */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-3">
              <div className="sticky top-32">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Categorieën
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
                          selectedCategory === null
                            ? "bg-white/20"
                            : "bg-surface"
                        }`}
                      >
                        {posts.length}
                      </span>
                    </button>
                  </li>
                  {categories.map((category) => (
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
                    <motion.article
                      key={post.slug}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={`/blog/${post.slug}`}
                        className="group block h-full rounded-2xl bg-surface border border-white/5 hover:border-accent/30 overflow-hidden transition-all"
                      >
                        <div className="p-6">
                          <div className="flex items-center gap-2 mb-3">
                            <Tag className="h-4 w-4 text-accent" />
                            <span className="text-xs font-medium text-accent">
                              {post.category}
                            </span>
                          </div>
                          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-accent transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <span>{post.date}</span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {post.readTime}
                            </span>
                          </div>
                        </div>
                      </Link>
                    </motion.article>
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

      {/* Newsletter CTA */}
      <section className="py-20 bg-surface/50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-white mb-6"
          >
            Blijf op de hoogte
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-lg mb-8"
          >
            Ontvang maandelijks de nieuwste artikelen en tips in je inbox.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="je@email.nl"
              className="flex-1 px-4 py-3 rounded-lg bg-background border border-white/10 text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <Button className="bg-accent hover:bg-accent-hover text-white">
              Inschrijven
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
