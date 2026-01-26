import { notFound } from "next/navigation";
import { Link } from "@/i18n/routing";
import { ArrowLeft, Clock, BookOpen, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { setRequestLocale } from "next-intl/server";
import {
  getGuide,
  getGuidesByCategory,
  getAllGuideSlugs,
  getCategoryInfo,
  CategorySlug,
} from "@/lib/kennisbank";
import { locales, type Locale } from "@/i18n/config";
import { MDXRemote } from "next-mdx-remote/rsc";

const validCategories: CategorySlug[] = ["development", "seo", "hosting"];

export async function generateStaticParams() {
  const params: { locale: string; category: string; slug: string }[] = [];

  for (const locale of locales) {
    const slugs = getAllGuideSlugs(locale);
    for (const { category, slug } of slugs) {
      params.push({ locale, category, slug });
    }
  }

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; category: string; slug: string }>;
}) {
  const { locale, category, slug } = await params;
  const guide = getGuide(category as CategorySlug, slug, locale as Locale);

  if (!guide) {
    return {
      title: locale === "en" ? "Guide not found | Robuust Marketing" : "Guide niet gevonden | Robuust Marketing",
    };
  }

  const kennisbankLabel = locale === "en" ? "Knowledge Base" : "Kennisbank";

  return {
    title: `${guide.title} | ${kennisbankLabel} | Robuust Marketing`,
    description: guide.description,
  };
}

const mdxComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="text-3xl sm:text-4xl font-bold text-white mt-8 mb-4" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-2xl sm:text-3xl font-bold text-white mt-8 mb-4" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-xl sm:text-2xl font-semibold text-white mt-6 mb-3" {...props} />
  ),
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
};

// Fallback notice component
function FallbackNotice({ locale }: { locale: Locale }) {
  const message = locale === "en"
    ? "This guide is not yet available in English. Showing the Dutch version."
    : "Deze guide is nog niet beschikbaar in het Engels. De Nederlandse versie wordt getoond.";

  return (
    <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mb-8 flex items-start gap-3">
      <AlertCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
      <p className="text-sm text-white/80">{message}</p>
    </div>
  );
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ locale: string; category: string; slug: string }>;
}) {
  const { locale, category, slug } = await params;
  setRequestLocale(locale as Locale);

  if (!validCategories.includes(category as CategorySlug)) {
    notFound();
  }

  const categorySlug = category as CategorySlug;
  const guide = getGuide(categorySlug, slug, locale as Locale);

  if (!guide) {
    notFound();
  }

  const categoryInfoData = getCategoryInfo(categorySlug, locale as Locale);
  const otherGuides = getGuidesByCategory(categorySlug, locale as Locale).filter(
    (g) => g.slug !== slug
  );

  const basePath = locale === "nl" ? "" : `/${locale}`;

  // Translations
  const t = {
    backTo: locale === "en" ? "Back to" : "Terug naar",
    readTime: locale === "en" ? "read time" : "leestijd",
    moreGuides: locale === "en" ? "More" : "Meer",
    guidesIn: locale === "en" ? "guides" : "guides",
    needHelp: locale === "en" ? "Need help?" : "Hulp nodig?",
    helpDescription: locale === "en"
      ? "Do you have questions about this guide or need help with implementation?"
      : "Heb je vragen over deze guide of wil je hulp bij de implementatie?",
    contactUs: locale === "en" ? "Contact us" : "Neem contact op",
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      <article className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href={`${basePath}/kennisbank/${category}` as any}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          {t.backTo} {categoryInfoData.name}
        </Link>

        {/* Fallback notice if showing Dutch content for English locale */}
        {guide.isFallback && <FallbackNotice locale={locale as Locale} />}

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full">
              <BookOpen className="h-3 w-3" />
              {guide.category}
            </span>
            <span className="flex items-center gap-1 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              {guide.readTime} {t.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            {guide.title}
          </h1>

          <p className="text-xl text-muted-foreground">{guide.description}</p>
        </header>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <MDXRemote source={guide.content} components={mdxComponents} />
        </div>

        {/* Other Guides in Category */}
        {otherGuides.length > 0 && (
          <section className="mt-16 pt-12 border-t border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6">
              {t.moreGuides} {categoryInfoData.name.toLowerCase()} {t.guidesIn}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherGuides.slice(0, 4).map((otherGuide) => (
                <Link
                  key={otherGuide.slug}
                  href={`${basePath}/kennisbank/${category}/${otherGuide.slug}` as any}
                  className="group rounded-xl bg-surface border border-white/5 hover:border-accent/30 p-6 transition-all"
                >
                  <h3 className="font-semibold text-white group-hover:text-accent transition-colors mb-2">
                    {otherGuide.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {otherGuide.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="mt-16 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 p-8 text-center">
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
    </div>
  );
}
