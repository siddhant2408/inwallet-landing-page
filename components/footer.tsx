export function Footer() {
  const links = [
    { label: "Product", href: "#" },
    { label: "Security", href: "#" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#earlyaccess" },
  ]

  const legal = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ]

  return (
    <footer className="border-t border-border/60 bg-card">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 mb-8">
          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-2">
              {links.filter(l => l.label !== "Security" && l.label !== "Pricing" && l.label !== "Contact").map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  Customers
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2">
              {legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border/60 pt-6">
          <p className="text-xs text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} Inburse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
