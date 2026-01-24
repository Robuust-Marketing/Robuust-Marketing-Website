import { NextResponse } from "next/server";
import { getBlogSitemap, generateSitemapXml } from "@/lib/sitemap";

export const dynamic = "force-static";
export const revalidate = 3600; // Revalidate hourly (blog updates more frequently)

export async function GET() {
  const entries = getBlogSitemap();
  const xml = generateSitemapXml(entries);

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
