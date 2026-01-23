import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { BlogPostMeta } from "@/lib/blog";

interface ArticleNavigationProps {
  previousPost: BlogPostMeta | null;
  nextPost: BlogPostMeta | null;
}

export function ArticleNavigation({ previousPost, nextPost }: ArticleNavigationProps) {
  if (!previousPost && !nextPost) {
    return null;
  }

  return (
    <nav aria-label="Artikelnavigatie" className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {previousPost ? (
        <Link
          href={`/blog/${previousPost.slug}`}
          className="group flex flex-col p-4 rounded-xl bg-surface border border-white/5 hover:border-accent/30 transition-all"
        >
          <span className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Vorig artikel
          </span>
          <span className="text-xs text-accent mb-1">{previousPost.category}</span>
          <span className="font-medium text-white group-hover:text-accent transition-colors line-clamp-2">
            {previousPost.title}
          </span>
        </Link>
      ) : (
        <div />
      )}

      {nextPost ? (
        <Link
          href={`/blog/${nextPost.slug}`}
          className="group flex flex-col p-4 rounded-xl bg-surface border border-white/5 hover:border-accent/30 transition-all md:text-right"
        >
          <span className="flex items-center gap-2 text-sm text-muted-foreground mb-2 md:justify-end">
            Volgend artikel
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
          <span className="text-xs text-accent mb-1">{nextPost.category}</span>
          <span className="font-medium text-white group-hover:text-accent transition-colors line-clamp-2">
            {nextPost.title}
          </span>
        </Link>
      ) : (
        <div />
      )}
    </nav>
  );
}
