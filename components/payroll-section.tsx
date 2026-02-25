import { Zap, Link2, Upload, CheckCircle2 } from "lucide-react"

export function PayrollSection() {
  return (
    <section className="border-t border-border/60 bg-card">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Left: Text */}
          <div className="flex flex-col">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
              Payroll Integration
            </p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Works With Your Existing Payroll
            </h2>
            <p className="mb-8 text-muted-foreground leading-relaxed">
              No need to replace your payroll system. Inburse integrates seamlessly—export approved reimbursements as a clean structured file and upload directly into GreytHR, Guidepoint, or any payroll platform.
            </p>

            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="mt-1 flex shrink-0">
                  <Link2 className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">Keep GreytHR or any payroll system</p>
                  <p className="text-sm text-muted-foreground">No disruption to your HR stack</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="mt-1 flex shrink-0">
                  <Upload className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">Export approved reimbursements as CSV</p>
                  <p className="text-sm text-muted-foreground">Structured sheet ready for payroll import</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="mt-1 flex shrink-0">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">Upload directly to payroll</p>
                  <p className="text-sm text-muted-foreground">No manual consolidation needed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: CSV Mockup */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-lg">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-semibold text-foreground">Payroll Export CSV</h3>
              <div className="text-xs text-muted-foreground">Download</div>
            </div>

            <div className="rounded-lg border border-border/60 bg-background p-3 overflow-x-auto">
              <table className="w-full text-[11px]">
                <thead>
                  <tr className="border-b border-border/40">
                    <th className="text-left px-2 py-2 font-medium text-muted-foreground">Employee</th>
                    <th className="text-left px-2 py-2 font-medium text-muted-foreground">Amount</th>
                    <th className="text-left px-2 py-2 font-medium text-muted-foreground">Category</th>
                    <th className="text-left px-2 py-2 font-medium text-muted-foreground">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { emp: "Sarah Chen", amt: "2,499", cat: "Travel", date: "2026-02-12" },
                    { emp: "Raj Kumar", amt: "1,847", cat: "Meals", date: "2026-02-10" },
                    { emp: "Alex Patel", amt: "3,200", cat: "Office", date: "2026-02-08" },
                    { emp: "Maya Singh", amt: "1,500", cat: "Travel", date: "2026-02-05" },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-border/40 last:border-0">
                      <td className="px-2 py-2 text-foreground">{row.emp}</td>
                      <td className="px-2 py-2 font-semibold text-foreground">Rs.{row.amt}</td>
                      <td className="px-2 py-2 text-muted-foreground">{row.cat}</td>
                      <td className="px-2 py-2 text-muted-foreground">{row.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 p-3 rounded-lg bg-accent/5 border border-accent/20">
              <p className="text-xs text-muted-foreground mb-2">Total: <span className="font-semibold text-foreground">Rs. 9,046</span></p>
              <button className="w-full h-8 rounded-lg bg-accent text-xs font-medium text-accent-foreground hover:bg-accent/90">
                Download CSV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
