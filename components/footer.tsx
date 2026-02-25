export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-card">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Inburse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
