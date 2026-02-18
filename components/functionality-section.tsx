import {
  Upload,
  ScanText,
  PenLine,
  Clock,
  Camera,
  FileText,
  Filter,
  Edit3,
  Search,
  ChevronDown,
  LayoutDashboard,
  Share2,
  ArrowUpDown,
  Eye,
  Link2,
  ToggleLeft,
} from "lucide-react"

const steps = [
  {
    icon: Upload,
    title: "Upload",
    description: "Snap a photo or upload from gallery.",
  },
  {
    icon: ScanText,
    title: "Review extracted data",
    description: "Verify auto-detected merchant, date, and amount.",
  },
  {
    icon: PenLine,
    title: "Manage in dashboard",
    description: "Filter, sort, search, and toggle privacy from one view.",
  },
  {
    icon: Share2,
    title: "Share for reimbursement",
    description: "Generate a read-only link and send it to your employer.",
  },
]

function MobileCaptureMockup() {
  return (
    <div className="w-full max-w-[280px] rounded-2xl border border-border bg-card p-3 shadow-lg">
      <div className="rounded-xl bg-background overflow-hidden">
        {/* Header */}
        <div className="flex items-center gap-2 border-b border-border/60 px-4 py-3">
          <Camera className="h-4 w-4 text-accent" />
          <span className="text-sm font-medium text-foreground">Scan Invoice</span>
        </div>
        {/* Camera area */}
        <div className="flex aspect-[3/4] flex-col items-center justify-center bg-muted/50 px-6">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-dashed border-accent/30">
            <Camera className="h-6 w-6 text-accent/50" />
          </div>
          <p className="mb-1 text-xs font-medium text-foreground">
            Position your invoice
          </p>
          <p className="text-center text-[10px] text-muted-foreground">
            Auto-detect will capture the edges
          </p>
        </div>
        {/* Bottom bar */}
        <div className="flex items-center justify-center gap-6 border-t border-border/60 px-4 py-3">
          <button className="text-[10px] text-muted-foreground">Gallery</button>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent">
            <div className="h-4 w-4 rounded-full bg-accent-foreground" />
          </div>
          <button className="text-[10px] text-muted-foreground">Manual</button>
        </div>
      </div>
    </div>
  )
}

function WebListMockup() {
  const rows = [
    { merchant: "Amazon India", category: "Electronics", amount: "2,499", status: "Stored", date: "Feb 12" },
    { merchant: "BigBasket", category: "Groceries", amount: "1,847", status: "Stored", date: "Feb 10" },
    { merchant: "Uber", category: "Travel", amount: "328", status: "Review", date: "Feb 8" },
    { merchant: "Myntra", category: "Clothing", amount: "3,999", status: "Stored", date: "Feb 5" },
    { merchant: "Zepto", category: "Groceries", amount: "562", status: "Stored", date: "Feb 3" },
  ]

  return (
    <div className="w-full max-w-[420px] rounded-2xl border border-border bg-card p-4 shadow-lg">
      {/* Toolbar */}
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FileText className="h-4 w-4 text-accent" />
          <span className="text-sm font-semibold text-foreground">All Invoices</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 rounded-md border border-border px-2 py-1">
            <Filter className="h-3 w-3 text-muted-foreground" />
            <span className="text-[10px] text-muted-foreground">FY 2025-26</span>
            <ChevronDown className="h-2.5 w-2.5 text-muted-foreground" />
          </div>
          <div className="flex items-center gap-1 rounded-md border border-border px-2 py-1">
            <Search className="h-3 w-3 text-muted-foreground" />
            <span className="text-[10px] text-muted-foreground">Search</span>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="rounded-lg border border-border/60 overflow-hidden">
        {/* Header */}
        <div className="grid grid-cols-5 gap-2 bg-muted/50 px-3 py-2 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
          <span className="col-span-1">Merchant</span>
          <span className="col-span-1">Category</span>
          <span className="col-span-1">Amount</span>
          <span className="col-span-1">Status</span>
          <span className="col-span-1 text-right">Action</span>
        </div>
        {/* Rows */}
        {rows.map((row) => (
          <div
            key={row.merchant}
            className="grid grid-cols-5 gap-2 border-t border-border/40 px-3 py-2.5 text-[11px] text-foreground transition-colors hover:bg-muted/30"
          >
            <span className="col-span-1 truncate font-medium">{row.merchant}</span>
            <span className="col-span-1 truncate text-muted-foreground">{row.category}</span>
            <span className="col-span-1 font-medium">{"Rs."}{row.amount}</span>
            <span className="col-span-1">
              <span
                className={`inline-flex items-center rounded-full px-1.5 py-0.5 text-[9px] font-medium ${
                  row.status === "Stored"
                    ? "bg-accent/10 text-accent"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {row.status}
              </span>
            </span>
            <span className="col-span-1 flex justify-end">
              <Edit3 className="h-3 w-3 text-muted-foreground hover:text-foreground cursor-pointer" />
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function DashboardMockup() {
  const stats = [
    { label: "Total Invoices", value: "24" },
    { label: "This Month", value: "Rs.8,235" },
    { label: "Public", value: "6" },
  ]

  return (
    <div className="w-full max-w-[420px] rounded-2xl border border-border bg-card p-4 shadow-lg">
      {/* Header */}
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <LayoutDashboard className="h-4 w-4 text-accent" />
          <span className="text-sm font-semibold text-foreground">Dashboard</span>
        </div>
        <div className="flex items-center gap-1.5 rounded-md border border-accent/30 bg-accent/5 px-2 py-1">
          <Share2 className="h-3 w-3 text-accent" />
          <span className="text-[10px] font-medium text-accent">Share Link</span>
        </div>
      </div>

      {/* Stats row */}
      <div className="mb-3 grid grid-cols-3 gap-2">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-lg border border-border/60 bg-background px-2.5 py-2 text-center"
          >
            <p className="text-xs font-semibold text-foreground">{stat.value}</p>
            <p className="text-[9px] text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Mini table */}
      <div className="rounded-lg border border-border/60 overflow-hidden">
        {/* Toolbar */}
        <div className="flex items-center justify-between bg-muted/50 px-3 py-1.5">
          <div className="flex items-center gap-1.5">
            <Filter className="h-3 w-3 text-muted-foreground" />
            <span className="text-[9px] text-muted-foreground">FY 2025-26</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ArrowUpDown className="h-3 w-3 text-muted-foreground" />
            <span className="text-[9px] text-muted-foreground">Sort</span>
          </div>
        </div>
        {/* Rows */}
        {[
          { merchant: "Amazon India", amount: "2,499", isPublic: true },
          { merchant: "Uber", amount: "328", isPublic: false },
          { merchant: "BigBasket", amount: "1,847", isPublic: true },
        ].map((row) => (
          <div
            key={row.merchant}
            className="flex items-center justify-between border-t border-border/40 px-3 py-2 text-[11px] transition-colors hover:bg-muted/30"
          >
            <div className="flex items-center gap-2">
              <span className="font-medium text-foreground">{row.merchant}</span>
              <span className="text-muted-foreground">{"Rs."}{row.amount}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <ToggleLeft
                  className={`h-3.5 w-3.5 ${
                    row.isPublic ? "text-accent" : "text-muted-foreground/50"
                  }`}
                />
                <span
                  className={`text-[9px] font-medium ${
                    row.isPublic ? "text-accent" : "text-muted-foreground"
                  }`}
                >
                  {row.isPublic ? "Public" : "Private"}
                </span>
              </div>
              <Eye className="h-3 w-3 text-muted-foreground hover:text-foreground cursor-pointer" />
            </div>
          </div>
        ))}
      </div>

      {/* Sharing link preview */}
      <div className="mt-3 flex items-center gap-2 rounded-lg border border-accent/20 bg-accent/5 px-3 py-2">
        <Link2 className="h-3.5 w-3.5 text-accent" />
        <span className="flex-1 truncate text-[10px] text-muted-foreground">
          invoicewallet.app/shared/a1b2c3d4
        </span>
        <span className="rounded-md bg-accent/10 px-1.5 py-0.5 text-[9px] font-medium text-accent">
          Copied
        </span>
      </div>
    </div>
  )
}

export function FunctionalitySection() {
  return (
    <section className="border-t border-border/60 bg-card">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
            How It Works
          </p>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Designed for Simplicity.
          </h2>
          <p className="mb-14 text-muted-foreground leading-relaxed">
            From capture to access, every step is effortless.
          </p>
        </div>

        {/* Mockups */}
        <div className="mb-14 flex flex-col items-center justify-center gap-8 lg:flex-row lg:items-start lg:gap-6">
          <MobileCaptureMockup />
          <WebListMockup />
          <DashboardMockup />
        </div>

        {/* Steps */}
        <div className="mx-auto grid max-w-3xl grid-cols-2 gap-6 md:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.title} className="flex flex-col items-center text-center">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-sm font-semibold text-accent">
                {i + 1}
              </div>
              <p className="mb-1 text-sm font-medium text-foreground">{step.title}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
