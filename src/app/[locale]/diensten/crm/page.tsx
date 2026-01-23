"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Users,
  Zap,
  GitMerge,
  BarChart3,
  Bell,
  Shield,
  ArrowRight,
  Check,
} from "lucide-react";

const services = [
  {
    icon: Users,
    title: "CRM Setup",
    description:
      "Implementatie en configuratie van je CRM systeem, afgestemd op jouw werkprocessen.",
  },
  {
    icon: GitMerge,
    title: "Integraties",
    description:
      "Koppel je CRM aan je website, email marketing, boekhouding en andere tools.",
  },
  {
    icon: Zap,
    title: "Automatisering",
    description:
      "Automatische workflows voor lead nurturing, follow-ups en taakbeheer.",
  },
  {
    icon: BarChart3,
    title: "Lead Scoring",
    description:
      "Identificeer je warmste leads op basis van gedrag en interacties.",
  },
  {
    icon: Bell,
    title: "Notificaties",
    description:
      "Real-time alerts wanneer leads actie ondernemen op je website.",
  },
  {
    icon: Shield,
    title: "Data Management",
    description:
      "Schone, georganiseerde data met deduplicatie en validatie.",
  },
];

const integrations = [
  {
    name: "HubSpot",
    description: "All-in-one marketing, sales en service platform",
    type: "Enterprise",
  },
  {
    name: "Pipedrive",
    description: "Sales-focused CRM voor groeiende teams",
    type: "Sales",
  },
  {
    name: "ActiveCampaign",
    description: "Marketing automation met CRM functionaliteit",
    type: "Marketing",
  },
  {
    name: "Notion",
    description: "Flexibele workspace met CRM templates",
    type: "Startup",
  },
];

const automationExamples = [
  {
    trigger: "Formulier ingevuld",
    actions: [
      "Contact aanmaken in CRM",
      "Tag toekennen op basis van interesse",
      "Welkomst email versturen",
      "Sales notificatie sturen",
    ],
  },
  {
    trigger: "Offerte bekeken",
    actions: [
      "Lead score verhogen",
      "Follow-up taak aanmaken",
      "Reminder email na 3 dagen",
    ],
  },
  {
    trigger: "Geen activiteit 30 dagen",
    actions: [
      "Re-engagement email versturen",
      "Tag wijzigen naar 'cold'",
      "Verwijderen uit actieve campagnes",
    ],
  },
];

const benefits = [
  "Nooit meer leads vergeten op te volgen",
  "360° klantbeeld voor betere service",
  "Kortere sales cycles door automatisering",
  "Betere samenwerking tussen teams",
  "Data-driven beslissingen",
  "Schaalbaar zonder extra handwerk",
];

export default function CRMPage() {
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
            <Users className="h-8 w-8" />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-4"
          >
            CRM & Automatisering
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Klantrelaties
            <br />
            <span className="text-gradient-accent">geoptimaliseerd</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg mb-8"
          >
            Slimme CRM integraties en automatiseringen die je sales proces
            stroomlijnen. Van lead tot klant, volledig geautomatiseerd.
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
                CRM adviesgesprek
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/5"
            >
              <Link href="/diensten/email-marketing">Email Marketing</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-surface/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
            >
              Wat we doen
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Complete CRM implementatie en optimalisatie
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

      {/* Integrations Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
            >
              CRM Platforms
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              We werken met de beste CRM systemen en helpen je de juiste keuze maken
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl bg-surface p-6 border border-white/5 hover:border-accent/30 transition-colors"
              >
                <span className="text-xs font-medium text-accent uppercase tracking-wider">
                  {integration.type}
                </span>
                <h3 className="text-xl font-semibold text-white mt-2 mb-2">
                  {integration.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {integration.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Examples */}
      <section className="py-20 bg-surface/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
            >
              Automatisering Voorbeelden
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Zo kunnen automatiseringen jouw werkprocessen versnellen
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {automationExamples.map((example, index) => (
              <motion.div
                key={example.trigger}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl bg-surface p-6 border border-white/5"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="h-5 w-5 text-accent" />
                  <span className="font-medium text-white">Trigger:</span>
                </div>
                <div className="bg-accent/10 text-accent px-3 py-2 rounded-lg text-sm font-medium mb-4">
                  {example.trigger}
                </div>
                <div className="text-sm text-muted-foreground mb-2">
                  Automatische acties:
                </div>
                <ul className="space-y-2">
                  {example.actions.map((action, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-white/80">{action}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Waarom{" "}
                <span className="text-gradient-accent">CRM automatisering?</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Een goed ingericht CRM systeem bespaart je team uren per week en
                zorgt ervoor dat geen enkele lead door de mazen van het net
                glipt.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                      <Check className="h-4 w-4 text-accent" />
                    </div>
                    <span className="text-white/80">{benefit}</span>
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
              <h3 className="text-2xl font-bold text-white mb-4">
                Website + CRM Integratie
              </h3>
              <p className="text-muted-foreground mb-6">
                De kracht van CRM zit in de integratie met je website. Elk
                formulier, elke download, elke pageview kan automatisch in je
                CRM terechtkomen.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-sm text-accent">
                  <Check className="h-4 w-4" />
                  Formulieren direct gekoppeld aan CRM
                </li>
                <li className="flex items-center gap-2 text-sm text-accent">
                  <Check className="h-4 w-4" />
                  Website gedrag zichtbaar per contact
                </li>
                <li className="flex items-center gap-2 text-sm text-accent">
                  <Check className="h-4 w-4" />
                  Automatische lead scoring
                </li>
                <li className="flex items-center gap-2 text-sm text-accent">
                  <Check className="h-4 w-4" />
                  Real-time sales notificaties
                </li>
              </ul>
              <Button
                asChild
                className="w-full bg-accent hover:bg-accent-hover text-white"
              >
                <Link href="/diensten/development">
                  Meer over development →
                </Link>
              </Button>
            </motion.div>
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
            Klaar om je sales te stroomlijnen?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-lg mb-8"
          >
            Laten we bespreken hoe CRM automatisering jouw bedrijf kan helpen groeien.
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
