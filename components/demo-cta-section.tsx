import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function DemoCTASection() {
  return (
    <section className="border-t border-border/60 bg-card">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="rounded-2xl border border-border/60 bg-background p-12 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Ready to Simplify Reimbursement?
          </h2>
          <p className="mb-8 text-muted-foreground leading-relaxed max-w-lg mx-auto">
            See how Inburse automates your entire reimbursement workflow in action. A dedicated specialist will walk you through the platform.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <a href="#earlyaccess">
              <Button
                size="lg"
                className="rounded-full bg-accent px-8 text-accent-foreground shadow-md hover:bg-accent/90"
              >
                Book a Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a href="#working">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8"
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
