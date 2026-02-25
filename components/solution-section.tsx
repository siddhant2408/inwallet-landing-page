import { Camera, ScanText, ShieldCheck, LayoutDashboard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const features = [
  {
    icon: Camera,
    title: "Capture in Seconds",
    description:
      "Use your camera to snap a photo or upload directly from your gallery. No manual entry needed.",
    details: "Works with printed receipts, digital invoices, and handwritten bills.",
  },
  {
    icon: ScanText,
    title: "Smart Extraction",
    description:
      "Automatically extracts merchant name, date, and amount from your invoices.",
    details: "Review and edit extracted data anytime for full accuracy.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Storage",
    description:
      "Your invoices are encrypted and private by default. Only you can access them.",
    details: "No bank access required. No third-party sharing. Ever.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard & Sharing",
    description:
      "Filter, sort, and search all your invoices from one dashboard. Share a read-only reimbursement link with your employer.",
    details: "Toggle invoices between public and private. Revoke access anytime.",
  },
]

export function SolutionSection() {
  return (
    <section id="solution" className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
            The Solution
          </p>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            One Secure Invoice Wallet.
          </h2>
          <p className="mb-6 text-muted-foreground leading-relaxed">
            Everything you need to capture, organize, and access your invoices — in one place.
          </p>
          <a href="/wallet">
            <Button
              variant="outline"
              className="mb-14 rounded-full"
            >
              Explore Wallet
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-border/60 bg-card p-6 transition-all hover:border-accent/30 hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 transition-colors group-hover:bg-accent/15">
                <feature.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mb-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground/80">
                {feature.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
