"use client";

import { Link } from "@/i18n/routing";
import { ArrowRight, Clock } from "lucide-react";
import { motion } from "@/components/motion";

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
  return (
    <Link href={`/blog/${post.slug}` as any} className="block group">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-3xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 overflow-hidden hover:border-accent/40 transition-colors"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 text-xs font-medium bg-accent text-white rounded-full">
                Uitgelicht
              </span>
              <span className="text-sm text-muted-foreground">
                {post.category}
              </span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-accent transition-colors">
              {post.title}
            </h2>
            <p className="text-muted-foreground mb-6">{post.excerpt}</p>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm text-muted-foreground">{post.date}</span>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>
            <span className="inline-flex items-center gap-2 text-accent font-medium group-hover:gap-3 transition-all">
              Lees artikel
              <ArrowRight className="h-4 w-4" />
            </span>
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
    </Link>
  );
}
