import { CheckCircle2, Clock, Download, Lock, Eye } from "lucide-react"

const auditFeatures = [
  { icon: CheckCircle2, title: "Full approval history", desc: "See every approval and rejection" },
  { icon: Clock, title: "Timestamped claim changes", desc: "Track modifications with exact timing" },
  { icon: Download, title: "Downloadable audit logs", desc: "Export for compliance audits" },
  { icon: Lock, title: "Structured invoice storage", desc: "Organized, searchable archive" },
  { icon: Eye, title: "Immutable claim snapshots", desc: "Locked records after approval" },
]

export function AuditSection() {
  return (
    <section className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Left: Audit Log Mockup */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-lg">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-semibold text-foreground">Audit Log</h3>
              <div className="text-xs text-muted-foreground">Finance View</div>
            </div>

            <div className="space-y-3">
              {[
                { time: "2026-02-15 14:32", action: "Claim approved", user: "Sarah Chen", status: "Approved" },
                { time: "2026-02-15 14:15", action: "Claim reviewed", user: "Manager - Raj", status: "Reviewed" },
                { time: "2026-02-15 10:45", action: "Claim submitted", user: "Employee - Alex", status: "Submitted" },
                { time: "2026-02-14 16:20", action: "Policy check passed", user: "System", status: "Validated" },
              ].map((log, i) => (
                <div key={i} className="flex items-start gap-3 pb-3 border-b border-border/40 last:border-0 last:pb-0">
                  <div className="mt-1 text-xs text-muted-foreground font-mono">{log.time}</div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">{log.action}</p>
                    <p className="text-xs text-muted-foreground">{log.user}</p>
                  </div>
                  <span className={`text-xs font-medium px-2 py-1 rounded ${
                    log.status === "Approved" ? "bg-accent/10 text-accent" :
                    log.status === "Reviewed" ? "bg-blue-500/10 text-blue-600" :
                    log.status === "Validated" ? "bg-green-500/10 text-green-600" :
                    "bg-muted text-muted-foreground"
                  }`}>
                    {log.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Text */}
          <div className="flex flex-col">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
              Audit & Compliance
            </p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Always Audit-Ready
            </h2>
            <p className="mb-8 text-muted-foreground leading-relaxed">
              Complete transparency and immutable records. Every claim modification is logged with timestamps, users, and actions. Export audit trails for regulatory compliance and financial audits.
            </p>

            {/* Audit features */}
            <div className="space-y-4">
              {auditFeatures.map((item) => {
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
        </div>
      </div>
    </section>
  )
}
