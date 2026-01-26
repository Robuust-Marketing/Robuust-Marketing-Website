import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { type Locale } from "@/i18n/config";
import { generateAlternates } from "@/lib/metadata";
import SupportPageClient from "./client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles = {
    nl: "Support | Robuust Marketing",
    en: "Support | Robuust Marketing",
  };

  const descriptions = {
    nl: "Hulp nodig? Ons supportteam staat voor u klaar. Snelle responstijd, 99.9% uptime garantie en 24/7 noodondersteuning voor hosting klanten.",
    en: "Need help? Our support team is here for you. Fast response time, 99.9% uptime guarantee and 24/7 emergency support for hosting clients.",
  };

  return {
    title: titles[locale as Locale] || titles.nl,
    description: descriptions[locale as Locale] || descriptions.nl,
    alternates: generateAlternates("/support", locale),
    openGraph: {
      title: titles[locale as Locale] || titles.nl,
      description: descriptions[locale as Locale] || descriptions.nl,
    },
  };
}

export default async function SupportPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return <SupportPageClient />;
}
