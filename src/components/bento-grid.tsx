"use client";

import Link from "next/link";
import { motion } from "@/components/motion";
import {
  Palette,
  Code2,
  Server,
  Shield,
  BarChart3,
  Zap,
  Globe,
  Headphones,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslations, useLocale } from "next-intl";
import { type Locale } from "@/i18n/config";

interface BentoCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  index: number;
  highlight?: boolean;
  href?: string;
}

function BentoCard({ title, description, icon, className, index, highlight, href }: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{ y: -6, scale: 1.02 }}
      className={cn(
        "group relative overflow-hidden rounded-3xl bg-surface p-6 sm:p-8",
        "border border-white/5 hover:border-accent/30 transition-all duration-300",
        "hover:bg-surface-hover",
        highlight && "border-accent/20 bg-gradient-to-br from-surface to-accent/5",
        href && "cursor-pointer",
        className
      )}
    >
      {/* Animated gradient background for highlighted cards */}
      {highlight && (
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: "linear-gradient(135deg, transparent 0%, rgba(197, 60, 11, 0.1) 50%, transparent 100%)",
            backgroundSize: "200% 200%",
            animation: "gradient-shift 6s ease infinite",
          }}
        />
      )}

      {/* Hover glow effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(197, 60, 11, 0.08), transparent 40%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Icon */}
        <motion.div
          className={cn(
            "mb-4 inline-flex items-center justify-center w-12 h-12 rounded-2xl",
            "bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors",
            highlight && "bg-accent/20"
          )}
          whileHover={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 0.4 }}
        >
          {icon}
        </motion.div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed flex-grow">{description}</p>
      </div>

      {/* Corner accent */}
      <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-accent/5 blur-3xl group-hover:bg-accent/15 transition-colors duration-500" />

      {/* Top corner highlight for featured cards */}
      {highlight && (
        <div className="absolute -top-2 -left-2 w-20 h-20 rounded-full bg-accent/10 blur-2xl" />
      )}

      {/* Full card link overlay */}
      {href && (
        <Link href={href} className="absolute inset-0 z-20" aria-label={title}>
          <span className="sr-only">{title}</span>
        </Link>
      )}
    </motion.div>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export function BentoGrid() {
  const t = useTranslations("bentoGrid");
  const locale = useLocale() as Locale;

  // Helper for locale-aware paths
  const localePath = (path: string) => locale === "en" ? `/en${path.replace("/diensten/", "/services/")}` : path;

  const features = [
    {
      key: "design",
      icon: <Palette className="h-6 w-6" />,
      className: "md:col-span-2 md:row-span-1",
      highlight: true,
      href: localePath("/diensten/design"),
    },
    {
      key: "development",
      icon: <Code2 className="h-6 w-6" />,
      className: "md:col-span-1 md:row-span-2",
      highlight: false,
      href: localePath("/diensten/development"),
    },
    {
      key: "hosting",
      icon: <Server className="h-6 w-6" />,
      className: "md:col-span-1 md:row-span-1",
      highlight: false,
      href: localePath("/diensten/hosting"),
    },
    {
      key: "security",
      icon: <Shield className="h-6 w-6" />,
      className: "md:col-span-1 md:row-span-1",
      highlight: true,
      href: localePath("/diensten/hosting"),
    },
    {
      key: "analytics",
      icon: <BarChart3 className="h-6 w-6" />,
      className: "md:col-span-1 md:row-span-1",
      highlight: false,
      href: localePath("/diensten/tracking"),
    },
    {
      key: "performance",
      icon: <Zap className="h-6 w-6" />,
      className: "md:col-span-1 md:row-span-1",
      highlight: false,
      href: localePath("/diensten/hosting"),
    },
    {
      key: "seo",
      icon: <Globe className="h-6 w-6" />,
      className: "md:col-span-1 md:row-span-1",
      highlight: false,
      href: localePath("/diensten/seo"),
    },
    {
      key: "support",
      icon: <Headphones className="h-6 w-6" />,
      className: "md:col-span-2 md:row-span-1",
      highlight: true,
      href: localePath("/diensten/onderhoud"),
    },
  ];

  return (
    <section id="features" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[700px] rounded-full opacity-30"
          style={{
            background: "radial-gradient(ellipse, rgba(37, 49, 59, 0.8) 0%, transparent 70%)",
          }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="absolute bottom-1/4 right-0 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(197, 60, 11, 0.08) 0%, transparent 60%)",
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
            {t("titleLine1")}
            <br />
            <span className="text-gradient-accent">{t("titleLine2")}</span>
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

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 auto-rows-[minmax(180px,auto)] gap-4 sm:gap-5"
        >
          {features.map((feature, index) => (
            <BentoCard
              key={feature.key}
              title={t(`features.${feature.key}.title`)}
              description={t(`features.${feature.key}.description`)}
              icon={feature.icon}
              className={feature.className}
              index={index}
              highlight={feature.highlight}
              href={feature.href}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
