"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Code2,
  Palette,
  Search,
  Server,
  BarChart3,
  Shield,
  Megaphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  {
    name: "Development",
    description: "Alles over webdevelopment, frameworks en best practices",
    icon: Code2,
    guides: [
      "Introductie tot Next.js",
      "React hooks uitgelegd",
      "TypeScript voor beginners",
      "API's bouwen en integreren",
    ],
    href: "/kennisbank/development",
  },
  {
    name: "Design",
    description: "UI/UX principes, tools en design systemen",
    icon: Palette,
    guides: [
      "UI design principes",
      "Responsive design basics",
      "Kleur en typografie",
      "Figma workflow tips",
    ],
    href: "/kennisbank/design",
  },
  {
    name: "SEO",
    description: "Zoekmachine optimalisatie en organische vindbaarheid",
    icon: Search,
    guides: [
      "SEO basis voor beginners",
      "Technische SEO checklist",
      "Content strategie",
      "Local SEO optimalisatie",
    ],
    href: "/kennisbank/seo",
  },
  {
    name: "Hosting & Infrastructuur",
    description: "Servers, performance en beveiliging",
    icon: Server,
    guides: [
      "Hosting kiezen: waar op letten?",
      "DNS uitgelegd",
      "SSL certificaten",
      "Website performance",
    ],
    href: "/kennisbank/hosting",
  },
  {
    name: "Analytics",
    description: "Data, tracking en conversie optimalisatie",
    icon: BarChart3,
    guides: [
      "Google Analytics 4 setup",
      "Conversie tracking",
      "UTM parameters",
      "Dashboard maken",
    ],
    href: "/kennisbank/analytics",
  },
  {
    name: "Privacy & Security",
    description: "AVG, beveiliging en best practices",
    icon: Shield,
    guides: [
      "AVG voor websites",
      "Cookie consent implementeren",
      "Website beveiligen",
      "Privacy by design",
    ],
    href: "/kennisbank/privacy",
  },
];

const featuredGuides = [
  {
    title: "De complete gids voor website launches",
    description:
      "Van planning tot go-live: alles wat je moet weten voor een succesvolle website lancering.",
    category: "Development",
    readTime: "15 min",
    href: "/kennisbank/website-launch-gids",
  },
  {
    title: "SEO voor developers: Technische optimalisatie",
    description:
      "Leer hoe je als developer bijdraagt aan betere SEO resultaten met technische optimalisaties.",
    category: "SEO",
    readTime: "12 min",
    href: "/kennisbank/seo-voor-developers",
  },
  {
    title: "E-commerce conversie optimalisatie",
    description:
      "Verhoog je webshop conversie met bewezen technieken en A/B testing strategieën.",
    category: "Marketing",
    readTime: "10 min",
    href: "/kennisbank/ecommerce-conversie",
  },
];

export default function KennisbankPage() {
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
            Diepgaande guides, tutorials en best practices over webdevelopment,
            design en online marketing.
          </motion.p>
        </div>
      </section>

      {/* Featured Guides */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white">Populaire guides</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredGuides.map((guide, index) => (
              <motion.div
                key={guide.title}
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
                <p className="text-sm text-muted-foreground mb-4">
                  {guide.description}
                </p>
                <Link
                  href={guide.href}
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
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl bg-surface border border-white/5 p-6"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <category.icon className="h-6 w-6" />
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

                <ul className="space-y-2 mb-4">
                  {category.guides.map((guide) => (
                    <li key={guide}>
                      <Link
                        href="#"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors"
                      >
                        <span className="w-1 h-1 rounded-full bg-accent" />
                        {guide}
                      </Link>
                    </li>
                  ))}
                </ul>

                <Link
                  href={category.href}
                  className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:gap-3 transition-all"
                >
                  Alle {category.name.toLowerCase()} guides
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Glossary Teaser */}
      <section className="py-20 bg-surface/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  Begrippen uitgelegd
                </h2>
                <p className="text-muted-foreground mb-6">
                  Van API tot z-index: onze glossary legt alle vakjargon
                  begrijpelijk uit. Perfect voor als je tegen een onbekend
                  begrip aanloopt.
                </p>
                <Button
                  asChild
                  className="bg-accent hover:bg-accent-hover text-white"
                >
                  <Link href="/kennisbank/glossary">
                    Naar de glossary
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="hidden lg:block">
                <div className="grid grid-cols-3 gap-3">
                  {["API", "CDN", "CMS", "DNS", "SEO", "SSL", "UI", "UX", "A/B"].map(
                    (term) => (
                      <div
                        key={term}
                        className="rounded-lg bg-white/5 p-3 text-center"
                      >
                        <span className="font-mono text-accent">{term}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
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
