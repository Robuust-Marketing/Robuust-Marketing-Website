"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Script from "next/script";
import { useEffect, useRef } from "react";

const COOKIEBOT_ID = process.env.NEXT_PUBLIC_COOKIEBOT_ID || "";

export default function PrivacyPageClient() {
  const t = useTranslations("privacyPage");
  const cookieDeclarationRef = useRef<HTMLDivElement>(null);

  // Cookiebot declaration script laden
  useEffect(() => {
    if (COOKIEBOT_ID && cookieDeclarationRef.current) {
      const script = document.createElement("script");
      script.id = "CookieDeclaration";
      script.src = `https://consent.cookiebot.com/${COOKIEBOT_ID}/cd.js`;
      script.async = true;
      cookieDeclarationRef.current.appendChild(script);
    }
  }, []);

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
            <div className="rounded-3xl bg-surface p-8 md:p-12 border border-white/5 space-y-10">
              {/* 1. Verwerkingsverantwoordelijke */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  {t("sections.intro.title")}
                </h2>
                <p className="text-muted-foreground mb-4">
                  {t("sections.intro.content")}
                </p>
                <div className="bg-background/50 rounded-xl p-4 text-muted-foreground whitespace-pre-line text-sm">
                  {t("sections.intro.contactInfo")}
                </div>
              </section>

              {/* 2. Welke persoonsgegevens */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  {t("sections.dataCollection.title")}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {t("sections.dataCollection.intro")}
                </p>

                {/* Contactgegevens */}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {t("sections.dataCollection.categories.contact.title")}
                  </h3>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    {(t.raw("sections.dataCollection.categories.contact.items") as string[]).map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Technische gegevens */}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {t("sections.dataCollection.categories.technical.title")}
                  </h3>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    {(t.raw("sections.dataCollection.categories.technical.items") as string[]).map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Gebruiksgegevens */}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {t("sections.dataCollection.categories.usage.title")}
                  </h3>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    {(t.raw("sections.dataCollection.categories.usage.items") as string[]).map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <p className="text-muted-foreground mt-4 italic">
                  {t("sections.dataCollection.noSensitiveData")}
                </p>
              </section>

              {/* 3. Rechtsgronden */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  {t("sections.legalBasis.title")}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {t("sections.legalBasis.intro")}
                </p>

                <div className="space-y-4">
                  <div className="bg-background/50 rounded-xl p-4">
                    <h3 className="text-white font-semibold mb-1">
                      {t("sections.legalBasis.grounds.consent.title")}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {t("sections.legalBasis.grounds.consent.description")}
                    </p>
                  </div>
                  <div className="bg-background/50 rounded-xl p-4">
                    <h3 className="text-white font-semibold mb-1">
                      {t("sections.legalBasis.grounds.contract.title")}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {t("sections.legalBasis.grounds.contract.description")}
                    </p>
                  </div>
                  <div className="bg-background/50 rounded-xl p-4">
                    <h3 className="text-white font-semibold mb-1">
                      {t("sections.legalBasis.grounds.legitimate.title")}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {t("sections.legalBasis.grounds.legitimate.description")}
                    </p>
                  </div>
                  <div className="bg-background/50 rounded-xl p-4">
                    <h3 className="text-white font-semibold mb-1">
                      {t("sections.legalBasis.grounds.legal.title")}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {t("sections.legalBasis.grounds.legal.description")}
                    </p>
                  </div>
                </div>
              </section>

              {/* 4. Doeleinden */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  {t("sections.purposes.title")}
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  {(t.raw("sections.purposes.items") as string[]).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </section>

              {/* 5. Cookies en tracking */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  {t("sections.cookies.title")}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {t("sections.cookies.intro")}
                </p>

                {/* Google Consent Mode */}
                <div className="bg-accent/10 border border-accent/20 rounded-xl p-4 mb-6">
                  <h3 className="text-white font-semibold mb-2">
                    {t("sections.cookies.consentMode.title")}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {t("sections.cookies.consentMode.description")}
                  </p>
                </div>

                {/* Cookie categorieën */}
                <div className="space-y-6">
                  {/* Noodzakelijk */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {t("sections.cookies.categories.necessary.title")}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      {t("sections.cookies.categories.necessary.description")}
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-sm">
                      {(t.raw("sections.cookies.categories.necessary.examples") as string[]).map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Functioneel */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {t("sections.cookies.categories.functional.title")}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      {t("sections.cookies.categories.functional.description")}
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-sm">
                      {(t.raw("sections.cookies.categories.functional.examples") as string[]).map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Analytisch */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {t("sections.cookies.categories.analytical.title")}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      {t("sections.cookies.categories.analytical.description")}
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-sm">
                      {(t.raw("sections.cookies.categories.analytical.examples") as string[]).map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Marketing */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {t("sections.cookies.categories.marketing.title")}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      {t("sections.cookies.categories.marketing.description")}
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-sm">
                      {(t.raw("sections.cookies.categories.marketing.examples") as string[]).map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Cookiebot */}
                <div className="bg-background/50 rounded-xl p-4 mt-6">
                  <h3 className="text-white font-semibold mb-2">
                    {t("sections.cookies.cookiebot.title")}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {t("sections.cookies.cookiebot.description")}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {t("sections.cookies.cookiebot.declaration")}
                  </p>
                </div>

                <p className="text-muted-foreground text-sm mt-4">
                  {t("sections.cookies.browserSettings")}
                </p>
              </section>

              {/* 6. Ontvangers en doorgifte */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  {t("sections.thirdParties.title")}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {t("sections.thirdParties.intro")}
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {t("sections.thirdParties.recipients.hosting.title")}
                    </h3>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-sm">
                      {(t.raw("sections.thirdParties.recipients.hosting.items") as string[]).map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {t("sections.thirdParties.recipients.analytics.title")}
                    </h3>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-sm">
                      {(t.raw("sections.thirdParties.recipients.analytics.items") as string[]).map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {t("sections.thirdParties.recipients.crm.title")}
                    </h3>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-sm">
                      {(t.raw("sections.thirdParties.recipients.crm.items") as string[]).map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {t("sections.thirdParties.recipients.security.title")}
                    </h3>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-sm">
                      {(t.raw("sections.thirdParties.recipients.security.items") as string[]).map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mt-4">
                  {t("sections.thirdParties.transfers")}
                </p>
                <p className="text-muted-foreground text-sm mt-2 font-semibold">
                  {t("sections.thirdParties.noSale")}
                </p>
              </section>

              {/* 7. Bewaartermijnen */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  {t("sections.retention.title")}
                </h2>
                <p className="text-muted-foreground mb-4">
                  {t("sections.retention.intro")}
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-2 pr-4 text-white font-semibold">Categorie</th>
                        <th className="text-left py-2 text-white font-semibold">Bewaartermijn</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b border-white/5">
                        <td className="py-2 pr-4">{t("sections.retention.periods.contact.category")}</td>
                        <td className="py-2">{t("sections.retention.periods.contact.period")}</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-2 pr-4">{t("sections.retention.periods.client.category")}</td>
                        <td className="py-2">{t("sections.retention.periods.client.period")}</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-2 pr-4">{t("sections.retention.periods.invoices.category")}</td>
                        <td className="py-2">{t("sections.retention.periods.invoices.period")}</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-2 pr-4">{t("sections.retention.periods.analytics.category")}</td>
                        <td className="py-2">{t("sections.retention.periods.analytics.period")}</td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-4">{t("sections.retention.periods.cookies.category")}</td>
                        <td className="py-2">{t("sections.retention.periods.cookies.period")}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* 8. Uw rechten */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  {t("sections.rights.title")}
                </h2>
                <p className="text-muted-foreground mb-4">
                  {t("sections.rights.intro")}
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  {(t.raw("sections.rights.items") as string[]).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p className="text-muted-foreground mb-4">
                  {t("sections.rights.exercise")}
                </p>
                <div className="bg-accent/10 border border-accent/20 rounded-xl p-4">
                  <p className="text-muted-foreground text-sm">
                    {t("sections.rights.complaint")}
                  </p>
                </div>
              </section>

              {/* 9. Beveiliging */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  {t("sections.security.title")}
                </h2>
                <p className="text-muted-foreground mb-4">
                  {t("sections.security.content")}
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  {(t.raw("sections.security.measures") as string[]).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </section>

              {/* 10. Minderjarigen */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  {t("sections.minors.title")}
                </h2>
                <p className="text-muted-foreground">
                  {t("sections.minors.content")}
                </p>
              </section>

              {/* 11. Geautomatiseerde besluitvorming */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  {t("sections.automated.title")}
                </h2>
                <p className="text-muted-foreground">
                  {t("sections.automated.content")}
                </p>
              </section>

              {/* 12. Wijzigingen */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  {t("sections.changes.title")}
                </h2>
                <p className="text-muted-foreground">
                  {t("sections.changes.content")}
                </p>
              </section>

              {/* 13. Contact */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  {t("sections.contact.title")}
                </h2>
                <p className="text-muted-foreground mb-4">
                  {t("sections.contact.content")}
                </p>
                <div className="bg-background/50 rounded-xl p-4 text-muted-foreground whitespace-pre-line text-sm">
                  {t("sections.contact.details")}
                </div>
              </section>

              {/* Cookie-declaratie (Cookiebot) */}
              <section className="border-t border-white/10 pt-10">
                <h2 className="text-2xl font-bold text-white mb-4">
                  {t("sections.cookieDeclaration.title")}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {t("sections.cookieDeclaration.description")}
                </p>

                {/* Cookiebot declaratie wordt hier dynamisch geladen */}
                <div
                  ref={cookieDeclarationRef}
                  className="bg-background/50 rounded-xl p-4 min-h-[200px] [&_a]:text-accent [&_a]:underline [&_table]:w-full [&_th]:text-left [&_th]:text-white [&_th]:font-semibold [&_th]:py-2 [&_th]:pr-4 [&_td]:py-2 [&_td]:pr-4 [&_td]:text-sm [&_tr]:border-b [&_tr]:border-white/5"
                >
                  {!COOKIEBOT_ID && (
                    <p className="text-muted-foreground text-sm italic">
                      Cookie-declaratie wordt geladen...
                    </p>
                  )}
                </div>

                {/* Wijzig cookie-instellingen knop */}
                <div className="mt-6">
                  <button
                    onClick={() => {
                      // Cookiebot consent dialog openen
                      if (typeof window !== "undefined" && (window as Window & { Cookiebot?: { renew?: () => void } }).Cookiebot?.renew) {
                        (window as Window & { Cookiebot?: { renew?: () => void } }).Cookiebot!.renew!();
                      }
                    }}
                    className="inline-flex items-center px-4 py-2 bg-accent hover:bg-accent-hover text-white rounded-lg transition-colors text-sm font-medium"
                  >
                    Wijzig cookie-instellingen
                  </button>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
