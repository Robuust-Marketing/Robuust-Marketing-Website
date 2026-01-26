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
    nl: "Website Laten Maken Zwijndrecht | Robuust Marketing",
    en: "Website Development Zwijndrecht | Robuust Marketing",
  };

  const descriptions = {
    nl: "Website laten maken in Zwijndrecht? Robuust Marketing is uw lokale webbureau voor moderne websites in Zwijndrecht en de Drechtsteden.",
    en: "Looking for website development in Zwijndrecht? Robuust Marketing is your local web agency for modern websites in the Drechtsteden region.",
  };

  return {
    title: titles[locale as Locale] || titles.nl,
    description: descriptions[locale as Locale] || descriptions.nl,
    alternates: generateAlternates("/website-laten-maken-zwijndrecht", locale),
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
