import { NextResponse } from "next/server";
import { getPortfolioSitemap, generateSitemapXml } from "@/lib/sitemap";

export const dynamic = "force-static";
export const revalidate = 86400; // Revalidate daily

export async function GET() {
  const entries = getPortfolioSitemap();
  const xml = generateSitemapXml(entries);

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
