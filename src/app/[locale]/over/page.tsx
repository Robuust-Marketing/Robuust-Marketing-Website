import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { type Locale } from "@/i18n/config";
import OverPageClient from "./client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles = {
    nl: "Over Ons | Robuust Marketing",
    en: "About Us | Robuust Marketing",
  };

  const descriptions = {
    nl: "Maak kennis met Robuust Marketing. Een webbureau uit de regio Drechtsteden gespecialiseerd in WordPress websites, hosting en online marketing.",
    en: "Meet Robuust Marketing. A web agency from the Drechtsteden region specializing in WordPress websites, hosting and online marketing.",
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

export default async function OverPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return <OverPageClient />;
}
