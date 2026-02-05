"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ArrowRight, Clock } from "lucide-react";
import { motion } from "@/components/motion";
import { categoryToSlug } from "@/lib/category-utils";

interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

interface BlogFeaturedPostProps {
  post: BlogPostMeta;
}

export function BlogFeaturedPost({ post }: BlogFeaturedPostProps) {
  const categorySlug = categoryToSlug(post.category);
  const t = useTranslations("blogPage");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group rounded-3xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 overflow-hidden hover:border-accent/40 transition-colors"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <span className="px-3 py-1 text-xs font-medium bg-accent text-white rounded-full">
              {t("featured")}
            </span>
            <Link
              href={{ pathname: "/blog/category/[slug]", params: { slug: categorySlug } }}
              className="text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              {post.category}
            </Link>
          </div>
          <Link href={{ pathname: "/blog/[slug]", params: { slug: post.slug } }}>
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-accent transition-colors">
              {post.title}
            </h2>
          </Link>
          <p className="text-muted-foreground mb-6">{post.excerpt}</p>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm text-muted-foreground">{post.date}</span>
            <span className="flex items-center gap-1 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>
          <Link 
            href={{ pathname: "/blog/[slug]", params: { slug: post.slug } }}
            className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
          >
            {t("readArticle")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="hidden lg:flex items-center justify-center">
          <div className="w-full h-64 rounded-2xl bg-accent/20 flex items-center justify-center">
            <span className="text-6xl font-bold text-accent/40">
              {post.category.charAt(0)}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
