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
  'group inline-flex min-h-[72px] items-center justify-between gap-5 rounded-full border border-foreground/80 py-2 pl-7 pr-2 text-lg font-medium text-foreground transition-[background-color,color,border-color,transform,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:border-foreground hover:bg-foreground hover:text-background hover:shadow-[0_8px_24px_rgba(255,255,255,0.12)] active:translate-y-0 active:scale-[0.98] active:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-4 focus-visible:ring-offset-background motion-reduce:transition-none'

function CtaArrow({ external = false }: { external?: boolean }) {
  return (
    <span className="flex size-12 shrink-0 items-center justify-center rounded-full transition-colors duration-200 group-hover:bg-black group-hover:text-white">
      {external ? (
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-6">
          <path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : (
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-6">
          <path d="M4 12h15m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </span>
  )
}

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

              <div className="mt-10">
                <div className="flex flex-wrap items-center gap-4 md:gap-5">
                  <a
                    href={gmailComposeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={ctaClassName}
                  >
                    <span>Email me via Gmail</span>
                    <CtaArrow />
                    <span className="sr-only"> (opens Gmail compose in a new tab)</span>
                  </a>
                  <div className="flex flex-wrap items-center gap-4">
                    {socialLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={ctaClassName}
                      >
                        <span>{link.label}</span>
                        <CtaArrow external />
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    ))}
                  </div>
                </div>

                <a
                  href={`mailto:${emailAddress}`}
                  className="group mt-6 inline-flex min-h-11 items-center gap-5 rounded-full py-2 pr-2 text-base font-medium text-foreground transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-4 focus-visible:ring-offset-background active:scale-[0.98]"
                >
                  <span>Use another email app</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" className="size-6">
                      <path d="M4 12h15m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </a>
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
