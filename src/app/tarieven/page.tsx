"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  HelpCircle,
  Zap,
  Shield,
  Clock,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { packages } from "@/data/packages";
import { getFAQsByCategory } from "@/data/faqs";

const tarievenFaqs = getFAQsByCategory("tarieven");

const hostingPlans = [
  {
    name: "Basis",
    price: "€49",
    period: "/maand",
    description: "Voor kleine websites met beperkt verkeer",
    features: [
      "1 website",
      "10 GB opslag",
      "Onbeperkt bandbreedte",
      "SSL certificaat",
      "Dagelijkse backups",
      "Email support",
    ],
  },
  {
    name: "Professional",
    price: "€99",
    period: "/maand",
    description: "Voor bedrijven met meerdere websites",
    features: [
      "5 websites",
      "50 GB opslag",
      "Onbeperkt bandbreedte",
      "SSL certificaten",
      "Dagelijkse backups",
      "Prioriteit support",
      "Staging omgeving",
      "Performance monitoring",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Op maat",
    period: "",
    description: "Voor high-traffic en complexe omgevingen",
    features: [
      "Onbeperkt websites",
      "Onbeperkt opslag",
      "Dedicated resources",
      "99.99% uptime SLA",
      "24/7 support",
      "Custom infrastructuur",
      "Load balancing",
      "DDoS protection",
    ],
  },
];


export default function TarievenPage() {
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
            Tarieven
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Transparante{" "}
            <span className="text-gradient-accent">prijzen</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            Geen verrassingen, geen kleine lettertjes. Bekijk onze pakketten en
            kies wat bij je past.
          </motion.p>
        </div>
      </section>

      {/* Trust indicators */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Zap className="h-4 w-4 text-accent" />
              Snelle oplevering
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="h-4 w-4 text-accent" />
              Geen verborgen kosten
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4 text-accent" />
              Flexibele betalingen
            </div>
          </motion.div>
        </div>
      </section>

      {/* Website Packages */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Website pakketten
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Kies het pakket dat past bij jouw ambities en budget
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-2xl p-8 border ${
                  pkg.popular
                    ? "bg-accent/5 border-accent/30"
                    : "bg-surface border-white/5"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-accent text-white text-xs font-medium">
                      <Star className="h-3 w-3" />
                      Meest gekozen
                    </span>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">{pkg.tagline}</p>
                </div>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-white">
                    {pkg.price}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mb-6">
                  {pkg.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-white text-sm"
                    >
                      <Check className="h-4 w-4 text-accent flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className={`w-full ${
                    pkg.popular
                      ? "bg-accent hover:bg-accent-hover text-white"
                      : "bg-white/10 hover:bg-white/20 text-white"
                  }`}
                >
                  <Link href="/offerte" className="flex items-center gap-2">
                    Offerte aanvragen
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hosting Plans */}
      <section className="py-20 bg-surface/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Hosting & Onderhoud
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Betrouwbare hosting met premium support en onderhoud
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hostingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-2xl p-8 border ${
                  plan.popular
                    ? "bg-accent/5 border-accent/30"
                    : "bg-surface border-white/5"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-accent text-white text-xs font-medium">
                      <Star className="h-3 w-3" />
                      Populair
                    </span>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {plan.description}
                  </p>
                </div>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-white">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-white text-sm"
                    >
                      <Check className="h-4 w-4 text-accent flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-white/20 text-white hover:bg-white/5"
                >
                  <Link href="/contact">Meer info</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Losse diensten
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Aanvullende diensten op uurbasis of projectbasis
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Ontwikkeling", price: "€95/uur", desc: "Custom development" },
              { name: "Design", price: "€85/uur", desc: "UI/UX design werk" },
              { name: "Consultancy", price: "€125/uur", desc: "Strategisch advies" },
              { name: "SEO audit", price: "Vanaf €500", desc: "Complete analyse" },
            ].map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl bg-surface p-6 border border-white/5 text-center"
              >
                <h3 className="text-lg font-semibold text-white mb-1">
                  {service.name}
                </h3>
                <p className="text-2xl font-bold text-accent mb-2">
                  {service.price}
                </p>
                <p className="text-sm text-muted-foreground">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-surface/50">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Veelgestelde vragen
            </h2>
          </motion.div>

          <div className="space-y-4">
            {tarievenFaqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl bg-surface p-6 border border-white/5"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-white font-medium mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground text-sm">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-white mb-6"
          >
            Niet gevonden wat je zocht?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-lg mb-8"
          >
            Elk project is uniek. Neem contact op voor een offerte op maat.
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
              <Link href="/offerte" className="flex items-center gap-2">
                Offerte aanvragen
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/5"
            >
              <Link href="/contact">Neem contact op</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
