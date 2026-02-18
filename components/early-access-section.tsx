"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, CheckCircle2, Loader2, AlertCircle } from "lucide-react"
import { supabase } from "@/lib/supabase/client"

type FormStatus = "idle" | "loading" | "success" | "duplicate" | "error"

export function EarlyAccessSection() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<FormStatus>("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = email.trim()
    if (!trimmed) return

    setStatus("loading")

    try {
      const { error } = await supabase.from("waitlist").insert({ email: trimmed })

      if (error) {
        // Supabase unique constraint violation code
        if (error.code === "23505") {
          setStatus("duplicate")
        } else {
          setStatus("error")
        }
        return
      }

      setStatus("success")
    } catch {
      setStatus("error")
    }
  }

  const statusContent: Record<Exclude<FormStatus, "idle" | "loading">, {
    icon: React.ReactNode
    title: string
    subtitle: string
  }> = {
    success: {
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
          <CheckCircle2 className="h-6 w-6 text-accent" />
        </div>
      ),
      title: "You\u2019re on the list!",
      subtitle: "We\u2019ll reach out when early access is ready.",
    },
    duplicate: {
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
          <CheckCircle2 className="h-6 w-6 text-accent" />
        </div>
      ),
      title: "You\u2019re already signed up!",
      subtitle: "This email is already on our early access list.",
    },
    error: {
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10">
          <AlertCircle className="h-6 w-6 text-destructive" />
        </div>
      ),
      title: "Something went wrong.",
      subtitle: "Please try again in a moment.",
    },
  }

  const isLoading = status === "loading"
  const showResult = status === "success" || status === "duplicate" || status === "error"

  return (
    <section className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="mb-4 text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            Be the First to Organize Your Invoices Properly.
          </h2>
          <p className="mb-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Join our early access list and get exclusive first access when we launch.
          </p>

          {showResult ? (
            <div className="flex flex-col items-center gap-3">
              {statusContent[status as keyof typeof statusContent].icon}
              <p className="text-base font-medium text-foreground sm:text-lg">
                {statusContent[status as keyof typeof statusContent].title}
              </p>
              <p className="text-xs text-muted-foreground sm:text-sm">
                {statusContent[status as keyof typeof statusContent].subtitle}
              </p>
              {status === "error" && (
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-2 rounded-full"
                  onClick={() => setStatus("idle")}
                >
                  Try Again
                </Button>
              )}
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mx-auto flex w-full max-w-sm flex-col gap-3 sm:flex-row"
            >
              <Input
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
                className="h-11 w-full rounded-full px-5 text-sm"
              />
              <Button
                type="submit"
                size="lg"
                disabled={isLoading}
                className="w-full rounded-full bg-accent px-6 text-accent-foreground shadow-md hover:bg-accent/90 sm:w-auto"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-1.5 h-4 w-4 animate-spin" />
                    Joining...
                  </>
                ) : (
                  <>
                    Join Early Access
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </>
                )}
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
