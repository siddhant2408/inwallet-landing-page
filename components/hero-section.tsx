import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-20 sm:px-6 lg:pb-28 lg:pt-32">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Built for Growing Companies
          </div>

          <h1 className="mb-6 text-balance text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-[3.5rem]">
            Modern Reimbursement Automation.
          </h1>

          <p className="mb-10 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Eliminate manual invoice uploads, policy checks, and payroll friction. Automate your entire reimbursement workflow in one clean system.
          </p>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
            <a href="#earlyaccess">
            <Button
              size="lg"
              className="w-full rounded-full bg-accent px-8 text-accent-foreground shadow-md hover:bg-accent/90 sm:w-auto"
            >
              Get Early Access
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
            </a>
            <a href="#working">
            <Button
              variant="outline"
              size="lg"
              className="w-full rounded-full px-8 sm:w-auto"
            >
              See How It Works
            </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
