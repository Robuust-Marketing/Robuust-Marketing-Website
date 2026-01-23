"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageSquare,
  Lightbulb,
  Palette,
  Code2,
  Rocket,
  Wrench,
  CheckCircle,
  Clock,
  Users,
  FileText,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const phases = [
  {
    id: "discovery",
    number: "01",
    name: "Discovery",
    icon: Lightbulb,
    description:
      "We beginnen met een grondige analyse van jouw bedrijf, doelen en doelgroep. Dit vormt de basis voor alles wat volgt.",
    activities: [
      "Intake gesprek & briefing",
      "Doelgroep analyse",
      "Concurrentie onderzoek",
      "Technische requirements",
    ],
    deliverables: ["Projectplan", "Functionele specificaties", "Timeline"],
  },
  {
    id: "design",
    number: "02",
    name: "Design",
    icon: Palette,
    description:
      "We vertalen de strategie naar een visueel ontwerp dat past bij jouw merk en optimaal converteert.",
    activities: [
      "Wireframes & user flows",
      "UI design in Figma",
      "Responsive designs",
      "Design review & feedback",
    ],
    deliverables: ["Wireframes", "UI designs", "Design systeem"],
  },
  {
    id: "development",
    number: "03",
    name: "Development",
    icon: Code2,
    description:
      "Het ontwerp wordt omgezet naar een razendsnelle website met moderne technologie.",
    activities: [
      "Frontend development",
      "CMS integratie",
      "API koppelingen",
      "Testing & QA",
    ],
    deliverables: ["Werkende website", "CMS handleiding", "Technische documentatie"],
  },
  {
    id: "launch",
    number: "04",
    name: "Launch",
    icon: Rocket,
    description:
      "Na uitgebreide tests gaat je website live. We zorgen voor een soepele lancering.",
    activities: [
      "Performance optimalisatie",
      "SEO basis setup",
      "Analytics configuratie",
      "Go-live checklist",
    ],
    deliverables: ["Live website", "DNS configuratie", "SSL certificaat"],
  },
  {
    id: "support",
    number: "05",
    name: "Support",
    icon: Wrench,
    description:
      "Na de launch blijven we beschikbaar voor onderhoud, updates en doorontwikkeling.",
    activities: [
      "Doorlopend onderhoud",
      "Security updates",
      "Performance monitoring",
      "Doorontwikkeling",
    ],
    deliverables: ["Maandelijkse rapportages", "24/7 monitoring", "Priority support"],
  },
];

const timeline = [
  { phase: "Discovery", duration: "1-2 weken" },
  { phase: "Design", duration: "2-3 weken" },
  { phase: "Development", duration: "3-6 weken" },
  { phase: "Testing & Launch", duration: "1 week" },
];

const collaboration = [
  {
    icon: MessageSquare,
    title: "Wekelijkse updates",
    description: "Je ontvangt elke week een update over de voortgang van je project.",
  },
  {
    icon: Users,
    title: "Direct contact",
    description: "Geen tussenlagen. Je hebt direct contact met de mensen die aan je project werken.",
  },
  {
    icon: FileText,
    title: "Transparante documentatie",
    description: "Alle beslissingen en wijzigingen worden gedocumenteerd en gedeeld.",
  },
  {
    icon: Zap,
    title: "Snelle feedback loops",
    description: "Korte iteraties zodat we snel kunnen bijsturen waar nodig.",
  },
];

export default function WerkwijzePage() {
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
            Werkwijze
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Van idee naar
            <br />
            <span className="text-gradient-accent">succesvolle website</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            Onze bewezen aanpak zorgt voor een soepel proces en een eindresultaat
            waar je trots op bent. Geen verrassingen, wel resultaat.
          </motion.p>
        </div>
      </section>

      {/* Phases Section */}
      <section id="fases" className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
            >
              Onze 5 projectfases
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Elk project doorloopt dezelfde gestructureerde fases voor optimale
              kwaliteit en voorspelbaarheid.
            </motion.p>
          </div>

          <div className="space-y-8">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.id}
                id={phase.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className="rounded-3xl bg-surface border border-white/5 overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 lg:p-8">
                  {/* Phase header */}
                  <div className="lg:col-span-4 flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                      <phase.icon className="h-7 w-7" />
                    </div>
                    <div>
                      <span className="text-accent text-sm font-medium">
                        Fase {phase.number}
                      </span>
                      <h3 className="text-2xl font-bold text-white">
                        {phase.name}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="lg:col-span-8">
                    <p className="text-muted-foreground mb-6">
                      {phase.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-3">
                          Activiteiten
                        </h4>
                        <ul className="space-y-2">
                          {phase.activities.map((activity) => (
                            <li
                              key={activity}
                              className="flex items-center gap-2 text-sm text-muted-foreground"
                            >
                              <CheckCircle className="h-4 w-4 text-accent" />
                              {activity}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-3">
                          Deliverables
                        </h4>
                        <ul className="space-y-2">
                          {phase.deliverables.map((deliverable) => (
                            <li
                              key={deliverable}
                              className="flex items-center gap-2 text-sm text-muted-foreground"
                            >
                              <FileText className="h-4 w-4 text-accent" />
                              {deliverable}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="tijdlijn" className="py-20 bg-surface/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Gemiddelde tijdlijn
              </h2>
              <p className="text-muted-foreground mb-8">
                De doorlooptijd van een project hangt af van de complexiteit.
                Een gemiddeld website project duurt 6-12 weken van start tot
                lancering.
              </p>

              <div className="space-y-4">
                {timeline.map((item, index) => (
                  <div
                    key={item.phase}
                    className="flex items-center gap-4 p-4 rounded-xl bg-background border border-white/5"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <span className="font-medium text-white">{item.phase}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">{item.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-gradient-to-br from-accent/10 to-accent/5 p-8 border border-accent/20"
            >
              <h3 className="text-xl font-bold text-white mb-4">
                Indicatieve doorlooptijden
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-white">Eenvoudige website</span>
                  <span className="text-accent font-medium">4-6 weken</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-white">Zakelijke website</span>
                  <span className="text-accent font-medium">6-10 weken</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-white">E-commerce / Webshop</span>
                  <span className="text-accent font-medium">10-16 weken</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-white">Custom platform</span>
                  <span className="text-accent font-medium">Op maat</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section id="samenwerking" className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
            >
              Hoe wij samenwerken
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Transparante communicatie en korte lijntjes. Zo werken we het
              liefst.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {collaboration.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl bg-surface p-6 border border-white/5 text-center"
              >
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
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
            Klaar om te starten?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-lg mb-8"
          >
            Plan een vrijblijvend kennismakingsgesprek en ontdek hoe wij jouw
            project kunnen realiseren.
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
                Plan een gesprek
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
