import { NextResponse } from "next/server";
import { getAllGuides, getGuidesByCategory, categoryInfo, CategorySlug } from "@/lib/kennisbank";

export async function GET() {
  const categories: CategorySlug[] = ["development", "seo", "hosting"];

  const categoriesWithGuides = categories.map((categorySlug) => ({
    slug: categorySlug,
    ...categoryInfo[categorySlug],
    guides: getGuidesByCategory(categorySlug),
  }));

  const allGuides = getAllGuides();

  return NextResponse.json({
    categories: categoriesWithGuides,
    allGuides,
  });
}
