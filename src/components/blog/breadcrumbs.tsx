import { Link } from "@/i18n/routing";
import { ChevronRight, Home } from "lucide-react";
import { categoryToSlug } from "@/lib/category-utils";

interface BreadcrumbsProps {
  category: string;
  title: string;
  categorySlug?: string;
}

export function Breadcrumbs({ category, title, categorySlug }: BreadcrumbsProps) {
  const catSlug = categorySlug || categoryToSlug(category);

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center flex-wrap gap-1 text-sm text-muted-foreground">
        <li className="flex items-center">
          <Link
            href="/"
            className="flex items-center hover:text-white transition-colors"
          >
            <Home className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        <li className="flex items-center" aria-hidden="true">
          <ChevronRight className="h-4 w-4 mx-1" />
        </li>
        <li className="flex items-center">
          <Link href="/blog" className="hover:text-white transition-colors">
            Blog
          </Link>
        </li>
        <li className="flex items-center" aria-hidden="true">
          <ChevronRight className="h-4 w-4 mx-1" />
        </li>
        <li className="flex items-center">
          <Link
            href={{ pathname: "/blog/[category]", params: { category: catSlug } }}
            className="text-accent hover:text-accent/80 transition-colors"
          >
            {category}
          </Link>
        </li>
        <li className="flex items-center" aria-hidden="true">
          <ChevronRight className="h-4 w-4 mx-1" />
        </li>
        <li className="flex items-center">
          <span className="text-white truncate max-w-[200px]" aria-current="page">
            {title}
          </span>
        </li>
      </ol>
    </nav>
  );
}
