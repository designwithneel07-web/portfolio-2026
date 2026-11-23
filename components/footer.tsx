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
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/5 blur-[180px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-fuchsia-500/5 blur-[180px] rounded-full" />
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="py-24 md:py-32 lg:py-36">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-7">
            Contact
          </p>

          <div>
            <div>
              <h2 className="text-4xl md:text-6xl tracking-tight leading-[0.98] text-foreground max-w-3xl">
                Designing systems that feel calm, clear, and deeply human.
              </h2>
              <p className="mt-7 text-base md:text-lg leading-relaxed text-foreground/60 max-w-xl">
                I’m interested in thoughtful product systems, future-facing digital experiences, and teams building meaningful interaction design.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
                <a
                  href="mailto:designwithneel07@gmail.com"
                  className="group inline-flex items-center gap-2 text-base md:text-lg text-foreground hover:text-white transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-4 focus-visible:ring-offset-background rounded-sm"
                >
                  Email Neel directly
                  <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>

                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/55 hover:text-foreground transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-4 focus-visible:ring-offset-background rounded-sm"
                  >
                    {link.label}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© {currentYear} Neel Shah</p>
          <p className="text-xs text-muted-foreground">Designed with cinematic precision</p>
        </div>
      </div>
    </footer>
  )
}
