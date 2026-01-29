import { generateOGImage, OG_IMAGE_SIZE } from "@/lib/og-image";
import { getBlogPost } from "@/lib/blog";
import { type Locale } from "@/i18n/config";

export const alt = "Blog article preview";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = getBlogPost(slug, locale as Locale);

  if (!post) {
    return generateOGImage({
      title: "Article not found",
      subtitle: "Blog",
      type: "blog",
    });
  }

  return generateOGImage({
    title: post.title,
    subtitle: post.category,
    type: "blog",
  });
}
