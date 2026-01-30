import { generateOGImage, OG_IMAGE_SIZE } from "@/lib/og-image";
import { getGuide, type CategorySlug } from "@/lib/kennisbank";
import { type Locale } from "@/i18n/config";

export const alt = "Knowledge base guide preview";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string; category: string; slug: string }>;
}) {
  const { locale, category, slug } = await params;
  const guide = getGuide(category as CategorySlug, slug, locale as Locale);

  const categoryLabel = locale === "en" ? "Knowledge Base" : "Kennisbank";

  if (!guide) {
    return generateOGImage({
      title: "Guide not found",
      subtitle: categoryLabel,
      type: "kennisbank",
    });
  }

  return generateOGImage({
    title: guide.title,
    subtitle: `${categoryLabel} • ${guide.category}`,
    type: "kennisbank",
  });
}
