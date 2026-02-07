"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Handshake, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PartnersPageClient() {
  const t = useTranslations("partnersPage");

  const partners = [
    {
      id: "helloitsme",
      website: "https://helloitsme.nl",
    },
    {
      id: "taggrs",
      website: "https://taggrs.io",
    },
    {
      id: "cloudflare",
      website: "https://cloudflare.com",
    },
    {
      id: "hetzner",
      website: "https://www.hetzner.com",
    },
  ];

  const benefits = [
    { id: "trusted", icon: Handshake },
    { id: "expertise", icon: Users },
    { id: "streamlined", icon: Zap },
  ];

  const toolUrls: Record<string, string> = {
    // Advertising
    meta: "https://business.facebook.com",
    googleAds: "https://ads.google.com",
    tiktok: "https://ads.tiktok.com/business/",
    linkedin: "https://business.linkedin.com",
    pinterest: "https://business.pinterest.com",
    // CRM
    hubspot: "https://www.hubspot.com",
    mailchimp: "https://mailchimp.com",
    brevo: "https://www.brevo.com",
    activecampaign: "https://www.activecampaign.com",
    klaviyo: "https://www.klaviyo.com",
    // Analytics
    ga: "https://analytics.google.com",
    gtm: "https://tagmanager.google.com",
    clarity: "https://clarity.microsoft.com",
    hotjar: "https://www.hotjar.com",
    taggrs: "https://taggrs.io",
    // Ecommerce
    woocommerce: "https://woocommerce.com",
    funnelkit: "https://funnelkit.com",
    mollie: "https://www.mollie.com",
    sendcloud: "https://www.sendcloud.com/nl/",
    // CMS
    wordpress: "https://wordpress.org",
    nextjs: "https://nextjs.org",
    sanity: "https://www.sanity.io",
    strapi: "https://strapi.io",
    // Design
    adobe: "https://www.adobe.com",
    figma: "https://www.figma.com",
    canva: "https://www.canva.com",
    midjourney: "https://www.midjourney.com",
    // Productivity
    microsoft365: "https://www.microsoft.com/microsoft-365",
    googleWorkspace: "https://workspace.google.com",
    slack: "https://slack.com",
    clickup: "https://clickup.com",
  };

  const toolCategories = [
    {
      id: "advertising",
      tools: ["meta", "googleAds", "tiktok", "linkedin", "pinterest"],
    },
    {
      id: "crm",
      tools: ["hubspot", "mailchimp", "brevo", "activecampaign", "klaviyo"],
    },
    {
      id: "analytics",
      tools: ["ga", "gtm", "clarity", "hotjar", "taggrs"],
    },
    {
      id: "ecommerce",
      tools: ["woocommerce", "funnelkit", "mollie", "sendcloud"],
    },
    {
      id: "cms",
      tools: ["wordpress", "nextjs", "sanity", "strapi"],
    },
    {
      id: "design",
      tools: ["adobe", "figma", "canva", "midjourney"],
    },
    {
      id: "productivity",
      tools: ["microsoft365", "googleWorkspace", "slack", "clickup"],
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

      {/* Benefits Section */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl bg-surface p-6 border border-white/5 text-center"
              >
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {t(`benefits.${benefit.id}.title`)}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t(`benefits.${benefit.id}.description`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group rounded-3xl bg-surface p-8 border border-white/5 hover:border-white/10 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-accent text-xs font-medium uppercase tracking-wider">
                      {t(`partners.${partner.id}.category`)}
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-1">
                      {t(`partners.${partner.id}.name`)}
                    </h3>
                  </div>
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>

                <p className="text-muted-foreground mb-6">
                  {t(`partners.${partner.id}.description`)}
                </p>

                <div className="flex flex-wrap gap-2">
                  {(t.raw(`partners.${partner.id}.expertise`) as string[]).map((item) => (
                    <span
                      key={item}
                      className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies Section */}
      <section className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-4">
              {t("tools.badge")}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {t("tools.title")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("tools.subtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {toolCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="rounded-2xl bg-surface p-6 border border-white/5"
              >
                <h3 className="text-lg font-semibold text-white mb-4">
                  {t(`tools.categories.${category.id}.name`)}
                </h3>
                <ul className="space-y-3">
                  {category.tools.map((toolId) => (
                    <li key={toolId}>
                      <a
                        href={toolUrls[toolId]}
                        target="_blank"
                        rel="noopener"
                        className="flex items-start gap-3 group"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                        <div>
                          <span className="text-white font-medium group-hover:text-accent transition-colors">
                            {t(`tools.categories.${category.id}.tools.${toolId}.name`)}
                            <ExternalLink className="inline-block ml-1.5 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </span>
                          <p className="text-sm text-muted-foreground">
                            {t(`tools.categories.${category.id}.tools.${toolId}.description`)}
                          </p>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
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
