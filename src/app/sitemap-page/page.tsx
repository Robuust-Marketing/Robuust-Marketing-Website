"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Home,
  Briefcase,
  Users,
  BookOpen,
  Phone,
  FileText,
  Wrench,
  Code2,
  HelpCircle,
} from "lucide-react";

const sitemapSections = [
  {
    title: "Hoofdpagina's",
    icon: Home,
    links: [
      { name: "Home", href: "/" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Diensten",
    icon: Briefcase,
    links: [
      { name: "Alle diensten", href: "/diensten" },
      { name: "Design", href: "/diensten#design" },
      { name: "Development", href: "/diensten#development" },
      { name: "Hosting", href: "/diensten#hosting" },
      { name: "Onderhoud", href: "/diensten/onderhoud" },
      { name: "Tracking & Analytics", href: "/diensten#tracking" },
      { name: "Email Marketing", href: "/diensten#email-marketing" },
      { name: "Online Marketing", href: "/diensten#online-marketing" },
      { name: "Branding", href: "/diensten#branding" },
      { name: "SEO", href: "/diensten#seo" },
      { name: "CRM", href: "/diensten#crm" },
      { name: "Solid Start pakket", href: "/diensten#solid-start" },
      { name: "Firm Foundation pakket", href: "/diensten#firm-foundation" },
    ],
  },
  {
    title: "Werkwijze",
    icon: Wrench,
    links: [
      { name: "Onze aanpak", href: "/werkwijze" },
      { name: "Projectfases", href: "/werkwijze#fases" },
      { name: "Tijdlijn", href: "/werkwijze#tijdlijn" },
      { name: "Samenwerking", href: "/werkwijze#samenwerking" },
    ],
  },
  {
    title: "Tooling",
    icon: Code2,
    links: [
      { name: "Onze tech stack", href: "/tooling" },
      { name: "Next.js & React", href: "/tooling#nextjs" },
      { name: "TypeScript", href: "/tooling#typescript" },
      { name: "Tailwind CSS", href: "/tooling#tailwind" },
      { name: "Headless CMS", href: "/tooling#cms" },
      { name: "Cloudflare", href: "/tooling#cloudflare" },
      { name: "NGINX", href: "/tooling#nginx" },
    ],
  },
  {
    title: "Over Robuust",
    icon: Users,
    links: [
      { name: "Over ons", href: "/over" },
      { name: "Portfolio", href: "/portfolio" },
      { name: "Partners", href: "/partners" },
    ],
  },
  {
    title: "Kennisbank",
    icon: BookOpen,
    links: [
      { name: "Kennisbank overzicht", href: "/kennisbank" },
      { name: "Blog", href: "/blog" },
      { name: "FAQ", href: "/faq" },
      { name: "Glossary", href: "/kennisbank/glossary" },
    ],
  },
  {
    title: "Juridisch",
    icon: FileText,
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "AVG Compliance", href: "/avg" },
      { name: "Algemene Voorwaarden", href: "/voorwaarden" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="relative pb-12">
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
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
          >
            Sitemap
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            Een overzicht van alle pagina's op onze website.
          </motion.p>
        </div>
      </section>

      {/* Sitemap Grid */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sitemapSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl bg-surface border border-white/5 p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <section.icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-lg font-semibold text-white">
                    {section.title}
                  </h2>
                </div>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-accent transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-surface/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-white mb-6">
              Snelle navigatie
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/"
                className="px-4 py-2 rounded-full bg-background border border-white/10 text-sm text-muted-foreground hover:text-white hover:border-accent transition-colors"
              >
                Home
              </Link>
              <Link
                href="/diensten"
                className="px-4 py-2 rounded-full bg-background border border-white/10 text-sm text-muted-foreground hover:text-white hover:border-accent transition-colors"
              >
                Diensten
              </Link>
              <Link
                href="/portfolio"
                className="px-4 py-2 rounded-full bg-background border border-white/10 text-sm text-muted-foreground hover:text-white hover:border-accent transition-colors"
              >
                Portfolio
              </Link>
              <Link
                href="/blog"
                className="px-4 py-2 rounded-full bg-background border border-white/10 text-sm text-muted-foreground hover:text-white hover:border-accent transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 rounded-full bg-background border border-white/10 text-sm text-muted-foreground hover:text-white hover:border-accent transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
