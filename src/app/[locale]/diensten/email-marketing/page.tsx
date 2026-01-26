import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { type Locale } from "@/i18n/config";
import EmailMarketingPageClient from "./client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles = {
    nl: "E-mail Marketing | Robuust Marketing",
    en: "Email Marketing | Robuust Marketing",
  };

  const descriptions = {
    nl: "Effectieve e-mailcampagnes en marketing automation. Van welkomstreeks tot verlaten winkelwagen - verhoog uw conversies.",
    en: "Effective email campaigns and marketing automation. From welcome series to abandoned cart - increase your conversions.",
  };

  return {
    title: titles[locale as Locale] || titles.nl,
    description: descriptions[locale as Locale] || descriptions.nl,
    openGraph: {
      title: titles[locale as Locale] || titles.nl,
      description: descriptions[locale as Locale] || descriptions.nl,
    },
  };
}

export default async function EmailMarketingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return <EmailMarketingPageClient />;
}
