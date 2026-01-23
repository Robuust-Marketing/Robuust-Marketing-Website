"use client";

import Link from "next/link";
import { motion } from "@/components/motion";
import { ArrowRight, Code2, Server, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: Code2, value: "15+", label: "Jaar ervaring" },
  { icon: Server, value: "70+", label: "Websites gebouwd" },
  { icon: Users, value: "100%", label: "Klantbehoud" },
];

export function FounderIntro() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Solid background for visual variety */}
      <div className="absolute inset-0 bg-surface/30" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo/Avatar side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Photo placeholder - replace with actual photo */}
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0 rounded-3xl overflow-hidden bg-surface border border-white/10">
              {/* Gradient placeholder until photo is available */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(135deg, rgba(37, 49, 59, 1) 0%, rgba(24, 36, 46, 1) 100%)",
                }}
              />

              {/* Decorative accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1/2"
                style={{
                  background: "linear-gradient(to top, rgba(197, 60, 11, 0.1) 0%, transparent 100%)",
                }}
              />

              {/* Initials as placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-8xl font-bold text-white/10">RH</span>
              </div>

              {/* Corner accent */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-accent/20 blur-3xl" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-4 -right-4 lg:right-auto lg:-left-4 bg-surface rounded-2xl p-4 border border-white/10 shadow-xl"
            >
              <div className="text-2xl font-bold text-accent">No-nonsense</div>
              <div className="text-sm text-muted-foreground">vakmanschap</div>
            </motion.div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-4"
            >
              Over Robuust
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              Eerlijk, direct,
              <br />
              <span className="text-gradient-accent">goed werk</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4 text-muted-foreground text-lg mb-8"
            >
              <p>
                Ik ben Robin, oprichter van Robuust Marketing. Al meer dan 15 jaar bouw ik
                websites en digitale infrastructuur voor bedrijven die serieus willen groeien.
              </p>
              <p>
                Geen fancy kantoor, geen onnodige overhead. Wel: directe lijnen, heldere
                communicatie en resultaat waar u op kunt bouwen. Ik geloof in vakmanschap
                zonder poespas - werk dat gewoon goed is.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-3 gap-6 mb-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="text-center sm:text-left"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10 text-accent mb-2">
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent-hover text-white font-medium px-8 py-6 glow-accent hover:glow-accent transition-all duration-300 group"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Laten we praten
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
