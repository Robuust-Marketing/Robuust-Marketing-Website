import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { type Locale } from "@/i18n/config";
import { generateAlternates } from "@/lib/metadata";
import SEOPageClient from "./client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles = {
    nl: "SEO & Zoekmachine Optimalisatie | Robuust Marketing",
    en: "SEO & Search Engine Optimization | Robuust Marketing",
  };

  const descriptions = {
    nl: "Verbeter uw vindbaarheid in Google met professionele SEO. Technische optimalisatie, content en linkbuilding voor duurzame groei.",
    en: "Improve your Google visibility with professional SEO. Technical optimization, content and link building for sustainable growth.",
  };

  return {
    title: titles[locale as Locale] || titles.nl,
    description: descriptions[locale as Locale] || descriptions.nl,
    alternates: generateAlternates("/diensten/seo", locale),
    openGraph: {
      title: titles[locale as Locale] || titles.nl,
      description: descriptions[locale as Locale] || descriptions.nl,
    },
  };
}

export default async function SEOPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return <SEOPageClient />;
}
