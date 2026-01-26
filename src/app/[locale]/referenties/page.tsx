import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { type Locale } from "@/i18n/config";
import ReferentiesPageClient from "./client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles = {
    nl: "Referenties & Reviews | Robuust Marketing",
    en: "References & Reviews | Robuust Marketing",
  };

  const descriptions = {
    nl: "Lees wat onze klanten over ons zeggen. Bekijk referenties en reviews van tevreden opdrachtgevers. Gemiddelde beoordeling: 4.9 sterren.",
    en: "Read what our clients say about us. View references and reviews from satisfied customers. Average rating: 4.9 stars.",
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

export default async function ReferentiesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return <ReferentiesPageClient />;
}
