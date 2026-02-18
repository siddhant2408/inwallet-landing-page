"use client"

import { useState, useCallback, useMemo } from "react"
import { DashboardNavbar } from "@/components/dashboard-navbar"
import { InvoiceTable } from "@/components/invoice-table"
import { ReimbursementSharing } from "@/components/reimbursement-sharing"
import { mockInvoices } from "@/lib/invoice-data"
import { FileText, IndianRupee, Globe, Clock } from "lucide-react"

export default function DashboardPage() {
  const [invoices, setInvoices] = useState(mockInvoices)

  const handleTogglePublic = useCallback((id: string) => {
    setInvoices((prev) =>
      prev.map((inv) =>
        inv.id === id ? { ...inv, isPublic: !inv.isPublic } : inv
      )
    )
  }, [])

  const stats = useMemo(() => {
    const total = invoices.length
    const publicCount = invoices.filter((i) => i.isPublic).length
    const totalAmount = invoices.reduce((s, i) => s + i.amount, 0)
    const needsReview = invoices.filter(
      (i) => i.status === "Needs Review"
    ).length
    return { total, publicCount, totalAmount, needsReview }
  }, [invoices])

  return (
    <div className="min-h-screen bg-background">
      <DashboardNavbar />

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Page header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            Wallet Dashboard
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Manage, organize, and share your invoices securely.
          </p>
        </div>

        {/* Stats row */}
        <div className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
          <StatCard
            icon={<FileText className="h-4 w-4" />}
            label="Total Invoices"
            value={String(stats.total)}
          />
          <StatCard
            icon={<IndianRupee className="h-4 w-4" />}
            label="Total Amount"
            value={new Intl.NumberFormat("en-IN", {
              style: "currency",
              currency: "INR",
              maximumFractionDigits: 0,
            }).format(stats.totalAmount)}
          />
          <StatCard
            icon={<Globe className="h-4 w-4" />}
            label="Public Invoices"
            value={String(stats.publicCount)}
          />
          <StatCard
            icon={<Clock className="h-4 w-4" />}
            label="Needs Review"
            value={String(stats.needsReview)}
          />
        </div>

        {/* Reimbursement sharing */}
        <div className="mb-6">
          <ReimbursementSharing publicCount={stats.publicCount} />
        </div>

        {/* Invoice table */}
        <InvoiceTable
          invoices={invoices}
          onTogglePublic={handleTogglePublic}
        />
      </main>
    </div>
  )
}

function StatCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 shadow-sm">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-xs text-muted-foreground">{label}</span>
        <span className="text-lg font-semibold text-foreground tabular-nums">
          {value}
        </span>
      </div>
    </div>
  )
}
