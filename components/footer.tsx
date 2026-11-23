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

const emailAddress = 'designwithneel07@gmail.com'
const gmailComposeUrl =
  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailAddress)}` +
  `&su=${encodeURIComponent('Portfolio inquiry - Neel Shah')}`

const ctaClassName =
  'inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-foreground/75 px-6 py-3 text-sm font-medium text-foreground transition-[background-color,color,border-color,transform,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:border-foreground hover:bg-foreground hover:text-background hover:shadow-[0_8px_24px_rgba(255,255,255,0.12)] active:translate-y-0 active:scale-[0.98] active:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-4 focus-visible:ring-offset-background'

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
            CONTACT
          </p>

          <div>
            <div>
              <h2 className="text-4xl md:text-6xl tracking-tight leading-[0.98] text-foreground max-w-3xl">
                Complex problems. Clean systems. Built to scale.
              </h2>
              <p className="mt-7 text-base md:text-lg leading-relaxed text-foreground/60 max-w-xl">
                I design high-craft digital products that turn complexity into clarity. Available for full-time UX/UI roles and select collaborations with teams that value precision.
              </p>

              <div className="mt-10 flex flex-col items-start gap-4">
                <div className="flex flex-col items-start gap-3">
                  <a
                    href={gmailComposeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={ctaClassName}
                  >
                    Email me via Gmail →
                  </a>
                  <a
                    href={`mailto:${emailAddress}`}
                    className={ctaClassName + ' min-h-10 px-4 py-2 text-xs'}
                  >
                    Use another email app
                  </a>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={ctaClassName}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
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
