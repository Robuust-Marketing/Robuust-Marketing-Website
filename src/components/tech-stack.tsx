"use client";

import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { Server, Zap, Brain, ArrowRight } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { type Locale } from "@/i18n/config";
import { Button } from "@/components/ui/button";

export function TechStack() {
  const t = useTranslations("techStack");
  const locale = useLocale() as Locale;

  // Helper for locale-aware paths
  const localePath = (path: string) => locale === "en" ? `/en${path.replace("/diensten/", "/services/")}` : path;

  const techCategories = [
    {
      key: "engine",
      title: t("categories.engine.title"),
      description: t("categories.engine.description"),
      icon: Server,
      technologies: ["Node.js", "React", "Next.js", "WordPress", "WooCommerce"],
      href: localePath("/diensten/development"),
    },
    {
      key: "speed",
      title: t("categories.speed.title"),
      description: t("categories.speed.description"),
      icon: Zap,
      technologies: ["Cloudflare", "NGINX", "Varnish", "Let's Encrypt", "Fail2ban"],
      href: localePath("/diensten/hosting"),
    },
    {
      key: "intelligence",
      title: t("categories.intelligence.title"),
      description: t("categories.intelligence.description"),
      icon: Brain,
      technologies: ["GA4", "Taggrs", "Snitcher", "n8n", "AI Tooling"],
      href: localePath("/diensten/tracking"),
    },
  ];

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px]"
          style={{
            background: "radial-gradient(ellipse, rgba(37, 49, 59, 0.6) 0%, transparent 70%)",
          }}
        />
      </div>

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
            <br />
            <span className="text-white/80 text-2xl sm:text-3xl lg:text-4xl">{t("titleLine3")}</span>
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

        {/* Tech Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.15 }}
              whileHover={{ y: -4 }}
              className="group"
            >
              <Link href={category.href} className="block h-full">
                <div className="glass rounded-3xl p-6 sm:p-8 h-full border-white/5 hover:border-accent/30 transition-all duration-300">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <category.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-accent transition-colors">{category.title}</h3>
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {category.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.3 + categoryIndex * 0.1 + techIndex * 0.05 }}
                        className="inline-flex items-center rounded-full bg-white/5 border border-white/10 px-3 py-1.5 text-sm text-white/70 group-hover:border-accent/20 transition-all duration-200"
                      >
                        {tech}
                      </motion.span>
                    ))}
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
            <Link href={localePath("/diensten/hosting")} className="flex items-center gap-2">
              Meer over onze infrastructuur
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>

        {/* Bottom visual - Abstract tech lines */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 flex justify-center"
        >
          <div className="relative w-full max-w-3xl h-24 overflow-hidden">
            <svg
              className="w-full h-full opacity-30"
              viewBox="0 0 600 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="techLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="transparent" />
                  <stop offset="20%" stopColor="rgba(197, 60, 11, 0.5)" />
                  <stop offset="50%" stopColor="rgba(197, 60, 11, 0.8)" />
                  <stop offset="80%" stopColor="rgba(197, 60, 11, 0.5)" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>
              <motion.path
                d="M0,50 L150,50 L175,30 L200,70 L225,30 L250,70 L275,50 L600,50"
                stroke="url(#techLineGradient)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              {/* Pulse dots */}
              {[150, 300, 450].map((x, i) => (
                <motion.circle
                  key={i}
                  cx={x}
                  cy={50}
                  r="4"
                  fill="rgba(197, 60, 11, 0.8)"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: [0, 1.5, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1 + i * 0.2 }}
                />
              ))}
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
