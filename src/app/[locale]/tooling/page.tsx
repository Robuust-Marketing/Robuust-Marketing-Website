"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Zap,
  CheckCircle,
  Terminal,
  Palette,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { getTools } from "@/data/tools";
import { type Locale } from "@/i18n/config";

export default function ToolingPage() {
  const t = useTranslations("toolingPage");
  const locale = useLocale() as Locale;
  const techStack = getTools(locale);

  const additionalTools = [
    { name: t("additionalTools.github.name"), description: t("additionalTools.github.description"), icon: Terminal },
    { name: t("additionalTools.figma.name"), description: t("additionalTools.figma.description"), icon: Palette },
    { name: t("additionalTools.resend.name"), description: t("additionalTools.resend.description"), icon: FileText },
    { name: t("additionalTools.clickup.name"), description: t("additionalTools.clickup.description"), icon: CheckCircle },
  ];

  const whyThisStack = [
    {
      title: t("whyThisStack.performance.title"),
      description: t("whyThisStack.performance.description"),
    },
    {
      title: t("whyThisStack.seo.title"),
      description: t("whyThisStack.seo.description"),
    },
    {
      title: t("whyThisStack.maintenance.title"),
      description: t("whyThisStack.maintenance.description"),
    },
    {
      title: t("whyThisStack.future.title"),
      description: t("whyThisStack.future.description"),
    },
  ];

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

      {/* Why This Stack */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyThisStack.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl bg-surface p-6 border border-white/5"
              >
                <div className="mb-3 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-green-500/10 text-green-500">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Details */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-8">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.id}
                id={tech.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={`/tooling/${tech.slug}`}
                  className="block rounded-3xl bg-surface border border-white/5 overflow-hidden hover:border-accent/30 transition-colors group"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 lg:p-8">
                    {/* Header */}
                    <div className="lg:col-span-3 flex items-start gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors">
                        <tech.icon className="h-7 w-7" />
                      </div>
                      <div>
                        <span className="text-accent text-xs font-medium uppercase tracking-wider">
                          {tech.category}
                        </span>
                        <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                          {tech.name}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="lg:col-span-5">
                      <p className="text-muted-foreground">{tech.description}</p>
                    </div>

                    {/* Benefits */}
                    <div className="lg:col-span-4">
                      <h4 className="text-sm font-semibold text-white mb-3">
                        {t("benefits")}
                      </h4>
                      <ul className="space-y-2">
                        {tech.benefits.map((benefit) => (
                          <li
                            key={benefit}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <Zap className="h-4 w-4 text-accent" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 flex items-center gap-2 text-accent text-sm font-medium">
                        {t("moreInfo")}
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Tools */}
      <section className="py-20 bg-surface/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-white mb-4"
            >
              {t("additionalTools.title")}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-muted-foreground"
            >
              {t("additionalTools.subtitle")}
            </motion.p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {additionalTools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl bg-background p-4 border border-white/5 text-center"
              >
                <div className="mb-2 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 text-white">
                  <tool.icon className="h-5 w-5" />
                </div>
                <h3 className="font-medium text-white">{tool.name}</h3>
                <p className="text-xs text-muted-foreground">
                  {tool.description}
                </p>
              </motion.div>
            ))}
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
          >
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent-hover text-white"
            >
              <Link href="/contact" className="flex items-center gap-2">
                {t("cta.button")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
