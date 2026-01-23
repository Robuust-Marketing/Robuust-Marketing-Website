"use client";

import { motion } from "@/components/motion";

const clients = [
  { name: "Growteq", logo: null },
  { name: "Den Hartog Energies", logo: null },
  { name: "Voltra Charging", logo: null },
  { name: "Villary", logo: null },
  { name: "Woonstudio JOY", logo: null },
];

export function SocialProof() {
  return (
    <section className="relative py-16 border-y border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm text-muted-foreground mb-10"
        >
          Zij bouwen al met Robuust:
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Logo placeholder - replace with actual logos when available */}
              <span className="text-xl font-semibold text-white/30 hover:text-accent transition-colors duration-300 cursor-default grayscale hover:grayscale-0">
                {client.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
