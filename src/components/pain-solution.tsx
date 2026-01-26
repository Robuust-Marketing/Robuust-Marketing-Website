"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AlertTriangle, Shield, XCircle, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const painPoints = [
  "Trage websites die klanten afschrikken",
  "Onzekere beveiliging zonder garanties",
  "Geen backup-strategie bij problemen",
  "Verouderde technologie en plugins",
];

const solutions = [
  "Sub-seconde laadtijden met edge caching",
  "Enterprise-grade security met SLA's",
  "Dedicated servers in DE/FI met backup",
  "Modern stack, continu onderhouden",
];

export function PainSolution() {
  return (
    <section id="aanpak" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px]"
          style={{
            background: "radial-gradient(ellipse, rgba(37, 49, 59, 0.5) 0%, transparent 70%)",
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
            De Transformatie
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white"
          >
            Van chaos naar <span className="text-gradient-accent">controle</span>
          </motion.h2>
        </div>

        {/* Split Screen */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4">
          {/* Left - Pain (Current Reality) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="glass rounded-3xl p-8 sm:p-10 h-full border-red-500/20 hover:border-red-500/30 transition-colors">
              {/* Chaotic visual element */}
              <div className="absolute top-4 right-4 opacity-10">
                <svg width="120" height="120" viewBox="0 0 120 120" className="text-red-500">
                  <path
                    d="M20,60 Q30,20 60,40 T100,60 Q90,100 60,80 T20,60"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="5,5"
                  />
                  <path
                    d="M10,30 L40,50 L20,80 L60,70 L80,90 L100,40"
                    stroke="currentColor"
                    strokeWidth="1"
                    fill="none"
                    opacity="0.5"
                  />
                </svg>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">De Realiteit Nu</h3>
                  <p className="text-sm text-muted-foreground">Geïmproviseerde oplossingen?</p>
                </div>
              </div>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                Werkt uw website nog met verouderde systemen? Trage sites, onzekere beveiliging
                en geen garanties houden uw groei tegen.
              </p>

              <ul className="space-y-4">
                {painPoints.map((point, index) => (
                  <motion.li
                    key={point}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <XCircle className="w-5 h-5 text-red-500/70 mt-0.5 shrink-0" />
                    <span className="text-white/70">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right - Solution (Robuust Future) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="glass rounded-3xl p-8 sm:p-10 h-full border-accent/20 hover:border-accent/40 transition-colors">
              {/* Ordered visual element */}
              <div className="absolute top-4 right-4 opacity-10">
                <svg width="120" height="120" viewBox="0 0 120 120" className="text-accent">
                  <rect x="20" y="20" width="80" height="80" rx="8" stroke="currentColor" strokeWidth="2" fill="none" />
                  <line x1="20" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="1" />
                  <line x1="20" y1="70" x2="100" y2="70" stroke="currentColor" strokeWidth="1" />
                  <line x1="50" y1="20" x2="50" y2="100" stroke="currentColor" strokeWidth="1" />
                  <line x1="70" y1="20" x2="70" y2="100" stroke="currentColor" strokeWidth="1" />
                </svg>
              </div>

              {/* Subtle glow */}
              <div
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-20"
                style={{
                  background: "radial-gradient(circle, rgba(197, 60, 11, 0.4) 0%, transparent 70%)",
                }}
              />

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">De Robuuste Toekomst</h3>
                  <p className="text-sm text-muted-foreground">Fundament dat schaalt</p>
                </div>
              </div>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                Wij bouwen een digitaal fundament dat schaalt. Met dedicated servers in
                Duitsland/Finland en harde SLA&apos;s.
              </p>

              <ul className="space-y-4">
                {solutions.map((point, index) => (
                  <motion.li
                    key={point}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <span className="text-white/90">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent-hover text-white font-medium px-8 py-6 glow-accent hover:glow-accent transition-all duration-300 group"
          >
            <Link href="/tarieven" className="flex items-center gap-2">
              Bekijk onze tarieven
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
