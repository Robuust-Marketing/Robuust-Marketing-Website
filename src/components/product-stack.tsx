"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Rocket, Shield, Check, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const solidStartFeatures = [
  "Splash screen / One-pager direct live",
  "Directe compliance & Security setup",
  "First-party Analytics (AVG-proof)",
  "Optie: WooCommerce + Funnelkit",
];

const firmFoundationFeatures = [
  "Volledige Security Audit & Brand Protection",
  "Dedicated High-Performance Hosting (DE/FI)",
  "Onderhoud met harde SLA garanties",
  "Low-level CRM & Marketing Suite integraties",
];

export function ProductStack() {
  return (
    <section id="pakketten" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px]"
          style={{
            background: "radial-gradient(ellipse, rgba(197, 60, 11, 0.05) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-4"
          >
            The Product Stack
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Kies uw <span className="text-gradient-accent">fundament</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            Twee bewezen pakketten voor verschillende groeifases. Elk met waterdichte SLA&apos;s.
          </motion.p>
        </div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Solid Start */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8 }}
            className="relative group"
          >
            <div className="glass rounded-3xl p-8 sm:p-10 h-full border-white/10 hover:border-white/20 transition-all duration-300">
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <Rocket className="w-7 h-7 text-accent" />
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Solid Start</h3>
              <p className="text-muted-foreground mb-6">
                Voor de ambitieuze starter & spin-off.
              </p>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {solidStartFeatures.map((feature, index) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <Check className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <span className="text-white/80">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Price & CTA */}
              <div className="pt-6 border-t border-white/10">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-bold text-white">Vanaf</span>
                  <span className="text-4xl font-bold text-accent">€1.500</span>
                </div>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full border-white/20 text-white hover:bg-white/5 hover:border-white/30 font-medium py-6 transition-all duration-300 group/btn"
                >
                  <Link href="/contact" className="flex items-center justify-center gap-2">
                    Start direct
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Firm Foundation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -8 }}
            className="relative group"
          >
            {/* Recommended badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-white shadow-lg glow-accent-sm">
                <Star className="w-4 h-4 fill-current" />
                Aanbevolen
              </span>
            </div>

            <div className="glass rounded-3xl p-8 sm:p-10 h-full border-accent/30 hover:border-accent/50 transition-all duration-300 relative overflow-hidden">
              {/* Subtle glow effect */}
              <div
                className="absolute -top-32 -right-32 w-64 h-64 rounded-full opacity-20"
                style={{
                  background: "radial-gradient(circle, rgba(197, 60, 11, 0.4) 0%, transparent 70%)",
                }}
              />

              {/* Icon */}
              <div className="relative w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/30 transition-colors">
                <Shield className="w-7 h-7 text-accent" />
              </div>

              {/* Title */}
              <h3 className="relative text-2xl sm:text-3xl font-bold text-white mb-2">Firm Foundation</h3>
              <p className="relative text-muted-foreground mb-6">
                Het fundament voor MKB (20-100 medewerkers).
              </p>

              {/* Features */}
              <ul className="relative space-y-4 mb-8">
                {firmFoundationFeatures.map((feature, index) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <Check className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <span className="text-white/90">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Price & CTA */}
              <div className="relative pt-6 border-t border-white/10">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-bold text-white">Vanaf</span>
                  <span className="text-4xl font-bold text-accent">€5.000</span>
                </div>
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-accent hover:bg-accent-hover text-white font-medium py-6 glow-accent hover:glow-accent transition-all duration-300 group/btn"
                >
                  <Link href="/contact" className="flex items-center justify-center gap-2">
                    Plan een fundatie-check
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-muted-foreground mt-12 text-sm"
        >
          Prijzen zijn indicatief. Elk project wordt op maat geoffreerd.
        </motion.p>
      </div>
    </section>
  );
}
