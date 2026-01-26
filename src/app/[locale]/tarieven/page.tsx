import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { type Locale } from "@/i18n/config";
import { generateAlternates } from "@/lib/metadata";
import TarievenPageClient from "./client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles = {
    nl: "Tarieven & Prijzen | Robuust Marketing",
    en: "Pricing & Rates | Robuust Marketing",
  };

  const descriptions = {
    nl: "Transparante tarieven voor webdesign, hosting en onderhoud. Geen verborgen kosten. Bekijk onze prijzen voor websites vanaf 1.495 euro.",
    en: "Transparent pricing for web design, hosting and maintenance. No hidden costs. View our prices for websites starting from 1,495 euros.",
  };

  return {
    title: titles[locale as Locale] || titles.nl,
    description: descriptions[locale as Locale] || descriptions.nl,
    alternates: generateAlternates("/tarieven", locale),
    openGraph: {
      title: titles[locale as Locale] || titles.nl,
      description: descriptions[locale as Locale] || descriptions.nl,
    },
  };
}

export default async function TarievenPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return <TarievenPageClient />;
}
