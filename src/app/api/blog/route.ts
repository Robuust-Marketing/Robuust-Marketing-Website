import { NextRequest, NextResponse } from "next/server";
import { getAllBlogPosts, getBlogCategories } from "@/lib/blog";
import { type Locale, defaultLocale, locales } from "@/i18n/config";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const localeParam = searchParams.get("locale") || defaultLocale;

  // Validate locale
  const locale = locales.includes(localeParam as Locale)
    ? (localeParam as Locale)
    : defaultLocale;

  const posts = getAllBlogPosts(locale);
  const categories = getBlogCategories(locale);

  return NextResponse.json({
    posts,
    categories,
    locale,
  });
}
