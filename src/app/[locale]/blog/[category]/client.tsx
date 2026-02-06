"use client";

import { useTranslations } from "next-intl";
import { motion } from "@/components/motion";
import { Link } from "@/i18n/routing";
import {
  ArrowLeft,
  ArrowRight,
  FolderOpen,
  FileText,
  Code2,
  Server,
  Search,
  Share2,
  Megaphone,
  Mail,
  type LucideIcon,
} from "lucide-react";
import { BlogPostCard } from "@/components/blog";
import { cn } from "@/lib/utils";

const serviceIconMap: Record<string, LucideIcon> = {
  development: Code2,
  hosting: Server,
  seo: Search,
  "social-media": Share2,
  "online-marketing": Megaphone,
  "email-marketing": Mail,
};

interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

interface Category {
  name: string;
  count: number;
  slug: string;
  isActive: boolean;
}

interface MatchedService {
  id: string;
  name: string;
  description: string;
  href: string;
}

interface BlogCategoryPageProps {
  category: { name: string; count: number };
  posts: BlogPostMeta[];
  categories: Category[];
  currentSlug: string;
  matchedService?: MatchedService | null;
}

export function BlogCategoryPage({
  category,
  posts,
  categories,
  currentSlug,
  matchedService,
}: BlogCategoryPageProps) {
  const t = useTranslations("blogCategoryPage");
  const ServiceIcon = matchedService
    ? serviceIconMap[matchedService.id]
    : null;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Radial gradient background */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse, rgba(197, 60, 11, 0.1) 0%, transparent 60%)",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              {t("backToOverview")}
            </Link>
          </motion.div>

          {/* Category Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-accent/20 text-accent">
                <FolderOpen className="h-6 w-6" />
              </div>
              <span className="text-sm font-medium text-accent">
                {t("category")}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {category.name}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              {t("heroSubtitle", { category: category.name })}
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              {t("articleCount", { count: category.count })}
            </p>
          </motion.div>

          {/* Service CTA Card */}
          {matchedService && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link href={matchedService.href as "/"}>
                <div className="rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 p-6 hover:border-accent/40 transition-colors max-w-2xl group">
                  <div className="flex items-start gap-4">
                    {ServiceIcon && (
                      <div className="p-3 rounded-xl bg-accent/20 text-accent shrink-0">
                        <ServiceIcon className="h-6 w-6" />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-accent uppercase tracking-wider mb-1">
                        {t("relatedService")}
                      </p>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {matchedService.name}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {matchedService.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-accent font-medium text-sm shrink-0 self-center group-hover:gap-2 transition-all">
                      {t("viewService")}
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Sidebar - Categories */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="sticky top-32">
                <h3 className="text-lg font-semibold text-white mb-4">
                  {t("allCategories")}
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/blog"
                      className="flex items-center justify-between w-full px-3 py-2 rounded-lg text-left transition-colors text-muted-foreground hover:bg-surface hover:text-white"
                    >
                      <span>{t("allArticles")}</span>
                    </Link>
                  </li>
                  {categories.map((cat) => (
                    <li key={cat.slug}>
                      <Link
                        href={{ pathname: "/blog/[category]", params: { category: cat.slug } }}
                        className={cn(
                          "flex items-center justify-between w-full px-3 py-2 rounded-lg text-left transition-colors",
                          cat.isActive
                            ? "bg-accent text-white"
                            : "text-muted-foreground hover:bg-surface hover:text-white"
                        )}
                      >
                        <span>{cat.name}</span>
                        <span
                          className={cn(
                            "text-xs px-2 py-0.5 rounded-full",
                            cat.isActive ? "bg-white/20" : "bg-surface"
                          )}
                        >
                          {cat.count}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Posts Grid */}
            <div className="lg:col-span-9">
              {posts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {posts.map((post, index) => (
                    <motion.div
                      key={post.slug}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 * Math.min(index, 5) }}
                    >
                      <BlogPostCard post={post} index={index} />
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">{t("noArticles")}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
