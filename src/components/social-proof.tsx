"use client";

import { motion } from "framer-motion";

const clients = [
  "Den Hartog Energies",
  "Voltra Charging",
  "Growteq",
  "Woonstudio JOY",
  "BioBoss",
];

export function SocialProof() {
  return (
    <section className="relative py-12 border-y border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm text-muted-foreground mb-8"
        >
          Vertrouwd technisch partner van:
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {clients.map((client, index) => (
            <motion.span
              key={client}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-lg font-medium text-white/40 hover:text-accent transition-colors duration-300 cursor-default"
            >
              {client}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
