"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function VoorwaardenPage() {
  const t = useTranslations("voorwaardenPage");

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
            className="rounded-3xl bg-surface p-8 md:p-12 border border-white/5 space-y-8"
          >
            {/* Article 1 - Definitions */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                {t("articles.definitions.title")}
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  <strong className="text-white">{t("articles.definitions.robuust.title")}</strong>{" "}
                  {t("articles.definitions.robuust.description")}
                </li>
                <li>
                  <strong className="text-white">{t("articles.definitions.client.title")}</strong>{" "}
                  {t("articles.definitions.client.description")}
                </li>
                <li>
                  <strong className="text-white">{t("articles.definitions.services.title")}</strong>{" "}
                  {t("articles.definitions.services.description")}
                </li>
              </ul>
            </section>

            {/* Article 2 - Applicability */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                {t("articles.applicability.title")}
              </h2>
              <p className="text-muted-foreground mb-4">
                {t("articles.applicability.content1")}
              </p>
              <p className="text-muted-foreground">
                {t("articles.applicability.content2")}
              </p>
            </section>

            {/* Article 3 - Quotes */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                {t("articles.quotes.title")}
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                {(t.raw("articles.quotes.items") as string[]).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            {/* Article 4 - Execution */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                {t("articles.execution.title")}
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                {(t.raw("articles.execution.items") as string[]).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            {/* Article 5 - Payment */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                {t("articles.payment.title")}
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                {(t.raw("articles.payment.items") as string[]).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            {/* Article 6 - IP */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                {t("articles.ip.title")}
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                {(t.raw("articles.ip.items") as string[]).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            {/* Article 7 - Hosting */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                {t("articles.hosting.title")}
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                {(t.raw("articles.hosting.items") as string[]).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            {/* Article 8 - Liability */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                {t("articles.liability.title")}
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                {(t.raw("articles.liability.items") as string[]).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            {/* Article 9 - Termination */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                {t("articles.termination.title")}
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                {(t.raw("articles.termination.items") as string[]).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            {/* Article 10 - Confidentiality */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                {t("articles.confidentiality.title")}
              </h2>
              <p className="text-muted-foreground">
                {t("articles.confidentiality.content")}
              </p>
            </section>

            {/* Article 11 - Disputes */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                {t("articles.disputes.title")}
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                {(t.raw("articles.disputes.items") as string[]).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            {/* Article 12 - Contact */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                {t("articles.contact.title")}
              </h2>
              <p className="text-muted-foreground">
                {t("articles.contact.content", { email: "" })}{" "}
                <a
                  href="mailto:info@robuustmarketing.nl"
                  className="text-accent hover:underline"
                >
                  info@robuustmarketing.nl
                </a>
              </p>
            </section>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
