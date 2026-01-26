import { notFound, redirect } from "next/navigation";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { Clock, Tag, Calendar, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getBlogPost, getAllBlogSlugs, getAllBlogPosts, extractHeadings, getTranslatedSlug } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import { setRequestLocale } from "next-intl/server";
import { locales, type Locale } from "@/i18n/config";
import {
  ReadingProgress,
  TableOfContents,
  ShareButtons,
  AuthorBio,
  MobileActionBar,
  ArticleNavigation,
  Breadcrumbs,
  BlogTranslationSetter,
} from "@/components/blog";

export async function generateStaticParams() {
  // Generate params for all locales
  const params: { locale: string; slug: string }[] = [];

  for (const locale of locales) {
    const slugs = getAllBlogSlugs(locale);
    for (const slug of slugs) {
      params.push({ locale, slug });
    }
  }

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = getBlogPost(slug, locale as Locale);

  if (!post) {
    return {
      title: locale === "en" ? "Article not found | Robuust Marketing" : "Artikel niet gevonden | Robuust Marketing",
    };
  }

  // Build hreflang alternates
  const alternates: { canonical: string; languages: Record<string, string> } = {
    canonical: `https://robuustmarketing.nl${locale === "nl" ? "" : `/${locale}`}/blog/${slug}`,
    languages: {},
  };

  // Add current locale
  const nlSlug = locale === "nl" ? slug : (post.translations?.nl || null);
  const enSlug = locale === "en" ? slug : (post.translations?.en || null);

  if (nlSlug) {
    alternates.languages["nl"] = `https://robuustmarketing.nl/blog/${nlSlug}`;
    alternates.languages["x-default"] = `https://robuustmarketing.nl/blog/${nlSlug}`;
  }
  if (enSlug) {
    alternates.languages["en"] = `https://robuustmarketing.nl/en/blog/${enSlug}`;
  }

  return {
    title: `${post.title} | Blog | Robuust Marketing`,
    description: post.excerpt,
    alternates,
  };
}

function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/--+/g, "-")
    .trim();
}

// Parse Dutch date format to ISO date
function parseDate(dateStr: string): string {
  const months: Record<string, string> = {
    januari: "01",
    februari: "02",
    maart: "03",
    april: "04",
    mei: "05",
    juni: "06",
    juli: "07",
    augustus: "08",
    september: "09",
    oktober: "10",
    november: "11",
    december: "12",
  };

  const parts = dateStr.toLowerCase().split(" ");
  if (parts.length === 3) {
    const day = parts[0].padStart(2, "0");
    const month = months[parts[1]] || "01";
    const year = parts[2];
    return `${year}-${month}-${day}`;
  }
  return dateStr;
}

const createMdxComponents = () => ({
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="text-3xl sm:text-4xl font-bold text-white mt-8 mb-4" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => {
    const text = typeof props.children === "string" ? props.children : "";
    const id = slugify(text);
    return (
      <h2
        id={id}
        className="text-2xl sm:text-3xl font-bold text-white mt-8 mb-4 scroll-mt-24"
        {...props}
      />
    );
  },
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => {
    const text = typeof props.children === "string" ? props.children : "";
    const id = slugify(text);
    return (
      <h3
        id={id}
        className="text-xl sm:text-2xl font-semibold text-white mt-6 mb-3 scroll-mt-24"
        {...props}
      />
    );
  },
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4 className="text-lg font-semibold text-white mt-4 mb-2" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-muted-foreground leading-relaxed mb-4" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal list-inside text-muted-foreground mb-4 space-y-2" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="text-muted-foreground" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-accent hover:underline" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="border-l-4 border-accent pl-4 italic text-muted-foreground my-6" {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code className="bg-surface px-2 py-1 rounded text-sm font-mono text-accent" {...props} />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre className="bg-surface p-4 rounded-lg overflow-x-auto mb-4 text-sm" {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-white" {...props} />
  ),
  em: (props: React.HTMLAttributes<HTMLElement>) => (
    <em className="italic" {...props} />
  ),
  hr: () => <hr className="border-white/10 my-8" />,
  table: (props: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="overflow-x-auto mb-4">
      <table className="w-full border-collapse" {...props} />
    </div>
  ),
  th: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th className="border border-white/10 px-4 py-2 bg-surface text-white text-left" {...props} />
  ),
  td: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td className="border border-white/10 px-4 py-2 text-muted-foreground" {...props} />
  ),
});

// Fallback notice component
function FallbackNotice({ locale }: { locale: Locale }) {
  const message = locale === "en"
    ? "This article is not yet available in English. Showing the Dutch version."
    : "Dit artikel is nog niet beschikbaar in het Engels. De Nederlandse versie wordt getoond.";

  return (
    <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mb-8 flex items-start gap-3">
      <AlertCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
      <p className="text-sm text-white/80">{message}</p>
    </div>
  );
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale as Locale);

  const post = getBlogPost(slug, locale as Locale);

  if (!post) {
    notFound();
  }

  // If showing fallback content and a translation exists, redirect to the translated slug
  if (post.isFallback && post.translations) {
    const translatedSlug = post.translations[locale as Locale];
    if (translatedSlug && translatedSlug !== slug) {
      const basePath = locale === "nl" ? "" : `/${locale}`;
      redirect(`${basePath}/blog/${translatedSlug}`);
    }
  }

  const headings = extractHeadings(post.content);
  const allPosts = getAllBlogPosts(locale as Locale);
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);

  // Get previous and next posts
  const previousPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  const relatedPosts = allPosts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 3);

  const basePath = locale === "nl" ? "" : `/${locale}`;
  const articleUrl = `https://robuustmarketing.nl${basePath}/blog/${slug}`;
  const isoDate = parseDate(post.date);

  // Translations
  const t = {
    skipToArticle: locale === "en" ? "Skip to article" : "Ga direct naar artikel",
    readTime: locale === "en" ? "read time" : "leestijd",
    by: locale === "en" ? "By" : "Door",
    relatedArticles: locale === "en" ? "Related articles" : "Gerelateerde artikelen",
    needHelp: locale === "en" ? "Need help with your website?" : "Hulp nodig bij jouw website?",
    helpDescription: locale === "en"
      ? "We're happy to help you with development, hosting and online marketing."
      : "Wij helpen je graag met development, hosting en online marketing.",
    contactUs: locale === "en" ? "Contact us" : "Neem contact op",
  };

  return (
    <>
      {/* Set blog translations for language switcher */}
      <BlogTranslationSetter
        translations={post.translations}
        currentSlug={slug}
        currentLocale={locale as "nl" | "en"}
      />

      {/* Skip Link */}
      <a
        href="#article-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:bg-accent focus:text-white focus:px-4 focus:py-2 focus:rounded"
      >
        {t.skipToArticle}
      </a>

      <ReadingProgress />
      <MobileActionBar title={post.title} url={articleUrl} headings={headings} />

      <div className="min-h-screen pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Breadcrumbs */}
          <Breadcrumbs category={post.category} title={post.title} />

          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            {/* Main Content */}
            <article className="lg:col-span-8" id="article-content">
              {/* Fallback notice if showing Dutch content for English locale */}
              {post.isFallback && <FallbackNotice locale={locale as Locale} />}

              {/* Header */}
              <header className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full">
                    <Tag className="h-3 w-3" aria-hidden="true" />
                    {post.category}
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                  {post.title}
                </h1>

                <p className="text-xl text-muted-foreground mb-6">{post.excerpt}</p>

                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <time dateTime={isoDate} className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" aria-hidden="true" />
                    {post.date}
                  </time>
                  <span className="flex items-center gap-2">
                    <Clock className="h-4 w-4" aria-hidden="true" />
                    {post.readTime} {t.readTime}
                  </span>
                  {post.author && <span>{t.by} {post.author}</span>}
                </div>
              </header>

              {/* Hero Image */}
              {post.image && (
                <div className="relative aspect-video w-full mb-8 rounded-xl overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 800px"
                  />
                </div>
              )}

              {/* Content */}
              <div className="prose prose-invert max-w-none">
                <MDXRemote source={post.content} components={createMdxComponents()} />
              </div>

              {/* Author Bio */}
              <section className="mt-12 pt-8 border-t border-white/10">
                <AuthorBio author={post.author} />
              </section>

              {/* Article Navigation */}
              <section className="mt-12 pt-8 border-t border-white/10">
                <ArticleNavigation previousPost={previousPost} nextPost={nextPost} />
              </section>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <section className="mt-12 pt-8 border-t border-white/10">
                  <h2 className="text-2xl font-bold text-white mb-6">
                    {t.relatedArticles}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {relatedPosts.map((relatedPost) => (
                      <Link
                        key={relatedPost.slug}
                        href={`${basePath}/blog/${relatedPost.slug}` as any}
                        className="group rounded-xl bg-surface border border-white/5 hover:border-accent/30 p-6 transition-all"
                      >
                        <span className="text-xs font-medium text-accent mb-2 block">
                          {relatedPost.category}
                        </span>
                        <h3 className="font-semibold text-white group-hover:text-accent transition-colors mb-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              {/* CTA */}
              <section className="mt-12 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 p-8 text-center">
                <h2 className="text-2xl font-bold text-white mb-4">
                  {t.needHelp}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {t.helpDescription}
                </p>
                <Button asChild className="bg-accent hover:bg-accent-hover text-white">
                  <Link href={`${basePath}/contact` as any}>{t.contactUs}</Link>
                </Button>
              </section>
            </article>

            {/* Sidebar */}
            <aside className="hidden lg:block lg:col-span-4">
              <div className="sticky top-24 space-y-8">
                {/* Table of Contents */}
                {headings.length > 0 && (
                  <div className="rounded-xl bg-surface border border-white/5 p-6">
                    <TableOfContents headings={headings} />
                  </div>
                )}

                {/* Share Buttons */}
                <div className="rounded-xl bg-surface border border-white/5 p-6">
                  <ShareButtons title={post.title} url={articleUrl} />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
