import { Button } from "@/components/ui/button"
import { ArrowRight, Camera, Clock, FileText, Search, Tag } from "lucide-react"

function MobileMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[260px]">
      {/* Phone frame */}
      <div className="rounded-[2rem] border border-border bg-card p-2 shadow-xl">
        <div className="rounded-[1.5rem] bg-background overflow-hidden">
          {/* Status bar */}
          <div className="flex items-center justify-between px-5 py-2">
            <span className="text-[10px] font-medium text-muted-foreground">9:41</span>
            <div className="flex gap-1">
              <div className="h-1.5 w-3 rounded-full bg-muted-foreground/40" />
              <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
            </div>
          </div>

          {/* Camera capture screen */}
          <div className="px-4 pb-4">
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-accent/10">
                <Camera className="h-3 w-3 text-accent" />
              </div>
              <span className="text-xs font-medium text-foreground">Capture Invoice</span>
            </div>
            {/* Camera viewport */}
            <div className="mb-3 flex aspect-[4/3] items-center justify-center rounded-xl bg-muted/80 border border-border/60">
              <div className="flex flex-col items-center gap-1.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-dashed border-accent/40">
                  <Camera className="h-4 w-4 text-accent/60" />
                </div>
                <span className="text-[10px] text-muted-foreground">Point at invoice</span>
              </div>
            </div>
            {/* Scan button */}
            <div className="flex justify-center">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent shadow-md">
                <div className="h-3 w-3 rounded-full bg-accent-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function InvoiceListMockup() {
  const invoices = [
    { merchant: "Amazon", date: "Feb 12, 2026", amount: "2,499", category: "Electronics", status: "Stored" },
    { merchant: "Flipkart", date: "Feb 8, 2026", amount: "849", category: "Home", status: "Stored" },
    { merchant: "Swiggy", date: "Feb 5, 2026", amount: "356", category: "Food", status: "Review" },
    { merchant: "Apollo Pharmacy", date: "Feb 1, 2026", amount: "1,200", category: "Medical", status: "Stored" },
  ]

  return (
    <div className="w-full max-w-[340px] rounded-xl border border-border bg-card p-4 shadow-lg">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FileText className="h-4 w-4 text-accent" />
          <span className="text-sm font-semibold text-foreground">My Invoices</span>
        </div>
        <div className="flex items-center gap-1.5 rounded-md bg-muted px-2 py-1">
          <Search className="h-3 w-3 text-muted-foreground" />
          <span className="text-[10px] text-muted-foreground">Search...</span>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        {invoices.map((inv) => (
          <div
            key={inv.merchant}
            className="flex items-center justify-between rounded-lg border border-border/60 bg-background px-3 py-2.5 transition-colors hover:bg-muted/50"
          >
            <div className="flex flex-col gap-0.5">
              <span className="text-xs font-medium text-foreground">{inv.merchant}</span>
              <div className="flex items-center gap-1.5">
                <Clock className="h-2.5 w-2.5 text-muted-foreground" />
                <span className="text-[10px] text-muted-foreground">{inv.date}</span>
              </div>
            </div>
            <div className="flex flex-col items-end gap-0.5">
              <span className="text-xs font-semibold text-foreground">{"Rs."}{inv.amount}</span>
              <div className="flex items-center gap-1">
                <Tag className="h-2.5 w-2.5 text-muted-foreground" />
                <span className="text-[10px] text-muted-foreground">{inv.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 lg:pb-28 lg:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Copy */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Early Access Now Open
            </div>

            <h1 className="mb-6 text-balance text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-[3.5rem]">
              Never Lose an Invoice Again.
            </h1>

            <p className="mb-8 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Capture, store, and organize every invoice in one secure wallet
              — ready for reimbursements, returns, and warranties.
            </p>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
              <Button
                size="lg"
                className="w-full rounded-full bg-accent px-8 text-accent-foreground shadow-md hover:bg-accent/90 sm:w-auto"
              >
                Join Early Access
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full rounded-full px-8 sm:w-auto"
              >
                See How It Works
              </Button>
            </div>
          </div>

          {/* Right: Mockups */}
          <div className="relative flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-4 lg:gap-6">
            <MobileMockup />
            <InvoiceListMockup />
          </div>
        </div>
      </div>
    </section>
  )
}
