import { Users, ClipboardList, BarChart3, Camera, Tag, Eye, Clock, CheckCircle2, FileText, Filter, Lock, Zap } from "lucide-react"

const featureGroups = [
  {
    title: "Employee Features",
    icon: Users,
    color: "bg-blue-500/10 text-blue-600",
    features: [
      { icon: Camera, title: "Instant invoice capture", desc: "Mobile + web" },
      { icon: Zap, title: "Automatic metadata extraction", desc: "Auto-detect merchant & amount" },
      { icon: Tag, title: "Category tagging", desc: "Organize by expense type" },
      { icon: Clock, title: "Claim grouping", desc: "Bundle related expenses" },
      { icon: Eye, title: "Submission tracking", desc: "See claim status in real-time" },
    ],
  },
  {
    title: "Manager Features",
    icon: ClipboardList,
    color: "bg-purple-500/10 text-purple-600",
    features: [
      { icon: CheckCircle2, title: "Clean approval dashboard", desc: "Review pending claims" },
      { icon: FileText, title: "Approve / reject with comments", desc: "Leave audit trail" },
      { icon: Clock, title: "Auto-routing by hierarchy", desc: "Claims flow to right manager" },
      { icon: Eye, title: "Visibility into history", desc: "See all claim revisions" },
      { icon: Filter, title: "Bulk actions", desc: "Process multiple claims at once" },
    ],
  },
  {
    title: "Finance Features",
    icon: BarChart3,
    color: "bg-green-500/10 text-green-600",
    features: [
      { icon: CheckCircle2, title: "Bulk approval view", desc: "Approve all compliant claims" },
      { icon: Zap, title: "Policy engine", desc: "Caps, limits, category rules" },
      { icon: Lock, title: "Duplicate detection", desc: "Prevent accidental re-claims" },
      { icon: FileText, title: "GST validation support", desc: "Auto-verify invoice details" },
      { icon: BarChart3, title: "Payroll export in one step", desc: "CSV ready for payroll system" },
    ],
  },
]

export function FeaturesSection() {
  return (
    <section className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
            Core Features
          </p>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Built for Real Finance Workflows
          </h2>
          <p className="mb-14 text-muted-foreground leading-relaxed">
            Powerful features designed for every role in your organization.
          </p>
        </div>

        {/* Feature Groups */}
        <div className="grid gap-8 md:grid-cols-3">
          {featureGroups.map((group) => {
            const GroupIcon = group.icon
            return (
              <div key={group.title} className="rounded-2xl border border-border/60 bg-card p-6">
                <div className="mb-6 flex items-center gap-3">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${group.color}`}>
                    <GroupIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{group.title}</h3>
                </div>

                <div className="space-y-4">
                  {group.features.map((feature) => {
                    const FeatureIcon = feature.icon
                    return (
                      <div key={feature.title} className="flex gap-3">
                        <div className="mt-0.5 flex shrink-0">
                          <FeatureIcon className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground text-sm">{feature.title}</p>
                          <p className="text-xs text-muted-foreground">{feature.desc}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
