import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { type Locale } from "@/i18n/config";
import DevelopmentPageClient from "./client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles = {
    nl: "Website Development | Robuust Marketing",
    en: "Website Development | Robuust Marketing",
  };

  const descriptions = {
    nl: "Moderne webontwikkeling met Next.js, React en TypeScript. Snelle, veilige en schaalbare websites die converteren.",
    en: "Modern web development with Next.js, React and TypeScript. Fast, secure and scalable websites that convert.",
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

export default async function DevelopmentPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return <DevelopmentPageClient />;
}
