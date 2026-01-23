import { NextRequest, NextResponse } from "next/server";
import { getAllGuides, getGuidesByCategory, getCategoryInfo, CategorySlug } from "@/lib/kennisbank";
import { type Locale, defaultLocale, locales } from "@/i18n/config";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const localeParam = searchParams.get("locale") || defaultLocale;

  // Validate locale
  const locale = locales.includes(localeParam as Locale)
    ? (localeParam as Locale)
    : defaultLocale;

  const categories: CategorySlug[] = ["development", "seo", "hosting"];

  const categoriesWithGuides = categories.map((categorySlug) => ({
    slug: categorySlug,
    ...getCategoryInfo(categorySlug, locale),
    guides: getGuidesByCategory(categorySlug, locale),
  }));

  const allGuides = getAllGuides(locale);

  return NextResponse.json({
    categories: categoriesWithGuides,
    allGuides,
    locale,
  });
}
