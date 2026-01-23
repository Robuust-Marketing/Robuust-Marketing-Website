"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Fingerprint,
  Palette,
  Type,
  FileText,
  Layers,
  Eye,
  ArrowRight,
  Check,
} from "lucide-react";

const services = [
  {
    icon: Fingerprint,
    title: "Logo Design",
    description:
      "Een uniek logo dat de essentie van je merk vastlegt en overal herkenbaar is.",
  },
  {
    icon: Palette,
    title: "Kleurenpalet",
    description:
      "Zorgvuldig gekozen kleuren die emotie oproepen en je merk onderscheiden.",
  },
  {
    icon: Type,
    title: "Typografie",
    description:
      "Lettertype selectie die past bij je merkpersoonlijkheid en goed leesbaar is.",
  },
  {
    icon: FileText,
    title: "Brand Guidelines",
    description:
      "Een complete handleiding voor consistent merkgebruik door iedereen in je organisatie.",
  },
  {
    icon: Layers,
    title: "Visual Identity",
    description:
      "Grafische elementen, patronen en iconen die je visuele taal completeren.",
  },
  {
    icon: Eye,
    title: "Brand Strategy",
    description:
      "Definieer je merkwaarden, tone of voice en positionering in de markt.",
  },
];

const deliverables = [
  "Logo in alle bestandsformaten (SVG, PNG, PDF)",
  "Primair en secundair kleurenpalet met kleurcodes",
  "Typografie specificaties voor web en print",
  "Do's en don'ts voor merkgebruik",
  "Sociale media templates",
  "Briefpapier en visitekaartje ontwerp",
  "Favicon en app iconen",
  "Brand guidelines document (PDF)",
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We leren je bedrijf kennen: missie, visie, waarden, doelgroep en concurrentie.",
  },
  {
    step: "02",
    title: "Concept",
    description:
      "Op basis van de discovery ontwikkelen we meerdere logo concepten en richtingen.",
  },
  {
    step: "03",
    title: "Ontwikkeling",
    description:
      "Het gekozen concept wordt uitgewerkt tot een complete visuele identiteit.",
  },
  {
    step: "04",
    title: "Oplevering",
    description:
      "Je ontvangt alle bestanden en een brand guidelines document.",
  },
];

export default function BrandingPage() {
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
            <Fingerprint className="h-8 w-8" />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-4"
          >
            Branding
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Een merk dat
            <br />
            <span className="text-gradient-accent">blijft hangen</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg mb-8"
          >
            Van logo tot complete brand guidelines. Een sterke merkidentiteit
            die vertrouwen wekt en je onderscheidt van de concurrentie.
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
                Start je branding traject
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
              Wat omvat branding?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Alle elementen voor een consistente merkbeleving
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
              Het Branding Proces
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Van eerste gesprek tot complete merkidentiteit
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

      {/* Deliverables Section */}
      <section className="py-20 bg-surface/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Wat je{" "}
                <span className="text-gradient-accent">krijgt</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Een compleet brandingpakket met alle bestanden en documentatie
                die je nodig hebt voor consistente merkuitingen.
              </p>
              <ul className="space-y-4">
                {deliverables.map((item, index) => (
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
              <h3 className="text-2xl font-bold text-white mb-4">
                Branding + Website
              </h3>
              <p className="text-muted-foreground mb-6">
                De beste resultaten behaal je als branding en website
                tegelijkertijd worden ontwikkeld. Zo garanderen we een naadloze
                integratie van je merkidentiteit in het webdesign.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-sm text-accent">
                  <Check className="h-4 w-4" />
                  Consistente merkbeleving online en offline
                </li>
                <li className="flex items-center gap-2 text-sm text-accent">
                  <Check className="h-4 w-4" />
                  Efficiënter proces, kortere doorlooptijd
                </li>
                <li className="flex items-center gap-2 text-sm text-accent">
                  <Check className="h-4 w-4" />
                  Bespaar op kosten door bundeling
                </li>
              </ul>
              <Button
                asChild
                className="w-full bg-accent hover:bg-accent-hover text-white"
              >
                <Link href="/diensten/design">Meer over design →</Link>
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
            Klaar om je merk te bouwen?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-lg mb-8"
          >
            Laten we samen een merkidentiteit creëren die je bedrijf naar het
            volgende niveau tilt.
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
