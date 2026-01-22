"use client";

import Link from "next/link";
import { motion } from "@/components/motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        {/* Top gradient fade */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent" />

        {/* Accent glow */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px]"
          style={{
            background: "radial-gradient(ellipse, rgba(197, 60, 11, 0.1) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to elevate your
            <br />
            <span className="text-gradient-accent">digital presence?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help you build a high-performance website
            with enterprise-grade reliability.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent-hover text-white font-medium px-8 py-6 text-base glow-accent hover:glow-accent transition-all duration-300 group"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Start a Conversation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/5 hover:border-white/30 font-medium px-8 py-6 text-base transition-all duration-300"
            >
              <Link href="/diensten">Explore Services</Link>
            </Button>
          </div>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 pt-12 border-t border-white/10"
        >
          <p className="text-sm text-muted-foreground mb-6">Trusted by ambitious businesses</p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
            {["Den Hartog Energies", "Voltra Charging", "Growteq", "Woonstudio JOY", "BioBoss"].map((client) => (
              <span key={client} className="text-white/80 font-medium">{client}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
