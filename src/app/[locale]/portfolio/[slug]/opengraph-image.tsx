import { generateOGImage, OG_IMAGE_SIZE } from "@/lib/og-image";
import { getPortfolioItems } from "@/data/portfolio";
import { type Locale } from "@/i18n/config";

export const alt = "Portfolio case study preview";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const portfolioItems = getPortfolioItems(locale as Locale);
  const project = portfolioItems.find((p) => p.slug === slug);

  if (!project) {
    return generateOGImage({
      title: "Project not found",
      subtitle: "Portfolio",
      type: "portfolio",
    });
  }

  return generateOGImage({
    title: project.name,
    subtitle: `Portfolio • ${project.category}`,
    type: "portfolio",
  });
}
