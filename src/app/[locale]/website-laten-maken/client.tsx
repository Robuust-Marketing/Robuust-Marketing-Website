"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Zap,
  Shield,
  HeadphonesIcon,
  Rocket,
  PenTool,
  Code,
  Search,
  Clock,
  Star,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const benefits = [
  {
    icon: PenTool,
    title: "Uniek ontwerp",
    description:
      "Geen templates, maar een volledig op maat gemaakt design dat past bij jouw merk en doelgroep.",
  },
  {
    icon: Rocket,
    title: "Razendsnel",
    description:
      "Geoptimaliseerd voor snelheid. Jouw website laadt binnen 2 seconden, wat beter is voor SEO en conversie.",
  },
  {
    icon: Shield,
    title: "Veilig & betrouwbaar",
    description:
      "SSL certificaat, regelmatige backups en proactief onderhoud zorgen voor een veilige website.",
  },
  {
    icon: Search,
    title: "SEO-geoptimaliseerd",
    description:
      "Van technische SEO tot content optimalisatie. Jouw website wordt gebouwd om gevonden te worden.",
  },
  {
    icon: HeadphonesIcon,
    title: "Persoonlijke support",
    description:
      "Direct contact met je vaste contactpersoon. Geen callcenters of lange wachttijden.",
  },
  {
    icon: Code,
    title: "Moderne technologie",
    description:
      "Gebouwd met de nieuwste technologieën voor optimale prestaties en toekomstbestendigheid.",
  },
];

const process = [
  {
    step: "01",
    title: "Kennismaking",
    description:
      "We starten met een vrijblijvend gesprek om jouw wensen, doelen en doelgroep te begrijpen.",
  },
  {
    step: "02",
    title: "Strategie & Design",
    description:
      "Op basis van de briefing maken we een strategie en ontwerpen we jouw website.",
  },
  {
    step: "03",
    title: "Development",
    description:
      "We bouwen jouw website met zorg voor detail, snelheid en gebruiksvriendelijkheid.",
  },
  {
    step: "04",
    title: "Lancering & Support",
    description:
      "Na goedkeuring gaat je website live. We blijven beschikbaar voor vragen en ondersteuning.",
  },
];

const packages = [
  {
    name: "Starter",
    description: "Perfect voor starters en kleine bedrijven",
    features: [
      "Tot 5 pagina's",
      "Responsive design",
      "Contactformulier",
      "Basis SEO",
      "1 revisieronde",
    ],
    highlight: false,
  },
  {
    name: "Professional",
    description: "Meest gekozen voor groeiende bedrijven",
    features: [
      "Tot 10 pagina's",
      "Custom design",
      "Geavanceerde functionaliteiten",
      "Volledige SEO-optimalisatie",
      "3 revisierondes",
      "Google Analytics integratie",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    description: "Voor bedrijven met specifieke wensen",
    features: [
      "Onbeperkt pagina's",
      "Volledig maatwerk",
      "Koppelingen & integraties",
      "E-commerce mogelijkheden",
      "Onbeperkte revisies",
      "Priority support",
    ],
    highlight: false,
  },
];

const faqs = [
  {
    question: "Hoe lang duurt het om een website te laten maken?",
    answer:
      "Dit hangt af van de complexiteit van het project. Een eenvoudige website kan binnen 2-3 weken live zijn, terwijl een uitgebreidere website 4-8 weken kan duren. We bespreken altijd een realistische planning bij de start van het project.",
  },
  {
    question: "Wat kost een website laten maken?",
    answer:
      "De kosten zijn afhankelijk van je wensen en de complexiteit. We werken met transparante prijzen en maken altijd een offerte op maat. Neem contact op voor een vrijblijvende prijsindicatie.",
  },
  {
    question: "Kan ik de website zelf beheren?",
    answer:
      "Ja, we bouwen websites met een gebruiksvriendelijk CMS zodat je zelf eenvoudig teksten en afbeeldingen kunt aanpassen. We geven ook een korte training na oplevering.",
  },
  {
    question: "Wat als ik niet tevreden ben met het ontwerp?",
    answer:
      "We werken in fases en vragen om feedback na elke fase. Daarnaast zijn revisierondes inbegrepen in elk pakket. We stoppen pas als jij tevreden bent.",
  },
  {
    question: "Zorgen jullie ook voor hosting en onderhoud?",
    answer:
      "Ja, we bieden complete hostingpakketten inclusief onderhoud, updates en backups. Zo hoef jij je nergens zorgen over te maken.",
  },
  {
    question: "Wordt mijn website gevonden in Google?",
    answer:
      "We optimaliseren elke website voor zoekmachines (SEO). Dit omvat technische optimalisatie, snelheid en de juiste structuur. Voor uitgebreidere SEO-campagnes bieden we aparte diensten.",
  },
];

export default function WebsiteLatenMakenPageClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-4"
            >
              Website laten maken
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Een professionele website die{" "}
              <span className="text-gradient-accent">resultaat oplevert</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground text-lg mb-8"
            >
              Wij maken websites die niet alleen mooi zijn, maar ook converteren.
              Van ontwerp tot oplevering, we ontzorgen je volledig.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent-hover text-white"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Vraag een offerte aan
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/5"
              >
                <Link href="/portfolio">Bekijk ons werk</Link>
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-white/10"
            >
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-accent text-accent"
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  5.0 gemiddelde beoordeling
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-400" />
                <span className="text-sm text-muted-foreground">
                  100% tevreden klanten
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-accent" />
                <span className="text-sm text-muted-foreground">
                  Snelle oplevering
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-surface/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Waarom een website laten maken bij ons?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Wij combineren creatief design met technische expertise voor
              websites die presteren.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl bg-surface p-6 border border-white/5"
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

      {/* Process */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Hoe werkt het?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              In 4 stappen van idee naar een live website
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-5xl font-bold text-accent/20 mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 right-0 w-1/2 h-px bg-gradient-to-r from-accent/50 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Preview */}
      <section className="py-20 bg-surface/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Onze website pakketten
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Voor elk budget en elke wens hebben we een passend pakket
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-2xl p-8 border ${
                  pkg.highlight
                    ? "bg-gradient-to-br from-accent/10 to-accent/5 border-accent/30"
                    : "bg-surface border-white/5"
                }`}
              >
                {pkg.highlight && (
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-accent text-white rounded-full mb-4">
                    Meest gekozen
                  </span>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">
                  {pkg.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  {pkg.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-white/80"
                    >
                      <Check className="h-4 w-4 text-accent flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className={`w-full ${
                    pkg.highlight
                      ? "bg-accent hover:bg-accent-hover text-white"
                      : "bg-white/10 hover:bg-white/20 text-white"
                  }`}
                >
                  <Link href="/offerte">Vraag offerte aan</Link>
                </Button>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-muted-foreground mt-8"
          >
            Prijzen zijn exclusief BTW en afhankelijk van specifieke wensen.{" "}
            <Link href="/tarieven" className="text-accent hover:underline">
              Bekijk onze tarieven
            </Link>
          </motion.p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Veelgestelde vragen
            </h2>
            <p className="text-muted-foreground">
              Antwoorden op de meest gestelde vragen over website laten maken
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-xl bg-surface border border-white/5 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between"
                >
                  <span className="font-medium text-white">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-muted-foreground transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-muted-foreground text-sm">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
            Neem contact op voor een vrijblijvend gesprek. We bespreken graag
            jouw wensen en mogelijkheden.
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
                Neem contact op
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/5"
            >
              <Link href="tel:+31850604877" className="flex items-center gap-2">
                <Zap className="h-4 w-4" />
                Bel direct
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
