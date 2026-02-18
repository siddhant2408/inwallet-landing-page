"use client"

import { useState, useMemo } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import {
  Shield,
  FileText,
  Calendar,
  IndianRupee,
  Tag,
  Eye,
  Download,
} from "lucide-react"
import {
  type Invoice,
  mockInvoices,
  financialYears,
  formatCurrency,
  formatDate,
} from "@/lib/invoice-data"

// Simulate: only show public invoices
const publicInvoices = mockInvoices.filter((inv) => inv.isPublic)

export default function SharedReimbursementPage() {
  const [filterFY, setFilterFY] = useState<string>("all")
  const [previewInvoice, setPreviewInvoice] = useState<Invoice | null>(null)

  const filtered = useMemo(() => {
    if (filterFY === "all") return publicInvoices
    return publicInvoices.filter((inv) => inv.financialYear === filterFY)
  }, [filterFY])

  const categoryTotals = useMemo(() => {
    const map = new Map<string, number>()
    filtered.forEach((inv) => {
      map.set(inv.category, (map.get(inv.category) ?? 0) + inv.amount)
    })
    return Array.from(map.entries()).sort((a, b) => b[1] - a[1])
  }, [filtered])

  const overallTotal = useMemo(
    () => filtered.reduce((s, i) => s + i.amount, 0),
    [filtered]
  )

  return (
    <div className="min-h-screen bg-background">
      {/* Header bar */}
      <header className="border-b border-border/60 bg-card">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <FileText className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-semibold tracking-tight text-foreground">
              Invoice Wallet
            </span>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-border bg-muted/50 px-3 py-1">
            <Shield className="h-3.5 w-3.5 text-accent" />
            <span className="text-xs font-medium text-muted-foreground">
              Read-only link
            </span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        {/* Title and filter */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-foreground">
              Reimbursement Invoices
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Shared invoice summary for reimbursement review.
            </p>
          </div>

          <Select value={filterFY} onValueChange={setFilterFY}>
            <SelectTrigger size="sm" className="w-40">
              <SelectValue placeholder="Financial Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Years</SelectItem>
              {financialYears.map((fy) => (
                <SelectItem key={fy} value={fy}>
                  FY {fy}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Summary cards */}
        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Overall total */}
          <div className="col-span-full rounded-lg border border-border bg-card px-5 py-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <IndianRupee className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">
                    Total Reimbursement
                  </p>
                  <p className="text-2xl font-bold text-foreground tabular-nums">
                    {formatCurrency(overallTotal)}
                  </p>
                </div>
              </div>
              <Badge variant="secondary" className="text-xs">
                {filtered.length} invoice{filtered.length !== 1 ? "s" : ""}
              </Badge>
            </div>
          </div>

          {/* Category totals */}
          {categoryTotals.map(([category, total]) => (
            <div
              key={category}
              className="flex items-center justify-between rounded-lg border border-border bg-card px-4 py-3 shadow-sm"
            >
              <div className="flex items-center gap-2">
                <Tag className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">
                  {category}
                </span>
              </div>
              <span className="text-sm font-semibold text-foreground tabular-nums">
                {formatCurrency(total)}
              </span>
            </div>
          ))}
        </div>

        {/* Invoice table */}
        <div className="rounded-lg border border-border bg-card shadow-sm overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/30 hover:bg-muted/30">
                <TableHead className="text-xs uppercase tracking-wider text-muted-foreground">
                  Merchant
                </TableHead>
                <TableHead className="text-xs uppercase tracking-wider text-muted-foreground">
                  Date
                </TableHead>
                <TableHead className="text-xs uppercase tracking-wider text-muted-foreground">
                  Amount
                </TableHead>
                <TableHead className="text-xs uppercase tracking-wider text-muted-foreground">
                  Category
                </TableHead>
                <TableHead className="text-xs uppercase tracking-wider text-muted-foreground text-right">
                  Preview
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={5}
                    className="h-32 text-center text-muted-foreground"
                  >
                    No public invoices available for this period.
                  </TableCell>
                </TableRow>
              ) : (
                filtered.map((inv) => (
                  <TableRow key={inv.id}>
                    <TableCell className="font-medium text-foreground">
                      {inv.merchant}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {formatDate(inv.date)}
                    </TableCell>
                    <TableCell className="font-semibold text-foreground tabular-nums">
                      {formatCurrency(inv.amount)}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className="text-xs font-normal text-muted-foreground"
                      >
                        {inv.category}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="icon-sm"
                        onClick={() => setPreviewInvoice(inv)}
                        aria-label={`Preview ${inv.merchant} invoice`}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>

        {/* Footer disclaimer */}
        <div className="mt-8 rounded-lg border border-border bg-muted/30 px-5 py-3 text-center">
          <p className="text-xs text-muted-foreground">
            This is a secure, read-only view generated by Invoice Wallet. No
            sensitive personal data is shared.
          </p>
        </div>
      </main>

      {/* Preview dialog */}
      <Dialog
        open={!!previewInvoice}
        onOpenChange={(open) => {
          if (!open) setPreviewInvoice(null)
        }}
      >
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Invoice Preview</DialogTitle>
            <DialogDescription>
              Read-only invoice details.
            </DialogDescription>
          </DialogHeader>
          {previewInvoice && (
            <div className="flex flex-col gap-4 pt-2">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1.5">
                    <FileText className="h-4 w-4 text-accent" />
                    <span className="text-xs text-muted-foreground">
                      Merchant
                    </span>
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {previewInvoice.merchant}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4 text-accent" />
                    <span className="text-xs text-muted-foreground">
                      Date
                    </span>
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {formatDate(previewInvoice.date)}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1.5">
                    <IndianRupee className="h-4 w-4 text-accent" />
                    <span className="text-xs text-muted-foreground">
                      Amount
                    </span>
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {formatCurrency(previewInvoice.amount)}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1.5">
                    <Tag className="h-4 w-4 text-accent" />
                    <span className="text-xs text-muted-foreground">
                      Category
                    </span>
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {previewInvoice.category}
                  </span>
                </div>
              </div>

              <div className="rounded-lg border border-border bg-muted/30 p-4 text-center">
                <p className="text-xs text-muted-foreground">
                  FY {previewInvoice.financialYear}
                </p>
              </div>

              <Button variant="outline" size="sm" className="w-full">
                <Download className="h-4 w-4" />
                Download Invoice (coming soon)
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
