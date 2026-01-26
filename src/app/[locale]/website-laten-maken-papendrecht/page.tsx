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
    nl: "Website Laten Maken Papendrecht | Robuust Marketing",
    en: "Website Development Papendrecht | Robuust Marketing",
  };

  const descriptions = {
    nl: "Website laten maken in Papendrecht? Robuust Marketing bouwt professionele websites voor ondernemers in Papendrecht en de Drechtsteden.",
    en: "Looking for website development in Papendrecht? Robuust Marketing builds professional websites for businesses in Papendrecht and the Drechtsteden.",
  };

  return {
    title: titles[locale as Locale] || titles.nl,
    description: descriptions[locale as Locale] || descriptions.nl,
    alternates: generateAlternates("/website-laten-maken-papendrecht", locale),
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
