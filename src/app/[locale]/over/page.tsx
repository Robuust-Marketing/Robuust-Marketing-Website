"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Heart,
  Zap,
  Shield,
  Users,
  Code2,
  Lightbulb,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Heart,
    title: "Passie voor kwaliteit",
    description:
      "Wij leveren geen half werk. Elk project krijgt onze volle aandacht en expertise.",
  },
  {
    icon: Zap,
    title: "Snelheid zonder compromis",
    description:
      "Korte doorlooptijden zonder in te leveren op kwaliteit of functionaliteit.",
  },
  {
    icon: Shield,
    title: "Betrouwbaar & transparant",
    description:
      "Heldere communicatie, eerlijke prijzen en afspraken die we nakomen.",
  },
  {
    icon: Users,
    title: "Persoonlijke aanpak",
    description:
      "Geen nummertje, maar een echte samenwerking. We denken proactief met je mee.",
  },
];

const expertise = [
  {
    icon: Code2,
    title: "Technische excellentie",
    description:
      "Wij werken met de nieuwste technologieën: React, Next.js, TypeScript en meer. Geen verouderde WordPress templates, maar moderne oplossingen die schalen.",
  },
  {
    icon: Lightbulb,
    title: "Strategisch denken",
    description:
      "Een website is meer dan een digitale brochure. Wij kijken naar jouw business doelen en vertalen die naar een effectieve online strategie.",
  },
];

export default function OverPage() {
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
            Over Robuust
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Wij bouwen
            <br />
            <span className="text-gradient-accent">digitale fundamenten</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            Robuust Marketing is een full-service digitaal bureau gespecialiseerd
            in webdevelopment, hosting en online marketing. Wij helpen bedrijven
            groeien met een stevige digitale basis.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Ons verhaal
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Robuust Marketing is ontstaan vanuit een simpele observatie:
                  teveel bedrijven worstelen met hun digitale aanwezigheid. Niet
                  door gebrek aan ambities, maar door versnipperde dienstverlening
                  en gebrek aan technische expertise.
                </p>
                <p>
                  Wij geloven dat elk bedrijf recht heeft op een professionele
                  online aanwezigheid. Daarom bieden wij alles onder één dak: van
                  het eerste design tot de laatste regel code, van hosting tot
                  doorlopend onderhoud.
                </p>
                <p>
                  Met meer dan 70 websites in beheer en jarenlange ervaring in
                  webdevelopment, zijn wij de partner die jouw digitale ambities
                  waarmaakt. Geen loze beloftes, maar meetbare resultaten.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="rounded-2xl bg-surface p-6 border border-white/5">
                <div className="text-4xl font-bold text-accent mb-2">70+</div>
                <div className="text-sm text-muted-foreground">
                  Websites beheerd
                </div>
              </div>
              <div className="rounded-2xl bg-surface p-6 border border-white/5">
                <div className="text-4xl font-bold text-accent mb-2">99.9%</div>
                <div className="text-sm text-muted-foreground">
                  Uptime garantie
                </div>
              </div>
              <div className="rounded-2xl bg-surface p-6 border border-white/5">
                <div className="text-4xl font-bold text-accent mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">
                  Monitoring actief
                </div>
              </div>
              <div className="rounded-2xl bg-surface p-6 border border-white/5">
                <div className="text-4xl font-bold text-accent mb-2">EU</div>
                <div className="text-sm text-muted-foreground">
                  Servers in Europa
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-surface/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
            >
              Waar wij voor staan
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Onze kernwaarden zijn geen mooie woorden op papier. Het zijn de
              principes die elke beslissing en elk project sturen.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl bg-background p-6 border border-white/5"
              >
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {expertise.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-3xl bg-surface p-8 border border-white/5"
              >
                <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent/10 text-accent">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
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
            Klaar om samen te werken?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-lg mb-8"
          >
            Laten we kennismaken en bespreken hoe wij jouw bedrijf kunnen helpen
            groeien.
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
                Neem contact op
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
