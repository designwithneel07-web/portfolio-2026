'use client'

import Link from 'next/link'

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/neel-shah-7a23941b3',
    label: 'LinkedIn',
  },
  {
    href: 'https://www.behance.net/neelshah21',
    label: 'Behance',
  },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-white/10"
    >
      {/* Atmospheric background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/5 blur-[180px] rounded-full" />

        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-fuchsia-500/5 blur-[180px] rounded-full" />
      </div>

      {/* Top cinematic divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="py-28 md:py-40">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-8">
              Contact
            </p>

            {/* Main statement */}
            <h2 className="text-4xl md:text-6xl tracking-tight leading-[0.95] text-foreground max-w-5xl">
              Designing systems that feel calm,
              clear, and deeply human.
            </h2>

            {/* Supporting text */}
            <p className="mt-10 text-lg md:text-xl leading-relaxed text-foreground/60 max-w-2xl">
              I’m interested in thoughtful
              product systems, future-facing
              digital experiences, and teams
              building meaningful interaction
              design.
            </p>

            {/* Contact actions */}
            <div className="mt-14 flex flex-wrap items-center gap-6">
              <a
                href="mailto:hello@portfolio.com"
                className="group inline-flex items-center gap-3 text-lg text-foreground hover:text-white transition-colors duration-300"
              >
                Designwithneel07@gmail.com

                <span className="translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </a>

              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/50 hover:text-foreground transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="border-t border-white/10 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Neel Shah
          </p>

          <p className="text-xs text-muted-foreground">
            Designed with cinematic precision
          </p>
        </div>
      </div>
    </footer>
  )
}
