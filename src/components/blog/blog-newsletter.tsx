"use client";

import { Button } from "@/components/ui/button";
import { motion } from "@/components/motion";

export function BlogNewsletter() {
  return (
    <section className="py-20 bg-surface/50">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-white mb-6"
        >
          Blijf op de hoogte
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-lg mb-8"
        >
          Ontvang maandelijks de nieuwste artikelen en tips in je inbox.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="je@email.nl"
            aria-label="E-mailadres voor nieuwsbrief"
            autoComplete="email"
            className="flex-1 px-4 py-3 rounded-lg bg-background border border-white/10 text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <Button className="bg-accent hover:bg-accent-hover text-white">
            Inschrijven
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
