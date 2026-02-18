"use client"

import Link from "next/link"
import { FileText, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DashboardNavbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <FileText className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-semibold tracking-tight text-foreground">
              Invoice Wallet
            </span>
          </Link>
          <span className="hidden text-sm text-muted-foreground md:inline-block">
            /
          </span>
          <span className="hidden text-sm font-medium text-foreground md:inline-block">
            Wallet Dashboard
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Back to Home</span>
            </Link>
          </Button>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-foreground">
            RK
          </div>
        </div>
      </nav>
    </header>
  )
}
