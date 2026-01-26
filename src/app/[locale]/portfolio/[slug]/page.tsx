import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { type Locale, defaultLocale } from "@/i18n/config";
import { generateAlternates } from "@/lib/metadata";
import { getPortfolioItems } from "@/data/portfolio";
import CaseStudyPageClient from "./client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const portfolioItems = getPortfolioItems(locale as Locale);
  const project = portfolioItems.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project niet gevonden | Robuust Marketing",
      description: "Dit project kon niet worden gevonden.",
    };
  }

  const titles = {
    nl: `${project.name} | Portfolio | Robuust Marketing`,
    en: `${project.name} | Portfolio | Robuust Marketing`,
  };

  const descriptions = {
    nl: project.shortDescription,
    en: project.shortDescription,
  };

  return {
    title: titles[locale as Locale] || titles.nl,
    description: descriptions[locale as Locale] || descriptions.nl,
    alternates: generateAlternates(`/portfolio/${slug}`, locale),
    openGraph: {
      title: titles[locale as Locale] || titles.nl,
      description: descriptions[locale as Locale] || descriptions.nl,
      images: project.image ? [{ url: project.image }] : undefined,
    },
  };
}

export async function generateStaticParams() {
  const portfolioItemsNL = getPortfolioItems(defaultLocale);

  return portfolioItemsNL.map((item) => ({
    slug: item.slug,
  }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return <CaseStudyPageClient />;
}
