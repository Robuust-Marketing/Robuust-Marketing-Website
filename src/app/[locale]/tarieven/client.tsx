"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  HelpCircle,
  Zap,
  Shield,
  Clock,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { packages } from "@/data/packages";
import { pricing, formatPrice } from "@/data/pricing";
import { getFAQsByCategory } from "@/data/faqs";

const tarievenFaqs = getFAQsByCategory("tarieven");

export default function TarievenPageClient() {
  const t = useTranslations("tarievenPage");
  const tOnderhoud = useTranslations("onderhoudPage");

  // Generate SLA packages from central pricing config
  const slaPackages = Object.entries(pricing.slaPackages).map(([id, pkg]) => ({
    id,
    name: pkg.name,
    price: formatPrice(pkg.price),
    popular: pkg.popular || false,
  }));

  // Generate hosting plans from central pricing config
  const hostingPlans = Object.entries(pricing.hosting).map(([id, plan]) => ({
    id,
    name: plan.label,
    price: plan.price
      ? plan.priceMax
        ? `${formatPrice(plan.price)} - ${formatPrice(plan.priceMax)}`
        : formatPrice(plan.price)
      : t("hosting.custom"),
    period: plan.price ? t("hosting.perMonth") : "",
    description: plan.description,
    features: plan.features,
    popular: plan.popular || false,
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
                "radial-gradient(ellipse, rgba(197, 60, 11, 0.15) 0%, transparent 60%)",
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
            {t("titleLine1")}{" "}
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

      {/* Trust indicators */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Zap className="h-4 w-4 text-accent" />
              {t("trust.fastDelivery")}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="h-4 w-4 text-accent" />
              {t("trust.noHiddenCosts")}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4 text-accent" />
              {t("trust.flexiblePayments")}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Website Packages */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {t("websitePackages.title")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("websitePackages.subtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-2xl p-8 border ${
                  pkg.popular
                    ? "bg-accent/5 border-accent/30"
                    : "bg-surface border-white/5"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-accent text-white text-xs font-medium">
                      <Star className="h-3 w-3" />
                      {t("websitePackages.mostChosen")}
                    </span>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">{pkg.tagline}</p>
                </div>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-white">
                    {pkg.price}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mb-6">
                  {pkg.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-white text-sm"
                    >
                      <Check className="h-4 w-4 text-accent flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className={`w-full ${
                    pkg.popular
                      ? "bg-accent hover:bg-accent-hover text-white"
                      : "bg-white/10 hover:bg-white/20 text-white"
                  }`}
                >
                  <Link href="/offerte" className="flex items-center gap-2">
                    {t("websitePackages.requestQuote")}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hosting Plans */}
      <section className="py-20 bg-surface/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {t("hosting.title")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("hosting.subtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hostingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-2xl p-8 border ${
                  plan.popular
                    ? "bg-accent/5 border-accent/30"
                    : "bg-surface border-white/5"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-accent text-white text-xs font-medium">
                      <Star className="h-3 w-3" />
                      {t("hosting.popular")}
                    </span>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {plan.description}
                  </p>
                </div>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-white">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-white text-sm"
                    >
                      <Check className="h-4 w-4 text-accent flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-white/20 text-white hover:bg-white/5"
                >
                  <Link href="/contact">{t("hosting.moreInfo")}</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SLA Onderhoud Pakketten */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {t("maintenance.title")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("maintenance.subtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {slaPackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-2xl p-6 border ${
                  pkg.popular
                    ? "bg-accent/5 border-accent/30"
                    : "bg-surface border-white/5"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-accent text-white text-xs font-medium">
                      <Star className="h-3 w-3" />
                      {tOnderhoud("packages.popular")}
                    </span>
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-lg font-bold text-white mb-2">
                    {pkg.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-accent">
                      {pkg.price}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      {tOnderhoud("packages.perMonth")}
                    </span>
                  </div>
                  <ul className="text-left space-y-2 mb-6 text-sm">
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <Check className="h-4 w-4 text-accent flex-shrink-0" />
                      {pricing.slaPackages[pkg.id as keyof typeof pricing.slaPackages].features.preventief}
                    </li>
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <Check className="h-4 w-4 text-accent flex-shrink-0" />
                      {pricing.slaPackages[pkg.id as keyof typeof pricing.slaPackages].features.incidenten}
                    </li>
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <Check className="h-4 w-4 text-accent flex-shrink-0" />
                      {pricing.slaPackages[pkg.id as keyof typeof pricing.slaPackages].features.uptime} uptime
                    </li>
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <Button
              asChild
              variant="outline"
              className="border-white/20 text-white hover:bg-white/5"
            >
              <Link href="/diensten/onderhoud" className="flex items-center gap-2">
                {t("maintenance.viewAll")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-surface/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {t("additionalServices.title")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("additionalServices.subtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: pricing.hourlyRates.development.label, price: `${formatPrice(pricing.hourlyRates.development.rate)}${t("additionalServices.perHour")}`, desc: pricing.hourlyRates.development.description },
              { name: pricing.hourlyRates.design.label, price: `${formatPrice(pricing.hourlyRates.design.rate)}${t("additionalServices.perHour")}`, desc: pricing.hourlyRates.design.description },
              { name: pricing.hourlyRates.consultancy.label, price: `${formatPrice(pricing.hourlyRates.consultancy.rate)}${t("additionalServices.perHour")}`, desc: pricing.hourlyRates.consultancy.description },
              { name: pricing.seoAudit.label, price: `${t("additionalServices.from")} ${formatPrice(pricing.seoAudit.price)}`, desc: pricing.seoAudit.description },
            ].map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl bg-surface p-6 border border-white/5 text-center"
              >
                <h3 className="text-lg font-semibold text-white mb-1">
                  {service.name}
                </h3>
                <p className="text-2xl font-bold text-accent mb-2">
                  {service.price}
                </p>
                <p className="text-sm text-muted-foreground">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-surface/50">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {t("faq.title")}
            </h2>
          </motion.div>

          <div className="space-y-4">
            {tarievenFaqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl bg-surface p-6 border border-white/5"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-white font-medium mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground text-sm">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
              <Link href="/offerte" className="flex items-center gap-2">
                {t("cta.requestQuote")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/5"
            >
              <Link href="/contact">{t("cta.contact")}</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
