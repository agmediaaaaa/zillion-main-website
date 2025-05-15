import HeroSection from "@/components/hero-section"
import PipelineSection from "@/components/pipeline-section"
import RelevanceSection from "@/components/relevance-section"
import ComparisonSection from "@/components/comparison-section"
import FormulaSection from "@/components/formula-section"
import BenefitsSection from "@/components/benefits-section"
import FaqSection from "@/components/faq-section"
import ContactSection from "@/components/contact-section"
import CaseStudiesSlider from "@/components/case-studies-slider"
import ResourcesModal from "@/components/resources-modal"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <HeroSection />
      <PipelineSection />
      <CaseStudiesSlider />
      <RelevanceSection />
      <ComparisonSection />
      <FormulaSection />
      <BenefitsSection />
      <FaqSection />
      <ContactSection />
      <ResourcesModal />
    </main>
  )
}
