"use client"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Link2,
  Copy,
  Check,
  RotateCcw,
  Trash2,
  Shield,
  Globe,
} from "lucide-react"

function generateId(): string {
  return Math.random().toString(36).substring(2, 10) + Date.now().toString(36)
}

interface ReimbursementSharingProps {
  publicCount: number
}

export function ReimbursementSharing({
  publicCount,
}: ReimbursementSharingProps) {
  const [shareId, setShareId] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  const shareUrl = shareId
    ? `${typeof window !== "undefined" ? window.location.origin : ""}/shared/${shareId}`
    : null

  const handleGenerate = useCallback(() => {
    setShareId(generateId())
    setCopied(false)
  }, [])

  const handleCopy = useCallback(async () => {
    if (!shareUrl) return
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // fallback
      const el = document.createElement("textarea")
      el.value = shareUrl
      document.body.appendChild(el)
      el.select()
      document.execCommand("copy")
      document.body.removeChild(el)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }, [shareUrl])

  const handleRevoke = useCallback(() => {
    setShareId(null)
    setCopied(false)
  }, [])

  const handleRegenerate = useCallback(() => {
    setShareId(generateId())
    setCopied(false)
  }, [])

  return (
    <Card className="border-border bg-card shadow-sm">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
            <Shield className="h-5 w-5 text-accent" />
          </div>
          <div>
            <CardTitle className="text-base">Reimbursement Sharing</CardTitle>
            <CardDescription>
              Share a read-only link with your employer or finance team.
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex items-center gap-4 rounded-lg border border-border bg-muted/30 px-4 py-3">
          <Globe className="h-4 w-4 text-accent shrink-0" />
          <div className="flex flex-col">
            <span className="text-sm font-medium text-foreground">
              {publicCount} public invoice{publicCount !== 1 ? "s" : ""}
            </span>
            <span className="text-xs text-muted-foreground">
              Only invoices marked as Public will appear in the shared view.
            </span>
          </div>
        </div>

        {!shareId ? (
          <Button
            onClick={handleGenerate}
            className="w-full bg-accent text-accent-foreground hover:bg-accent/90 sm:w-auto"
            disabled={publicCount === 0}
          >
            <Link2 className="h-4 w-4" />
            Generate Shareable Link
          </Button>
        ) : (
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Input
                readOnly
                value={shareUrl ?? ""}
                className="flex-1 bg-background text-sm font-mono"
              />
              <Button
                variant="outline"
                size="icon"
                onClick={handleCopy}
                aria-label="Copy link"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-emerald-600" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleRegenerate}
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Regenerate
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleRevoke}
                className="text-destructive hover:text-destructive"
              >
                <Trash2 className="h-3.5 w-3.5" />
                Revoke Link
              </Button>
            </div>

            {copied && (
              <p className="text-xs text-emerald-600 font-medium">
                Link copied to clipboard!
              </p>
            )}
          </div>
        )}

        {publicCount === 0 && !shareId && (
          <p className="text-xs text-muted-foreground">
            Mark at least one invoice as Public to generate a shareable link.
          </p>
        )}
      </CardContent>
    </Card>
  )
}
