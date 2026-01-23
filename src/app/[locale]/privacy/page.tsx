"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function PrivacyPage() {
  const t = useTranslations("privacyPage");

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
                "radial-gradient(ellipse, rgba(197, 60, 11, 0.1) 0%, transparent 60%)",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
          >
            {t("title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground"
          >
            {t("lastUpdated")}
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose prose-invert prose-lg max-w-none"
          >
            <div className="rounded-3xl bg-surface p-8 md:p-12 border border-white/5 space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  {t("sections.intro.title")}
                </h2>
                <p className="text-muted-foreground">
                  {t("sections.intro.content")}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  {t("sections.dataCollection.title")}
                </h2>
                <p className="text-muted-foreground mb-4">
                  {t("sections.dataCollection.intro")}
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  {(t.raw("sections.dataCollection.items") as string[]).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  {t("sections.dataUsage.title")}
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  {(t.raw("sections.dataUsage.items") as string[]).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  {t("sections.cookies.title")}
                </h2>
                <p className="text-muted-foreground mb-4">
                  {t("sections.cookies.intro")}
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    <strong className="text-white">{t("sections.cookies.functional.title")}</strong>{" "}
                    {t("sections.cookies.functional.description")}
                  </li>
                  <li>
                    <strong className="text-white">{t("sections.cookies.analytical.title")}</strong>{" "}
                    {t("sections.cookies.analytical.description")}
                  </li>
                  <li>
                    <strong className="text-white">{t("sections.cookies.marketing.title")}</strong>{" "}
                    {t("sections.cookies.marketing.description")}
                  </li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  {t("sections.cookies.outro")}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  {t("sections.retention.title")}
                </h2>
                <p className="text-muted-foreground">
                  {t("sections.retention.content")}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  {t("sections.thirdParties.title")}
                </h2>
                <p className="text-muted-foreground mb-4">
                  {t("sections.thirdParties.intro")}
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  {(t.raw("sections.thirdParties.items") as string[]).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p className="text-muted-foreground mt-4">
                  {t("sections.thirdParties.outro")}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  {t("sections.rights.title")}
                </h2>
                <p className="text-muted-foreground mb-4">
                  {t("sections.rights.intro")}
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  {(t.raw("sections.rights.items") as string[]).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p className="text-muted-foreground mt-4">
                  {t("sections.rights.outro", { email: "" })}{" "}
                  <a
                    href="mailto:info@robuustmarketing.nl"
                    className="text-accent hover:underline"
                  >
                    info@robuustmarketing.nl
                  </a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  {t("sections.security.title")}
                </h2>
                <p className="text-muted-foreground">
                  {t("sections.security.content")}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  {t("sections.contact.title")}
                </h2>
                <p className="text-muted-foreground">
                  {t("sections.contact.content", { email: "" })}{" "}
                  <a
                    href="mailto:info@robuustmarketing.nl"
                    className="text-accent hover:underline"
                  >
                    info@robuustmarketing.nl
                  </a>
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
