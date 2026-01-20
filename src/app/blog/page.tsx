"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

const featuredPost = {
  title: "Next.js 15: De belangrijkste updates voor jouw website",
  excerpt:
    "Met de release van Next.js 15 zijn er belangrijke verbeteringen doorgevoerd. Van betere performance tot nieuwe features - we leggen uit wat dit betekent voor jouw website.",
  category: "Development",
  date: "15 januari 2025",
  readTime: "6 min",
  slug: "nextjs-15-updates",
};

const posts = [
  {
    title: "Core Web Vitals in 2025: Zo optimaliseer je jouw website",
    excerpt:
      "Google's Core Web Vitals zijn belangrijker dan ooit. Leer hoe je LCP, FID en CLS optimaliseert voor betere rankings.",
    category: "SEO",
    date: "10 januari 2025",
    readTime: "8 min",
    slug: "core-web-vitals-2025",
  },
  {
    title: "Server-side tracking: De toekomst van analytics",
    excerpt:
      "Met het verdwijnen van third-party cookies wordt server-side tracking steeds belangrijker. Wat betekent dit voor jou?",
    category: "Analytics",
    date: "5 januari 2025",
    readTime: "5 min",
    slug: "server-side-tracking",
  },
  {
    title: "Headless CMS vs WordPress: De juiste keuze maken",
    excerpt:
      "Wanneer kies je voor een headless CMS en wanneer voor WordPress? We helpen je de beste beslissing te maken.",
    category: "Development",
    date: "28 december 2024",
    readTime: "7 min",
    slug: "headless-cms-vs-wordpress",
  },
  {
    title: "Website snelheid: Waarom elke milliseconde telt",
    excerpt:
      "Een snelle website is cruciaal voor conversie en SEO. Ontdek de belangrijkste optimalisaties die je kunt doorvoeren.",
    category: "Performance",
    date: "20 december 2024",
    readTime: "6 min",
    slug: "website-snelheid-optimalisatie",
  },
  {
    title: "E-mail marketing automation: Zo zet je het op",
    excerpt:
      "Van welkomstflow tot abandoned cart - leer hoe je effectieve e-mail automations opzet die converteren.",
    category: "Marketing",
    date: "15 december 2024",
    readTime: "9 min",
    slug: "email-marketing-automation",
  },
  {
    title: "AVG-compliant website: Checklist voor 2025",
    excerpt:
      "Is jouw website klaar voor de privacywetgeving? Gebruik onze checklist om te controleren of je aan alle eisen voldoet.",
    category: "Privacy",
    date: "10 december 2024",
    readTime: "5 min",
    slug: "avg-compliant-website-checklist",
  },
];

const categories = [
  { name: "Alle artikelen", count: 12 },
  { name: "Development", count: 4 },
  { name: "SEO", count: 3 },
  { name: "Marketing", count: 2 },
  { name: "Performance", count: 2 },
  { name: "Privacy", count: 1 },
];

export default function BlogPage() {
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
            Tips, trends en diepgaande artikelen over webdevelopment, design,
            SEO en online marketing.
          </motion.p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 overflow-hidden"
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
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
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
                <Button asChild className="bg-accent hover:bg-accent-hover text-white">
                  <Link href={`/blog/${featuredPost.slug}`}>
                    Lees artikel
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="hidden lg:flex items-center justify-center">
                <div className="w-full h-64 rounded-2xl bg-accent/20 flex items-center justify-center">
                  <span className="text-6xl font-bold text-accent/40">15</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

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
                  {categories.map((category) => (
                    <li key={category.name}>
                      <button className="flex items-center justify-between w-full px-3 py-2 rounded-lg text-left text-muted-foreground hover:bg-surface hover:text-white transition-colors">
                        <span>{category.name}</span>
                        <span className="text-xs bg-surface px-2 py-0.5 rounded-full">
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {posts.map((post, index) => (
                  <motion.article
                    key={post.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group rounded-2xl bg-surface border border-white/5 hover:border-white/10 overflow-hidden transition-all"
                  >
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Tag className="h-4 w-4 text-accent" />
                        <span className="text-xs font-medium text-accent">
                          {post.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-accent transition-colors">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
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
                  </motion.article>
                ))}
              </div>

              {/* Load More */}
              <div className="mt-12 text-center">
                <Button variant="outline" size="lg">
                  Meer artikelen laden
                </Button>
              </div>
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
