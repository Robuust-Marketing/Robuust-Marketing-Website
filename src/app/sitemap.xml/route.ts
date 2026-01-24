import { NextResponse } from "next/server";
import { getSitemapIndex, generateSitemapIndexXml } from "@/lib/sitemap";

export const dynamic = "force-static";
export const revalidate = 3600; // Revalidate every hour

export async function GET() {
  const sitemaps = getSitemapIndex();
  const xml = generateSitemapIndexXml(sitemaps);

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
