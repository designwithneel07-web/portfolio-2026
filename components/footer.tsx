import Image from 'next/image'

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

              <div className="mt-10 flex flex-wrap items-start gap-x-4 gap-y-3">
                <div className="flex shrink-0 flex-col gap-3">
                  <a
                    href={gmailComposeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex h-[44px] shrink-0 items-center gap-2 rounded-full border-[0.8px] border-[rgba(238,238,238,0.75)] py-px pl-4 pr-px text-sm font-medium leading-5 text-[#eee] transition-colors duration-200 hover:bg-[#eee] hover:text-black active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-4 focus-visible:ring-offset-background motion-reduce:transition-none"
                  >
                    <span>Email me via Gmail</span>
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full transition-colors duration-200 group-hover:bg-black" aria-hidden="true">
                      <Image src="/icons/figma-arrow-right.svg" alt="" width={20} height={20} className="size-5" />
                    </span>
                    <span className="sr-only"> (opens Gmail compose in a new tab)</span>
                  </a>

                  <a
                    href={`mailto:${emailAddress}`}
                    className="group inline-flex h-[42px] shrink-0 items-center gap-2 pl-4 pr-px py-px text-xs font-medium leading-4 text-foreground/60 transition-colors duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98] motion-reduce:transition-none"
                  >
                    <span>Use another email app</span>
                    <span className="flex size-10 shrink-0 items-center justify-center" aria-hidden="true">
                      <Image src="/icons/figma-arrow-right.svg" alt="" width={20} height={20} className="size-5 opacity-60 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none" />
                    </span>
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex min-h-12 shrink-0 items-center gap-2 rounded-full border-[0.8px] border-[rgba(238,238,238,0.75)] py-[2px] pl-6 pr-[2px] text-sm font-medium leading-5 text-[#eee] transition-colors duration-200 hover:bg-[#eee] hover:text-black active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-4 focus-visible:ring-offset-background motion-reduce:transition-none"
                    >
                      <span>{link.label}</span>
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-full transition-colors duration-200 group-hover:bg-black" aria-hidden="true">
                        <Image src="/icons/figma-arrow-up-right.svg" alt="" width={20} height={20} className="size-5 transition-[filter] duration-200 group-hover:brightness-0 group-hover:invert motion-reduce:transition-none" />
                      </span>
                      <span className="sr-only"> (opens in a new tab)</span>
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
