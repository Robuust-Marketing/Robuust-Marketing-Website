"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Clock,
  Briefcase,
  Heart,
  Coffee,
  Laptop,
  Users,
  Rocket,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const vacatures = [
  {
    title: "Full-Stack Developer",
    type: "Fulltime",
    location: "Hybride / Remote",
    description:
      "Bouw mee aan moderne websites en webapplicaties met Next.js, React en TypeScript.",
    requirements: [
      "3+ jaar ervaring met React/Next.js",
      "Kennis van TypeScript",
      "Ervaring met headless CMS",
      "Proactieve houding",
    ],
    active: true,
  },
  {
    title: "UI/UX Designer",
    type: "Fulltime",
    location: "Hybride / Remote",
    description:
      "Ontwerp gebruiksvriendelijke interfaces die bezoekers omzetten in klanten.",
    requirements: [
      "3+ jaar ervaring in UI/UX design",
      "Figma expert",
      "Oog voor detail",
      "Portfolio met sterke cases",
    ],
    active: true,
  },
  {
    title: "Online Marketing Specialist",
    type: "Parttime / Fulltime",
    location: "Hybride",
    description:
      "Beheer en optimaliseer campagnes voor onze klanten op Google, Meta en meer.",
    requirements: [
      "2+ jaar ervaring met Google/Meta Ads",
      "Data-gedreven mindset",
      "Goede communicatie",
      "Google certificeringen",
    ],
    active: false,
  },
];

const benefits = [
  {
    icon: Laptop,
    title: "Flexibel werken",
    description: "Werk vanuit huis, kantoor of je favoriete koffietent.",
  },
  {
    icon: Rocket,
    title: "Groei & Ontwikkeling",
    description: "Persoonlijk ontwikkelbudget en tijd om te leren.",
  },
  {
    icon: Coffee,
    title: "Goede koffie",
    description: "Onbeperkt premium koffie (en thee natuurlijk).",
  },
  {
    icon: Users,
    title: "Jong team",
    description: "Werk samen met gemotiveerde professionals.",
  },
  {
    icon: Heart,
    title: "Gezondheid",
    description: "Bijdrage aan sportabonnement of wellness.",
  },
  {
    icon: Sparkles,
    title: "Moderne tools",
    description: "Werk met de nieuwste technologieën en tools.",
  },
];

export default function VacaturesPage() {
  const activeVacatures = vacatures.filter((v) => v.active);

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
                "radial-gradient(ellipse, rgba(197, 60, 11, 0.15) 0%, transparent 60%)",
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
            Werken bij Robuust
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Word deel van ons{" "}
            <span className="text-gradient-accent">team</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            We zijn altijd op zoek naar getalenteerde mensen die net zo
            gepassioneerd zijn over het web als wij.
          </motion.p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-surface/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Waarom Robuust?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meer dan alleen een baan - een plek waar je kunt groeien
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl bg-surface p-6 border border-white/5"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Openstaande vacatures
            </h2>
            <p className="text-muted-foreground">
              {activeVacatures.length > 0
                ? `We hebben ${activeVacatures.length} openstaande ${
                    activeVacatures.length === 1 ? "positie" : "posities"
                  }`
                : "Momenteel geen openstaande vacatures"}
            </p>
          </motion.div>

          {activeVacatures.length > 0 ? (
            <div className="space-y-6">
              {activeVacatures.map((vacature, index) => (
                <motion.div
                  key={vacature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl bg-surface p-6 border border-white/5 hover:border-accent/30 transition-colors"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {vacature.title}
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
                          <Briefcase className="h-4 w-4" />
                          {vacature.type}
                        </span>
                        <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          {vacature.location}
                        </span>
                      </div>
                    </div>
                    <Button
                      asChild
                      className="bg-accent hover:bg-accent-hover text-white shrink-0"
                    >
                      <Link
                        href={`/contact?subject=Sollicitatie: ${vacature.title}`}
                        className="flex items-center gap-2"
                      >
                        Solliciteer
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {vacature.description}
                  </p>
                  <div>
                    <h4 className="text-sm font-medium text-white mb-2">
                      Wat we zoeken:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {vacature.requirements.map((req) => (
                        <li
                          key={req}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <Clock className="h-3 w-3 text-accent" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center rounded-2xl bg-surface p-12 border border-white/5"
            >
              <Briefcase className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Geen vacatures op dit moment
              </h3>
              <p className="text-muted-foreground mb-6">
                Maar we staan altijd open voor talent! Stuur een open
                sollicitatie.
              </p>
              <Button
                asChild
                className="bg-accent hover:bg-accent-hover text-white"
              >
                <Link href="/contact?subject=Open sollicitatie">
                  Stuur open sollicitatie
                </Link>
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Open Application */}
      <section className="py-20 bg-surface/50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-white mb-6"
          >
            Staat jouw droombaan er niet tussen?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-lg mb-8"
          >
            We zijn altijd benieuwd naar talent. Stuur ons je CV en motivatie,
            wie weet is er binnenkort plek voor jou!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/5"
            >
              <Link
                href="/contact?subject=Open sollicitatie"
                className="flex items-center gap-2"
              >
                Stuur open sollicitatie
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
