'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'

import { Section, Container } from '@/components/section'
import { Heading, Text, Label } from '@/components/typography'

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
    url: 'https://www.behance.net/gallery/249113145/Lumen-AI-SaaS-Admin-Permissions-Experience',
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
    url: 'https://www.behance.net/gallery/239749883/BillEase-Turning-Monthly-Chaos-into-a-Calm-Routine',
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
    if (url === '#') return

    window.open(url, '_blank')
  }

  return (
    <Section
      id="work"
      className="relative overflow-hidden pt-10 md:pt-16"
    >
      {/* Top atmospheric bridge */}
      <div className="absolute top-[-180px] left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-fuchsia-500/8 blur-[160px] rounded-full pointer-events-none" />

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
          <Label className="mb-4">
            Selected Work
          </Label>

          <Heading
            as="h2"
            size="section"
            className="max-w-3xl mb-6"
          >
            Building thoughtful digital
            experiences through systems,
            storytelling, and cinematic
            interaction design.
          </Heading>

          <Text
            size="lg"
            muted
            className="max-w-2xl"
          >
            A curated selection of product,
            fintech, enterprise, and
            interaction-driven UX projects.
          </Text>
        </motion.div>

        {/* Projects */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 relative z-10"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={fadeUp}
              transition={{
                ...smoothTransition,
                delay: index * 0.08,
              }}
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
                  className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-sm shadow-[0_10px_60px_rgba(0,0,0,0.45)] text-left w-full"
                >
                  {/* Hero Image */}
                  <div className="relative aspect-[1.25] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                    {/* Glow */}
                    <div
                      className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br ${project.glow}`}
                    />
                  </div>

                  {/* Content */}
                  <div className="relative p-6 md:p-8">
                    <div className="flex items-center justify-between mb-5">
                      <Label>
                        {project.category}
                      </Label>

                      <motion.div
                        animate={{
                          x:
                            activeProject ===
                            project.title
                              ? 4
                              : 0,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                        className="text-white/40"
                      >
                        ↗
                      </motion.div>
                    </div>

                    <Heading
                      as="h3"
                      size="card"
                      className="mb-4"
                    >
                      {project.title}
                    </Heading>

                    <Text
                      muted
                      className="text-white/65"
                    >
                      {project.description}
                    </Text>
                  </div>
                </button>
              </MagneticCard>
            </motion.div>
          ))}
        </motion.div>
      </Container>

      {/* Bottom cinematic bridge */}
      <div className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-violet-500/10 blur-[180px] rounded-full pointer-events-none" />
    </Section>
  )
}
