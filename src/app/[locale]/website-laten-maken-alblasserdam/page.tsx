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
    nl: "Website Laten Maken Alblasserdam | Robuust Marketing",
    en: "Website Development Alblasserdam | Robuust Marketing",
  };

  const descriptions = {
    nl: "Website laten maken in Alblasserdam? Robuust Marketing bouwt professionele websites voor ondernemers in Alblasserdam, Kinderdijk en de Alblasserwaard.",
    en: "Looking for website development in Alblasserdam? Robuust Marketing builds professional websites for businesses in Alblasserdam and the Alblasserwaard region.",
  };

  return {
    title: titles[locale as Locale] || titles.nl,
    description: descriptions[locale as Locale] || descriptions.nl,
    alternates: generateAlternates("/website-laten-maken-alblasserdam", locale),
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
