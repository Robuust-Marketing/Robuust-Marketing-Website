import { type NextRequest } from "next/server";
import { generateOGImage, type OGImageProps } from "@/lib/og-image";

export const runtime = "edge";

/**
 * Dynamic OG image generation API route
 *
 * Usage: /api/og?title=Page+Title&subtitle=Category&type=blog
 *
 * Parameters:
 * - title (required): Main heading text
 * - subtitle (optional): Category or section name
 * - type (optional): Page type for styling (blog, kennisbank, portfolio, service, default)
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const title = searchParams.get("title") || "Robuust Marketing";
  const subtitle = searchParams.get("subtitle") || undefined;
  const type = (searchParams.get("type") as OGImageProps["type"]) || "default";

  return generateOGImage({ title, subtitle, type });
}
