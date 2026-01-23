"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Zap,
  Users,
  BarChart3,
  Clock,
  Target,
  ArrowRight,
  Check,
} from "lucide-react";

const services = [
  {
    icon: Mail,
    title: "Email Campagnes",
    description:
      "Professioneel ontworpen nieuwsbrieven en promotionele emails die opvallen in de inbox.",
  },
  {
    icon: Zap,
    title: "Marketing Automatisering",
    description:
      "Welkomstreeksen, verlaten winkelwagen flows en gepersonaliseerde customer journeys.",
  },
  {
    icon: Users,
    title: "Lijst Segmentatie",
    description:
      "Verdeel je contacten in doelgroepen voor relevantere, persoonlijkere communicatie.",
  },
  {
    icon: BarChart3,
    title: "A/B Testing",
    description:
      "Test onderwerpregels, content en verzendtijden om je resultaten continu te verbeteren.",
  },
  {
    icon: Clock,
    title: "Optimale Verzendtijden",
    description:
      "AI-gestuurde verzendtijd optimalisatie voor maximale open rates.",
  },
  {
    icon: Target,
    title: "Personalisatie",
    description:
      "Dynamische content op basis van gedrag, voorkeuren en aankoopgeschiedenis.",
  },
];

const automations = [
  {
    name: "Welkomstreeks",
    description: "Automatisch nieuwe subscribers onboarden met een serie introductiemails",
    emails: "3-5 emails",
  },
  {
    name: "Verlaten Winkelwagen",
    description: "Herinner klanten aan producten die ze achterlieten in hun winkelwagen",
    emails: "2-3 emails",
  },
  {
    name: "Post-Purchase Flow",
    description: "Bedank klanten, vraag reviews en stimuleer herhaalaankopen",
    emails: "3-4 emails",
  },
  {
    name: "Re-engagement",
    description: "Win inactieve subscribers terug met speciale aanbiedingen",
    emails: "2-3 emails",
  },
];

const stats = [
  { value: "€36", label: "ROI per €1 uitgegeven", subtext: "Gemiddeld" },
  { value: "4x", label: "Meer conversies", subtext: "vs. social media" },
  { value: "99%", label: "Deliverability", subtext: "Bij juiste setup" },
];

export default function EmailMarketingPage() {
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
            <Mail className="h-8 w-8" />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-4"
          >
            Email Marketing
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Emails die
            <br />
            <span className="text-gradient-accent">converteren</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg mb-8"
          >
            Van nieuwsbrieven tot geautomatiseerde flows. Effectieve email
            campagnes die relaties bouwen en omzet genereren.
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
                Start met email marketing
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/5"
            >
              <Link href="/diensten/crm">CRM Integraties</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-surface/50 border-y border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-accent mb-1">
                  {stat.value}
                </div>
                <div className="text-white font-medium">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.subtext}</div>
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
              Onze Email Diensten
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Alles wat je nodig hebt voor succesvolle email marketing
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

      {/* Automations Section */}
      <section className="py-20 bg-surface/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
            >
              Email Automatiseringen
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Zet je email marketing op de automatische piloot
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {automations.map((automation, index) => (
              <motion.div
                key={automation.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl bg-surface p-6 border border-white/5"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-white">
                    {automation.name}
                  </h3>
                  <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded">
                    {automation.emails}
                  </span>
                </div>
                <p className="text-muted-foreground">
                  {automation.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Email Section */}
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
                <span className="text-gradient-accent">email marketing?</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                In tegenstelling tot social media, heb je volledige controle
                over je email lijst. Geen algoritmes die bepalen of je bericht
                wel of niet gezien wordt.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-white/80">
                    Direct contact met je doelgroep, zonder tussenkomst van algoritmes
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-white/80">
                    Hoogste ROI van alle marketingkanalen (€36 per €1)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-white/80">
                    Volledig meetbaar: open rates, click rates, conversies
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-white/80">
                    Schaalbaar: bereik duizenden mensen met één klik
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
                Platforms waar we mee werken
              </h3>
              <p className="text-muted-foreground mb-6">
                We werken met de beste email marketing platforms en kiezen
                samen met jou de beste optie voor jouw situatie.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-sm text-white">
                  <Check className="h-4 w-4 text-accent" />
                  Mailchimp - Gebruiksvriendelijk en breed inzetbaar
                </li>
                <li className="flex items-center gap-2 text-sm text-white">
                  <Check className="h-4 w-4 text-accent" />
                  Klaviyo - Krachtig voor e-commerce
                </li>
                <li className="flex items-center gap-2 text-sm text-white">
                  <Check className="h-4 w-4 text-accent" />
                  ActiveCampaign - Geavanceerde automatisering
                </li>
                <li className="flex items-center gap-2 text-sm text-white">
                  <Check className="h-4 w-4 text-accent" />
                  Brevo (Sendinblue) - Betaalbaar en compleet
                </li>
              </ul>
              <Button
                asChild
                className="w-full bg-accent hover:bg-accent-hover text-white"
              >
                <Link href="/contact">Advies over jouw situatie →</Link>
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
            Klaar om je inbox te domineren?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-lg mb-8"
          >
            Laten we samen een email strategie ontwikkelen die resultaat oplevert.
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
