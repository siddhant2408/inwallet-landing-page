import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { FunctionalitySection } from "@/components/functionality-section"
import { SecuritySection } from "@/components/security-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { EarlyAccessSection } from "@/components/early-access-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FunctionalitySection />
      <SecuritySection />
      <TestimonialSection />
      <EarlyAccessSection />
      <Footer />
    </main>
  )
}
