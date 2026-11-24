import Image from 'next/image'
import type { ReactNode } from 'react'

const sections = [
  { id: 'challenge', label: 'The challenge' },
  { id: 'access-model', label: 'Access model' },
  { id: 'information-architecture', label: 'Information architecture' },
  { id: 'design-decisions', label: 'Design decisions' },
  { id: 'prototype', label: 'Prototype' },
  { id: 'reflection', label: 'Reflection' },
]

const projectFacts = [
  { label: 'Project', value: 'Lumen — Insights Assistant' },
  { label: 'Role', value: 'Solo Product Designer' },
  { label: 'Timeline', value: '6 days · April 2026' },
  { label: 'Output', value: '10 screens · React prototype' },
]

const accessRoles = [
  {
    number: '01',
    name: 'Super admin',
    description: 'Oversees workspace-level users and permissions.',
    color: 'bg-[#39c9b0]',
  },
  {
    number: '02',
    name: 'Regional analyst',
    description: 'Works within a defined geography and data scope.',
    color: 'bg-sky-400',
  },
  {
    number: '03',
    name: 'Brand specialist',
    description: 'Works across selected markets within an assigned brand scope.',
    color: 'bg-rose-400',
  },
  {
    number: '04',
    name: 'Power user',
    description: 'Stress-tests combinations of scopes and their overflow states.',
    color: 'bg-amber-400',
  },
]

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="size-5" aria-hidden="true">
      {diagonal ? (
        <path d="M5.5 14.5 14 6m0 0H7m7 0v7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="M3.5 10h12m0 0-4.5-4.5M15.5 10 11 14.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  )
}

function CaseStudyCta({
  href,
  children,
  external = false,
}: {
  href: string
  children: ReactNode
  external?: boolean
}) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="group inline-flex min-h-12 items-center gap-2 rounded-full border-[0.8px] border-[rgba(238,238,238,0.75)] py-[2px] pl-6 pr-[2px] text-sm font-medium leading-5 text-[#eee] transition-colors duration-200 hover:bg-[#eee] hover:text-black active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-4 focus-visible:ring-offset-background motion-reduce:transition-none"
    >
      <span>{children}</span>
      <span className="flex size-10 shrink-0 items-center justify-center rounded-full transition-colors duration-200 group-hover:bg-black" aria-hidden="true">
        <span className="transition-[filter,transform] duration-200 group-hover:brightness-0 group-hover:invert group-hover:translate-x-0.5 motion-reduce:transition-none">
          <Arrow diagonal={external} />
        </span>
      </span>
      {external && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  )
}

function SectionHeading({
  index,
  eyebrow,
  title,
  intro,
}: {
  index: string
  eyebrow: string
  title: string
  intro: string
}) {
  return (
    <div className="mb-10 grid gap-5 md:grid-cols-[130px_minmax(0,1fr)] md:gap-8">
      <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#53d9c0]">
        {index} / {eyebrow}
      </p>
      <div className="max-w-3xl">
        <h2 className="font-serif text-4xl font-normal leading-[1.02] tracking-tight text-white md:text-6xl">
          {title}
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-7 text-white/65 md:text-lg md:leading-8">
          {intro}
        </p>
      </div>
    </div>
  )
}

export function LumenCaseStudy() {
  return (
    <article className="relative isolate overflow-x-clip bg-background text-foreground">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[780px] bg-[radial-gradient(ellipse_at_78%_26%,rgba(51,205,178,0.12),transparent_44%)]" />

      <header className="mx-auto max-w-7xl px-6 pb-16 pt-32 md:px-8 md:pb-24 md:pt-40">
        <a href="/#work" className="mb-10 inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-4 focus-visible:ring-offset-background">
          <span aria-hidden="true">←</span> Back to selected work
        </a>

        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(290px,0.7fr)] lg:gap-16">
          <div>
            <p className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">
              <span className="size-1.5 rounded-full bg-[#53d9c0]" />
              B2B SaaS <span aria-hidden="true">·</span> Permissions design <span aria-hidden="true">·</span> 2026
            </p>
            <h1 className="max-w-4xl font-serif text-5xl font-normal leading-[0.98] tracking-tight text-white md:text-7xl lg:text-[88px]">
              How do you give every role <em className="text-[#53d9c0]">the right access?</em>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65 md:text-xl">
              A role-aware permissions layer for an enterprise consumer intelligence platform. Designed and prototyped solo in six days.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <CaseStudyCta href="#challenge">Read the case study</CaseStudyCta>
              <CaseStudyCta href="https://www.behance.net/gallery/249113145/Lumen-AI-SaaS-Admin-Permissions-Experience" external>
                View project on Behance
              </CaseStudyCta>
            </div>
          </div>

          <figure className="relative mx-auto aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-[28px] border border-white/10 bg-[#080a0a] shadow-[0_30px_100px_rgba(0,0,0,0.45)]">
            <Image
              src="/projects/lumen-hero.jpg"
              alt="Lumen wordmark and sun symbol on a dark background"
              fill
              priority
              sizes="(max-width: 1024px) 80vw, 420px"
              className="object-contain"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-5 pb-5 pt-12 font-mono text-[10px] uppercase tracking-[0.18em] text-white/60">
              Lumen · Case study
            </figcaption>
          </figure>
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-7 border-y border-white/10 py-7 md:mt-20 md:grid-cols-4 md:gap-8 md:py-9">
          {projectFacts.map((fact) => (
            <div key={fact.label}>
              <dt className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">{fact.label}</dt>
              <dd className="text-sm leading-6 text-white/85 md:text-base">{fact.value}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-6 max-w-4xl rounded-2xl border border-[#53d9c0]/20 bg-[#53d9c0]/[0.04] px-5 py-4 text-sm leading-6 text-white/60">
          <span className="mr-2 text-[#53d9c0]" aria-hidden="true">◈</span>
          <strong className="font-medium text-white/85">Confidentiality.</strong> This engagement is anonymized as Lumen. Client-specific names and data are omitted from this page.
        </p>
      </header>

      <nav aria-label="Case study sections" className="sticky top-[82px] z-30 border-y border-white/10 bg-black/80 backdrop-blur-xl md:top-[104px]">
        <div className="mx-auto flex max-w-7xl gap-6 overflow-x-auto px-6 py-3.5 md:gap-8 md:px-8">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="shrink-0 whitespace-nowrap text-xs text-white/55 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              {section.label}
            </a>
          ))}
        </div>
      </nav>

      <div id="case-study" className="mx-auto max-w-7xl scroll-mt-32 px-6 md:px-8">
        <section id="challenge" aria-labelledby="challenge-title" className="scroll-mt-40 border-b border-white/10 py-20 md:py-28">
          <div className="grid gap-5 md:grid-cols-[130px_minmax(0,1fr)] md:gap-8">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#53d9c0]">01 / Context</p>
            <div className="max-w-4xl">
              <h2 id="challenge-title" className="font-serif text-4xl font-normal leading-[1.02] tracking-tight text-white md:text-6xl">
                Permissions were the product logic.
              </h2>
              <p className="mt-6 max-w-3xl text-base leading-7 text-white/65 md:text-lg md:leading-8">
                One admin experience had to serve people with very different relationships to the same data. A role name alone could not explain who should see what. The model needed to make access understandable across three intersecting dimensions.
              </p>
              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {[
                  { label: 'WHO', title: 'Role', detail: 'What can this person do?' },
                  { label: 'WHERE', title: 'Geography', detail: 'Which data scope applies?' },
                  { label: 'WHAT', title: 'Brand', detail: 'Which product context is in scope?' },
                ].map((axis) => (
                  <div key={axis.title} className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                    <p className="font-mono text-[10px] tracking-[0.18em] text-[#53d9c0]">{axis.label}</p>
                    <h3 className="mt-3 text-xl font-medium text-white">{axis.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/55">{axis.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="access-model" aria-labelledby="access-model-title" className="scroll-mt-40 -mx-6 border-b border-[#dedbd2] bg-[#f4f1e8] px-6 py-20 text-[#171816] md:-mx-8 md:px-8 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 grid gap-5 md:grid-cols-[130px_minmax(0,1fr)] md:gap-8">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#087b70]">02 / Access model</p>
              <div className="max-w-3xl">
                <h2 id="access-model-title" className="font-serif text-4xl font-normal leading-[1.02] tracking-tight md:text-6xl">
                  Four roles. Different relationships to data.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-7 text-[#171816]/65 md:text-lg md:leading-8">
                  The design used four access archetypes to test how role, geography, and brand scope combine. Names and client-specific values are intentionally removed.
                </p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:ml-[162px]">
              {accessRoles.map((role) => (
                <article key={role.number} className="rounded-[22px] border border-black/10 bg-white/70 p-6 shadow-[0_12px_34px_rgba(20,20,15,0.04)] md:p-7">
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-[10px] tracking-[0.2em] text-black/40">ACCESS ARCHETYPE {role.number}</span>
                    <span className={`size-2.5 rounded-full ${role.color}`} aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 font-serif text-2xl text-[#171816] md:text-3xl">{role.name}</h3>
                  <p className="mt-3 max-w-md text-sm leading-6 text-black/60">{role.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2" aria-hidden="true">
                    <span className="rounded-full border border-black/10 px-3 py-1 font-mono text-[9px] uppercase tracking-wider text-black/50">Role</span>
                    <span className="rounded-full border border-black/10 px-3 py-1 font-mono text-[9px] uppercase tracking-wider text-black/50">Scope</span>
                    <span className="rounded-full border border-black/10 px-3 py-1 font-mono text-[9px] uppercase tracking-wider text-black/50">Access</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="information-architecture" aria-labelledby="ia-title" className="scroll-mt-40 border-b border-white/10 py-20 md:py-28">
          <SectionHeading
            index="03"
            eyebrow="Information architecture"
            title="A map that doubles as a permission model."
            intro="The information architecture connected the product’s insight area to the user-management tasks where access is granted, changed, or removed. Each route could then be considered against the access archetypes."
          />
          <div className="md:ml-[162px]">
            <div className="grid gap-4 md:grid-cols-[0.8fr_1.2fr]">
              <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6 md:p-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#53d9c0]">Product area</p>
                <h3 className="mt-5 font-serif text-3xl text-white">Insights</h3>
                <p className="mt-3 text-sm leading-6 text-white/55">The main workspace is considered alongside the user’s permitted scope.</p>
              </div>
              <div className="rounded-[24px] border border-[#53d9c0]/25 bg-[#53d9c0]/[0.04] p-6 md:p-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#53d9c0]">Admin path</p>
                <div className="mt-5 flex flex-wrap items-center gap-2 text-sm text-white/85">
                  {['User list', 'Add user', 'Edit permissions', 'Remove access'].map((step, index) => (
                    <span key={step} className="inline-flex items-center gap-2">
                      <span className="rounded-full border border-white/15 bg-black/20 px-3 py-2">{step}</span>
                      {index < 3 && <span className="text-[#53d9c0]" aria-hidden="true">→</span>}
                    </span>
                  ))}
                </div>
                <p className="mt-5 text-sm leading-6 text-white/55">Destructive access changes need a deliberate confirmation step.</p>
              </div>
            </div>
            <p className="mt-4 text-xs leading-5 text-white/40">Simplified from the project information architecture; client-specific labels are omitted.</p>
          </div>
        </section>

        <section id="design-decisions" aria-labelledby="design-title" className="scroll-mt-40 -mx-6 border-b border-[#dedbd2] bg-[#f4f1e8] px-6 py-20 text-[#171816] md:-mx-8 md:px-8 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 grid gap-5 md:grid-cols-[130px_minmax(0,1fr)] md:gap-8">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#087b70]">04 / Design decisions</p>
              <div className="max-w-3xl">
                <h2 id="design-title" className="font-serif text-4xl font-normal leading-[1.02] tracking-tight md:text-6xl">
                  Make boundaries easy to read and recover from.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-7 text-[#171816]/65 md:text-lg md:leading-8">
                  Permission states are easy to get wrong. I focused the interface on visible scope, predictable patterns, and a clear next action when a search or task has no result.
                </p>
              </div>
            </div>

            <div className="grid gap-4 lg:ml-[162px] lg:grid-cols-2">
              <article className="rounded-[22px] border border-black/10 bg-white/75 p-6 md:p-7">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#087b70]">01 · Scope visibility</p>
                <h3 className="mt-4 font-serif text-2xl">Tags carry meaning.</h3>
                <p className="mt-3 text-sm leading-6 text-black/60">Role and scope tags use consistent color meaning across themes. Long combinations collapse into a visible overflow count to keep rows readable.</p>
                <div className="mt-6 flex flex-wrap gap-2" aria-hidden="true">
                  <span className="rounded-md border border-sky-700/20 bg-sky-100 px-3 py-1.5 text-xs text-sky-900">Geography</span>
                  <span className="rounded-md border border-teal-700/20 bg-teal-100 px-3 py-1.5 text-xs text-teal-900">Role</span>
                  <span className="rounded-md border border-violet-700/20 bg-violet-100 px-3 py-1.5 text-xs text-violet-900">Brand</span>
                  <span className="rounded-md border border-black/10 bg-black/[0.04] px-3 py-1.5 text-xs text-black/55">+ more</span>
                </div>
              </article>

              <article className="rounded-[22px] border border-black/10 bg-white/75 p-6 md:p-7">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#087b70]">02 · Error recovery</p>
                <h3 className="mt-4 font-serif text-2xl">Empty states still help.</h3>
                <p className="mt-3 text-sm leading-6 text-black/60">When a search returns no users, the interface explains what happened, suggests adjusting the filters, and offers a clear reset action.</p>
                <div className="mt-6 rounded-xl border border-black/10 bg-[#f8f7f3] p-4" aria-hidden="true">
                  <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-black/40">No results</p>
                  <p className="mt-2 text-sm font-medium text-black/80">No users found</p>
                  <p className="mt-1 text-xs text-black/50">Try adjusting your filters.</p>
                  <span className="mt-4 inline-flex rounded-full border border-black/20 px-3 py-1.5 text-xs font-medium text-black/75">Clear filters</span>
                </div>
              </article>

              <article className="rounded-[22px] border border-black/10 bg-white/75 p-6 md:p-7">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#087b70]">03 · System feedback</p>
                <h3 className="mt-4 font-serif text-2xl">Feedback stays legible.</h3>
                <p className="mt-3 text-sm leading-6 text-black/60">Toast messages keep strong contrast in both themes and dismiss after four seconds: enough time to read, short enough not to obstruct.</p>
                <div className="mt-6 flex items-center gap-3 rounded-xl bg-[#171816] px-4 py-3 text-sm text-white" aria-hidden="true">
                  <span className="flex size-5 items-center justify-center rounded-full bg-[#53d9c0] text-[11px] text-black">✓</span>
                  Changes saved
                  <span className="ml-auto text-xs text-white/45">4s</span>
                </div>
              </article>

              <article className="rounded-[22px] border border-black/10 bg-white/75 p-6 md:p-7">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#087b70]">04 · Design system</p>
                <h3 className="mt-4 font-serif text-2xl">A predictable 8px rhythm.</h3>
                <p className="mt-3 text-sm leading-6 text-black/60">An 8px base spacing scale and a consistent icon treatment make the admin surface easier to scan and hand off.</p>
                <div className="mt-6 flex items-end gap-3" aria-hidden="true">
                  {[8, 16, 24, 32, 48].map((size) => (
                    <div key={size} className="flex flex-col items-center gap-2">
                      <span className="block rounded-sm bg-[#13bca5]" style={{ width: size, height: size }} />
                      <span className="font-mono text-[9px] text-black/45">{size}</span>
                    </div>
                  ))}
                </div>
              </article>
            </div>
            <p className="mt-5 text-xs leading-5 text-black/45 lg:ml-[162px]">Static examples illustrate the documented interaction patterns; they are not a live product interface.</p>
          </div>
        </section>

        <section id="prototype" aria-labelledby="prototype-title" className="scroll-mt-40 border-b border-white/10 py-20 md:py-28">
          <div className="grid gap-5 md:grid-cols-[130px_minmax(0,1fr)] md:gap-8">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#53d9c0]">05 / Prototype</p>
            <div className="max-w-4xl">
              <h2 id="prototype-title" className="font-serif text-4xl font-normal leading-[1.02] tracking-tight text-white md:text-6xl">
                From access rules to a testable product flow.
              </h2>
              <p className="mt-6 max-w-3xl text-base leading-7 text-white/65 md:text-lg md:leading-8">
                The engagement produced a ten-screen React prototype in six days. It demonstrates the proposed admin and permission flows. No post-launch adoption or business outcome is claimed here.
              </p>
              <div className="mt-9 grid gap-3 sm:grid-cols-3">
                {[
                  { value: '10', label: 'prototype screens' },
                  { value: '6 days', label: 'design and prototype' },
                  { value: 'React', label: 'prototype format' },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                    <p className="font-serif text-3xl text-white">{item.value}</p>
                    <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-white/45">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="reflection" aria-labelledby="reflection-title" className="scroll-mt-40 py-20 md:py-28">
          <div className="grid gap-5 md:grid-cols-[130px_minmax(0,1fr)] md:gap-8">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#53d9c0]">06 / Reflection</p>
            <div className="max-w-4xl">
              <h2 id="reflection-title" className="font-serif text-4xl font-normal leading-[1.02] tracking-tight text-white md:text-6xl">
                What this changed in how I think.
              </h2>
              <blockquote className="mt-8 border-l-2 border-[#53d9c0] pl-6 font-serif text-2xl italic leading-[1.35] text-white/85 md:pl-8 md:text-4xl">
                A permission system isn’t a feature. It’s a commercial gate. Context changes everything.
              </blockquote>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-white/55 md:text-base">
                The work sharpened how I connect interface decisions to the conditions that make a product viable: the people, data, and boundaries behind each workflow.
              </p>
            </div>
          </div>
        </section>

        <div className="flex flex-col gap-4 border-t border-white/10 py-10 md:flex-row md:items-center md:justify-between md:py-12">
          <p className="text-sm text-white/55">Want to explore more of my product work?</p>
          <div className="flex flex-wrap gap-3">
            <CaseStudyCta href="/#work">Back to selected work</CaseStudyCta>
            <CaseStudyCta href="https://www.behance.net/gallery/249113145/Lumen-AI-SaaS-Admin-Permissions-Experience" external>
              View project on Behance
            </CaseStudyCta>
          </div>
        </div>
      </div>
    </article>
  )
}

