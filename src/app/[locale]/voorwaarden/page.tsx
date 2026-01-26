import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { type Locale } from "@/i18n/config";
import VoorwaardenPageClient from "./client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles = {
    nl: "Algemene Voorwaarden | Robuust Marketing",
    en: "Terms and Conditions | Robuust Marketing",
  };

  const descriptions = {
    nl: "Bekijk de algemene voorwaarden van Robuust Marketing. Duidelijke afspraken over onze webdevelopment, hosting en onderhoudsdiensten.",
    en: "View the terms and conditions of Robuust Marketing. Clear agreements about our web development, hosting and maintenance services.",
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

export default async function VoorwaardenPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return <VoorwaardenPageClient />;
}
