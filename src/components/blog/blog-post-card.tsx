"use client";

import Link from "next/link";
import { Clock, Tag } from "lucide-react";
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

interface BlogPostCardProps {
  post: BlogPostMeta;
  index: number;
}

export function BlogPostCard({ post, index }: BlogPostCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="group block h-full rounded-2xl bg-surface border border-white/5 hover:border-accent/30 overflow-hidden transition-all"
      >
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <Tag className="h-4 w-4 text-accent" />
            <span className="text-xs font-medium text-accent">
              {post.category}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-accent transition-colors">
            {post.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>{post.date}</span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
