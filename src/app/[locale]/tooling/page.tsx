import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { type Locale } from "@/i18n/config";
import ToolingPageClient from "./client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles = {
    nl: "Tools | Robuust Marketing",
    en: "Tools | Robuust Marketing",
  };

  const descriptions = {
    nl: "Ontdek onze tech stack: Next.js, React, TypeScript, Tailwind CSS, WordPress en meer. Moderne tools voor snelle, veilige websites.",
    en: "Discover our tech stack: Next.js, React, TypeScript, Tailwind CSS, WordPress and more. Modern tools for fast, secure websites.",
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

export default async function ToolingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return <ToolingPageClient />;
}
