"use client";

import { Link } from "@/i18n/routing";
import { motion } from "@/components/motion";
import { useTranslations, useLocale } from "next-intl";
import { type Locale } from "@/i18n/config";

const clients = [
  { name: "Growteq", slug: "growteq", logo: "/portfolio/growteq-logo.svg" },
  { name: "Den Hartog Energies", slug: "den-hartog", logo: "/portfolio/denhartogenergies-logo.svg" },
  { name: "Voltra Charging", slug: "voltra-charging", logo: "/portfolio/voltracharging-logo.svg" },
  { name: "Villary", slug: "villary", logo: "/portfolio/villary-logo.png" },
  { name: "Woonstudio JOY", slug: "woonstudio-joy", logo: "/portfolio/woonstudiojoy-logo.svg" },
];

export function SocialProof() {
  const t = useTranslations("socialProof");
  const locale = useLocale() as Locale;

  // Helper for locale-aware paths
  const localePath = (path: string) => locale === "en" ? `/en${path}` : path;

  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm text-muted-foreground mb-8"
        >
          {t("title")}
        </motion.p>

        <div className="rounded-2xl bg-white py-8 px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link
                  href={localePath(`/portfolio/${client.slug}`)}
                  className="block hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-10 w-auto max-w-[160px] object-contain"
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
