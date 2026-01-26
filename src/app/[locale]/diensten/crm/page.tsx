import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { type Locale } from "@/i18n/config";
import { generateAlternates } from "@/lib/metadata";
import CRMPageClient from "./client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles = {
    nl: "CRM Implementatie | Robuust Marketing",
    en: "CRM Implementation | Robuust Marketing",
  };

  const descriptions = {
    nl: "Professionele CRM implementatie en integratie met HubSpot, Salesforce en Brevo. Automatiseer uw leadgeneratie en klantbeheer.",
    en: "Professional CRM implementation and integration with HubSpot, Salesforce and Brevo. Automate your lead generation and customer management.",
  };

  return {
    title: titles[locale as Locale] || titles.nl,
    description: descriptions[locale as Locale] || descriptions.nl,
    alternates: generateAlternates("/diensten/crm", locale),
    openGraph: {
      title: titles[locale as Locale] || titles.nl,
      description: descriptions[locale as Locale] || descriptions.nl,
    },
  };
}

export default async function CRMPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return <CRMPageClient />;
}
