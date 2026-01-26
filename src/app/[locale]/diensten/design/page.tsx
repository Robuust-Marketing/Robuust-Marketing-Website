import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { type Locale } from "@/i18n/config";
import { generateAlternates } from "@/lib/metadata";
import DesignPageClient from "./client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles = {
    nl: "Webdesign & UX Design | Robuust Marketing",
    en: "Web Design & UX Design | Robuust Marketing",
  };

  const descriptions = {
    nl: "Professioneel webdesign dat converteert. Responsive designs, UX optimalisatie en visuele identiteit voor uw merk.",
    en: "Professional web design that converts. Responsive designs, UX optimization and visual identity for your brand.",
  };

  return {
    title: titles[locale as Locale] || titles.nl,
    description: descriptions[locale as Locale] || descriptions.nl,
    alternates: generateAlternates("/diensten/design", locale),
    openGraph: {
      title: titles[locale as Locale] || titles.nl,
      description: descriptions[locale as Locale] || descriptions.nl,
    },
  };
}

export default async function DesignPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return <DesignPageClient />;
}
