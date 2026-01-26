import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { type Locale } from "@/i18n/config";
import TrackingPageClient from "./client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles = {
    nl: "Analytics & Tracking | Robuust Marketing",
    en: "Analytics & Tracking | Robuust Marketing",
  };

  const descriptions = {
    nl: "Professionele analytics setup met GA4, server-side tracking en GDPR-compliant cookiebeheer. Meet wat echt telt.",
    en: "Professional analytics setup with GA4, server-side tracking and GDPR-compliant cookie management. Measure what matters.",
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

export default async function TrackingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return <TrackingPageClient />;
}
