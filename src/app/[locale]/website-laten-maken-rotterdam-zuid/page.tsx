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
    nl: "Website Laten Maken Rotterdam-Zuid | Robuust Marketing",
    en: "Website Development Rotterdam South | Robuust Marketing",
  };

  const descriptions = {
    nl: "Website laten maken in Rotterdam-Zuid? Robuust Marketing is uw lokale webbureau voor snelle, professionele websites in Feijenoord, Charlois en IJsselmonde.",
    en: "Looking for website development in Rotterdam South? Robuust Marketing is your local web agency for fast, professional websites in the Rotterdam area.",
  };

  return {
    title: titles[locale as Locale] || titles.nl,
    description: descriptions[locale as Locale] || descriptions.nl,
    alternates: generateAlternates("/website-laten-maken-rotterdam-zuid", locale),
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
