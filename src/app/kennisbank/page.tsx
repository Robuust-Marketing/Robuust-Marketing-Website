"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Code2,
  Search,
  Server,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

interface GuideMeta {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  order?: number;
}

interface CategoryData {
  slug: string;
  name: string;
  description: string;
  guides: GuideMeta[];
}

const categoryIcons: Record<string, typeof Code2> = {
  development: Code2,
  seo: Search,
  hosting: Server,
};

export default function KennisbankPage() {
  const [categories, setCategories] = useState<CategoryData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/kennisbank");
        const data = await res.json();
        setCategories(data.categories);
      } catch (error) {
        console.error("Error fetching kennisbank:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // Get featured guides (first guide from each category)
  const featuredGuides = categories
    .filter((cat) => cat.guides.length > 0)
    .map((cat) => ({
      ...cat.guides[0],
      categorySlug: cat.slug,
    }))
    .slice(0, 3);

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
            Kennisbank
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Leer &
            <br />
            <span className="text-gradient-accent">ontwikkel</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            Diepgaande guides en tutorials over webdevelopment, SEO en hosting.
          </motion.p>
        </div>
      </section>

      {/* Featured Guides */}
      {featuredGuides.length > 0 && (
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white">Populaire guides</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredGuides.map((guide, index) => (
                <motion.div
                  key={guide.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group rounded-2xl bg-surface border border-white/5 hover:border-accent/30 p-6 transition-all"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="h-4 w-4 text-accent" />
                    <span className="text-xs font-medium text-accent">
                      {guide.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      • {guide.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-accent transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {guide.description}
                  </p>
                  <Link
                    href={`/kennisbank/${guide.categorySlug}/${guide.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:gap-3 transition-all"
                  >
                    Lees guide
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Categories */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-2">
              Verken per categorie
            </h2>
            <p className="text-muted-foreground">
              Vind de informatie die je zoekt per onderwerp.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => {
              const IconComponent = categoryIcons[category.slug] || BookOpen;
              return (
                <motion.div
                  key={category.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl bg-surface border border-white/5 p-6"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {category.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {category.guides.length > 0 ? (
                    <ul className="space-y-2 mb-4">
                      {category.guides.slice(0, 4).map((guide) => (
                        <li key={guide.slug}>
                          <Link
                            href={`/kennisbank/${category.slug}/${guide.slug}`}
                            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors"
                          >
                            <span className="w-1 h-1 rounded-full bg-accent" />
                            {guide.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-muted-foreground mb-4">
                      Guides komen binnenkort beschikbaar.
                    </p>
                  )}

                  <Link
                    href={`/kennisbank/${category.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:gap-3 transition-all"
                  >
                    Alle {category.name.toLowerCase()} guides
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-surface/50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-white mb-6"
          >
            Mis je iets?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-lg mb-8"
          >
            Heb je een vraag die niet beantwoord wordt? Laat het ons weten en we
            helpen je graag.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent-hover text-white"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Stel je vraag
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
