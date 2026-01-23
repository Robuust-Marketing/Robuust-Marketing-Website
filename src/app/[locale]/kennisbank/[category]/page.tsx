import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen, Code2, Search, Server } from "lucide-react";
import { setRequestLocale } from "next-intl/server";
import { getGuidesByCategory, getCategoryInfo, CategorySlug } from "@/lib/kennisbank";
import { locales, type Locale } from "@/i18n/config";

const categoryIcons: Record<CategorySlug, React.ElementType> = {
  development: Code2,
  seo: Search,
  hosting: Server,
};

const validCategories: CategorySlug[] = ["development", "seo", "hosting"];

export async function generateStaticParams() {
  const params: { locale: string; category: string }[] = [];

  for (const locale of locales) {
    for (const category of validCategories) {
      params.push({ locale, category });
    }
  }

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; category: string }>;
}) {
  const { locale, category } = await params;
  const info = getCategoryInfo(category as CategorySlug, locale as Locale);

  if (!info) {
    return {
      title: locale === "en" ? "Category not found | Robuust Marketing" : "Categorie niet gevonden | Robuust Marketing",
    };
  }

  return {
    title: `${info.name} Guides | ${locale === "en" ? "Knowledge Base" : "Kennisbank"} | Robuust Marketing`,
    description: info.description,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ locale: string; category: string }>;
}) {
  const { locale, category } = await params;
  setRequestLocale(locale as Locale);

  if (!validCategories.includes(category as CategorySlug)) {
    notFound();
  }

  const categorySlug = category as CategorySlug;
  const info = getCategoryInfo(categorySlug, locale as Locale);
  const guides = getGuidesByCategory(categorySlug, locale as Locale);
  const CategoryIcon = categoryIcons[categorySlug];

  const basePath = locale === "nl" ? "" : `/${locale}`;

  // Translations
  const t = {
    backToKennisbank: locale === "en" ? "Back to knowledge base" : "Terug naar kennisbank",
    readTime: locale === "en" ? "read time" : "leestijd",
    readGuide: locale === "en" ? "Read guide" : "Lees guide",
    comingSoon: locale === "en" ? "Coming soon" : "Binnenkort beschikbaar",
    workingOnGuides: locale === "en"
      ? "We are working on new guides for this category."
      : "We werken aan nieuwe guides voor deze categorie.",
    otherCategories: locale === "en" ? "Other categories" : "Andere categorieën",
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href={`${basePath}/kennisbank`}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          {t.backToKennisbank}
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <CategoryIcon className="h-7 w-7" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white">
                {info.name}
              </h1>
              <p className="text-muted-foreground">{info.description}</p>
            </div>
          </div>
        </header>

        {/* Guides Grid */}
        {guides.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={`${basePath}/kennisbank/${category}/${guide.slug}`}
                className="group rounded-2xl bg-surface border border-white/5 hover:border-accent/30 p-6 transition-all"
              >
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="h-4 w-4 text-accent" />
                  <span className="text-xs text-muted-foreground">
                    {guide.readTime} {t.readTime}
                  </span>
                </div>
                <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-accent transition-colors">
                  {guide.title}
                </h2>
                <p className="text-muted-foreground mb-4">{guide.description}</p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-accent">
                  {t.readGuide}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 rounded-2xl bg-surface border border-white/5">
            <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-white mb-2">
              {t.comingSoon}
            </h2>
            <p className="text-muted-foreground">
              {t.workingOnGuides}
            </p>
          </div>
        )}

        {/* Other Categories */}
        <section className="mt-16 pt-12 border-t border-white/10">
          <h2 className="text-xl font-bold text-white mb-6">
            {t.otherCategories}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {validCategories
              .filter((cat) => cat !== categorySlug)
              .map((cat) => {
                const Icon = categoryIcons[cat];
                const catInfo = getCategoryInfo(cat, locale as Locale);
                return (
                  <Link
                    key={cat}
                    href={`${basePath}/kennisbank/${cat}`}
                    className="flex items-center gap-4 rounded-xl bg-surface/50 border border-white/5 hover:border-accent/30 p-4 transition-all"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">
                        {catInfo.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {catInfo.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
          </div>
        </section>
      </div>
    </div>
  );
}
