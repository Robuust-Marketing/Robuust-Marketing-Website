"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Search,
  FileCode,
  PenTool,
  Link2,
  MapPin,
  BarChart3,
  ArrowRight,
  Check,
  TrendingUp,
  LucideIcon,
} from "lucide-react";

const services: { id: string; icon: LucideIcon }[] = [
  { id: "technicalSeo", icon: FileCode },
  { id: "contentOptimization", icon: PenTool },
  { id: "linkbuilding", icon: Link2 },
  { id: "localSeo", icon: MapPin },
  { id: "keywordResearch", icon: Search },
  { id: "seoReporting", icon: BarChart3 },
];

const results = ["organicTraffic", "rankings", "bounceRate"];

const timelinePhases = ["phase1", "phase2", "phase3"];

export default function SEOPageClient() {
  const t = useTranslations("seoPage");
  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="relative pb-20">
        <div className="absolute inset-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]"
            style={{
              background:
                "radial-gradient(ellipse, rgba(197, 60, 11, 0.1) 0%, transparent 60%)",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 text-accent"
          >
            <Search className="h-8 w-8" />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-4"
          >
            {t("badge")}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            {t("titleLine1")}
            <br />
            <span className="text-gradient-accent">{t("titleLine2")}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg mb-8"
          >
            {t("subtitle")}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent-hover text-white"
            >
              <Link href="/contact" className="flex items-center gap-2">
                {t("primaryButton")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/5"
            >
              <Link href="/diensten/tracking">{t("secondaryButton")}</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12 bg-surface/50 border-y border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {results.map((result, index) => (
              <motion.div
                key={result}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-accent mb-1">
                  {t(`results.${result}.metric`)}
                </div>
                <div className="text-white font-medium">
                  {t(`results.${result}.label`)}
                </div>
                <div className="text-sm text-muted-foreground">
                  {t(`results.${result}.period`)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
            >
              {t("services.title")}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              {t("services.subtitle")}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl bg-surface p-6 border border-white/5 hover:border-white/10 transition-colors"
              >
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {t(`services.${service.id}.title`)}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t(`services.${service.id}.description`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical SEO Section */}
      <section className="py-20 bg-surface/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                {t("technical.title")}{" "}
                <span className="text-gradient-accent">
                  {t("technical.titleHighlight")}
                </span>
              </h2>
              <p className="text-muted-foreground mb-8">
                {t("technical.subtitle")}
              </p>
              <ul className="space-y-3">
                {(t.raw("technical.checklist") as string[]).map(
                  (item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                        <Check className="h-4 w-4 text-accent" />
                      </div>
                      <span className="text-white/80">{item}</span>
                    </motion.li>
                  )
                )}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-gradient-to-br from-accent/20 to-accent/5 p-8 border border-accent/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="h-8 w-8 text-accent" />
                <h3 className="text-2xl font-bold text-white">
                  {t("technical.card.title")}
                </h3>
              </div>
              <p className="text-muted-foreground mb-6">
                {t("technical.card.description")}
              </p>
              <div className="space-y-4 mb-6">
                {timelinePhases.map((phase) => (
                  <div
                    key={phase}
                    className="flex justify-between items-center p-3 rounded-lg bg-white/5"
                  >
                    <span className="text-white/80">
                      {t(`technical.card.timeline.${phase}.period`)}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {t(`technical.card.timeline.${phase}.description`)}
                    </span>
                  </div>
                ))}
              </div>
              <Button
                asChild
                className="w-full bg-accent hover:bg-accent-hover text-white"
              >
                <Link href="/contact">{t("technical.card.button")}</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SEO vs Ads Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
            >
              {t("comparison.title")}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              {t("comparison.subtitle")}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div className="rounded-2xl bg-surface p-8 border border-white/5">
              <h3 className="text-xl font-semibold text-white mb-4">
                {t("comparison.seo.title")}
              </h3>
              <ul className="space-y-3">
                {(t.raw("comparison.seo.benefits") as string[]).map(
                  (benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className="rounded-2xl bg-surface p-8 border border-white/5">
              <h3 className="text-xl font-semibold text-white mb-4">
                {t("comparison.ads.title")}
              </h3>
              <ul className="space-y-3">
                {(t.raw("comparison.ads.benefits") as string[]).map(
                  (benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-surface/50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-white mb-6"
          >
            {t("cta.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-lg mb-8"
          >
            {t("cta.subtitle")}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent-hover text-white"
            >
              <Link href="/contact" className="flex items-center gap-2">
                {t("cta.primaryButton")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/5"
            >
              <Link href="/diensten">{t("cta.secondaryButton")}</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
