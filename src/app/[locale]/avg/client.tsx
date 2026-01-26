"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Shield, Server, Lock, Eye, FileCheck, Users, LucideIcon } from "lucide-react";

const avgFeatures: { id: string; icon: LucideIcon }[] = [
  { id: "privacyByDesign", icon: Shield },
  { id: "euHosting", icon: Server },
  { id: "encryption", icon: Lock },
  { id: "transparency", icon: Eye },
  { id: "dpa", icon: FileCheck },
  { id: "rights", icon: Users },
];

export default function AVGPageClient() {
  const t = useTranslations("avgPage");
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

      {/* Features Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {avgFeatures.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl bg-surface p-6 border border-white/5"
              >
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {t(`features.${feature.id}.title`)}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t(`features.${feature.id}.description`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Info */}
      <section className="py-20 bg-surface/50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-background p-8 md:p-12 border border-white/5 space-y-8"
          >
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                {t("info.whatIsGdpr.title")}
              </h2>
              <p className="text-muted-foreground">
                {t("info.whatIsGdpr.content")}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                {t("info.approach.title")}
              </h2>
              <p className="text-muted-foreground mb-4">
                {t("info.approach.intro")}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  <strong className="text-white">{t("info.approach.cookieBanner.title")}</strong>{" "}
                  {t("info.approach.cookieBanner.description")}
                </li>
                <li>
                  <strong className="text-white">{t("info.approach.analytics.title")}</strong>{" "}
                  {t("info.approach.analytics.description")}
                </li>
                <li>
                  <strong className="text-white">{t("info.approach.forms.title")}</strong>{" "}
                  {t("info.approach.forms.description")}
                </li>
                <li>
                  <strong className="text-white">{t("info.approach.ssl.title")}</strong>{" "}
                  {t("info.approach.ssl.description")}
                </li>
                <li>
                  <strong className="text-white">{t("info.approach.privacy.title")}</strong>{" "}
                  {t("info.approach.privacy.description")}
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                {t("info.serverSide.title")}
              </h2>
              <p className="text-muted-foreground">
                {t("info.serverSide.content")}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                {t("info.dpa.title")}
              </h2>
              <p className="text-muted-foreground">
                {t("info.dpa.content")}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                {t("info.questions.title")}
              </h2>
              <p className="text-muted-foreground">
                {t("info.questions.content", { email: "" })}{" "}
                <a
                  href="mailto:info@robuustmarketing.nl"
                  className="text-accent hover:underline"
                >
                  info@robuustmarketing.nl
                </a>
              </p>
            </section>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
