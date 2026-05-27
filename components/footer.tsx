import Link from 'next/link'

const footerLinks = {
  navigation: [
    { href: '#work', label: 'Work' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ],
  social: [
    { href: 'https://twitter.com', label: 'Twitter' },
    { href: 'https://linkedin.com', label: 'LinkedIn' },
    { href: 'https://dribbble.com', label: 'Dribbble' },
  ],
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-border">
      {/* Gradient overlay at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
            {/* Brand Column */}
            <div className="md:col-span-6">
              <Link
                href="/"
                className="text-foreground font-medium text-lg tracking-tight hover:opacity-80 transition-opacity"
              >
                Portfolio
              </Link>
              <p className="mt-4 text-muted-foreground text-sm leading-relaxed max-w-sm">
                Crafting digital experiences that balance beauty with function.
                Available for select projects.
              </p>
            </div>

            {/* Navigation Column */}
            <div className="md:col-span-3">
              <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-4">
                Navigation
              </h3>
              <ul className="flex flex-col gap-3">
                {footerLinks.navigation.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-foreground/80 text-sm hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Column */}
            <div className="md:col-span-3">
              <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-4">
                Connect
              </h3>
              <ul className="flex flex-col gap-3">
                {footerLinks.social.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 text-sm hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs">
            {currentYear} Portfolio. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs">
            Designed and built with precision
          </p>
        </div>
      </div>
    </footer>
  )
}
