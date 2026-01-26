import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { type Locale } from "@/i18n/config";
import VideoLatenMakenPageClient from "./client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles = {
    nl: "Video Laten Maken | Robuust Marketing",
    en: "Video Production | Robuust Marketing",
  };

  const descriptions = {
    nl: "Professionele video laten maken? Van bedrijfsfilm tot social media content. Wij verzorgen het complete productieproces van A tot Z.",
    en: "Need professional video production? From corporate films to social media content. We handle the complete production process from A to Z.",
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

export default async function VideoLatenMakenPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return <VideoLatenMakenPageClient />;
}
