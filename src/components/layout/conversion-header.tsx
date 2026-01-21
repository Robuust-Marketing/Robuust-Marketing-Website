"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackConversionHeaderClick } from "@/lib/gtm";

export function ConversionHeader() {
  const handleCTAClick = (ctaText: string) => {
    trackConversionHeaderClick(ctaText);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-navy text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2.5 lg:px-8">
        {/* USP - Desktop */}
        <div className="hidden items-center gap-6 text-sm font-medium md:flex">
          <span className="flex items-center gap-2">
            <span className="text-gold">✓</span>
            70+ websites beheerd
          </span>
          <span className="text-slate">|</span>
          <span className="flex items-center gap-2">
            <span className="text-gold">✓</span>
            99.9% uptime garantie
          </span>
        </div>

        {/* USP - Mobile (shorter) */}
        <div className="flex items-center text-sm font-medium md:hidden">
          <span className="text-gold">✓</span>
          <span className="ml-2">70+ websites | 99.9% uptime</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          {/* Phone (Desktop only) */}
          <a
            href="tel:+31850604877"
            className="hidden items-center gap-2 text-sm font-medium transition-colors hover:text-gold lg:flex"
            onClick={() => handleCTAClick("Phone Click")}
          >
            <Phone className="h-4 w-4" />
            <span>+31 85 060 48 77</span>
          </a>

          {/* Primary CTA */}
          <Button
            asChild
            size="sm"
            variant="secondary"
            className="bg-gold text-navy hover:bg-gold/90"
            onClick={() => handleCTAClick("Gratis Scan")}
          >
            <Link href="/contact">Gratis Website Scan</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
