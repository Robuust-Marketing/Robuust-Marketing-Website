"use client";

import { Link } from "@/i18n/routing";
import Image from "next/image";
import { motion } from "@/components/motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getPortfolioItems } from "@/data/portfolio";
import { useTranslations, useLocale } from "next-intl";
import { type Locale } from "@/i18n/config";

export function PortfolioShowcase() {
  const t = useTranslations("portfolioShowcase");
  const locale = useLocale() as Locale;

  // Get featured portfolio items for the current locale
  const portfolioItems = getPortfolioItems(locale);
  const featuredItems = portfolioItems.filter((item) => item.featured).slice(0, 6);

  // Helper for locale-aware paths
  const localePath = (path: string) => locale === "en" ? `/en${path}` : path;

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-surface/30" />

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
            {t("badge")}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            {t("titleLine1")} <span className="text-gradient-accent">{t("titleLine2")}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            {t("subtitle")}
          </motion.p>
        </div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* First item - large */}
          {featuredItems[0] && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-2 lg:col-span-2 lg:row-span-2"
            >
              <Link href={localePath(`/portfolio/${featuredItems[0].slug}`)} className="group block h-full">
                <div className="relative h-full min-h-[400px] lg:min-h-[500px] rounded-3xl overflow-hidden bg-surface border border-white/5 hover:border-accent/30 transition-all duration-300">
                  {/* Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={featuredItems[0].image}
                      alt={featuredItems[0].name}
                      fill
                      className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <span className="inline-block text-accent text-sm font-medium mb-2">
                      {featuredItems[0].category}
                    </span>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                      {featuredItems[0].name}
                    </h3>
                    <p className="text-muted-foreground mb-4 max-w-md">
                      {featuredItems[0].shortDescription}
                    </p>
                    <div className="flex items-center gap-2 text-accent font-medium">
                      <span>{t("viewCase")}</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Remaining items - smaller */}
          {featuredItems.slice(1).map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
            >
              <Link href={localePath(`/portfolio/${item.slug}`)} className="group block h-full">
                <div className="relative h-full min-h-[240px] rounded-3xl overflow-hidden bg-surface border border-white/5 hover:border-accent/30 transition-all duration-300">
                  {/* Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block text-accent text-xs font-medium mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors">
                      {item.name}
                    </h3>
                  </div>

                  {/* External link indicator */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="h-5 w-5 text-white/70" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
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
            variant="outline"
            className="border-accent/50 text-white hover:bg-accent/10 hover:border-accent font-medium px-8 py-6 transition-all duration-300 group"
          >
            <Link href={localePath("/portfolio")} className="flex items-center gap-2">
              {t("viewAllProjects")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
