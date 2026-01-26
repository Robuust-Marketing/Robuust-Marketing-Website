import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { type Locale } from "@/i18n/config";
import { generateAlternates } from "@/lib/metadata";
import BedanktPageClient from "./client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles = {
    nl: "Bedankt | Robuust Marketing",
    en: "Thank You | Robuust Marketing",
  };

  const descriptions = {
    nl: "Bedankt voor uw bericht! We nemen zo snel mogelijk contact met u op. Bekijk ondertussen onze diensten en portfolio.",
    en: "Thank you for your message! We will contact you as soon as possible. In the meantime, check out our services and portfolio.",
  };

  return {
    title: titles[locale as Locale] || titles.nl,
    description: descriptions[locale as Locale] || descriptions.nl,
    alternates: generateAlternates("/bedankt", locale),
    robots: {
      index: false,
      follow: true,
    },
    openGraph: {
      title: titles[locale as Locale] || titles.nl,
      description: descriptions[locale as Locale] || descriptions.nl,
    },
  };
}

export default async function BedanktPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return <BedanktPageClient />;
}
