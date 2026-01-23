"use client";

import { useEffect, useState } from "react";
import { List, ArrowUp, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShareButtons } from "./share-buttons";
import { TableOfContents, Heading } from "./table-of-contents";
import { cn } from "@/lib/utils";

interface MobileActionBarProps {
  title: string;
  url: string;
  headings: Heading[];
}

export function MobileActionBar({ title, url, headings }: MobileActionBarProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showTOC, setShowTOC] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show bar after scrolling 300px
      setIsVisible(currentScrollY > 300);

      // Hide when scrolling down fast, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 10) {
        setIsScrollingDown(true);
      } else if (lastScrollY - currentScrollY > 10) {
        setIsScrollingDown(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closeTOC = () => {
    setShowTOC(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* TOC Drawer */}
      {showTOC && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeTOC}
            aria-hidden="true"
          />

          {/* Drawer */}
          <div className="absolute bottom-0 left-0 right-0 max-h-[70vh] overflow-y-auto rounded-t-2xl bg-background border-t border-white/10 p-6 animate-in slide-in-from-bottom duration-300">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-white">Inhoudsopgave</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={closeTOC}
                className="h-8 w-8"
                aria-label="Sluit inhoudsopgave"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <TableOfContents headings={headings} onNavigate={closeTOC} />
          </div>
        </div>
      )}

      {/* Action Bar */}
      <div
        className={cn(
          "fixed bottom-0 left-0 right-0 z-40 lg:hidden transition-transform duration-300",
          isScrollingDown && !showTOC ? "translate-y-full" : "translate-y-0"
        )}
      >
        <div className="mx-4 mb-4 rounded-full bg-surface/95 backdrop-blur-md border border-white/10 shadow-lg px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            {/* TOC Button */}
            {headings.length > 0 && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowTOC(true)}
                className="h-10 w-10 rounded-full hover:bg-surface-hover"
                aria-label="Open inhoudsopgave"
                aria-expanded={showTOC}
              >
                <List className="h-5 w-5" />
              </Button>
            )}

            {/* Share Buttons */}
            <div className="flex-1 flex justify-center">
              <ShareButtons title={title} url={url} compact />
            </div>

            {/* Back to Top */}
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollToTop}
              className="h-10 w-10 rounded-full hover:bg-surface-hover"
              aria-label="Terug naar boven"
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
