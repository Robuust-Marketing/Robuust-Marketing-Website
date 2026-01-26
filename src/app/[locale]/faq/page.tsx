import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { type Locale } from "@/i18n/config";
import FAQPageClient from "./client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles = {
    nl: "Veelgestelde Vragen | Robuust Marketing",
    en: "Frequently Asked Questions | Robuust Marketing",
  };

  const descriptions = {
    nl: "Antwoorden op veelgestelde vragen over webdesign, hosting, SEO en onze werkwijze. Vind snel het antwoord op jouw vraag.",
    en: "Answers to frequently asked questions about web design, hosting, SEO and our approach. Quickly find the answer to your question.",
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

export default async function FAQPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return <FAQPageClient />;
}
