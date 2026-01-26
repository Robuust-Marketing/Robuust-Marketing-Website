import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { type Locale } from "@/i18n/config";
import AVGPageClient from "./client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles = {
    nl: "AVG & GDPR | Robuust Marketing",
    en: "GDPR Compliance | Robuust Marketing",
  };

  const descriptions = {
    nl: "Ontdek hoe Robuust Marketing AVG-compliant websites bouwt. EU-hosting, privacy by design en volledige GDPR-naleving voor uw bedrijf.",
    en: "Discover how Robuust Marketing builds GDPR-compliant websites. EU hosting, privacy by design and full compliance for your business.",
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

export default async function AVGPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return <AVGPageClient />;
}
