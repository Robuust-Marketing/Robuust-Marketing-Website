"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "@/components/motion";

export function KennisbankCTA() {
  return (
    <section className="py-20 bg-surface/50">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-white mb-6"
        >
          Mis je iets?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-lg mb-8"
        >
          Heb je een vraag die niet beantwoord wordt? Laat het ons weten en we
          helpen je graag.
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
              Stel je vraag
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
