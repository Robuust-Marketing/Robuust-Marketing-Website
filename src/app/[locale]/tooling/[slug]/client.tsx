"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  Zap,
  Target,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { getTools, getTool } from "@/data/tools";
import { type Locale } from "@/i18n/config";

export default function ToolDetailPageClient() {
  const t = useTranslations("toolDetailPage");
  const params = useParams();
  const locale = useLocale() as Locale;
  const slug = params.slug as string;

  const tool = getTool(slug, locale);
  const allTools = getTools(locale);

  if (!tool) {
    notFound();
  }

  // Find related tools
  const relatedTools = tool.relatedTools
    .map((id) => allTools.find((t) => t.id === id))
    .filter(Boolean);

  // Find next and previous tools
  const currentIndex = allTools.findIndex((t) => t.slug === slug);
  const nextTool = allTools[currentIndex + 1] || allTools[0];
  const prevTool = allTools[currentIndex - 1] || allTools[allTools.length - 1];

  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="relative pb-12">
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

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link
              href="/tooling"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              {t("backToTooling")}
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Category */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3 mb-4"
              >
                <span className="text-accent font-medium text-sm uppercase tracking-wider">
                  {tool.category}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl font-bold text-white mb-6"
              >
                {tool.name}
              </motion.h1>

              {/* Long Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-muted-foreground text-lg mb-8"
              >
                {tool.longDescription}
              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-accent hover:bg-accent-hover text-white"
                >
                  <Link href="/contact" className="flex items-center gap-2">
                    {t("cta.contact")}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>

            {/* Icon placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="aspect-square max-w-md mx-auto rounded-3xl bg-gradient-to-br from-accent/20 to-accent/5 relative overflow-hidden border border-white/10 flex items-center justify-center"
            >
              <tool.icon className="w-32 h-32 text-accent/50" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              {t("benefits.title")}
            </h2>
            <p className="text-muted-foreground">{t("benefits.subtitle")}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tool.benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl bg-surface p-6 border border-white/5"
              >
                <div className="mb-4 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 text-accent">
                  <Zap className="h-5 w-5" />
                </div>
                <p className="text-white font-medium">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-surface/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              {t("features.title")}
            </h2>
            <p className="text-muted-foreground">{t("features.subtitle")}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tool.features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl bg-surface p-6 border border-white/5"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Check className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              {t("useCases.title")}
            </h2>
            <p className="text-muted-foreground">{t("useCases.subtitle")}</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {tool.useCases.map((useCase, index) => (
              <motion.div
                key={useCase}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-white/10"
              >
                <Target className="h-4 w-4 text-accent" />
                <span className="text-white text-sm">{useCase}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Tools */}
      {relatedTools.length > 0 && (
        <section className="py-20 bg-surface/50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                {t("relatedTools.title")}
              </h2>
              <p className="text-muted-foreground">
                {t("relatedTools.subtitle")}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedTools.map((relatedTool, index) => (
                <motion.div
                  key={relatedTool!.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={`/tooling/${relatedTool!.slug}`}
                    className="block rounded-2xl bg-surface p-6 border border-white/5 hover:border-accent/30 transition-colors group"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        {relatedTool && <relatedTool.icon className="h-6 w-6 text-accent" />}
                      </div>
                      <div>
                        <span className="text-accent text-xs font-medium uppercase tracking-wider">
                          {relatedTool!.category}
                        </span>
                        <h3 className="text-lg font-semibold text-white group-hover:text-accent transition-colors">
                          {relatedTool!.name}
                        </h3>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {relatedTool!.description}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Navigation */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Previous */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Link
                href={`/tooling/${prevTool.slug}`}
                className="block rounded-2xl bg-surface p-6 border border-white/5 hover:border-white/10 transition-colors group"
              >
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                  <ArrowLeft className="h-4 w-4" />
                  {t("navigation.previous")}
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-accent transition-colors">
                  {prevTool.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {prevTool.category}
                </p>
              </Link>
            </motion.div>

            {/* Next */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Link
                href={`/tooling/${nextTool.slug}`}
                className="block rounded-2xl bg-surface p-6 border border-white/5 hover:border-white/10 transition-colors group text-right"
              >
                <div className="flex items-center justify-end gap-2 text-muted-foreground text-sm mb-2">
                  {t("navigation.next")}
                  <ArrowRight className="h-4 w-4" />
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-accent transition-colors">
                  {nextTool.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {nextTool.category}
                </p>
              </Link>
            </motion.div>
          </div>
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
              <Link href="/tooling">{t("cta.secondaryButton")}</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
