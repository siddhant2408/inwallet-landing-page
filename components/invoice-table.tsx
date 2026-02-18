"use client"

import { useState, useMemo, useCallback } from "react"
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
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
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
  ArrowUpDown,
  Search,
  Eye,
  Pencil,
  Globe,
  Lock,
  ChevronLeft,
  ChevronRight,
  FileText,
  Calendar,
  IndianRupee,
  Tag,
  CircleDot,
} from "lucide-react"
import {
  type Invoice,
  type InvoiceCategory,
  type InvoiceStatus,
  categories,
  statuses,
  financialYears,
  formatCurrency,
  formatDate,
} from "@/lib/invoice-data"

type SortField = "date" | "amount" | "merchant"
type SortDir = "asc" | "desc"

const PAGE_SIZE = 8

function statusVariant(status: InvoiceStatus) {
  switch (status) {
    case "Ready":
      return "bg-emerald-50 text-emerald-700 border-emerald-200"
    case "Captured":
      return "bg-sky-50 text-sky-700 border-sky-200"
    case "Needs Review":
      return "bg-amber-50 text-amber-700 border-amber-200"
  }
}

interface InvoiceTableProps {
  invoices: Invoice[]
  onTogglePublic: (id: string) => void
}

export function InvoiceTable({ invoices, onTogglePublic }: InvoiceTableProps) {
  const [search, setSearch] = useState("")
  const [filterFY, setFilterFY] = useState<string>("all")
  const [filterCategory, setFilterCategory] = useState<string>("all")
  const [filterStatus, setFilterStatus] = useState<string>("all")
  const [filterVisibility, setFilterVisibility] = useState<string>("all")
  const [sortField, setSortField] = useState<SortField>("date")
  const [sortDir, setSortDir] = useState<SortDir>("desc")
  const [page, setPage] = useState(1)
  const [viewInvoice, setViewInvoice] = useState<Invoice | null>(null)
  const [editInvoice, setEditInvoice] = useState<Invoice | null>(null)

  const toggleSort = useCallback(
    (field: SortField) => {
      if (sortField === field) {
        setSortDir((d) => (d === "asc" ? "desc" : "asc"))
      } else {
        setSortField(field)
        setSortDir("asc")
      }
      setPage(1)
    },
    [sortField]
  )

  const filtered = useMemo(() => {
    let result = [...invoices]

    // Search
    if (search.trim()) {
      const q = search.toLowerCase()
      result = result.filter((inv) =>
        inv.merchant.toLowerCase().includes(q)
      )
    }

    // FY filter
    if (filterFY !== "all") {
      result = result.filter((inv) => inv.financialYear === filterFY)
    }

    // Category filter
    if (filterCategory !== "all") {
      result = result.filter(
        (inv) => inv.category === (filterCategory as InvoiceCategory)
      )
    }

    // Status filter
    if (filterStatus !== "all") {
      result = result.filter(
        (inv) => inv.status === (filterStatus as InvoiceStatus)
      )
    }

    // Visibility filter
    if (filterVisibility !== "all") {
      const isPublic = filterVisibility === "public"
      result = result.filter((inv) => inv.isPublic === isPublic)
    }

    // Sort
    result.sort((a, b) => {
      let cmp = 0
      switch (sortField) {
        case "date":
          cmp = new Date(a.date).getTime() - new Date(b.date).getTime()
          break
        case "amount":
          cmp = a.amount - b.amount
          break
        case "merchant":
          cmp = a.merchant.localeCompare(b.merchant)
          break
      }
      return sortDir === "asc" ? cmp : -cmp
    })

    return result
  }, [
    invoices,
    search,
    filterFY,
    filterCategory,
    filterStatus,
    filterVisibility,
    sortField,
    sortDir,
  ])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  const SortButton = ({
    field,
    children,
  }: {
    field: SortField
    children: React.ReactNode
  }) => (
    <button
      onClick={() => toggleSort(field)}
      className="inline-flex items-center gap-1 text-left font-medium hover:text-foreground transition-colors"
    >
      {children}
      <ArrowUpDown
        className={`h-3 w-3 ${
          sortField === field
            ? "text-accent"
            : "text-muted-foreground/50"
        }`}
      />
    </button>
  )

  return (
    <div className="flex flex-col gap-4">
      {/* Filters toolbar */}
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search by merchant..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
              setPage(1)
            }}
            className="pl-9"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Select
            value={filterFY}
            onValueChange={(v) => {
              setFilterFY(v)
              setPage(1)
            }}
          >
            <SelectTrigger size="sm">
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

          <Select
            value={filterCategory}
            onValueChange={(v) => {
              setFilterCategory(v)
              setPage(1)
            }}
          >
            <SelectTrigger size="sm">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map((c) => (
                <SelectItem key={c} value={c}>
                  {c}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            value={filterStatus}
            onValueChange={(v) => {
              setFilterStatus(v)
              setPage(1)
            }}
          >
            <SelectTrigger size="sm">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              {statuses.map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            value={filterVisibility}
            onValueChange={(v) => {
              setFilterVisibility(v)
              setPage(1)
            }}
          >
            <SelectTrigger size="sm">
              <SelectValue placeholder="Visibility" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="public">Public</SelectItem>
              <SelectItem value="private">Private</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Results count */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {filtered.length} invoice{filtered.length !== 1 ? "s" : ""} found
        </p>
      </div>

      {/* Table */}
      <div className="rounded-lg border border-border bg-card shadow-sm overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/30 hover:bg-muted/30">
              <TableHead className="text-xs uppercase tracking-wider text-muted-foreground">
                <SortButton field="merchant">Merchant</SortButton>
              </TableHead>
              <TableHead className="text-xs uppercase tracking-wider text-muted-foreground">
                <SortButton field="date">Invoice Date</SortButton>
              </TableHead>
              <TableHead className="text-xs uppercase tracking-wider text-muted-foreground">
                <SortButton field="amount">Amount</SortButton>
              </TableHead>
              <TableHead className="text-xs uppercase tracking-wider text-muted-foreground">
                Category
              </TableHead>
              <TableHead className="text-xs uppercase tracking-wider text-muted-foreground">
                Status
              </TableHead>
              <TableHead className="text-xs uppercase tracking-wider text-muted-foreground text-center">
                Visibility
              </TableHead>
              <TableHead className="text-xs uppercase tracking-wider text-muted-foreground text-right">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginated.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={7}
                  className="h-32 text-center text-muted-foreground"
                >
                  No invoices match your filters.
                </TableCell>
              </TableRow>
            ) : (
              paginated.map((inv) => (
                <TableRow key={inv.id} className="group">
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
                  <TableCell>
                    <span
                      className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium ${statusVariant(
                        inv.status
                      )}`}
                    >
                      {inv.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center justify-center gap-2">
                      {inv.isPublic ? (
                        <Globe className="h-3.5 w-3.5 text-accent" />
                      ) : (
                        <Lock className="h-3.5 w-3.5 text-muted-foreground" />
                      )}
                      <Switch
                        checked={inv.isPublic}
                        onCheckedChange={() => onTogglePublic(inv.id)}
                        aria-label={`Toggle visibility for ${inv.merchant}`}
                      />
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-1">
                      <Button
                        variant="ghost"
                        size="icon-sm"
                        onClick={() => setViewInvoice(inv)}
                        aria-label={`View ${inv.merchant} invoice`}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon-sm"
                        onClick={() => setEditInvoice(inv)}
                        aria-label={`Edit ${inv.merchant} invoice`}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between pt-2">
          <p className="text-sm text-muted-foreground">
            Page {page} of {totalPages}
          </p>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              disabled={page <= 1}
              onClick={() => setPage((p) => p - 1)}
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              disabled={page >= totalPages}
              onClick={() => setPage((p) => p + 1)}
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      {/* View invoice dialog */}
      <Dialog
        open={!!viewInvoice}
        onOpenChange={(open) => {
          if (!open) setViewInvoice(null)
        }}
      >
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Invoice Details</DialogTitle>
            <DialogDescription>
              Full details for this invoice.
            </DialogDescription>
          </DialogHeader>
          {viewInvoice && (
            <div className="flex flex-col gap-4 pt-2">
              <div className="grid grid-cols-2 gap-4">
                <DetailRow
                  icon={<FileText className="h-4 w-4 text-accent" />}
                  label="Merchant"
                  value={viewInvoice.merchant}
                />
                <DetailRow
                  icon={<Calendar className="h-4 w-4 text-accent" />}
                  label="Date"
                  value={formatDate(viewInvoice.date)}
                />
                <DetailRow
                  icon={<IndianRupee className="h-4 w-4 text-accent" />}
                  label="Amount"
                  value={formatCurrency(viewInvoice.amount)}
                />
                <DetailRow
                  icon={<Tag className="h-4 w-4 text-accent" />}
                  label="Category"
                  value={viewInvoice.category}
                />
                <DetailRow
                  icon={<CircleDot className="h-4 w-4 text-accent" />}
                  label="Status"
                  value={viewInvoice.status}
                />
                <DetailRow
                  icon={
                    viewInvoice.isPublic ? (
                      <Globe className="h-4 w-4 text-accent" />
                    ) : (
                      <Lock className="h-4 w-4 text-muted-foreground" />
                    )
                  }
                  label="Visibility"
                  value={viewInvoice.isPublic ? "Public" : "Private"}
                />
              </div>
              <div className="rounded-lg border border-border bg-muted/30 p-4">
                <p className="text-xs text-muted-foreground">
                  Financial Year: FY {viewInvoice.financialYear}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Edit invoice dialog */}
      <Dialog
        open={!!editInvoice}
        onOpenChange={(open) => {
          if (!open) setEditInvoice(null)
        }}
      >
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Edit Invoice</DialogTitle>
            <DialogDescription>
              Update invoice details for {editInvoice?.merchant}.
            </DialogDescription>
          </DialogHeader>
          {editInvoice && (
            <div className="flex flex-col gap-4 pt-2">
              <div className="grid grid-cols-2 gap-4">
                <DetailRow
                  icon={<FileText className="h-4 w-4 text-accent" />}
                  label="Merchant"
                  value={editInvoice.merchant}
                />
                <DetailRow
                  icon={<Calendar className="h-4 w-4 text-accent" />}
                  label="Date"
                  value={formatDate(editInvoice.date)}
                />
                <DetailRow
                  icon={<IndianRupee className="h-4 w-4 text-accent" />}
                  label="Amount"
                  value={formatCurrency(editInvoice.amount)}
                />
                <DetailRow
                  icon={<Tag className="h-4 w-4 text-accent" />}
                  label="Category"
                  value={editInvoice.category}
                />
              </div>
              <p className="rounded-lg border border-border bg-muted/30 p-4 text-center text-xs text-muted-foreground">
                Full editing capabilities will be available in a future release.
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

function DetailRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-1.5">
        {icon}
        <span className="text-xs text-muted-foreground">{label}</span>
      </div>
      <span className="text-sm font-medium text-foreground">{value}</span>
    </div>
  )
}
