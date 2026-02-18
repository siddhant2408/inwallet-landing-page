// ─── Types ───────────────────────────────────────────────────────────
export type InvoiceStatus = "Captured" | "Needs Review" | "Ready"
export type InvoiceCategory =
  | "Electronics"
  | "Groceries"
  | "Travel"
  | "Food"
  | "Medical"
  | "Clothing"
  | "Home"
  | "Utilities"
  | "Education"
  | "Entertainment"

export interface Invoice {
  id: string
  merchant: string
  date: string // ISO date
  amount: number
  category: InvoiceCategory
  status: InvoiceStatus
  isPublic: boolean
  financialYear: string // e.g. "2025-26"
  notes?: string
}

// ─── Helpers ─────────────────────────────────────────────────────────
export function getFinancialYear(dateStr: string): string {
  const d = new Date(dateStr)
  const month = d.getMonth() // 0-indexed
  const year = d.getFullYear()
  if (month >= 3) {
    // April onwards
    return `${year}-${String(year + 1).slice(2)}`
  }
  return `${year - 1}-${String(year).slice(2)}`
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount)
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
}

// ─── Financial year options ──────────────────────────────────────────
export const financialYears = ["2025-26", "2024-25", "2023-24"] as const

// ─── Categories ──────────────────────────────────────────────────────
export const categories: InvoiceCategory[] = [
  "Electronics",
  "Groceries",
  "Travel",
  "Food",
  "Medical",
  "Clothing",
  "Home",
  "Utilities",
  "Education",
  "Entertainment",
]

// ─── Statuses ────────────────────────────────────────────────────────
export const statuses: InvoiceStatus[] = ["Captured", "Needs Review", "Ready"]

// ─── Mock data ───────────────────────────────────────────────────────
export const mockInvoices: Invoice[] = [
  {
    id: "inv-001",
    merchant: "Amazon India",
    date: "2026-01-15",
    amount: 12499,
    category: "Electronics",
    status: "Ready",
    isPublic: true,
    financialYear: "2025-26",
  },
  {
    id: "inv-002",
    merchant: "BigBasket",
    date: "2026-01-20",
    amount: 2847,
    category: "Groceries",
    status: "Captured",
    isPublic: false,
    financialYear: "2025-26",
  },
  {
    id: "inv-003",
    merchant: "Uber India",
    date: "2026-02-02",
    amount: 528,
    category: "Travel",
    status: "Ready",
    isPublic: true,
    financialYear: "2025-26",
  },
  {
    id: "inv-004",
    merchant: "Swiggy",
    date: "2026-02-05",
    amount: 756,
    category: "Food",
    status: "Needs Review",
    isPublic: false,
    financialYear: "2025-26",
  },
  {
    id: "inv-005",
    merchant: "Apollo Pharmacy",
    date: "2026-01-10",
    amount: 3200,
    category: "Medical",
    status: "Ready",
    isPublic: true,
    financialYear: "2025-26",
  },
  {
    id: "inv-006",
    merchant: "Myntra",
    date: "2025-12-28",
    amount: 5999,
    category: "Clothing",
    status: "Captured",
    isPublic: false,
    financialYear: "2025-26",
  },
  {
    id: "inv-007",
    merchant: "IKEA",
    date: "2025-11-15",
    amount: 8750,
    category: "Home",
    status: "Ready",
    isPublic: true,
    financialYear: "2025-26",
  },
  {
    id: "inv-008",
    merchant: "Jio Fiber",
    date: "2026-02-01",
    amount: 999,
    category: "Utilities",
    status: "Captured",
    isPublic: false,
    financialYear: "2025-26",
  },
  {
    id: "inv-009",
    merchant: "Coursera",
    date: "2025-10-05",
    amount: 4500,
    category: "Education",
    status: "Ready",
    isPublic: true,
    financialYear: "2025-26",
  },
  {
    id: "inv-010",
    merchant: "Netflix",
    date: "2026-01-01",
    amount: 649,
    category: "Entertainment",
    status: "Captured",
    isPublic: false,
    financialYear: "2025-26",
  },
  {
    id: "inv-011",
    merchant: "Flipkart",
    date: "2025-09-22",
    amount: 15999,
    category: "Electronics",
    status: "Ready",
    isPublic: true,
    financialYear: "2025-26",
  },
  {
    id: "inv-012",
    merchant: "Zepto",
    date: "2026-02-10",
    amount: 1562,
    category: "Groceries",
    status: "Needs Review",
    isPublic: false,
    financialYear: "2025-26",
  },
  {
    id: "inv-013",
    merchant: "Ola Cabs",
    date: "2025-08-18",
    amount: 345,
    category: "Travel",
    status: "Captured",
    isPublic: false,
    financialYear: "2025-26",
  },
  {
    id: "inv-014",
    merchant: "Zomato",
    date: "2025-07-30",
    amount: 890,
    category: "Food",
    status: "Ready",
    isPublic: true,
    financialYear: "2025-26",
  },
  {
    id: "inv-015",
    merchant: "Max Healthcare",
    date: "2025-06-12",
    amount: 22000,
    category: "Medical",
    status: "Ready",
    isPublic: true,
    financialYear: "2025-26",
  },
  {
    id: "inv-016",
    merchant: "H&M India",
    date: "2025-04-20",
    amount: 3499,
    category: "Clothing",
    status: "Captured",
    isPublic: false,
    financialYear: "2025-26",
  },
  {
    id: "inv-017",
    merchant: "Urban Ladder",
    date: "2024-12-15",
    amount: 18500,
    category: "Home",
    status: "Ready",
    isPublic: true,
    financialYear: "2024-25",
  },
  {
    id: "inv-018",
    merchant: "Airtel",
    date: "2024-11-01",
    amount: 599,
    category: "Utilities",
    status: "Captured",
    isPublic: false,
    financialYear: "2024-25",
  },
  {
    id: "inv-019",
    merchant: "Udemy",
    date: "2024-10-10",
    amount: 3799,
    category: "Education",
    status: "Ready",
    isPublic: true,
    financialYear: "2024-25",
  },
  {
    id: "inv-020",
    merchant: "BookMyShow",
    date: "2024-09-05",
    amount: 1200,
    category: "Entertainment",
    status: "Needs Review",
    isPublic: false,
    financialYear: "2024-25",
  },
]
