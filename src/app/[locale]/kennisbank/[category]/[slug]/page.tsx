import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  getGuide,
  getGuidesByCategory,
  getAllGuideSlugs,
  categoryInfo,
  CategorySlug,
} from "@/lib/kennisbank";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  const slugs = getAllGuideSlugs();
  return slugs.map(({ category, slug }) => ({ category, slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const guide = getGuide(category as CategorySlug, slug);

  if (!guide) {
    return {
      title: "Guide niet gevonden | Robuust Marketing",
    };
  }

  return {
    title: `${guide.title} | Kennisbank | Robuust Marketing`,
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

export default async function GuidePage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;

  if (!["development", "seo", "hosting"].includes(category)) {
    notFound();
  }

  const categorySlug = category as CategorySlug;
  const guide = getGuide(categorySlug, slug);

  if (!guide) {
    notFound();
  }

  const otherGuides = getGuidesByCategory(categorySlug).filter(
    (g) => g.slug !== slug
  );

  return (
    <div className="min-h-screen pt-32 pb-20">
      <article className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href={`/kennisbank/${category}`}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Terug naar {categoryInfo[categorySlug].name}
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full">
              <BookOpen className="h-3 w-3" />
              {guide.category}
            </span>
            <span className="flex items-center gap-1 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              {guide.readTime} leestijd
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
              Meer {categoryInfo[categorySlug].name.toLowerCase()} guides
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherGuides.slice(0, 4).map((otherGuide) => (
                <Link
                  key={otherGuide.slug}
                  href={`/kennisbank/${category}/${otherGuide.slug}`}
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
            Hulp nodig?
          </h2>
          <p className="text-muted-foreground mb-6">
            Heb je vragen over deze guide of wil je hulp bij de implementatie?
          </p>
          <Button asChild className="bg-accent hover:bg-accent-hover text-white">
            <Link href="/contact">Neem contact op</Link>
          </Button>
        </section>
      </article>
    </div>
  );
}
