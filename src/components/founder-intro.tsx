"use client";

import { Link } from "@/i18n/routing";
import { motion } from "@/components/motion";
import { ArrowRight, Code2, Server, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LazyYouTube } from "@/components/ui/lazy-youtube";
import { useTranslations, useLocale } from "next-intl";
import { type Locale } from "@/i18n/config";

export function FounderIntro() {
  const t = useTranslations("founderIntro");
  const locale = useLocale() as Locale;

  const stats = [
    { icon: Code2, value: "15+", label: t("stats.experience") },
    { icon: Server, value: "70+", label: t("stats.websites") },
    { icon: Users, value: "100%", label: t("stats.retention") },
  ];

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Solid background for visual variety */}
      <div className="absolute inset-0 bg-surface/30" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Video side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-video max-w-lg mx-auto lg:mx-0 rounded-3xl overflow-hidden bg-surface border border-white/10">
              <LazyYouTube
                videoId="xFctedUSpKo"
                title="Introductie Robuust Marketing"
                thumbnail="/video-thumbnails/intro-robuust.jpg"
                className="absolute inset-0"
              />
              {/* Corner accent */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-accent/20 blur-3xl pointer-events-none" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-4 -right-4 lg:right-auto lg:-left-4 bg-surface rounded-2xl p-4 border border-white/10 shadow-xl"
            >
              <div className="text-2xl font-bold text-accent">{t("badge2")}</div>
              <div className="text-sm text-muted-foreground">{t("badge2Sub")}</div>
            </motion.div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
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
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              {t("titleLine1")}
              <br />
              <span className="text-gradient-accent">{t("titleLine2")}</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4 text-muted-foreground text-lg mb-8"
            >
              <p>{t("paragraph1")}</p>
              <p>{t("paragraph2")}</p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-3 gap-6 mb-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="text-center sm:text-left"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10 text-accent mb-2">
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent-hover text-white font-medium px-8 py-6 glow-accent hover:glow-accent transition-all duration-300 group"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  {t("cta")}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
