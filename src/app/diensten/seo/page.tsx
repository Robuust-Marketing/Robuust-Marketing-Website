"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Search,
  FileCode,
  PenTool,
  Link2,
  MapPin,
  BarChart3,
  ArrowRight,
  Check,
  TrendingUp,
} from "lucide-react";

const services = [
  {
    icon: FileCode,
    title: "Technische SEO",
    description:
      "Optimaliseer de technische basis: snelheid, crawlbaarheid, structured data en Core Web Vitals.",
  },
  {
    icon: PenTool,
    title: "Content Optimalisatie",
    description:
      "SEO-vriendelijke content die zowel zoekmachines als bezoekers aanspreekt.",
  },
  {
    icon: Link2,
    title: "Linkbuilding",
    description:
      "Kwalitatieve backlinks van relevante websites om je domeinautoriteit te verhogen.",
  },
  {
    icon: MapPin,
    title: "Local SEO",
    description:
      "Beter gevonden worden in je regio met Google Business Profile optimalisatie.",
  },
  {
    icon: Search,
    title: "Keyword Research",
    description:
      "Ontdek waar je doelgroep naar zoekt en welke kansen er liggen.",
  },
  {
    icon: BarChart3,
    title: "SEO Rapportage",
    description:
      "Maandelijkse rapportages met rankings, traffic en concrete verbeterpunten.",
  },
];

const technicalChecklist = [
  "Site snelheid optimalisatie (Core Web Vitals)",
  "Mobile-first indexering gereedheid",
  "XML sitemap en robots.txt configuratie",
  "Structured data / Schema markup",
  "Canonical tags en URL structuur",
  "Internal linking optimalisatie",
  "404 en redirect management",
  "HTTPS en security headers",
];

const results = [
  { metric: "+150%", label: "Organisch verkeer", period: "gemiddeld na 6 maanden" },
  { metric: "Top 10", label: "Google rankings", period: "voor belangrijkste keywords" },
  { metric: "-40%", label: "Bounce rate", period: "door betere content match" },
];

export default function SEOPage() {
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
            <Search className="h-8 w-8" />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-4"
          >
            Zoekmachine Optimalisatie
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Gevonden worden
            <br />
            <span className="text-gradient-accent">in Google</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg mb-8"
          >
            Organisch beter gevonden worden met technische SEO, content
            optimalisatie en linkbuilding. Duurzame groei zonder advertentiekosten.
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
                Gratis SEO-scan
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/5"
            >
              <Link href="/diensten/tracking">Tracking & Analytics</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12 bg-surface/50 border-y border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {results.map((result, index) => (
              <motion.div
                key={result.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-accent mb-1">
                  {result.metric}
                </div>
                <div className="text-white font-medium">{result.label}</div>
                <div className="text-sm text-muted-foreground">{result.period}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
            >
              Onze SEO Diensten
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Een complete aanpak voor duurzame organische groei
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl bg-surface p-6 border border-white/5 hover:border-white/10 transition-colors"
              >
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical SEO Section */}
      <section className="py-20 bg-surface/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Technische SEO{" "}
                <span className="text-gradient-accent">checklist</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                De technische basis moet op orde zijn voordat content en
                linkbuilding effect hebben. Bij elke website die we bouwen is
                dit standaard inbegrepen.
              </p>
              <ul className="space-y-3">
                {technicalChecklist.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                      <Check className="h-4 w-4 text-accent" />
                    </div>
                    <span className="text-white/80">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-gradient-to-br from-accent/20 to-accent/5 p-8 border border-accent/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="h-8 w-8 text-accent" />
                <h3 className="text-2xl font-bold text-white">
                  SEO is een marathon
                </h3>
              </div>
              <p className="text-muted-foreground mb-6">
                In tegenstelling tot advertenties, is SEO geen instant
                oplossing. Het kost tijd om autoriteit op te bouwen en rankings
                te verdienen. Maar de resultaten zijn duurzaam en de kosten per
                bezoeker dalen over tijd.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center p-3 rounded-lg bg-white/5">
                  <span className="text-white/80">Maand 1-3</span>
                  <span className="text-sm text-muted-foreground">
                    Technische basis & content
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-white/5">
                  <span className="text-white/80">Maand 3-6</span>
                  <span className="text-sm text-muted-foreground">
                    Rankings stijgen
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-white/5">
                  <span className="text-white/80">Maand 6+</span>
                  <span className="text-sm text-muted-foreground">
                    Significante traffic groei
                  </span>
                </div>
              </div>
              <Button
                asChild
                className="w-full bg-accent hover:bg-accent-hover text-white"
              >
                <Link href="/contact">Start met SEO →</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SEO vs Ads Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
            >
              SEO vs. Adverteren
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Beide hebben hun plaats in een gezonde marketingmix
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div className="rounded-2xl bg-surface p-8 border border-white/5">
              <h3 className="text-xl font-semibold text-white mb-4">
                SEO (Organisch)
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Duurzame resultaten die blijven
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Geen kosten per klik
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Hogere CTR dan advertenties
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Bouwt merkautoriteit
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-surface p-8 border border-white/5">
              <h3 className="text-xl font-semibold text-white mb-4">
                Advertenties (Betaald)
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Direct resultaat vanaf dag 1
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Volledige controle over budget
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Precieze targeting opties
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Snel schaalbaar
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
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
            Klaar om gevonden te worden?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-lg mb-8"
          >
            Vraag een gratis SEO-scan aan en ontdek je verbeterpunten.
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
                Gratis SEO-scan
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
