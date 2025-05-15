"use client"
\
```tsx file="app/page.tsx"
import HeroSection from "@/components/hero-section"
import PipelineSection from "@/components/pipeline-section"
import RelevanceSection from "@/components/relevance-section"
import OfferSection from "@/components/offer-section"
import ComparisonSection from "@/components/comparison-section"
import FormulaSection from "@/components/formula-section"
import BenefitsSection from "@/components/benefits-section"
import TestimonialsSection from "@/components/testimonials-section"
import FaqSection from "@/components/faq-section"
import ContactSection from "@/components/contact-section"
import CaseStudiesSlider from "@/components/case-studies-slider"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <HeroSection />
      <PipelineSection />
      <CaseStudiesSlider />
      <RelevanceSection />
      <OfferSection />
      <ComparisonSection />
      <FormulaSection />
      <BenefitsSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
    </main>
  )
}
