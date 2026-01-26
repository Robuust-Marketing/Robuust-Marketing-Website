import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { type Locale, defaultLocale } from "@/i18n/config";
import { generateAlternates } from "@/lib/metadata";
import { getTool, getAllToolSlugs } from "@/data/tools";
import { notFound } from "next/navigation";
import ToolDetailPageClient from "./client";

export async function generateStaticParams() {
  const slugs = getAllToolSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const tool = getTool(slug, locale as Locale);

  if (!tool) {
    return {
      title: "Tool niet gevonden | Robuust Marketing",
    };
  }

  const titles = {
    nl: `${tool.name} | Tools | Robuust Marketing`,
    en: `${tool.name} | Tools | Robuust Marketing`,
  };

  const descriptions = {
    nl: tool.description,
    en: tool.description,
  };

  return {
    title: titles[locale as Locale] || titles[defaultLocale],
    description: descriptions[locale as Locale] || descriptions[defaultLocale],
    alternates: generateAlternates(`/tooling/${slug}`, locale),
    openGraph: {
      title: titles[locale as Locale] || titles[defaultLocale],
      description: descriptions[locale as Locale] || descriptions[defaultLocale],
    },
  };
}

export default async function ToolDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale as Locale);

  const tool = getTool(slug, locale as Locale);
  if (!tool) {
    notFound();
  }

  return <ToolDetailPageClient />;
}
