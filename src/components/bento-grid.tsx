"use client";

import { motion } from "framer-motion";
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

interface BentoCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  index: number;
}

function BentoCard({ title, description, icon, className, index }: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className={cn(
        "group relative overflow-hidden rounded-3xl bg-surface p-6 sm:p-8",
        "border border-white/5 hover:border-white/10 transition-all duration-300",
        "hover:bg-surface-hover",
        className
      )}
    >
      {/* Hover glow effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(197, 60, 11, 0.06), transparent 40%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors">
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>

      {/* Corner accent */}
      <div className="absolute -bottom-2 -right-2 w-24 h-24 rounded-full bg-accent/5 blur-2xl group-hover:bg-accent/10 transition-colors" />
    </motion.div>
  );
}

const features = [
  {
    title: "Custom Design",
    description: "Bespoke UI/UX design that captures your brand identity and converts visitors into customers.",
    icon: <Palette className="h-6 w-6" />,
    className: "md:col-span-2",
  },
  {
    title: "Modern Development",
    description: "Built with React, Next.js, and TypeScript for blazing-fast performance.",
    icon: <Code2 className="h-6 w-6" />,
    className: "md:col-span-1",
  },
  {
    title: "Managed Hosting",
    description: "Enterprise-grade infrastructure with NGINX and Cloudflare on dedicated servers.",
    icon: <Server className="h-6 w-6" />,
    className: "md:col-span-1",
  },
  {
    title: "Rock-Solid Security",
    description: "OAuth, 1Password integrations, DKIM/DMARC management, and full AVG compliance.",
    icon: <Shield className="h-6 w-6" />,
    className: "md:col-span-1",
  },
  {
    title: "Advanced Analytics",
    description: "GA4, Meta Pixel, first-party tracking with Taggrs, and business recognition with Snitcher.",
    icon: <BarChart3 className="h-6 w-6" />,
    className: "md:col-span-1",
  },
  {
    title: "Lightning Performance",
    description: "Optimized for Core Web Vitals with Varnish caching and edge delivery for sub-second load times.",
    icon: <Zap className="h-6 w-6" />,
    className: "md:col-span-1",
  },
  {
    title: "SEO & Marketing",
    description: "Full-stack digital marketing including Meta, TikTok, and Google Ads deployment via Hello Its Me.",
    icon: <Globe className="h-6 w-6" />,
    className: "md:col-span-1",
  },
  {
    title: "24/7 Support",
    description: "Dedicated support with ironclad SLAs. We're there when you need us, every time.",
    icon: <Headphones className="h-6 w-6" />,
    className: "md:col-span-2",
  },
];

export function BentoGrid() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full opacity-30"
          style={{
            background: "radial-gradient(ellipse, rgba(37, 49, 59, 0.8) 0%, transparent 70%)",
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
            Features
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Everything you need to
            <br />
            <span className="text-gradient">dominate online</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            From pixel-perfect design to bulletproof hosting, we handle every aspect
            of your digital presence.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <BentoCard
              key={feature.title}
              {...feature}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
