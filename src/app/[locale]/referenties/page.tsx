"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, Star, Quote, Building2, Users, Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ReferentiesPage() {
  const t = useTranslations("referentiesPage");

  const testimonials = [
    { id: "growteq", rating: 5, url: "/portfolio/growteq", isInternal: true },
    { id: "pianoselect", rating: 5, url: "https://www.pianoselect.nl/", isInternal: false },
    { id: "fotolot", rating: 5, url: "https://foto-lot.nl/", isInternal: false },
    { id: "dununba", rating: 5, url: "https://dununba.nl/", isInternal: false },
    { id: "kapsalontine", rating: 5, url: "https://kapsalontine.nl/", isInternal: false },
  ];

  const stats = [
    { value: "50+", labelKey: "clients" },
    { value: "100+", labelKey: "projects" },
    { value: "4.9", labelKey: "rating" },
    { value: "98%", labelKey: "recommend" },
  ];

  const logos = [
    { name: "Growteq", url: "https://growteq.nl" },
    { name: "Piano Select", url: "https://www.pianoselect.nl" },
    { name: "Foto Lot", url: "https://foto-lot.nl" },
    { name: "Dununba", url: "https://dununba.nl" },
    { name: "Kapsalon Tine", url: "https://kapsalontine.nl" },
    { name: "Den Hartog Energies", url: "https://denhartogbv.com" },
    { name: "Villary Buitenleven", url: "https://villary.nl" },
    { name: "Voltra Charging", url: "https://voltracharging.com" },
  ];

  const whyChooseItems = [
    { id: "personal", icon: Users },
    { id: "quality", icon: Award },
    { id: "partnership", icon: Star },
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

      {/* Stats */}
      <section className="py-12">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat) => (
              <div key={stat.labelKey} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-accent mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{t(`stats.${stat.labelKey}`)}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-surface/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => {
              const CardWrapper = testimonial.isInternal ? Link : "a";
              const cardProps = testimonial.isInternal
                ? { href: testimonial.url }
                : { href: testimonial.url, target: "_blank", rel: "noopener noreferrer" };

              return (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CardWrapper
                    {...cardProps}
                    className="block rounded-2xl bg-surface p-6 border border-white/5 hover:border-accent/30 transition-colors group"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-accent text-accent"
                          />
                        ))}
                      </div>
                      {!testimonial.isInternal && (
                        <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
                      )}
                    </div>
                    <Quote className="h-8 w-8 text-accent/30 mb-4" />
                    <p className="text-white mb-6 leading-relaxed">
                      &ldquo;{t(`testimonials.${testimonial.id}.quote`)}&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                        <span className="text-accent font-semibold text-sm">
                          {t(`testimonials.${testimonial.id}.name`)
                            .split(" ")
                            .map((n: string) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div>
                        <div className="text-white font-medium text-sm">
                          {t(`testimonials.${testimonial.id}.name`)}
                        </div>
                        <div className="text-muted-foreground text-xs">
                          {t(`testimonials.${testimonial.id}.role`)} {t("roleAt")} {t(`testimonials.${testimonial.id}.company`)}
                        </div>
                      </div>
                    </div>
                  </CardWrapper>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {t("clients.title")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("clients.subtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {logos.map((logo, index) => (
              <motion.a
                key={logo.name}
                href={logo.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-xl bg-surface p-6 border border-white/5 flex items-center justify-center hover:border-accent/30 transition-colors group"
              >
                <div className="flex items-center gap-2 text-muted-foreground group-hover:text-white transition-colors">
                  <Building2 className="h-5 w-5" />
                  <span className="text-sm font-medium">{logo.name}</span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-surface/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                {t("whyChoose.title")}
              </h2>
              <p className="text-muted-foreground mb-8">
                {t("whyChoose.subtitle")}
              </p>
              <ul className="space-y-4">
                {whyChooseItems.map((item) => (
                  <li key={item.id} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">{t(`whyChoose.${item.id}.title`)}</h3>
                      <p className="text-muted-foreground text-sm">
                        {t(`whyChoose.${item.id}.description`)}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-accent/5 border border-accent/20 p-8"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-2xl text-white font-medium mb-4">
                &ldquo;{t("whyChoose.featuredQuote")}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-accent font-semibold">G</span>
                </div>
                <div>
                  <div className="text-white font-medium">
                    {t("testimonials.growteq.company")}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    <Link href="/portfolio/growteq" className="hover:text-accent transition-colors">
                      {t("cta.secondaryButton")}
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
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
                {t("cta.primaryButton")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/5"
            >
              <Link href="/portfolio">{t("cta.secondaryButton")}</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
