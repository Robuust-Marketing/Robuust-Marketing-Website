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
    nl: "Website Laten Maken Dordrecht | Robuust Marketing",
    en: "Website Development Dordrecht | Robuust Marketing",
  };

  const descriptions = {
    nl: "Professionele website laten maken in Dordrecht? Robuust Marketing bouwt snelle, moderne websites voor ondernemers in de regio Dordrecht en Drechtsteden.",
    en: "Looking for professional website development in Dordrecht? Robuust Marketing builds fast, modern websites for businesses in the Dordrecht region.",
  };

  return {
    title: titles[locale as Locale] || titles.nl,
    description: descriptions[locale as Locale] || descriptions.nl,
    alternates: generateAlternates("/website-laten-maken-dordrecht", locale),
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
