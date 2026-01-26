import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { type Locale } from "@/i18n/config";
import { generateAlternates } from "@/lib/metadata";
import GlossaryPageClient from "./client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles = {
    nl: "Woordenlijst | Kennisbank | Robuust Marketing",
    en: "Glossary | Knowledge Base | Robuust Marketing",
  };

  const descriptions = {
    nl: "Verklarende woordenlijst met veelgebruikte termen in webdevelopment, SEO, hosting en online marketing. Van API tot Webhook.",
    en: "Glossary of commonly used terms in web development, SEO, hosting and online marketing. From API to Webhook.",
  };

  return {
    title: titles[locale as Locale] || titles.nl,
    description: descriptions[locale as Locale] || descriptions.nl,
    alternates: generateAlternates("/kennisbank/glossary", locale),
    openGraph: {
      title: titles[locale as Locale] || titles.nl,
      description: descriptions[locale as Locale] || descriptions.nl,
    },
  };
}

export default async function GlossaryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return <GlossaryPageClient />;
}
