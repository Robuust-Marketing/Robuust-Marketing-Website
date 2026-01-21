"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Palette,
  Smartphone,
  MousePointer2,
  Eye,
  Layers,
  Sparkles,
  ArrowRight,
  Check,
} from "lucide-react";

const designServices = [
  {
    icon: Palette,
    title: "Custom Webdesign",
    description:
      "Geen templates, maar op maat gemaakte designs die perfect aansluiten bij jouw merk en doelgroep.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Jouw website ziet er perfect uit op elk apparaat - van smartphone tot desktop.",
  },
  {
    icon: MousePointer2,
    title: "UI/UX Optimalisatie",
    description:
      "Intuïtieve interfaces die bezoekers moeiteloos door jouw website leiden.",
  },
  {
    icon: Eye,
    title: "Visuele Hiërarchie",
    description:
      "Strategische plaatsing van elementen om de aandacht te sturen naar wat belangrijk is.",
  },
  {
    icon: Layers,
    title: "Design Systems",
    description:
      "Consistente componenten en patronen voor een herkenbare look across alle pagina's.",
  },
  {
    icon: Sparkles,
    title: "Micro-interacties",
    description:
      "Subtiele animaties en hover-effecten die jouw website tot leven brengen.",
  },
];

const process = [
  {
    step: "01",
    title: "Briefing & Research",
    description:
      "We duiken in jouw merk, doelgroep en concurrentie om een solide fundament te leggen.",
  },
  {
    step: "02",
    title: "Concept & Wireframes",
    description:
      "Schematische schetsen van de structuur en user flow voordat we aan het visuele design beginnen.",
  },
  {
    step: "03",
    title: "Visueel Design",
    description:
      "Het concept wordt uitgewerkt tot een volledig design met kleuren, typografie en beeldmateriaal.",
  },
  {
    step: "04",
    title: "Feedback & Iteratie",
    description:
      "Samen verfijnen we het design tot het perfect aansluit bij jouw verwachtingen.",
  },
];

const benefits = [
  "Unieke uitstraling die je onderscheidt van concurrenten",
  "Hogere conversieratio's door doordachte UX",
  "Consistente merkbeleving op alle touchpoints",
  "Toekomstbestendig design dat meegroeit met je bedrijf",
  "Snellere laadtijden door geoptimaliseerde assets",
  "Toegankelijk design voor alle gebruikers",
];

export default function DesignPage() {
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
            <Palette className="h-8 w-8" />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-4"
          >
            Webdesign
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Design dat
            <br />
            <span className="text-gradient-accent">converteert</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg mb-8"
          >
            Op maat gemaakte UI/UX design die jouw merkidentiteit vastlegt en
            bezoekers omzet in klanten. Geen templates, maar uniek design dat
            past bij jouw visie.
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
                Start jouw project
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
              Onze Design Diensten
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Van eerste concept tot pixel-perfect uitwerking
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designServices.map((service, index) => (
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

      {/* Process Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
            >
              Ons Design Proces
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Van idee tot pixel-perfect design in vier stappen
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-6xl font-bold text-accent/20 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
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

      {/* Benefits Section */}
      <section className="py-20 bg-surface/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Waarom kiezen voor{" "}
                <span className="text-gradient-accent">custom design?</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Een template kan snel en goedkoop zijn, maar het vertelt niet
                jouw verhaal. Custom design zorgt ervoor dat elke pixel werkt
                voor jouw doelen en merk.
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
                Design & Development
              </h3>
              <p className="text-muted-foreground mb-6">
                Bij Robuust combineren we design en development onder één dak.
                Dit betekent dat jouw design niet alleen mooi is, maar ook
                technisch haalbaar en optimaal geïmplementeerd wordt.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-sm text-accent">
                  <Check className="h-4 w-4" />
                  Directe communicatie tussen designers en developers
                </li>
                <li className="flex items-center gap-2 text-sm text-accent">
                  <Check className="h-4 w-4" />
                  Design dat rekening houdt met technische mogelijkheden
                </li>
                <li className="flex items-center gap-2 text-sm text-accent">
                  <Check className="h-4 w-4" />
                  Snellere doorlooptijd van concept tot livegang
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
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-white mb-6"
          >
            Klaar om jouw merk tot leven te brengen?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-lg mb-8"
          >
            Laten we samen een design creëren dat niet alleen mooi is, maar ook
            converteert.
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
