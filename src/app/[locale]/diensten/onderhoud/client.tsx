"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  XCircle,
  Shield,
  Zap,
  Clock,
  CheckCircle,
  ArrowRight,
  AlertTriangle,
  LucideIcon,
} from "lucide-react";
import { pricing, formatPrice } from "@/data/pricing";

// Generate packages from central pricing config
const packages = Object.entries(pricing.slaPackages).map(([id, pkg]) => ({
  id,
  name: pkg.name,
  price: formatPrice(pkg.price),
  popular: pkg.popular || false,
  highlight: pkg.popular || false,
}));

// SLA feature keys for translation
const slaFeatureKeys = [
  "preventief",
  "monitoring",
  "backups",
  "incidenten",
  "reactietijd",
  "oplostijd",
  "meeting",
  "rapportage",
  "uptime",
] as const;

const includedItems: { id: string; icon: LucideIcon }[] = [
  { id: "security", icon: Shield },
  { id: "proactive", icon: Zap },
  { id: "speed", icon: Clock },
];

const notIncludedItems = ["textChanges", "newPages", "designChanges"];

export default function OnderhoudPageClient() {
  const t = useTranslations("onderhoudPage");

  // Generate slaFeatures with translations
  const slaFeatures = slaFeatureKeys.map((key) => ({
    feature: t(`slaFeatures.${key}`),
    essential: pricing.slaPackages.essential.features[key],
    light: pricing.slaPackages.light.features[key],
    medium: pricing.slaPackages.medium.features[key],
    large: pricing.slaPackages.large.features[key],
  }));

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
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            {t("subtitle")}
          </motion.p>
        </div>
      </section>

      {/* Preventief vs Reactief */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Preventief */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-gradient-to-br from-accent/10 to-accent/5 p-8 border border-accent/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20 text-accent">
                  <Shield className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-white">
                  {t("preventive.title")}
                </h2>
              </div>
              <p className="text-muted-foreground mb-6">
                {t("preventive.description")}
              </p>
              <div className="space-y-3">
                {(t.raw("preventive.benefits") as string[]).map(
                  (benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm text-accent"
                    >
                      <CheckCircle className="h-4 w-4" />
                      {benefit}
                    </div>
                  )
                )}
              </div>
            </motion.div>

            {/* Reactief */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-surface p-8 border border-white/5"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/20 text-red-400">
                  <AlertTriangle className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-white">
                  {t("reactive.title")}
                </h2>
              </div>
              <p className="text-muted-foreground mb-4">
                {t("reactive.rateLabel")}{" "}
                <span className="font-bold text-white">
                  {formatPrice(pricing.emergencyRate)} {t("reactive.rateUnit")}
                </span>
                . {t("reactive.minTime")}
              </p>
              <div className="rounded-xl bg-red-500/10 p-4 border border-red-500/20">
                <p className="text-sm font-semibold text-red-400 mb-2">
                  {t("reactive.card.title")}
                </p>
                <p className="text-sm text-muted-foreground">
                  {t("reactive.card.description")}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SLA Pakketten Tabel */}
      <section className="py-20 bg-surface/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
            >
              {t("packages.title")}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              {t("packages.subtitle")}
            </motion.p>
          </div>

          {/* Desktop Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="hidden lg:block"
          >
            <div className="rounded-3xl bg-surface border border-white/5 pt-4">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border-b border-white/10 p-4 text-left">
                      <span className="text-lg font-bold text-white">Pakket</span>
                    </th>
                    {packages.map((pkg) => (
                      <th
                        key={pkg.name}
                        className={`relative border-b border-white/10 p-4 text-center ${pkg.highlight ? "bg-accent/10" : ""}`}
                      >
                        {pkg.popular && (
                          <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
                            <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white shadow-lg">
                              {t("packages.popular")}
                            </span>
                          </div>
                        )}
                        <div className="text-xl font-bold text-white">
                          {pkg.name}
                        </div>
                        <div className="mt-1 text-2xl font-bold text-accent">
                          {pkg.price}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {t("packages.perMonth")}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {slaFeatures.map((row, idx) => (
                    <tr key={idx}>
                      <td className="border-b border-white/5 p-4 font-medium text-muted-foreground">
                        {row.feature}
                      </td>
                      <td className="border-b border-white/5 p-4 text-center text-sm text-muted-foreground">
                        {row.essential}
                      </td>
                      <td className="border-b border-white/5 p-4 text-center text-sm text-muted-foreground">
                        {row.light}
                      </td>
                      <td className="border-b border-white/5 bg-accent/5 p-4 text-center text-sm font-medium text-white">
                        {row.medium}
                      </td>
                      <td className="border-b border-white/5 p-4 text-center text-sm text-muted-foreground">
                        {row.large}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Mobile Cards */}
          <div className="space-y-6 lg:hidden">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-3xl p-6 border ${pkg.highlight ? "bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20" : "bg-surface border-white/5"}`}
              >
                {pkg.popular && (
                  <div className="mb-4">
                    <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
                      {t("packages.popular")}
                    </span>
                  </div>
                )}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">{pkg.name}</h3>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-accent">
                      {pkg.price}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {t("packages.perMonth")}
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  {slaFeatures.map((feature, idx) => {
                    const value =
                      pkg.name === "Essential"
                        ? feature.essential
                        : pkg.name === "Light"
                          ? feature.light
                          : pkg.name === "Medium"
                            ? feature.medium
                            : feature.large;
                    return (
                      <div
                        key={idx}
                        className="flex justify-between border-b border-white/10 pb-2"
                      >
                        <span className="text-sm text-muted-foreground">
                          {feature.feature}
                        </span>
                        <span className="text-sm font-medium text-white">
                          {value}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <Button
                  asChild
                  className="mt-6 w-full bg-accent hover:bg-accent-hover text-white"
                >
                  <Link href="/contact?package=onderhoud">
                    {t("packages.choosePackage")}
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent-hover text-white"
            >
              <Link href="/contact" className="flex items-center gap-2">
                {t("packages.requestQuote")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Wat is inbegrepen */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
            >
              {t("included.title")}
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {includedItems.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-2xl bg-surface p-6 border border-white/5"
              >
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {t(`included.${item.id}.title`)}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t(`included.${item.id}.description`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wat is niet inbegrepen */}
      <section className="py-20 bg-surface/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
            >
              {t("notIncluded.title")}
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {notIncludedItems.map((item, idx) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-2xl bg-surface p-6 border border-red-500/20"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-500/10 text-red-400">
                    <XCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      {t(`notIncluded.${item}.title`)}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {t(`notIncluded.${item}.description`)}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Extra Services */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
            >
              {t("extraServices.title")}
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-surface p-8 border border-white/5"
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                {t("extraServices.changes.title")}
              </h3>
              <p className="text-muted-foreground">
                {t("extraServices.changes.description")}{" "}
                <a
                  href="mailto:info@robuustmarketing.nl"
                  className="text-accent hover:underline"
                >
                  info@robuustmarketing.nl
                </a>
                {t("extraServices.changes.descriptionAfterEmail")}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-surface p-8 border border-white/5"
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                {t("extraServices.security.title")}
              </h3>
              <p className="text-muted-foreground">
                {t("extraServices.security.description")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
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
            className="flex flex-col gap-4 sm:flex-row sm:justify-center"
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
