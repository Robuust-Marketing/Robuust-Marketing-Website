"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Server,
  Shield,
  Zap,
  Globe,
  HardDrive,
  Clock,
  ArrowRight,
  Check,
} from "lucide-react";

const features = [
  {
    icon: Server,
    title: "Dedicated Servers",
    description:
      "Geen shared hosting waar je resources deelt met honderden anderen. Jouw website draait op dedicated infrastructuur.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Cloudflare DDoS-protectie, WAF firewall, en automatische SSL-certificaten voor maximale beveiliging.",
  },
  {
    icon: Zap,
    title: "Edge Caching",
    description:
      "Content wordt geserveerd vanaf 200+ locaties wereldwijd via Cloudflare CDN voor minimale latency.",
  },
  {
    icon: Globe,
    title: "Europese Servers",
    description:
      "Datacenters in Europa voor GDPR-compliance en optimale snelheid voor Nederlandse bezoekers.",
  },
  {
    icon: HardDrive,
    title: "Dagelijkse Backups",
    description:
      "Automatische backups met retentie tot 30 dagen. Herstel naar elk gewenst moment.",
  },
  {
    icon: Clock,
    title: "99.9% Uptime",
    description:
      "Gegarandeerde beschikbaarheid met proactieve monitoring en automatisch failover.",
  },
];

const specs = [
  { label: "Uptime Garantie", value: "99.9%" },
  { label: "SSL Certificaat", value: "Inclusief" },
  { label: "CDN Locaties", value: "200+" },
  { label: "Backup Frequentie", value: "Dagelijks" },
  { label: "DDoS Protectie", value: "Inbegrepen" },
  { label: "Support", value: "24/7 Monitoring" },
];

const stackLayers = [
  {
    name: "Cloudflare",
    description: "CDN, DDoS-protectie, WAF",
    color: "from-orange-500/20 to-orange-500/5",
  },
  {
    name: "NGINX",
    description: "Load balancing, reverse proxy",
    color: "from-green-500/20 to-green-500/5",
  },
  {
    name: "Application",
    description: "Next.js, Node.js runtime",
    color: "from-blue-500/20 to-blue-500/5",
  },
  {
    name: "Storage",
    description: "SSD storage, externe backups",
    color: "from-purple-500/20 to-purple-500/5",
  },
];

export default function HostingPage() {
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
            <Server className="h-8 w-8" />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-4"
          >
            Managed Hosting
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Enterprise-grade
            <br />
            <span className="text-gradient-accent">infrastructuur</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg mb-8"
          >
            Dedicated servers met NGINX en Cloudflare op Europese datacenters.
            Geen shared hosting, maar infrastructuur die meegroeit met je
            ambities.
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
                Hosting aanvragen
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/5"
            >
              <Link href="/diensten/onderhoud">Onderhoud & SLA</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Specs Bar */}
      <section className="py-12 bg-surface/50 border-y border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {specs.map((spec, index) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl font-bold text-accent">{spec.value}</div>
                <div className="text-sm text-muted-foreground">{spec.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
            >
              Alles inbegrepen
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Professionele hosting zonder gedoe
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl bg-surface p-6 border border-white/5 hover:border-white/10 transition-colors"
              >
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Visual */}
      <section className="py-20 bg-surface/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Onze{" "}
                <span className="text-gradient-accent">hosting stack</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Een bewezen combinatie van technologieën die samen zorgen voor
                maximale snelheid, veiligheid en betrouwbaarheid.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-white/80">
                    Cloudflare voor wereldwijde content delivery en DDoS-protectie
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-white/80">
                    NGINX als high-performance webserver en load balancer
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-white/80">
                    Automated deployments via Git voor zero-downtime updates
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {stackLayers.map((layer, index) => (
                <motion.div
                  key={layer.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`rounded-2xl bg-gradient-to-r ${layer.color} p-6 border border-white/10`}
                >
                  <h3 className="text-lg font-semibold text-white">
                    {layer.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {layer.description}
                  </p>
                </motion.div>
              ))}
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
            Hosting zonder zorgen
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-lg mb-8"
          >
            Combineer onze hosting met een onderhoudspakket voor complete
            ontzorging. Wij regelen alles, jij focust op je business.
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
              <Link href="/diensten/onderhoud">Bekijk SLA pakketten</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
