"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { ArrowRight, BookOpen } from "lucide-react";
import { motion } from "@/components/motion";

interface GuideMeta {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  categorySlug: string;
}

interface KennisbankFeaturedGuidesProps {
  guides: GuideMeta[];
}

export function KennisbankFeaturedGuides({
  guides,
}: KennisbankFeaturedGuidesProps) {
  const t = useTranslations("kennisbankPage.featuredGuides");

  if (guides.length === 0) {
    return null;
  }

  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white">{t("title")}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {guides.map((guide, index) => (
            <motion.article
              key={guide.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={`/kennisbank/${guide.categorySlug}/${guide.slug}` as any}
                className="group block h-full rounded-2xl bg-surface border border-white/5 hover:border-accent/30 p-6 transition-all"
              >
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="h-4 w-4 text-accent" aria-hidden="true" />
                  <span className="text-xs font-medium text-accent">
                    {guide.category}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    - {guide.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-accent transition-colors">
                  {guide.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {guide.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-accent group-hover:gap-3 transition-all">
                  {t("readGuide")}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
