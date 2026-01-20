"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Handshake, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const partners = [
  {
    id: "hello-its-me",
    name: "Hello Its Me",
    category: "Online Marketing",
    description:
      "Onze marketing partner voor Meta, TikTok en Google Ads. Samen zorgen we voor een complete digitale strategie van website tot advertenties.",
    expertise: ["Meta Ads", "Google Ads", "TikTok Ads", "Performance Marketing"],
    website: "https://helloitsme.nl",
  },
  {
    id: "taggrs",
    name: "Taggrs",
    category: "First-Party Tracking",
    description:
      "Server-side tracking oplossingen voor nauwkeurige data en betere privacy compliance. Wij zijn gecertificeerd implementatiepartner.",
    expertise: [
      "Server-side GTM",
      "First-party data",
      "Privacy-first tracking",
      "Cookieless solutions",
    ],
    website: "https://taggrs.io",
  },
  {
    id: "cloudflare",
    name: "Cloudflare",
    category: "CDN & Security",
    description:
      "Enterprise-grade beveiliging en performance voor al onze hosting klanten. DDoS bescherming, CDN en meer.",
    expertise: ["CDN", "DDoS Protection", "WAF", "SSL/TLS"],
    website: "https://cloudflare.com",
  },
  {
    id: "hetzner",
    name: "Hetzner",
    category: "Infrastructure",
    description:
      "Betrouwbare dedicated servers in Duitsland en Finland. Europese hosting voor optimale privacy en snelheid.",
    expertise: [
      "Dedicated Servers",
      "EU Hosting",
      "AVG-compliant",
      "High Performance",
    ],
    website: "https://hetzner.com",
  },
];

const benefits = [
  {
    icon: Handshake,
    title: "Vertrouwde relaties",
    description:
      "Jarenlange samenwerkingen met bewezen partners die dezelfde kwaliteitseisen hanteren.",
  },
  {
    icon: Users,
    title: "Gecombineerde expertise",
    description:
      "Toegang tot specialistische kennis zonder dat jij meerdere bureaus hoeft te managen.",
  },
  {
    icon: Zap,
    title: "Gestroomlijnde processen",
    description:
      "Efficiënte workflows tussen partners voor snellere oplevering en betere resultaten.",
  },
];

export default function PartnersPage() {
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
            Partners
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Sterker door
            <br />
            <span className="text-gradient-accent">samenwerking</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            Wij werken samen met gespecialiseerde partners om jou de beste
            oplossingen te bieden. Van marketing tot infrastructuur, elk aspect
            wordt afgedekt door experts.
          </motion.p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl bg-surface p-6 border border-white/5 text-center"
              >
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group rounded-3xl bg-surface p-8 border border-white/5 hover:border-white/10 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-accent text-xs font-medium uppercase tracking-wider">
                      {partner.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-1">
                      {partner.name}
                    </h3>
                  </div>
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>

                <p className="text-muted-foreground mb-6">
                  {partner.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {partner.expertise.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent"
                    >
                      {item}
                    </span>
                  ))}
                </div>
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
            Partner worden?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-lg mb-8"
          >
            Ben je gespecialiseerd in een complementaire dienst en zoek je een
            betrouwbare webpartner? Laten we praten.
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
