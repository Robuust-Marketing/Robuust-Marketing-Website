"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export interface Heading {
  level: number;
  text: string;
  id: string;
}

interface TableOfContentsProps {
  headings: Heading[];
  onNavigate?: () => void;
}

export function TableOfContents({ headings, onNavigate }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          const sorted = visibleEntries.sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          );
          setActiveId(sorted[0].target.id);
        }
      },
      {
        rootMargin: "-100px 0px -66% 0px",
        threshold: 0,
      }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [headings]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Move focus to heading for accessibility
      element.setAttribute("tabindex", "-1");
      element.focus({ preventScroll: true });

      // Call onNavigate callback (for mobile drawer close)
      onNavigate?.();
    }
  };

  if (headings.length === 0) {
    return null;
  }

  return (
    <nav aria-label="Inhoudsopgave" className="space-y-1">
      <p className="text-sm font-medium text-white mb-3" id="toc-heading">
        Inhoudsopgave
      </p>
      <ul role="list" aria-labelledby="toc-heading" className="space-y-1">
        {headings.map((heading) => (
          <li key={heading.id}>
            <button
              onClick={() => scrollToHeading(heading.id)}
              aria-current={activeId === heading.id ? "location" : undefined}
              className={cn(
                "w-full text-left text-sm py-1.5 transition-colors hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface rounded",
                heading.level === 3 && "pl-4",
                activeId === heading.id
                  ? "text-accent font-medium"
                  : "text-muted-foreground"
              )}
            >
              {heading.text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
