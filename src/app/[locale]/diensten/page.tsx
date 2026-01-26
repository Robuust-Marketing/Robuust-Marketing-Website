import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { type Locale } from "@/i18n/config";
import { generateAlternates } from "@/lib/metadata";
import DienstenPageClient from "./client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles = {
    nl: "Diensten | Robuust Marketing",
    en: "Services | Robuust Marketing",
  };

  const descriptions = {
    nl: "Ontdek onze complete diensten: webdesign, development, SEO, hosting, onderhoud en online marketing. Alles voor uw online succes.",
    en: "Discover our complete services: web design, development, SEO, hosting, maintenance and online marketing. Everything for your online success.",
  };

  return {
    title: titles[locale as Locale] || titles.nl,
    description: descriptions[locale as Locale] || descriptions.nl,
    alternates: generateAlternates("/diensten", locale),
    openGraph: {
      title: titles[locale as Locale] || titles.nl,
      description: descriptions[locale as Locale] || descriptions.nl,
    },
  };
}

export default async function DienstenPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return <DienstenPageClient />;
}
