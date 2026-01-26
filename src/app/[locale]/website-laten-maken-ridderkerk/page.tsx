import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { type Locale } from "@/i18n/config";
import { generateAlternates } from "@/lib/metadata";
import PageClient from "./client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles = {
    nl: "Website Laten Maken Ridderkerk | Robuust Marketing",
    en: "Website Development Ridderkerk | Robuust Marketing",
  };

  const descriptions = {
    nl: "Website laten maken in Ridderkerk? Robuust Marketing bouwt professionele websites voor ondernemers in Ridderkerk, Bolnes en Slikkerveer.",
    en: "Looking for website development in Ridderkerk? Robuust Marketing builds professional websites for businesses in the Ridderkerk area.",
  };

  return {
    title: titles[locale as Locale] || titles.nl,
    description: descriptions[locale as Locale] || descriptions.nl,
    alternates: generateAlternates("/website-laten-maken-ridderkerk", locale),
    openGraph: {
      title: titles[locale as Locale] || titles.nl,
      description: descriptions[locale as Locale] || descriptions.nl,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return <PageClient />;
}
