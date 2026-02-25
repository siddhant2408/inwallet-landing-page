import { Upload, Zap, Download } from "lucide-react"

function WorkflowCard({ step, title, items, icon: Icon }: { step: number; title: string; items: string[]; icon: any }) {
  return (
    <div className="rounded-2xl border border-border/60 bg-card p-6 flex flex-col">
      <div className="flex items-start gap-4 mb-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10">
          <Icon className="h-6 w-6 text-accent" />
        </div>
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
          {step}
        </div>
      </div>
      <h3 className="mb-4 text-xl font-semibold text-foreground">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
            <span className="text-sm text-muted-foreground">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function WorkflowSection() {
  return (
    <section id="working" className="border-t border-border/60 bg-card">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
            How It Works
          </p>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            From Invoice to Payroll — In 3 Steps
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Streamlined workflow from employee submission to payroll export.
          </p>
        </div>

        {/* Workflow Cards */}
        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          <WorkflowCard
            step={1}
            title="Employee Submission"
            icon={Upload}
            items={[
              "Capture or upload invoice",
              "Auto-extract invoice number, date, amount",
              "Tag category",
              "Submit claim",
            ]}
          />

          <WorkflowCard
            step={2}
            title="Automated Validation"
            icon={Zap}
            items={[
              "Policy rules applied automatically",
              "Duplicate detection",
              "Out-of-policy flags",
              "Manager approval routing",
            ]}
          />

          <WorkflowCard
            step={3}
            title="Finance & Payroll Export"
            icon={Download}
            items={[
              "Bulk approve compliant claims",
              "Review flagged exceptions",
              "One-click payroll-ready export",
              "Audit-ready documentation",
            ]}
          />
        </div>
      </div>
    </section>
  )
}
