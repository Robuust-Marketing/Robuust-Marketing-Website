import { Hero } from "@/components/hero";
import { BentoGrid } from "@/components/bento-grid";
import { SocialProof } from "@/components/social-proof";
import { PainSolution } from "@/components/pain-solution";
import { ProductStack } from "@/components/product-stack";
import { TechStack } from "@/components/tech-stack";

export default function Home() {
  return (
    <>
      <Hero />
      <BentoGrid />
      <SocialProof />
      <PainSolution />
      <ProductStack />
      <TechStack />
    </>
  );
}
