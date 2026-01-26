import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { type Locale } from "@/i18n/config";
import HostingPageClient from "./client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles = {
    nl: "Managed Hosting | Robuust Marketing",
    en: "Managed Hosting | Robuust Marketing",
  };

  const descriptions = {
    nl: "Premium managed hosting met 99.9% uptime garantie. Snelle servers, dagelijkse backups en proactieve monitoring voor uw website.",
    en: "Premium managed hosting with 99.9% uptime guarantee. Fast servers, daily backups and proactive monitoring for your website.",
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

export default async function HostingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return <HostingPageClient />;
}
