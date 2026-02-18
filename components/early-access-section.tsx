"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export function EarlyAccessSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
    }
  }

  return (
    <section className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Be the First to Organize Your Invoices Properly.
          </h2>
          <p className="mb-8 text-muted-foreground leading-relaxed">
            Join our early access list and get exclusive first access when we launch.
          </p>

          {submitted ? (
            <div className="flex flex-col items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                <CheckCircle2 className="h-6 w-6 text-accent" />
              </div>
              <p className="text-lg font-medium text-foreground">
                You&apos;re on the list!
              </p>
              <p className="text-sm text-muted-foreground">
                We&apos;ll reach out when early access is ready.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mx-auto flex max-w-sm flex-col gap-3 sm:flex-row">
              <Input
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-11 rounded-full px-5 text-sm"
              />
              <Button
                type="submit"
                size="lg"
                className="rounded-full bg-accent text-accent-foreground px-6 hover:bg-accent/90 shadow-md"
              >
                Join Early Access
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </form>
          )}

          <p className="mt-4 text-xs text-muted-foreground">
            No spam. Just early access.
          </p>
        </div>
      </div>
    </section>
  )
}
