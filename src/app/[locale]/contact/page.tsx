"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion } from "@/components/motion";
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, HelpCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
  const t = useTranslations("contactPage");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: t("info.email"),
      value: "info@robuustmarketing.nl",
      href: "mailto:info@robuustmarketing.nl",
    },
    {
      icon: Phone,
      title: t("info.phone"),
      value: "+31 85 060 48 77",
      href: "tel:+31850604877",
    },
    {
      icon: MapPin,
      title: t("info.location"),
      value: t("info.locationValue"),
      href: null,
    },
    {
      icon: Clock,
      title: t("info.responseTime"),
      value: t("info.responseTimeValue"),
      href: null,
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

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

      {/* Contact Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-surface p-8 border border-white/5"
            >
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 text-green-500">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {t("success.title")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("success.message")}
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-white mb-6">
                    {t("form.title")}
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">{t("form.name")} *</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder={t("form.namePlaceholder")}
                          required
                          autoComplete="name"
                          className="bg-background border-white/10"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">{t("form.company")}</Label>
                        <Input
                          id="company"
                          name="company"
                          placeholder={t("form.companyPlaceholder")}
                          autoComplete="organization"
                          className="bg-background border-white/10"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">{t("form.email")} *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder={t("form.emailPlaceholder")}
                          required
                          autoComplete="email"
                          className="bg-background border-white/10"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">{t("form.phone")}</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder={t("form.phonePlaceholder")}
                          autoComplete="tel"
                          className="bg-background border-white/10"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">{t("form.subject")} *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder={t("form.subjectPlaceholder")}
                        required
                        className="bg-background border-white/10"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">{t("form.message")} *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder={t("form.messagePlaceholder")}
                        rows={5}
                        required
                        className="bg-background border-white/10 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-accent hover:bg-accent-hover text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        t("form.submitting")
                      ) : (
                        <>
                          {t("form.submit")}
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  {t("info.title")}
                </h2>
                <p className="text-muted-foreground">
                  {t("info.subtitle")}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl bg-surface p-6 border border-white/5"
                  >
                    <div className="mb-3 inline-flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10 text-accent">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">
                      {item.title}
                    </h3>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-white hover:text-accent transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-white">{item.value}</span>
                    )}
                  </div>
                ))}
              </div>

              {/* FAQ link */}
              <Link
                href="/faq"
                className="block rounded-2xl bg-accent/5 border border-accent/20 p-6 hover:border-accent/40 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <HelpCircle className="h-5 w-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-accent transition-colors">
                      {t("faq.title")}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {t("faq.subtitle")}
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors mt-2" />
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
