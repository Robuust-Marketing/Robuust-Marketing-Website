import { Link } from "@/i18n/routing";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbsProps {
  category: string;
  title: string;
}

export function Breadcrumbs({ category, title }: BreadcrumbsProps) {
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
          <span className="text-accent">{category}</span>
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
