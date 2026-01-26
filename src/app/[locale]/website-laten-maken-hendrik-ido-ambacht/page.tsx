import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { type Locale } from "@/i18n/config";
import PageClient from "./client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles = {
    nl: "Website Laten Maken Hendrik-Ido-Ambacht | Robuust Marketing",
    en: "Website Development Hendrik-Ido-Ambacht | Robuust Marketing",
  };

  const descriptions = {
    nl: "Website laten maken in Hendrik-Ido-Ambacht? Robuust Marketing bouwt professionele websites voor ondernemers in H-I-Ambacht en de Drechtsteden.",
    en: "Looking for website development in Hendrik-Ido-Ambacht? Robuust Marketing builds professional websites for businesses in the Drechtsteden region.",
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

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return <PageClient />;
}
