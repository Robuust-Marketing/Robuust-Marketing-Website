import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen, Code2, Search, Server } from "lucide-react";
import { getGuidesByCategory, categoryInfo, CategorySlug } from "@/lib/kennisbank";

const categoryIcons: Record<CategorySlug, React.ElementType> = {
  development: Code2,
  seo: Search,
  hosting: Server,
};

export async function generateStaticParams() {
  return [
    { category: "development" },
    { category: "seo" },
    { category: "hosting" },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const info = categoryInfo[category as CategorySlug];

  if (!info) {
    return {
      title: "Categorie niet gevonden | Robuust Marketing",
    };
  }

  return {
    title: `${info.name} Guides | Kennisbank | Robuust Marketing`,
    description: info.description,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  if (!["development", "seo", "hosting"].includes(category)) {
    notFound();
  }

  const categorySlug = category as CategorySlug;
  const info = categoryInfo[categorySlug];
  const guides = getGuidesByCategory(categorySlug);
  const CategoryIcon = categoryIcons[categorySlug];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/kennisbank"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Terug naar kennisbank
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
            {guides.map((guide, index) => (
              <Link
                key={guide.slug}
                href={`/kennisbank/${category}/${guide.slug}`}
                className="group rounded-2xl bg-surface border border-white/5 hover:border-accent/30 p-6 transition-all"
              >
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="h-4 w-4 text-accent" />
                  <span className="text-xs text-muted-foreground">
                    {guide.readTime} leestijd
                  </span>
                </div>
                <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-accent transition-colors">
                  {guide.title}
                </h2>
                <p className="text-muted-foreground mb-4">{guide.description}</p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-accent">
                  Lees guide
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 rounded-2xl bg-surface border border-white/5">
            <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-white mb-2">
              Binnenkort beschikbaar
            </h2>
            <p className="text-muted-foreground">
              We werken aan nieuwe guides voor deze categorie.
            </p>
          </div>
        )}

        {/* Other Categories */}
        <section className="mt-16 pt-12 border-t border-white/10">
          <h2 className="text-xl font-bold text-white mb-6">
            Andere categorieën
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {(Object.keys(categoryInfo) as CategorySlug[])
              .filter((cat) => cat !== categorySlug)
              .map((cat) => {
                const Icon = categoryIcons[cat];
                return (
                  <Link
                    key={cat}
                    href={`/kennisbank/${cat}`}
                    className="flex items-center gap-4 rounded-xl bg-surface/50 border border-white/5 hover:border-accent/30 p-4 transition-all"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">
                        {categoryInfo[cat].name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {categoryInfo[cat].description}
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
