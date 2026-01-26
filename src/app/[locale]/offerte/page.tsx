import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { type Locale } from "@/i18n/config";
import { generateAlternates } from "@/lib/metadata";
import OffertePageClient from "./client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles = {
    nl: "Offerte Aanvragen | Robuust Marketing",
    en: "Request a Quote | Robuust Marketing",
  };

  const descriptions = {
    nl: "Vraag vrijblijvend een offerte aan voor je website, webshop of marketingproject. Binnen 24 uur persoonlijk advies van onze specialisten.",
    en: "Request a free quote for your website, webshop or marketing project. Get personalized advice from our specialists within 24 hours.",
  };

  return {
    title: titles[locale as Locale] || titles.nl,
    description: descriptions[locale as Locale] || descriptions.nl,
    alternates: generateAlternates("/offerte", locale),
    openGraph: {
      title: titles[locale as Locale] || titles.nl,
      description: descriptions[locale as Locale] || descriptions.nl,
    },
  };
}

export default async function OffertePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return <OffertePageClient />;
}
