import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { type Locale } from "@/i18n/config";
import PrivacyPageClient from "./client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles = {
    nl: "Privacybeleid | Robuust Marketing",
    en: "Privacy Policy | Robuust Marketing",
  };

  const descriptions = {
    nl: "Lees hoe Robuust Marketing omgaat met uw persoonsgegevens. Transparant over cookies, dataverwerking en uw privacyrechten conform de AVG.",
    en: "Learn how Robuust Marketing handles your personal data. Transparent about cookies, data processing and your privacy rights in compliance with GDPR.",
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

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return <PrivacyPageClient />;
}
