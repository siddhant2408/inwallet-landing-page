import { Upload, ClipboardList, CheckCircle2, AlertCircle, Shuffle } from "lucide-react"

const problems = [
  {
    icon: Upload,
    text: "Employees upload invoices one by one",
    description: "Manual uploads for each expense claim clog email and portals.",
  },
  {
    icon: ClipboardList,
    text: "Manual data entry into HR portals",
    description: "Fields like date, amount, merchant are typed manually, introducing errors.",
  },
  {
    icon: CheckCircle2,
    text: "Finance re-checks every invoice manually",
    description: "Repeated verification of the same documents wastes time and resources.",
  },
  {
    icon: AlertCircle,
    text: "No automatic policy enforcement",
    description: "Out-of-policy claims aren't caught until after approval, delaying payroll.",
  },
  {
    icon: Shuffle,
    text: "Duplicate claims slip through",
    description: "Accidental duplicate submissions create billing confusion.",
  },
]

export function ProblemSection() {
  return (
    <section id="problem" className="border-t border-border/60 bg-card">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
            The Problem
          </p>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Why Reimbursement Still Feels Manual
          </h2>
          <p className="mb-12 text-muted-foreground leading-relaxed">
            Traditional reimbursement workflows lack automation and rely on repetitive manual work.
          </p>
        </div>

        <div className="mx-auto grid max-w-3xl gap-4">
          {problems.map((item) => (
            <div
              key={item.text}
              className="flex items-start gap-4 rounded-xl border border-border/60 bg-background px-5 py-4 transition-all hover:border-accent/30 hover:shadow-sm"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                <item.icon className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="font-medium text-foreground">{item.text}</p>
                <p className="mt-0.5 text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
