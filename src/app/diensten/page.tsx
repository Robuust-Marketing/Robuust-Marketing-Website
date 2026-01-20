"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Palette,
  Code2,
  Server,
  Wrench,
  BarChart3,
  Mail,
  Megaphone,
  Fingerprint,
  Search,
  Users,
  ArrowRight,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "design",
    name: "Design",
    icon: Palette,
    description:
      "Op maat gemaakte UI/UX design die jouw merkidentiteit vastlegt en bezoekers omzet in klanten.",
    features: ["Custom webdesign", "UI/UX optimalisatie", "Brand identity", "Responsive design"],
    href: "/diensten#design",
  },
  {
    id: "development",
    name: "Development",
    icon: Code2,
    description:
      "Moderne websites gebouwd met React, Next.js en TypeScript voor razendsnelle performance.",
    features: ["Next.js & React", "TypeScript", "Headless CMS", "API integraties"],
    href: "/diensten#development",
  },
  {
    id: "hosting",
    name: "Hosting",
    icon: Server,
    description:
      "Enterprise-grade infrastructuur met NGINX en Cloudflare op dedicated servers in Europa.",
    features: ["Dedicated servers", "99.9% uptime", "SSL certificaten", "CDN & caching"],
    href: "/diensten#hosting",
  },
  {
    id: "maintenance",
    name: "Onderhoud",
    icon: Wrench,
    description:
      "Proactief website onderhoud met waterdichte SLA's. Van updates tot security monitoring.",
    features: ["Plugin updates", "Security monitoring", "Backups", "Performance checks"],
    href: "/diensten/onderhoud",
  },
  {
    id: "tracking",
    name: "Tracking & Analytics",
    icon: BarChart3,
    description:
      "Geavanceerde analytics met GA4, Meta Pixel en first-party tracking via Taggrs.",
    features: ["GA4 setup", "Meta Pixel", "First-party tracking", "Conversie tracking"],
    href: "/diensten#tracking",
  },
  {
    id: "email-marketing",
    name: "Email Marketing",
    icon: Mail,
    description:
      "Effectieve email campagnes die converteren. Van nieuwsbrieven tot geautomatiseerde flows.",
    features: ["Email campagnes", "Automatisering", "A/B testing", "Segmentatie"],
    href: "/diensten#email-marketing",
  },
  {
    id: "online-marketing",
    name: "Online Marketing",
    icon: Megaphone,
    description:
      "Full-stack digital marketing inclusief Meta, TikTok en Google Ads via Hello Its Me.",
    features: ["Google Ads", "Meta Ads", "TikTok Ads", "Remarketing"],
    href: "/diensten#online-marketing",
  },
  {
    id: "branding",
    name: "Branding",
    icon: Fingerprint,
    description:
      "Sterke merkidentiteit die blijft hangen. Van logo tot complete brand guidelines.",
    features: ["Logo design", "Brand guidelines", "Huisstijl", "Visual identity"],
    href: "/diensten#branding",
  },
  {
    id: "seo",
    name: "SEO",
    icon: Search,
    description:
      "Organisch beter gevonden worden in Google met technische SEO en content optimalisatie.",
    features: ["Technische SEO", "Content optimalisatie", "Linkbuilding", "Local SEO"],
    href: "/diensten#seo",
  },
  {
    id: "crm",
    name: "CRM",
    icon: Users,
    description:
      "Klantrelaties optimaliseren met slimme CRM integraties en automatiseringen.",
    features: ["CRM setup", "Integraties", "Automatisering", "Lead management"],
    href: "/diensten#crm",
  },
];

const packages = [
  {
    id: "solid-start",
    name: "Solid Start",
    tagline: "Perfect voor starters",
    description:
      "Een professionele website met alles wat je nodig hebt om online zichtbaar te zijn.",
    price: "Vanaf € 2.500",
    features: [
      "Custom design",
      "Responsive website",
      "Basis SEO",
      "Contact formulier",
      "1 jaar hosting inclusief",
    ],
  },
  {
    id: "firm-foundation",
    name: "Firm Foundation",
    tagline: "Voor groeiende bedrijven",
    description:
      "Een complete digitale infrastructuur met geavanceerde functionaliteiten en marketing tools.",
    price: "Vanaf € 7.500",
    features: [
      "Alles van Solid Start",
      "Geavanceerde functionaliteiten",
      "Marketing integraties",
      "Analytics dashboard",
      "Premium support",
    ],
    popular: true,
  },
];

export default function DienstenPage() {
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
            Onze Diensten
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Alles voor jouw
            <br />
            <span className="text-gradient-accent">digitale succes</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            Van design tot development, van hosting tot marketing. Wij leveren
            de complete digitale infrastructuur die jouw bedrijf nodig heeft.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-3xl bg-surface p-6 border border-white/5 hover:border-white/10 transition-all duration-300"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(197, 60, 11, 0.06), transparent 40%)",
                  }}
                />

                <div className="relative z-10">
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors">
                    <service.icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2">
                    {service.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-white/70"
                      >
                        <Check className="h-4 w-4 text-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-accent text-sm font-medium hover:gap-3 transition-all"
                  >
                    Meer info
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="pakketten" className="py-20 bg-surface/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-4"
            >
              Pakketten
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
            >
              Kies jouw fundament
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Start met een stevig fundament. Onze pakketten bieden alles wat je
              nodig hebt voor een succesvolle online aanwezigheid.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                id={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-3xl p-8 ${
                  pkg.popular
                    ? "bg-accent/10 border-2 border-accent"
                    : "bg-surface border border-white/10"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-accent text-white text-xs font-medium px-3 py-1 rounded-full">
                      Populair
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white">{pkg.name}</h3>
                  <p className="text-accent text-sm mt-1">{pkg.tagline}</p>
                </div>

                <p className="text-muted-foreground text-sm mb-6">
                  {pkg.description}
                </p>

                <div className="text-3xl font-bold text-white mb-6">
                  {pkg.price}
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm text-white/80"
                    >
                      <Check className="h-5 w-5 text-accent flex-shrink-0" />
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
                  <Link href="/contact">Offerte aanvragen</Link>
                </Button>
              </motion.div>
            ))}
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
            Niet zeker welke diensten je nodig hebt?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-lg mb-8"
          >
            Plan een vrijblijvend gesprek en we helpen je de juiste keuze te
            maken voor jouw situatie.
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
