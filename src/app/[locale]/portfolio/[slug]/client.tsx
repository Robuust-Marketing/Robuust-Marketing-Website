"use client";

import { useParams } from "next/navigation";
import { Link } from "@/i18n/routing";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ArrowLeft,
  ExternalLink,
  Check,
  Calendar,
  Briefcase,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { getPortfolioItems } from "@/data/portfolio";
import type { Locale } from "@/i18n/config";

export default function CaseStudyPageClient() {
  const t = useTranslations("portfolioDetailPage");
  const locale = useLocale() as Locale;
  const params = useParams();
  const slug = params.slug as string;

  const portfolioItems = getPortfolioItems(locale);
  const project = portfolioItems.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Find next and previous projects
  const currentIndex = portfolioItems.findIndex((p) => p.slug === slug);
  const nextProject = portfolioItems[currentIndex + 1] || portfolioItems[0];
  const prevProject =
    portfolioItems[currentIndex - 1] || portfolioItems[portfolioItems.length - 1];

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
              href="/portfolio"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              {t("backToPortfolio")}
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Category */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-4"
              >
                <span className="text-accent font-medium text-sm uppercase tracking-wider">
                  {project.industry}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl font-bold text-white mb-6"
              >
                {project.name}
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-muted-foreground text-lg mb-8"
              >
                {project.description}
              </motion.p>

              {/* Meta info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-6 mb-8"
              >
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-accent" />
                  <span className="text-sm text-muted-foreground">
                    {project.year}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-accent" />
                  <span className="text-sm text-muted-foreground">
                    {project.category}
                  </span>
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-accent hover:bg-accent-hover text-white"
                >
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener"
                    className="flex items-center gap-2"
                  >
                    {t("viewLiveWebsite")}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </motion.div>
            </div>

            {/* Project image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="aspect-video rounded-3xl relative overflow-hidden border border-white/10"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              {/* Favicon */}
              <div className="absolute bottom-6 left-6">
                <div className="bg-white rounded-xl p-3 shadow-lg">
                  <img
                    src={`https://www.google.com/s2/favicons?domain=${new URL(project.url).hostname}&sz=256`}
                    alt={`${project.name} favicon`}
                    className="h-12 w-12 object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Challenge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-surface p-8 border border-white/5"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center">
                  <span className="text-red-400 text-lg font-bold">?</span>
                </div>
                <h2 className="text-2xl font-bold text-white">{t("challenge.title")}</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {project.challenge}
              </p>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-3xl bg-gradient-to-br from-accent/10 to-accent/5 p-8 border border-accent/20"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                  <Check className="h-5 w-5 text-accent" />
                </div>
                <h2 className="text-2xl font-bold text-white">{t("solution.title")}</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {project.solution}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-surface/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">{t("results.title")}</h2>
            <p className="text-muted-foreground">
              {t("results.subtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.results.map((result, index) => (
              <motion.div
                key={result.metric}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl bg-surface p-6 border border-white/5 text-center"
              >
                <div className="text-2xl font-bold text-accent mb-2">
                  {result.metric}
                </div>
                <p className="text-sm text-muted-foreground">
                  {result.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Used */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              {t("services.title")}
            </h2>
            <p className="text-muted-foreground">
              {t("services.subtitle")}
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {project.services.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={`/diensten/${service}` as any}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-white/10 hover:border-accent/30 transition-colors"
                >
                  <Wrench className="h-4 w-4 text-accent" />
                  <span className="text-white text-sm">
                    {t(`services.labels.${service}`) || service}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tags */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-sm px-4 py-2 rounded-full bg-white/5 text-white/70"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-20 bg-surface/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Previous */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Link
                href={`/portfolio/${prevProject.slug}` as any}
                className="block rounded-2xl bg-surface overflow-hidden border border-white/5 hover:border-accent/30 transition-colors group"
              >
                <div className="aspect-[21/9] relative overflow-hidden">
                  <img
                    src={prevProject.image}
                    alt={prevProject.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <div className="bg-white rounded-lg p-1.5 shadow-lg">
                      <img
                        src={`https://www.google.com/s2/favicons?domain=${new URL(prevProject.url).hostname}&sz=256`}
                        alt={`${prevProject.name} favicon`}
                        className="h-6 w-6 object-contain"
                      />
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                    <ArrowLeft className="h-4 w-4" />
                    {t("navigation.previous")}
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-accent transition-colors">
                    {prevProject.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {prevProject.industry}
                  </p>
                </div>
              </Link>
            </motion.div>

            {/* Next */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Link
                href={`/portfolio/${nextProject.slug}` as any}
                className="block rounded-2xl bg-surface overflow-hidden border border-white/5 hover:border-accent/30 transition-colors group"
              >
                <div className="aspect-[21/9] relative overflow-hidden">
                  <img
                    src={nextProject.image}
                    alt={nextProject.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
                  <div className="absolute bottom-3 right-4">
                    <div className="bg-white rounded-lg p-1.5 shadow-lg">
                      <img
                        src={`https://www.google.com/s2/favicons?domain=${new URL(nextProject.url).hostname}&sz=256`}
                        alt={`${nextProject.name} favicon`}
                        className="h-6 w-6 object-contain"
                      />
                    </div>
                  </div>
                </div>
                <div className="p-5 text-right">
                  <div className="flex items-center justify-end gap-2 text-muted-foreground text-sm mb-2">
                    {t("navigation.next")}
                    <ArrowRight className="h-4 w-4" />
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-accent transition-colors">
                    {nextProject.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {nextProject.industry}
                  </p>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
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
              <Link href="/portfolio">{t("cta.secondaryButton")}</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
