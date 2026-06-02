'use client'

import { motion } from 'framer-motion'

import { Section, Container } from '@/components/section'
import { Heading, Text, Label } from '@/components/typography'

import {
  fadeUp,
  staggerContainer,
  smoothTransition,
} from '@/lib/motion'

export function AboutSection() {
  return (
    <Section
      id="about"
      className="relative overflow-hidden border-t border-border pt-10 md:pt-20"
    >
      {/* Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/6 blur-[140px] rounded-full" />

        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-fuchsia-500/6 blur-[140px] rounded-full" />
      </div>

      {/* Grid texture */}
      <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" />

      <Container>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20"
        >
          {/* Left Editorial Heading */}
          <motion.div
            variants={fadeUp}
            transition={smoothTransition}
            className="lg:col-span-5"
          >
            <Label className="mb-4">
              About
            </Label>

            <Heading
              as="h2"
              size="lg"
              className="tracking-tight leading-[0.92]"
            >
              Designing thoughtful systems for
              humans, products, and future-facing
              digital experiences.
            </Heading>
          </motion.div>

          {/* Right Content */}
          <motion.div
            variants={fadeUp}
            transition={smoothTransition}
            className="lg:col-span-7 flex flex-col gap-12"
          >
            <Text
              size="lg"
              muted
              className="leading-relaxed text-foreground/80 text-xl md:text-[1.7rem] max-w-3xl"
            >
              I design digital products that
              balance systems thinking,
              usability, and emotional clarity —
              crafting experiences that feel
              intuitive, scalable, and deeply
              human.
            </Text>

            <Text
              muted
              className="leading-relaxed text-base md:text-lg text-foreground/60 max-w-2xl"
            >
              My work spans fintech systems,
              enterprise SaaS, public platforms,
              and AI-native experiences —
              combining interaction design,
              storytelling, and product strategy
              to create interfaces that feel
              seamless in motion and intentional
              in structure.
            </Text>

            {/* Capabilities */}
            <motion.div
              variants={fadeUp}
              transition={smoothTransition}
              className="grid grid-cols-2 gap-12 pt-12 border-t border-white/10"
            >
              <div>
                <Label className="mb-5 block">
                  Capabilities
                </Label>

                <ul className="flex flex-col gap-3">
                  <li className="text-foreground/80 text-base">
                    UX Strategy
                  </li>

                  <li className="text-foreground/80 text-base">
                    Interface Design
                  </li>

                  <li className="text-foreground/80 text-base">
                    Design Systems
                  </li>

                  <li className="text-foreground/80 text-base">
                    Prototyping
                  </li>
                </ul>
              </div>

              <div>
                <Label className="mb-5 block">
                  Tools
                </Label>

                <ul className="flex flex-col gap-3">
                  <li className="text-foreground/80 text-base">
                    Figma
                  </li>

                  <li className="text-foreground/80 text-base">
                    Framer
                  </li>

                  <li className="text-foreground/80 text-base">
                    Webflow
                  </li>

                  <li className="text-foreground/80 text-base">
                    Principle
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  )
}
