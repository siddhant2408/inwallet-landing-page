import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { WorkflowSection } from "@/components/workflow-section"
import { FeaturesSection } from "@/components/features-section"
import { SolutionSection } from "@/components/solution-section"
import { PolicySection } from "@/components/policy-section"
import { AuditSection } from "@/components/audit-section"
import { PayrollSection } from "@/components/payroll-section"
import { TargetCompanySection } from "@/components/target-company-section"
import { DemoCTASection } from "@/components/demo-cta-section"
import { SecuritySection } from "@/components/security-section"
import { EarlyAccessSection } from "@/components/early-access-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <WorkflowSection />
      <FeaturesSection />
      <PolicySection />
      <AuditSection />
      <PayrollSection />
      <SolutionSection />
      <TargetCompanySection />
      <DemoCTASection />
      <SecuritySection />
      <EarlyAccessSection />
      <Footer />
    </main>
  )
}
