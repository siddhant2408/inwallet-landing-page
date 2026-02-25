import { Zap, Lock, AlertCircle, CheckCircle2 } from "lucide-react"

const policyCapabilities = [
  { icon: Zap, title: "Set reimbursement caps", desc: "Maximum amount per employee, per month" },
  { icon: Lock, title: "Define category limits", desc: "Travel, meals, office supplies budgets" },
  { icon: AlertCircle, title: "Restrict claim types by role", desc: "Different rules for different teams" },
  { icon: CheckCircle2, title: "Enforce documentation requirements", desc: "Require receipts, approvals, or attachments" },
  { icon: AlertCircle, title: "Flag non-compliant claims instantly", desc: "Alert managers before approval" },
]

export function PolicySection() {
  return (
    <section className="border-t border-border/60 bg-card">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Left: Text */}
          <div className="flex flex-col">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
              Policy Engine
            </p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Automate Policy Enforcement
            </h2>
            <p className="mb-8 text-muted-foreground leading-relaxed">
              Admins can configure custom rules that are applied automatically to every claim. No more manual policy checks or after-approval exceptions.
            </p>

            {/* Policy capabilities */}
            <div className="space-y-4">
              {policyCapabilities.map((item) => {
                const ItemIcon = item.icon
                return (
                  <div key={item.title} className="flex gap-3">
                    <div className="mt-1 flex shrink-0">
                      <ItemIcon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right: Admin Panel Mockup */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-lg">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-semibold text-foreground">Policy Settings</h3>
              <div className="text-xs text-muted-foreground">Admin View</div>
            </div>

            <div className="space-y-4">
              {/* Policy Rules */}
              <div className="rounded-lg border border-border/60 bg-background p-4">
                <p className="text-xs font-medium text-muted-foreground mb-3">REIMBURSEMENT CAPS</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-foreground">Monthly Cap</span>
                    <span className="text-sm font-semibold text-foreground">Rs. 50,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-foreground">Travel Limit</span>
                    <span className="text-sm font-semibold text-foreground">Rs. 15,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-foreground">Meals & Beverage</span>
                    <span className="text-sm font-semibold text-foreground">Rs. 500/day</span>
                  </div>
                </div>
              </div>

              {/* Policy Rules */}
              <div className="rounded-lg border border-border/60 bg-background p-4">
                <p className="text-xs font-medium text-muted-foreground mb-3">POLICY RULES</p>
                <div className="space-y-2">
                  {[
                    "Require receipt for all claims",
                    "Approve receipts within 30 days",
                    "Flag personal expenses",
                  ].map((rule) => (
                    <div key={rule} className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-accent" />
                      <span className="text-sm text-foreground">{rule}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Save Button */}
              <button className="w-full h-9 rounded-lg bg-accent text-sm font-medium text-accent-foreground hover:bg-accent/90">
                Save Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
