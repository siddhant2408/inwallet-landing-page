import { Upload, Zap, Download, ArrowRight } from "lucide-react"

function WorkflowStep({ step, title, items, icon: Icon }: { step: number; title: string; items: string[]; icon: any }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
        <Icon className="h-7 w-7 text-accent" />
      </div>
      <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-sm font-bold text-background">
        {step}
      </div>
      <h3 className="mb-3 text-xl font-semibold text-foreground">{title}</h3>
      <ul className="space-y-2 text-sm text-muted-foreground">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
            <span className="text-left">{item}</span>
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
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
            How It Works
          </p>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            From Invoice to Payroll — In 3 Steps
          </h2>
          <p className="mb-16 text-muted-foreground leading-relaxed">
            Streamlined workflow from employee submission to payroll export.
          </p>
        </div>

        {/* Workflow Steps */}
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-3">
            <WorkflowStep
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

            <div className="hidden items-center justify-center md:flex">
              <ArrowRight className="h-8 w-8 text-muted-foreground/30 rotate-0" />
            </div>

            <WorkflowStep
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

            <div className="hidden items-center justify-center md:flex">
              <ArrowRight className="h-8 w-8 text-muted-foreground/30 rotate-0" />
            </div>

            <WorkflowStep
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

        {/* Visual flow for mobile */}
        <div className="mt-12 flex justify-center md:hidden">
          <div className="flex flex-col items-center gap-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-accent" />
                {i < 3 && <div className="h-6 w-0.5 bg-muted-foreground/30" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
