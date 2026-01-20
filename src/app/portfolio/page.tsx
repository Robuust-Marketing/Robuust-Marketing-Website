"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: "heinen-delfts-blauw",
    name: "Heinen Delfts Blauw",
    category: "E-commerce",
    description:
      "Complete e-commerce oplossing voor een iconisch Nederlands merk. Van design tot development met custom functionaliteiten.",
    image: "/portfolio/heinen.jpg",
    tags: ["Next.js", "E-commerce", "Custom Design"],
    results: ["40% snellere laadtijd", "25% meer conversies"],
  },
  {
    id: "horeca-interieur",
    name: "Horeca Interieur",
    category: "B2B Platform",
    description:
      "B2B platform voor horeca-inrichting met productcatalogus, offerte systeem en klantportaal.",
    image: "/portfolio/horeca.jpg",
    tags: ["React", "B2B", "Portal"],
    results: ["60+ actieve klanten", "Volledig geautomatiseerd"],
  },
  {
    id: "restaurant-website",
    name: "Restaurant Website",
    category: "Horeca",
    description:
      "Moderne website met online reserveringssysteem, menu management en integratie met bezorgsystemen.",
    image: "/portfolio/restaurant.jpg",
    tags: ["Next.js", "Reserveringen", "Integraties"],
    results: ["Online reserveringen +150%", "Minder telefoontjes"],
  },
  {
    id: "advocatenkantoor",
    name: "Advocatenkantoor",
    category: "Zakelijke Dienstverlening",
    description:
      "Professionele website met focus op vertrouwen en expertise. Inclusief client portal en afsprakenmodule.",
    image: "/portfolio/advocaat.jpg",
    tags: ["Corporate", "Portal", "SEO"],
    results: ["Top 3 Google rankings", "45% meer aanvragen"],
  },
  {
    id: "startup-saas",
    name: "SaaS Startup",
    category: "Tech",
    description:
      "Marketing website voor innovatieve SaaS startup. Snelle time-to-market met focus op conversie.",
    image: "/portfolio/saas.jpg",
    tags: ["Next.js", "Marketing", "Animaties"],
    results: ["2 weken live", "High-converting design"],
  },
  {
    id: "webshop-mode",
    name: "Fashion Webshop",
    category: "E-commerce",
    description:
      "Stijlvolle webshop voor modebedrijf met geavanceerde filtering, lookbook en loyalty programma.",
    image: "/portfolio/fashion.jpg",
    tags: ["E-commerce", "Custom", "Loyalty"],
    results: ["30% hogere orderwaarde", "Loyaal klantenbestand"],
  },
];

export default function PortfolioPage() {
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
            Portfolio
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Onze beste
            <br />
            <span className="text-gradient-accent">projecten</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            Van startups tot gevestigde merken. Bekijk een selectie van onze
            recente projecten en ontdek wat wij voor jouw bedrijf kunnen
            betekenen.
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-3xl bg-surface border border-white/5 hover:border-white/10 transition-all duration-300"
              >
                {/* Image placeholder */}
                <div className="aspect-video bg-gradient-to-br from-accent/20 to-accent/5 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/20 text-6xl font-bold">
                      {project.name.charAt(0)}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-accent text-xs font-medium uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Results */}
                  <div className="flex flex-wrap gap-4 pt-4 border-t border-white/5">
                    {project.results.map((result) => (
                      <span key={result} className="text-sm text-accent">
                        {result}
                      </span>
                    ))}
                  </div>
                </div>
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
            Jouw project als volgende?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-lg mb-8"
          >
            Laten we samen bespreken hoe we jouw digitale ambities kunnen
            waarmaken.
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
                Start je project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
