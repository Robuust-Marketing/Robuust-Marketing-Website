"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Code2,
  Zap,
  Shield,
  Puzzle,
  Gauge,
  GitBranch,
  ArrowRight,
  Check,
} from "lucide-react";

const technologies = [
  {
    name: "Next.js",
    description: "React framework voor razendsnelle websites",
    category: "Framework",
  },
  {
    name: "React",
    description: "Componentgebaseerde UI development",
    category: "Library",
  },
  {
    name: "TypeScript",
    description: "Type-safe code voor minder bugs",
    category: "Language",
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first styling voor snelle iteratie",
    category: "Styling",
  },
  {
    name: "Headless CMS",
    description: "Contentbeheer zonder technische kennis",
    category: "CMS",
  },
  {
    name: "API Integraties",
    description: "Koppeling met externe systemen",
    category: "Backend",
  },
];

const features = [
  {
    icon: Zap,
    title: "Razendsnelle Performance",
    description:
      "Static Site Generation en Edge caching voor laadtijden onder de seconde. Geen trage WordPress sites meer.",
  },
  {
    icon: Shield,
    title: "Ingebouwde Security",
    description:
      "Geen database queries = geen SQL injection. Moderne architectuur met minimale aanvalsvectoren.",
  },
  {
    icon: Puzzle,
    title: "Flexibele Integraties",
    description:
      "Koppel met elk systeem via APIs: CRM, boekhoudpakket, voorraadsysteem, betaalproviders en meer.",
  },
  {
    icon: Gauge,
    title: "SEO Optimalisatie",
    description:
      "Server-side rendering voor perfecte indexatie. Gestructureerde data en meta tags out-of-the-box.",
  },
  {
    icon: GitBranch,
    title: "Versiebeheer",
    description:
      "Alle code in Git met volledige historie. Makkelijk terugdraaien en transparant samenwerken.",
  },
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Leesbare, onderhoudbare code volgens moderne standaarden. Geen spaghetti of technische schuld.",
  },
];

const whyModern = [
  {
    traditional: "WordPress met 30+ plugins",
    modern: "Custom code, alleen wat je nodig hebt",
  },
  {
    traditional: "Laadtijd 3-5 seconden",
    modern: "Laadtijd onder 1 seconde",
  },
  {
    traditional: "Constante plugin updates nodig",
    modern: "Stabiele, veilige codebase",
  },
  {
    traditional: "Beperkte schaalbaarheid",
    modern: "Onbeperkt schaalbaar via CDN",
  },
  {
    traditional: "Database-afhankelijk",
    modern: "Serverless architectuur",
  },
];

export default function DevelopmentPage() {
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
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 text-accent"
          >
            <Code2 className="h-8 w-8" />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-4"
          >
            Web Development
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Moderne websites
            <br />
            <span className="text-gradient-accent">die presteren</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg mb-8"
          >
            Gebouwd met React, Next.js en TypeScript voor razendsnelle
            performance. Geen trage WordPress sites, maar modern maatwerk dat
            schaalt.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent-hover text-white"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Bespreek je project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/5"
            >
              <Link href="/portfolio">Bekijk projecten</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-surface/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
            >
              Onze Tech Stack
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Bewezen technologieën voor betrouwbare, snelle websites
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl bg-surface p-6 border border-white/5 hover:border-accent/30 transition-colors"
              >
                <span className="text-xs font-medium text-accent uppercase tracking-wider">
                  {tech.category}
                </span>
                <h3 className="text-xl font-semibold text-white mt-2 mb-2">
                  {tech.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {tech.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
            >
              Wat je krijgt
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Meer dan alleen code - een complete technische oplossing
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl bg-surface p-6 border border-white/5"
              >
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern vs Traditional */}
      <section className="py-20 bg-surface/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
            >
              Modern vs. Traditioneel
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Waarom we kiezen voor moderne technologie
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-surface border border-white/5 overflow-hidden"
          >
            <div className="grid grid-cols-2">
              <div className="p-6 border-b border-r border-white/5 bg-red-500/5">
                <span className="text-sm font-medium text-red-400">
                  Traditioneel
                </span>
              </div>
              <div className="p-6 border-b border-white/5 bg-accent/5">
                <span className="text-sm font-medium text-accent">
                  Moderne Aanpak
                </span>
              </div>
            </div>
            {whyModern.map((item, index) => (
              <div key={index} className="grid grid-cols-2">
                <div className="p-6 border-b border-r border-white/5 text-muted-foreground text-sm">
                  {item.traditional}
                </div>
                <div className="p-6 border-b border-white/5 text-white text-sm flex items-center gap-2">
                  <Check className="h-4 w-4 text-accent flex-shrink-0" />
                  {item.modern}
                </div>
              </div>
            ))}
          </motion.div>
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
            Klaar voor een website die echt presteert?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-lg mb-8"
          >
            Laten we bespreken hoe moderne technologie jouw online aanwezigheid
            kan transformeren.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent-hover text-white"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Plan een gesprek
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/5"
            >
              <Link href="/diensten">Alle diensten</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
