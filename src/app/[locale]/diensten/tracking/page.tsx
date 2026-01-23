"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  Target,
  Cookie,
  Server,
  LineChart,
  ShoppingCart,
  ArrowRight,
  Check,
  AlertTriangle,
} from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "GA4 Setup & Configuratie",
    description:
      "Volledige Google Analytics 4 implementatie met custom events, conversies en doelgroepen.",
  },
  {
    icon: Target,
    title: "Meta Pixel",
    description:
      "Facebook en Instagram pixel installatie voor advertentie tracking en remarketing doelgroepen.",
  },
  {
    icon: Server,
    title: "Server-Side Tracking",
    description:
      "First-party tracking via Taggrs voor nauwkeurige data ondanks ad blockers en iOS beperkingen.",
  },
  {
    icon: LineChart,
    title: "Conversie Tracking",
    description:
      "Meet wat echt telt: offerteaanvragen, aankopen, telefoongesprekken en formulierinzendingen.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Tracking",
    description:
      "Complete productprestaties: views, add-to-carts, checkout stappen en transacties.",
  },
  {
    icon: Cookie,
    title: "GDPR-Compliant Setup",
    description:
      "Cookiebanner integratie met consent mode voor privacy-vriendelijke tracking.",
  },
];

const trackingIssues = [
  {
    issue: "iOS 14+ beperkingen",
    impact: "30-50% data verlies",
    solution: "Server-side tracking omzeilt deze limitaties",
  },
  {
    issue: "Ad blockers",
    impact: "25-40% gemiste bezoekers",
    solution: "First-party data via eigen domein",
  },
  {
    issue: "Cookie consent",
    impact: "Incomplete conversiedata",
    solution: "Consent mode met modellering",
  },
  {
    issue: "Cross-device tracking",
    impact: "Onvolledige klantreis",
    solution: "User-ID tracking en Google Signals",
  },
];

const benefits = [
  "Nauwkeurige data voor betere beslissingen",
  "Hogere ROI op advertentie-uitgaven",
  "Inzicht in de complete klantreis",
  "Privacy-compliant volgens AVG/GDPR",
  "Betere remarketing doelgroepen",
  "Data-gedreven optimalisatie",
];

export default function TrackingPage() {
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
            <BarChart3 className="h-8 w-8" />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-4"
          >
            Tracking & Analytics
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Data die je
            <br />
            <span className="text-gradient-accent">kunt vertrouwen</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg mb-8"
          >
            Geavanceerde analytics met GA4, Meta Pixel en first-party tracking
            via Taggrs. Meet wat telt, ondanks ad blockers en privacy
            restricties.
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
                Tracking audit aanvragen
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/5"
            >
              <Link href="/diensten/online-marketing">Online Marketing</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-surface/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-red-500/10 text-red-400 px-4 py-2 rounded-full mb-4"
            >
              <AlertTriangle className="h-4 w-4" />
              <span className="text-sm font-medium">Het tracking probleem</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
            >
              Standaard tracking mist tot 50% van je data
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Privacy updates, ad blockers en cookie restricties maken
              traditionele tracking steeds onbetrouwbaarder
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trackingIssues.map((item, index) => (
              <motion.div
                key={item.issue}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl bg-surface p-6 border border-white/5"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-white">
                    {item.issue}
                  </h3>
                  <span className="text-sm font-medium text-red-400 bg-red-500/10 px-2 py-1 rounded">
                    {item.impact}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">
                    <span className="text-white font-medium">Onze oplossing:</span>{" "}
                    {item.solution}
                  </p>
                </div>
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
              Onze Tracking Diensten
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Complete analytics setup voor betrouwbare inzichten
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
                Waarom{" "}
                <span className="text-gradient-accent">
                  professionele tracking?
                </span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Goede data is de basis van elke succesvolle marketingstrategie.
                Zonder betrouwbare tracking vlieg je blind.
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
                Server-Side Tracking met Taggrs
              </h3>
              <p className="text-muted-foreground mb-6">
                Taggrs is onze partner voor server-side tracking. Door data via
                jouw eigen server te versturen in plaats van de browser, omzeil
                je de beperkingen van ad blockers en privacy updates.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-sm text-accent">
                  <Check className="h-4 w-4" />
                  First-party cookies via jouw domein
                </li>
                <li className="flex items-center gap-2 text-sm text-accent">
                  <Check className="h-4 w-4" />
                  Niet geblokkeerd door ad blockers
                </li>
                <li className="flex items-center gap-2 text-sm text-accent">
                  <Check className="h-4 w-4" />
                  Volledige controle over je data
                </li>
              </ul>
              <Button
                asChild
                className="w-full bg-accent hover:bg-accent-hover text-white"
              >
                <Link href="/contact">Meer weten over Taggrs →</Link>
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
            Klaar voor betrouwbare data?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-lg mb-8"
          >
            Laat ons je huidige tracking setup auditen en ontdek waar je data
            mist.
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
                Gratis tracking audit
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
