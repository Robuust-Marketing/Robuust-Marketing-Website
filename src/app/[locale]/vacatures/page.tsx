import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { type Locale } from "@/i18n/config";
import VacaturesPageClient from "./client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles = {
    nl: "Vacatures | Robuust Marketing",
    en: "Careers | Robuust Marketing",
  };

  const descriptions = {
    nl: "Werk bij Robuust Marketing! Bekijk onze vacatures voor developers, designers en marketeers. Flexibel werken, goede secundaire voorwaarden.",
    en: "Join Robuust Marketing! View our job openings for developers, designers and marketers. Flexible working, great benefits.",
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

export default async function VacaturesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return <VacaturesPageClient />;
}
