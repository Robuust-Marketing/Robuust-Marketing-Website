import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { type Locale } from "@/i18n/config";
import { generateAlternates } from "@/lib/metadata";
import { WizardContainer } from "@/components/onboarding/wizard-container";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles = {
    nl: "Start je project | Robuust Marketing",
    en: "Start your project | Robuust Marketing",
  };

  const descriptions = {
    nl: "Vertel ons over je project en ontvang direct een vrijblijvende prijsindicatie. Plan meteen een kennismakingsgesprek in.",
    en: "Tell us about your project and receive a free price estimate immediately. Schedule a discovery call right away.",
  };

  return {
    title: titles[locale as Locale] || titles.nl,
    description: descriptions[locale as Locale] || descriptions.nl,
    alternates: generateAlternates("/start-project", locale),
    openGraph: {
      title: titles[locale as Locale] || titles.nl,
      description: descriptions[locale as Locale] || descriptions.nl,
      type: "website",
    },
  };
}

export default async function StartProjectPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return <WizardContainer />;
}
