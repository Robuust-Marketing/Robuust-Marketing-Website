import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { type Locale } from "@/i18n/config";
import PortfolioPageClient from "./client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles = {
    nl: "Portfolio | Robuust Marketing",
    en: "Portfolio | Robuust Marketing",
  };

  const descriptions = {
    nl: "Bekijk onze gerealiseerde webprojecten. Van corporate websites tot webshops. Ontdek hoe wij bedrijven helpen groeien met professionele websites.",
    en: "View our completed web projects. From corporate websites to webshops. Discover how we help businesses grow with professional websites.",
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

export default async function PortfolioPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return <PortfolioPageClient />;
}
