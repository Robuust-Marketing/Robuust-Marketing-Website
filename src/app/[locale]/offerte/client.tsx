"use client";

import { Link } from "@/i18n/routing";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "@/components/motion";
import { ArrowRight, Check, Clock, Shield, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { getPricingLabels } from "@/data/pricing";
import { type Locale } from "@/i18n/config";

export default function OffertePageClient() {
  const t = useTranslations("offertePage");
  const locale = useLocale() as Locale;
  const pricingLabels = getPricingLabels(locale);

  const services = [
    { id: "website", label: t("services.website") },
    { id: "webshop", label: t("services.webshop") },
    { id: "redesign", label: t("services.redesign") },
    { id: "hosting", label: t("services.hosting") },
    { id: "seo", label: t("services.seo") },
    { id: "video", label: t("services.video") },
    { id: "branding", label: t("services.branding") },
    { id: "marketing", label: t("services.marketing") },
    { id: "anders", label: t("services.other") },
  ];

  // Budget ranges from central pricing config
  const budgets = pricingLabels.budgetRanges;

  // Timelines from central pricing config
  const timelines = pricingLabels.timelines;

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    budget: "",
    timeline: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleService = (serviceId: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((s) => s !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Redirect to bedankt page
    window.location.href = "/bedankt?type=offerte";
  };

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
                "radial-gradient(ellipse, rgba(197, 60, 11, 0.15) 0%, transparent 60%)",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
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
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
          >
            {t("titleLine1")}{" "}
            <span className="text-gradient-accent">{t("titleLine2")}</span>{" "}
            {t("titleLine3")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg"
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
              <Clock className="h-4 w-4 text-accent" />
              {t("trust.response")}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="h-4 w-4 text-accent" />
              {t("trust.noObligation")}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MessageSquare className="h-4 w-4 text-accent" />
              {t("trust.personalAdvice")}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="py-12">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            {/* Services */}
            <div className="rounded-2xl bg-surface p-6 border border-white/5">
              <h2 className="text-xl font-semibold text-white mb-4">
                {t("services.title")}
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                {t("services.subtitle")}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services.map((service) => (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => toggleService(service.id)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg border text-left transition-all ${
                      selectedServices.includes(service.id)
                        ? "border-accent bg-accent/10 text-white"
                        : "border-white/10 text-muted-foreground hover:border-white/20"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded flex items-center justify-center ${
                        selectedServices.includes(service.id)
                          ? "bg-accent"
                          : "bg-white/10"
                      }`}
                    >
                      {selectedServices.includes(service.id) && (
                        <Check className="h-3 w-3 text-white" />
                      )}
                    </div>
                    <span className="text-sm">{service.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="rounded-2xl bg-surface p-6 border border-white/5">
              <h2 className="text-xl font-semibold text-white mb-4">
                {t("contact.title")}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    {t("contact.name")} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg bg-background border border-white/10 text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder={t("contact.namePlaceholder")}
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    {t("contact.company")}
                  </label>
                  <input
                    type="text"
                    id="company"
                    autoComplete="organization"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg bg-background border border-white/10 text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder={t("contact.companyPlaceholder")}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    {t("contact.email")} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    autoComplete="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg bg-background border border-white/10 text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder={t("contact.emailPlaceholder")}
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    {t("contact.phone")}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg bg-background border border-white/10 text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder={t("contact.phonePlaceholder")}
                  />
                </div>
              </div>
            </div>

            {/* Budget & Timeline */}
            <div className="rounded-2xl bg-surface p-6 border border-white/5">
              <h2 className="text-xl font-semibold text-white mb-4">
                {t("budgetTimeline.title")}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-3">
                    {t("budgetTimeline.budgetLabel")}
                  </label>
                  <div className="space-y-2">
                    {budgets.map((budget) => (
                      <label
                        key={budget.id}
                        className={`flex items-center gap-3 px-4 py-2 rounded-lg border cursor-pointer transition-all ${
                          formData.budget === budget.id
                            ? "border-accent bg-accent/10 text-white"
                            : "border-white/10 text-muted-foreground hover:border-white/20"
                        }`}
                      >
                        <input
                          type="radio"
                          name="budget"
                          value={budget.id}
                          checked={formData.budget === budget.id}
                          onChange={(e) =>
                            setFormData({ ...formData, budget: e.target.value })
                          }
                          className="sr-only"
                        />
                        <div
                          className={`w-4 h-4 rounded-full border-2 ${
                            formData.budget === budget.id
                              ? "border-accent bg-accent"
                              : "border-white/30"
                          }`}
                        />
                        <span className="text-sm">{budget.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-3">
                    {t("budgetTimeline.timelineLabel")}
                  </label>
                  <div className="space-y-2">
                    {timelines.map((timeline) => (
                      <label
                        key={timeline.id}
                        className={`flex items-center gap-3 px-4 py-2 rounded-lg border cursor-pointer transition-all ${
                          formData.timeline === timeline.id
                            ? "border-accent bg-accent/10 text-white"
                            : "border-white/10 text-muted-foreground hover:border-white/20"
                        }`}
                      >
                        <input
                          type="radio"
                          name="timeline"
                          value={timeline.id}
                          checked={formData.timeline === timeline.id}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              timeline: e.target.value,
                            })
                          }
                          className="sr-only"
                        />
                        <div
                          className={`w-4 h-4 rounded-full border-2 ${
                            formData.timeline === timeline.id
                              ? "border-accent bg-accent"
                              : "border-white/30"
                          }`}
                        />
                        <span className="text-sm">{timeline.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="rounded-2xl bg-surface p-6 border border-white/5">
              <h2 className="text-xl font-semibold text-white mb-4">
                {t("description.title")}
              </h2>
              <textarea
                id="description"
                rows={5}
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg bg-background border border-white/10 text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                placeholder={t("description.placeholder")}
              />
            </div>

            {/* Submit */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <p className="text-sm text-muted-foreground">
                {t("submit.required")}
              </p>
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="bg-accent hover:bg-accent-hover text-white w-full sm:w-auto"
              >
                {isSubmitting ? (
                  t("submit.submitting")
                ) : (
                  <>
                    {t("submit.button")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </motion.form>
        </div>
      </section>

      {/* Alternative CTA */}
      <section className="py-12 bg-surface/50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground mb-4"
          >
            {t("alternative.title")}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              asChild
              variant="outline"
              className="border-white/20 text-white hover:bg-white/5"
            >
              <Link href="/contact">{t("alternative.contact")}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white/20 text-white hover:bg-white/5"
            >
              <a href="tel:+31850604877">{t("alternative.call")}</a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
