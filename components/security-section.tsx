import { Check } from "lucide-react"

const trustPoints = [
  "Private by default",
  "Secure cloud storage",
  "Enterprise-grade encryption",
  "SOC 2 compliant",
]

export function SecuritySection() {
  return (
    <section id="security" className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="mx-auto max-w-xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
            Security & Compliance
          </p>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Enterprise-Grade Security.
          </h2>
          <p className="mb-10 text-muted-foreground leading-relaxed">
            Your data is protected with industry-leading security standards and compliance certifications.
          </p>

          <div className="mx-auto inline-flex flex-col gap-4">
            {trustPoints.map((point) => (
              <div
                key={point}
                className="flex items-center gap-3"
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10">
                  <Check className="h-3.5 w-3.5 text-accent" />
                </div>
                <span className="text-foreground font-medium">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
