import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { type Locale } from "@/i18n/config";
import OnderhoudPageClient from "./client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles = {
    nl: "Website Onderhoud & Support | Robuust Marketing",
    en: "Website Maintenance & Support | Robuust Marketing",
  };

  const descriptions = {
    nl: "Professioneel website onderhoud met SLA garantie. Proactieve monitoring, beveiligingsupdates en snelle support bij problemen.",
    en: "Professional website maintenance with SLA guarantee. Proactive monitoring, security updates and fast support for issues.",
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

export default async function OnderhoudPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return <OnderhoudPageClient />;
}
