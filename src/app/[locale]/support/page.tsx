"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  HelpCircle,
  MessageCircle,
  Mail,
  Phone,
  Book,
  Wrench,
  Shield,
  Clock,
  FileText,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { getFAQsByCategories, categoryLabels } from "@/data/faqs";

// Group FAQs by their first matching category for display
const supportFaqCategories = ["hosting", "betalingen", "technisch"];
const supportFaqs = getFAQsByCategories(supportFaqCategories);

// Group FAQs by category for display
const groupedFaqs = supportFaqCategories.map((category) => ({
  category: categoryLabels[category] || category,
  questions: supportFaqs
    .filter((faq) => faq.categories.includes(category))
    .map((faq) => ({ id: faq.id, q: faq.question, a: faq.answer })),
})).filter((group) => group.questions.length > 0);

const supportOptions = [
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Direct antwoord op je vragen via onze chat.",
    action: "Start chat",
    href: "#chat",
    available: "Ma-Vr 9:00-17:00",
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Stuur ons een email en we reageren binnen 24 uur.",
    action: "support@robuustmarketing.nl",
    href: "mailto:support@robuustmarketing.nl",
    available: "24/7",
  },
  {
    icon: Phone,
    title: "Telefonisch",
    description: "Bel ons voor dringende zaken of complexe vragen.",
    action: "+31 85 060 48 77",
    href: "tel:+31850604877",
    available: "Ma-Vr 9:00-17:00",
  },
];

const resources = [
  {
    icon: Book,
    title: "Kennisbank",
    description: "Handleidingen en tutorials voor veelvoorkomende taken.",
    href: "/kennisbank",
  },
  {
    icon: FileText,
    title: "Documentatie",
    description: "Technische documentatie voor developers.",
    href: "/docs",
  },
  {
    icon: Wrench,
    title: "Status Pagina",
    description: "Check de status van onze diensten.",
    href: "https://status.robuustmarketing.nl",
    external: true,
  },
];

export default function SupportPage() {
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
            Support
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Hoe kunnen we{" "}
            <span className="text-gradient-accent">helpen?</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            Heb je een vraag of probleem? We staan voor je klaar. Kies hieronder
            hoe je contact wilt opnemen.
          </motion.p>
        </div>
      </section>

      {/* SLA Info */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4 text-accent" />
              Reactie binnen 24 uur
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="h-4 w-4 text-accent" />
              99.9% uptime garantie
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Wrench className="h-4 w-4 text-accent" />
              Proactief onderhoud
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl bg-surface p-6 border border-white/5 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <option.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {option.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {option.description}
                </p>
                <p className="text-xs text-muted-foreground mb-4">
                  Beschikbaar: {option.available}
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/5"
                >
                  <a href={option.href}>{option.action}</a>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-surface/50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Veelgestelde vragen
            </h2>
            <p className="text-muted-foreground">
              Misschien staat het antwoord op je vraag hier al
            </p>
          </motion.div>

          <div className="space-y-8">
            {groupedFaqs.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <h3 className="text-lg font-semibold text-accent mb-4">
                  {category.category}
                </h3>
                <div className="space-y-3">
                  {category.questions.map((faq) => (
                    <div
                      key={faq.id}
                      className="rounded-xl bg-surface p-5 border border-white/5"
                    >
                      <div className="flex items-start gap-3">
                        <HelpCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-white font-medium mb-2">
                            {faq.q}
                          </h4>
                          <p className="text-muted-foreground text-sm">
                            {faq.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Handige bronnen
            </h2>
            <p className="text-muted-foreground">
              Zelf aan de slag? Bekijk onze documentatie en handleidingen
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={resource.href}
                  target={resource.external ? "_blank" : undefined}
                  rel={resource.external ? "noopener noreferrer" : undefined}
                  className="block rounded-xl bg-surface p-6 border border-white/5 hover:border-accent/30 transition-colors group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <resource.icon className="h-6 w-6 text-accent" />
                    </div>
                    {resource.external && (
                      <ExternalLink className="h-4 w-4 text-muted-foreground" />
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-accent transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {resource.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-surface/50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-accent/5 border border-accent/20 p-8 text-center"
          >
            <Shield className="h-12 w-12 text-accent mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-4">
              Spoedeisende problemen?
            </h2>
            <p className="text-muted-foreground mb-6">
              Bij kritieke storingen of beveiligingsincidenten kun je ons 24/7
              bereiken via onze spoedlijn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent-hover text-white"
              >
                <a
                  href="tel:+31850604877"
                  className="flex items-center gap-2"
                >
                  <Phone className="h-4 w-4" />
                  Bel spoedlijn
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/5"
              >
                <a href="mailto:urgent@robuustmarketing.nl">
                  Mail urgent@robuustmarketing.nl
                </a>
              </Button>
            </div>
          </motion.div>
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
            Vraag niet gevonden?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-lg mb-8"
          >
            Neem gerust contact met ons op. We helpen je graag verder.
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
                Neem contact op
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
