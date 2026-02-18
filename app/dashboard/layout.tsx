import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Wallet Dashboard - Invoice Wallet",
  description: "Manage, organize, and share your invoices securely.",
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
