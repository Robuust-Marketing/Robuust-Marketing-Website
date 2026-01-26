"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { ArrowRight, BookOpen, Code2, Search, Server } from "lucide-react";
import { motion } from "@/components/motion";

interface GuideMeta {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
}

interface CategoryData {
  slug: string;
  name: string;
  description: string;
  guides: GuideMeta[];
}

interface KennisbankCategoriesProps {
  categories: CategoryData[];
}

const categoryIcons: Record<string, typeof Code2> = {
  development: Code2,
  seo: Search,
  hosting: Server,
};

export function KennisbankCategories({ categories }: KennisbankCategoriesProps) {
  const t = useTranslations("kennisbankPage.categories");

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-2">
            {t("title")}
          </h2>
          <p className="text-muted-foreground">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const IconComponent = categoryIcons[category.slug] || BookOpen;
            return (
              <motion.div
                key={category.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl bg-surface border border-white/5 p-6"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                </div>

                {category.guides.length > 0 ? (
                  <ul className="space-y-2 mb-4">
                    {category.guides.slice(0, 4).map((guide) => (
                      <li key={guide.slug}>
                        <Link
                          href={`/kennisbank/${category.slug}/${guide.slug}` as any}
                          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors"
                        >
                          <span className="w-1 h-1 rounded-full bg-accent" />
                          {guide.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-muted-foreground mb-4">
                    {t("comingSoon")}
                  </p>
                )}

                <Link
                  href={`/kennisbank/${category.slug}` as any}
                  className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:gap-3 transition-all"
                >
                  {t("allGuides", { category: category.name.toLowerCase() })}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
