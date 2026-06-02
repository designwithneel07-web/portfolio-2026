'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'

import {
  Section,
  Container,
} from '@/components/section'

import {
  Heading,
  Text,
  Label,
} from '@/components/typography'

import {
  fadeUp,
  staggerContainer,
  smoothTransition,
} from '@/lib/motion'

import { MagneticCard } from '@/components/magnetic-card'
import { AmbientOrb } from '@/components/ambient-orb'

const projects = [
  {
    title: 'SYNC',
    category: 'Fintech UX System',
    image: '/projects/sync-hero.jpg',
    glow:
      'from-violet-500/30 via-indigo-500/20 to-blue-500/20',
    url: 'https://sync-neelshah.netlify.app/',
    description:
      'A household-first fintech system simplifying vendor payments, shared dues, and trust-driven financial coordination.',
  },

  {
    title: 'Lumen',
    category: 'Enterprise SaaS',
    image: '/projects/lumen-hero.jpg',
    glow:
      'from-emerald-500/20 via-teal-500/20 to-cyan-500/20',
    url:
      'https://www.behance.net/gallery/249113145/Lumen-AI-SaaS-Admin-Permissions-Experience',
    description:
      'Permissions, user-management, and enterprise-scale workflows for AI-powered global insights teams.',
  },

  {
    title: 'IRCTC',
    category: 'Public Platform Redesign',
    image: '/projects/irctc-hero.jpg',
    glow:
      'from-rose-500/20 via-orange-500/20 to-yellow-500/20',
    url:
      'https://www.behance.net/gallery/248171997/IRCTC-Redesign-66M-Users-31-Not-Good-Enough',
    description:
      'Reimagining India’s largest railway booking platform through clarity, accessibility, and editorial UX.',
  },

  {
    title: 'BillEase',
    category: 'Household Payments',
    image: '/projects/billease-hero.png',
    glow:
      'from-cyan-500/20 via-teal-500/20 to-emerald-500/20',
    url:
      'https://www.behance.net/gallery/239749883/BillEase-Turning-Monthly-Chaos-into-a-Calm-Routine',
    description:
      'A calm utility management system designed around shared ownership, reminders, and financial peace-of-mind.',
  },

  {
    title: 'Vivent',
    category: 'Event Coordination Platform',
    image: '/projects/vivent-hero.jpg',
    glow:
      'from-fuchsia-500/20 via-pink-500/20 to-orange-500/20',
    url:
      'https://www.behance.net/gallery/239787543/Vivent-From-Chaos-to-Coordination',
    description:
      'A vibrant event coordination platform transforming wedding and event management into a collaborative experience.',
  },
]

export function WorkSection() {
  const [activeProject, setActiveProject] =
    useState<string | null>(null)

  const handleProjectClick = (
    url: string
  ) => {
    if (!url) return

    window.open(url, '_blank')
  }

  return (
    <Section
      id="work"
      className="relative overflow-hidden pt-10 md:pt-16"
    >
      {/* Atmosphere */}
      <AmbientOrb
        duration={24}
        x={[0, 50, 0]}
        y={[0, 20, 0]}
        scale={[1, 1.1, 1]}
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-violet-500/5 blur-[160px] rounded-full"
      />

      <AmbientOrb
        duration={28}
        x={[0, -40, 0]}
        y={[0, -20, 0]}
        scale={[1, 1.12, 1]}
        className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/5 blur-[160px] rounded-full"
      />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <Container>
        {/* Intro */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={smoothTransition}
          className="mb-14 md:mb-20 relative z-10"
        >
          <Label className="mb-5">
            Selected Work
          </Label>

          <Heading
            as="h2"
            size="xl"
            className="max-w-3xl mb-6"
          >
            Building thoughtful digital
            experiences across fintech,
            enterprise SaaS, and public
            platforms.
          </Heading>

          <Text
            size="lg"
            muted
            className="max-w-2xl text-foreground/70"
          >
            A curated selection of product
            systems, UX strategy, cinematic
            interfaces, and future-facing
            interaction design.
          </Text>
        </motion.div>

        {/* Project Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={fadeUp}
              transition={smoothTransition}
            >
              <MagneticCard>
                <button
                  onClick={() =>
                    handleProjectClick(
                      project.url
                    )
                  }
                  onMouseEnter={() =>
                    setActiveProject(
                      project.title
                    )
                  }
                  onMouseLeave={() =>
                    setActiveProject(null)
                  }
                  className="group relative w-full overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl text-left"
                >
                  {/* Glow */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br ${project.glow}`}
                  />

                  {/* Image */}
                  <div className="relative aspect-[1.25] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-7 md:p-8">
                    <Label className="mb-4">
                      {project.category}
                    </Label>

                    <Heading
                      as="h3"
                      size="md"
                      className="mb-4"
                    >
                      {project.title}
                    </Heading>

                    <Text
                      muted
                      className="text-foreground/70 leading-relaxed"
                    >
                      {project.description}
                    </Text>

                    <motion.div
                      animate={{
                        x:
                          activeProject ===
                          project.title
                            ? 8
                            : 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className="mt-8 text-sm uppercase tracking-[0.2em] text-white/60"
                    >
                      View Project →
                    </motion.div>
                  </div>
                </button>
              </MagneticCard>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
