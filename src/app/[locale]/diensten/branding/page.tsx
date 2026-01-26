import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { type Locale } from "@/i18n/config";
import { generateAlternates } from "@/lib/metadata";
import BrandingPageClient from "./client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles = {
    nl: "Branding & Huisstijl | Robuust Marketing",
    en: "Branding & Corporate Identity | Robuust Marketing",
  };

  const descriptions = {
    nl: "Sterke merkidentiteit die blijft hangen. Logo ontwerp, huisstijl en brand guidelines voor een consistent en professioneel merk.",
    en: "Strong brand identity that sticks. Logo design, corporate identity and brand guidelines for a consistent professional brand.",
  };

  return {
    title: titles[locale as Locale] || titles.nl,
    description: descriptions[locale as Locale] || descriptions.nl,
    alternates: generateAlternates("/diensten/branding", locale),
    openGraph: {
      title: titles[locale as Locale] || titles.nl,
      description: descriptions[locale as Locale] || descriptions.nl,
    },
  };
}

export default async function BrandingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return <BrandingPageClient />;
}
