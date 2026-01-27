import { Suspense } from "react";
import dynamic from "next/dynamic";
import { setRequestLocale } from "next-intl/server";
import { type Locale } from "@/i18n/config";
import { Hero } from "@/components/hero";

// Static loading component for Suspense fallbacks
function SectionLoader() {
  return (
    <div className="py-24 flex items-center justify-center">
      <div className="h-8 w-8 rounded-full border-2 border-accent/20 border-t-accent animate-spin" />
    </div>
  );
}

// Below-the-fold components loaded with ssr for SEO but chunked for performance
const PortfolioShowcase = dynamic(
  () => import("@/components/portfolio-showcase").then((mod) => mod.PortfolioShowcase),
  { ssr: true }
);

const FounderIntro = dynamic(
  () => import("@/components/founder-intro").then((mod) => mod.FounderIntro),
  { ssr: true }
);

const BentoGrid = dynamic(
  () => import("@/components/bento-grid").then((mod) => mod.BentoGrid),
  { ssr: true }
);

const PainSolution = dynamic(
  () => import("@/components/pain-solution").then((mod) => mod.PainSolution),
  { ssr: true }
);

const ProductStack = dynamic(
  () => import("@/components/product-stack").then((mod) => mod.ProductStack),
  { ssr: true }
);

const TechStack = dynamic(
  () => import("@/components/tech-stack").then((mod) => mod.TechStack),
  { ssr: true }
);

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return (
    <>
      {/* Hero section - critical for LCP, loads first */}
      <Hero />

      {/* Portfolio showcase - featured work */}
      <Suspense fallback={<SectionLoader />}>
        <PortfolioShowcase />
      </Suspense>

      {/* Founder intro - personal touch */}
      <Suspense fallback={<SectionLoader />}>
        <FounderIntro />
      </Suspense>

      {/* Feature grid - what we deliver */}
      <Suspense fallback={<SectionLoader />}>
        <BentoGrid />
      </Suspense>

      {/* Pain/solution comparison */}
      <Suspense fallback={<SectionLoader />}>
        <PainSolution />
      </Suspense>

      {/* Product offerings */}
      <Suspense fallback={<SectionLoader />}>
        <ProductStack />
      </Suspense>

      {/* Tech stack showcase */}
      <Suspense fallback={<SectionLoader />}>
        <TechStack />
      </Suspense>
    </>
  );
}
