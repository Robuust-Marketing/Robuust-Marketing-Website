import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { type Locale } from "@/i18n/config";
import { generateAlternates } from "@/lib/metadata";
import WerkwijzePageClient from "./client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles = {
    nl: "Onze Werkwijze | Robuust Marketing",
    en: "Our Approach | Robuust Marketing",
  };

  const descriptions = {
    nl: "Ontdek hoe wij werken. Van kennismaking tot lancering in 5 overzichtelijke fases. Persoonlijk contact en transparante communicatie.",
    en: "Discover how we work. From introduction to launch in 5 clear phases. Personal contact and transparent communication.",
  };

  return {
    title: titles[locale as Locale] || titles.nl,
    description: descriptions[locale as Locale] || descriptions.nl,
    alternates: generateAlternates("/werkwijze", locale),
    openGraph: {
      title: titles[locale as Locale] || titles.nl,
      description: descriptions[locale as Locale] || descriptions.nl,
    },
  };
}

export default async function WerkwijzePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return <WerkwijzePageClient />;
}
