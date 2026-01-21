"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Megaphone,
  Target,
  TrendingUp,
  Users,
  RefreshCcw,
  BarChart3,
  ArrowRight,
  Check,
} from "lucide-react";

const platforms = [
  {
    name: "Google Ads",
    description: "Search, Display en Shopping campagnes voor directe zichtbaarheid",
    icon: "🔍",
  },
  {
    name: "Meta Ads",
    description: "Facebook en Instagram advertenties met geavanceerde targeting",
    icon: "📱",
  },
  {
    name: "TikTok Ads",
    description: "Bereik de jongere doelgroep met video-first advertising",
    icon: "🎵",
  },
  {
    name: "LinkedIn Ads",
    description: "B2B marketing en lead generation voor zakelijke doelgroepen",
    icon: "💼",
  },
];

const services = [
  {
    icon: Target,
    title: "Doelgroep Targeting",
    description:
      "Bereik precies de juiste mensen op basis van demografie, interesses, gedrag en zoekintentie.",
  },
  {
    icon: TrendingUp,
    title: "Performance Optimalisatie",
    description:
      "Continue A/B testing en optimalisatie voor maximale ROI op je advertentie-uitgaven.",
  },
  {
    icon: Users,
    title: "Lookalike Audiences",
    description:
      "Vind nieuwe klanten die lijken op je beste bestaande klanten.",
  },
  {
    icon: RefreshCcw,
    title: "Remarketing",
    description:
      "Herinner websitebezoekers aan je producten en converteer ze alsnog.",
  },
  {
    icon: BarChart3,
    title: "Rapportage & Inzichten",
    description:
      "Maandelijkse rapportages met duidelijke KPI's en actionable insights.",
  },
  {
    icon: Megaphone,
    title: "Campagne Strategie",
    description:
      "Full-funnel aanpak van awareness tot conversie, afgestemd op jouw doelen.",
  },
];

const process = [
  {
    step: "01",
    title: "Analyse & Strategie",
    description:
      "We analyseren je markt, concurrentie en doelgroep om een winnende strategie te bepalen.",
  },
  {
    step: "02",
    title: "Campagne Setup",
    description:
      "We bouwen je campagnes op met de juiste structuur, targeting en advertenties.",
  },
  {
    step: "03",
    title: "Launch & Monitor",
    description:
      "Na de lancering monitoren we dagelijks de prestaties en grijpen direct in waar nodig.",
  },
  {
    step: "04",
    title: "Optimaliseer & Schaal",
    description:
      "Op basis van data optimaliseren we continu en schalen we wat werkt.",
  },
];

export default function OnlineMarketingPage() {
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
            <Megaphone className="h-8 w-8" />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-4"
          >
            Online Marketing
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Adverteren dat
            <br />
            <span className="text-gradient-accent">rendeert</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg mb-8"
          >
            Full-stack digital marketing op Google, Meta, TikTok en LinkedIn.
            Van strategie tot uitvoering, wij zorgen voor meetbaar resultaat.
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
                Gratis marketing scan
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

      {/* Platforms Grid */}
      <section className="py-20 bg-surface/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
            >
              Adverteer waar je klanten zijn
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              We beheren campagnes op alle grote platforms
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl bg-surface p-6 border border-white/5 hover:border-accent/30 transition-colors text-center"
              >
                <div className="text-4xl mb-4">{platform.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {platform.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {platform.description}
                </p>
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
              Wat we doen
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Complete campagnebeheer van A tot Z
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
      <section className="py-20 bg-surface/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
            >
              Onze Aanpak
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Data-driven marketing in vier stappen
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

      {/* Partner Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Samenwerking met{" "}
                <span className="text-gradient-accent">Hello Its Me</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Voor gespecialiseerde paid advertising werken we samen met Hello
                Its Me, experts in performance marketing. Samen zorgen we voor
                een naadloze integratie tussen je website en advertenties.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-white/80">
                    Google Partner gecertificeerd
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-white/80">
                    Meta Business Partner
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-white/80">
                    Bewezen track record met 100+ klanten
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-gradient-to-br from-accent/20 to-accent/5 p-8 border border-accent/20"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Waarom dit werkt
              </h3>
              <p className="text-muted-foreground mb-6">
                Door de samenwerking tussen Robuust (website & tracking) en
                Hello Its Me (advertising) krijg je het beste van twee werelden:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-sm text-white">
                  <Check className="h-4 w-4 text-accent" />
                  Perfecte afstemming tussen landing pages en advertenties
                </li>
                <li className="flex items-center gap-2 text-sm text-white">
                  <Check className="h-4 w-4 text-accent" />
                  Nauwkeurige tracking en conversie attributie
                </li>
                <li className="flex items-center gap-2 text-sm text-white">
                  <Check className="h-4 w-4 text-accent" />
                  Snelle iteratie en optimalisatie
                </li>
                <li className="flex items-center gap-2 text-sm text-white">
                  <Check className="h-4 w-4 text-accent" />
                  Één aanspreekpunt voor al je online marketing
                </li>
              </ul>
              <Button
                asChild
                className="w-full bg-accent hover:bg-accent-hover text-white"
              >
                <Link href="/contact">Vraag een gratis scan aan →</Link>
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
            Klaar om te groeien?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-lg mb-8"
          >
            Vraag een gratis marketing scan aan en ontdek je groeikansen.
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
                Gratis scan aanvragen
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
