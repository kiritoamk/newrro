import { HeroSection } from "@/components/Arjuna-sections/hero-section";
import { IntelligenceFeatures } from "@/components/Arjuna-sections/intelligence-features";
import { SpecificationSection } from "@/components/Arjuna-sections/specification-section";
import { ProductTabs } from "@/components/Arjuna-sections/otherproducts-section";


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <IntelligenceFeatures />
      <SpecificationSection />
      <ProductTabs />
      
    </div>
  );
}