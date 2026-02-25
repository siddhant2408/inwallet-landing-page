import { Camera, ScanText, ShieldCheck, LayoutDashboard, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const walletFeatures = [
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

const dashboardFeatures = [
  {
    title: "Real-Time Approval Dashboard",
    description: "Managers see all pending claims with automatic policy checks. Approve or reject in seconds.",
  },
  {
    title: "Employee Claim Tracking",
    description: "Employees track their submissions from submission to approval to payroll integration.",
  },
  {
    title: "Finance Overview",
    description: "Finance team gets one-click insights into total claims, approved amounts, and pending items.",
  },
  {
    title: "Automated Routing",
    description: "Claims automatically route to the right approver based on policy, amount, and department.",
  },
  {
    title: "Policy Engine",
    description: "Admin-configurable rules flag out-of-policy claims before they clutter approval queues.",
  },
  {
    title: "Payroll Integration",
    description: "Export approved claims directly to payroll systems or CSV. No manual data entry.",
  },
]

export default function WalletPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 pb-20 pt-20 sm:px-6 lg:pb-28 lg:pt-32">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Invoice Wallet & Team Dashboard
            </div>

            <h1 className="mb-6 text-balance text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-[3.5rem]">
              Capture Invoices. Manage Approvals. Simplify Payroll.
            </h1>

            <p className="mb-10 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Employees securely store invoices. Managers approve in real-time with automatic policy checks. Finance exports clean, audit-ready data.
            </p>

            <a href="#earlyaccess">
              <Button
                size="lg"
                className="rounded-full bg-accent px-8 text-accent-foreground shadow-md hover:bg-accent/90"
              >
                Get Early Access
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Wallet Features Section */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
          <div className="mx-auto max-w-2xl text-center mb-14">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
              Invoice Wallet
            </p>
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Your Personal Invoice Repository.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Capture, store, and organize every invoice in one secure, private space. Ready for reimbursements, disputes, or compliance.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {walletFeatures.map((feature) => (
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

      {/* Dashboard Features Section */}
      <section className="border-t border-border/60 bg-card">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
          <div className="mx-auto max-w-2xl text-center mb-14">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
              Smart Dashboard
            </p>
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Intelligent Workflow Management.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Built-in dashboard features for employees, managers, and finance teams to work together seamlessly.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {dashboardFeatures.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-border/60 bg-background p-6"
              >
                <h3 className="mb-3 text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
          <div className="flex flex-col items-center text-center">
            <h2 className="mb-6 text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
              Ready to modernize your reimbursement process?
            </h2>
            <p className="mb-8 max-w-xl text-muted-foreground leading-relaxed">
              Join early access and get exclusive first access when we launch.
            </p>
            <a href="#earlyaccess">
              <Button
                size="lg"
                className="rounded-full bg-accent px-8 text-accent-foreground shadow-md hover:bg-accent/90"
              >
                Get Early Access
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
