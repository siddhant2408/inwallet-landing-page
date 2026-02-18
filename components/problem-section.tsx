import { Mail, Image, MessageCircle, Receipt, CalendarDays } from "lucide-react"

const problems = [
  {
    icon: Mail,
    text: "Buried in email",
    description: "Lost between newsletters and promotional spam.",
  },
  {
    icon: Image,
    text: "Scattered across your gallery",
    description: "Mixed in with selfies and screenshots.",
  },
  {
    icon: MessageCircle,
    text: "Lost in WhatsApp",
    description: "Forwarded once, never found again.",
  },
  {
    icon: Receipt,
    text: "Missing during reimbursement time",
    description: "The one you need is always the one you can't find.",
  },
  {
    icon: CalendarDays,
    text: "Hard to organize at financial year end",
    description: "Scrambling to collect everything at the last minute.",
  },
]

export function ProblemSection() {
  return (
    <section id="problem" className="border-t border-border/60 bg-card">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
            The Problem
          </p>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Where Do Your Invoices Live Today?
          </h2>
          <p className="mb-12 text-muted-foreground leading-relaxed">
            Invoices are scattered, lost, and impossible to find when you need them most.
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
