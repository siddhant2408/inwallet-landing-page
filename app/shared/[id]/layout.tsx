import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Reimbursement Invoices - Invoice Wallet",
  description:
    "Shared, read-only view of reimbursement invoices submitted via Invoice Wallet.",
}

export default function SharedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
