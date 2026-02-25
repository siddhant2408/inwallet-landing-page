import { Users, Building2, Zap, TrendingUp, Target } from "lucide-react"

const targetCompanies = [
  { icon: Users, title: "20–200 employees", desc: "Perfect size for scaling reimbursement workflows" },
  { icon: Building2, title: "Scaling startups", desc: "Growing fast, processes getting complex" },
  { icon: Zap, title: "Tech companies", desc: "Distributed teams, frequent travel" },
  { icon: TrendingUp, title: "Services firms", desc: "Consultants, contractors, on-site work" },
  { icon: Target, title: "Tired of clunky HRMS", desc: "Ready to replace outdated reimbursement modules" },
]

export function TargetCompanySection() {
  return (
    <section className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
            Ideal For
          </p>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Designed for Growing Companies
          </h2>
          <p className="mb-14 text-muted-foreground leading-relaxed">
            The perfect fit for mid-market organizations scaling their operations.
          </p>
        </div>

        {/* Target companies grid */}
        <div className="mx-auto grid max-w-3xl gap-4">
          {targetCompanies.map((item) => {
            const ItemIcon = item.icon
            return (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-xl border border-border/60 bg-card px-5 py-4 transition-all hover:border-accent/30 hover:shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <ItemIcon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-foreground">{item.title}</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
