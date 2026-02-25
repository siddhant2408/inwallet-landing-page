import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

const pricingHighlights = [
  "Per employee per month pricing",
  "Minimum 25 employees",
  "No setup fees",
  "Cancel anytime",
]

interface PricingSectionProps {
  id?: string
}

export function PricingSection({ id }: PricingSectionProps) {
  return (
    <section id={id} className="border-t border-border/60 bg-card">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
            Pricing
          </p>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mb-12 text-muted-foreground leading-relaxed">
            No hidden fees. No surprises. Pay only for what you use.
          </p>
        </div>

        {/* Pricing card */}
        <div className="mx-auto max-w-md rounded-2xl border border-border bg-background shadow-lg overflow-hidden">
          {/* Header */}
          <div className="border-b border-border/60 px-6 py-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-2">Reimbursement Automation</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Complete control over your reimbursement workflow
            </p>
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-4xl font-bold text-foreground">Custom</span>
              <span className="text-muted-foreground">/employee/month</span>
            </div>
          </div>

          {/* Features */}
          <div className="px-6 py-8">
            <div className="space-y-3 mb-8">
              {pricingHighlights.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <a href="#earlyaccess">
              <Button
                size="lg"
                className="w-full rounded-full bg-accent px-8 text-accent-foreground shadow-md hover:bg-accent/90"
              >
                Request Pricing
              </Button>
            </a>
          </div>

          {/* Note */}
          <div className="border-t border-border/60 px-6 py-4 bg-muted/30 text-center">
            <p className="text-xs text-muted-foreground">
              Contact us for enterprise pricing and custom features.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
