import { Button } from "@/components/ui/button"
import { ArrowRight, Upload, CheckCircle2, FileText, BarChart3, Users } from "lucide-react"

function EmployeeClaimMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[280px]">
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

          {/* Employee claim screen */}
          <div className="px-4 pb-4">
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-accent/10">
                <Upload className="h-3 w-3 text-accent" />
              </div>
              <span className="text-xs font-medium text-foreground">New Claim</span>
            </div>
            
            {/* Claim details */}
            <div className="space-y-3">
              <div className="rounded-lg border border-border/60 bg-muted/30 p-3">
                <p className="text-[10px] text-muted-foreground mb-1">Merchant</p>
                <p className="text-xs font-medium text-foreground">Amazon India</p>
              </div>
              <div className="rounded-lg border border-border/60 bg-muted/30 p-3">
                <p className="text-[10px] text-muted-foreground mb-1">Amount</p>
                <p className="text-xs font-medium text-foreground">Rs. 5,200</p>
              </div>
              <div className="rounded-lg border border-border/60 bg-muted/30 p-3">
                <p className="text-[10px] text-muted-foreground mb-1">Category</p>
                <p className="text-xs font-medium text-foreground">Office Supplies</p>
              </div>
            </div>

            {/* Submit button */}
            <div className="mt-4 flex gap-2">
              <button className="flex-1 h-8 rounded-lg bg-muted text-[10px] font-medium text-foreground">Cancel</button>
              <button className="flex-1 h-8 rounded-lg bg-accent text-[10px] font-medium text-accent-foreground">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ApprovalDashboardMockup() {
  const claims = [
    { id: 1, employee: "Sarah Chen", amount: "2,499", status: "Pending", days: "1" },
    { id: 2, employee: "Raj Kumar", amount: "1,847", status: "Pending", days: "2" },
    { id: 3, employee: "Alex Patel", amount: "3,200", status: "Approved", days: "3" },
  ]

  return (
    <div className="w-full max-w-[380px] rounded-2xl border border-border bg-card p-4 shadow-lg">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-accent" />
          <span className="text-sm font-semibold text-foreground">Approvals</span>
        </div>
        <div className="flex items-center gap-1 rounded-md bg-accent/10 px-2 py-1">
          <span className="text-[10px] font-medium text-accent">3 Pending</span>
        </div>
      </div>

      <div className="space-y-2">
        {claims.map((claim) => (
          <div
            key={claim.id}
            className="flex items-center justify-between rounded-lg border border-border/60 bg-background px-3 py-2.5 hover:bg-muted/50"
          >
            <div className="flex-1">
              <p className="text-xs font-medium text-foreground">{claim.employee}</p>
              <p className="text-[10px] text-muted-foreground">{claim.days}d ago</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-xs font-semibold text-foreground">Rs.{claim.amount}</p>
              <span
                className={`text-[9px] font-medium px-2 py-1 rounded ${
                  claim.status === "Pending"
                    ? "bg-yellow-500/10 text-yellow-700"
                    : "bg-accent/10 text-accent"
                }`}
              >
                {claim.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function FinanceExportMockup() {
  return (
    <div className="w-full max-w-[380px] rounded-2xl border border-border bg-card p-4 shadow-lg">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BarChart3 className="h-4 w-4 text-accent" />
          <span className="text-sm font-semibold text-foreground">Finance Export</span>
        </div>
      </div>

      <div className="mb-3 space-y-2">
        <div className="flex justify-between text-[11px]">
          <span className="text-muted-foreground">Total Claims:</span>
          <span className="font-semibold text-foreground">Rs. 47,523</span>
        </div>
        <div className="flex justify-between text-[11px]">
          <span className="text-muted-foreground">Approved:</span>
          <span className="font-semibold text-accent">Rs. 45,200</span>
        </div>
        <div className="flex justify-between text-[11px]">
          <span className="text-muted-foreground">Pending Review:</span>
          <span className="font-semibold text-yellow-600">Rs. 2,323</span>
        </div>
      </div>

      <div className="rounded-lg border border-border/60 bg-muted/30 p-2.5 mb-3">
        <p className="text-[9px] text-muted-foreground mb-1">Ready for Payroll</p>
        <p className="text-xs font-semibold text-foreground">45 Approved Claims</p>
      </div>

      <button className="w-full h-8 rounded-lg bg-accent text-[10px] font-medium text-accent-foreground">
        Export to CSV
      </button>
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
              Built for Growing Teams
            </div>

            <h1 className="mb-6 text-balance text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-[3.5rem]">
              Modern Reimbursement Automation for Growing Teams.
            </h1>

            <p className="mb-8 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Eliminate manual invoice uploads, policy checks, and payroll friction. Automate your entire reimbursement workflow in one clean system.
            </p>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
              <a href="#earlyaccess">
              <Button
                size="lg"
                className="w-full rounded-full bg-accent px-8 text-accent-foreground shadow-md hover:bg-accent/90 sm:w-auto"
              >
                Book a Demo
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

            <p className="mt-8 text-sm text-muted-foreground">
              Designed for 20–200 employee companies.
            </p>
          </div>

          {/* Right: Mockups */}
          <div className="relative flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-4 lg:gap-3">
            <EmployeeClaimMockup />
            <ApprovalDashboardMockup />
            <FinanceExportMockup />
          </div>
        </div>
      </div>
    </section>
  )
}
