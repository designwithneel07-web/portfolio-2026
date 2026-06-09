'use client'

import { motion } from 'framer-motion'

import { Section, Container } from '@/components/section'
import { Heading, Text, Label } from '@/components/typography'

import {
fadeUp,
staggerContainer,
smoothTransition,
} from '@/lib/motion'

import { InteractiveMesh } from '@/components/interactive-mesh'

export function AboutSection() {
return ( <Section
   id="about"
   className="relative overflow-hidden pt-24 md:pt-36"
 > <InteractiveMesh />

```
  {/* Atmosphere */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/6 blur-[140px] rounded-full" />

    <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-fuchsia-500/6 blur-[140px] rounded-full" />
  </div>

  <Container className="max-w-6xl">
    <motion.div
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      className="relative"
    >
      <motion.div
        variants={fadeUp}
        transition={smoothTransition}
        className="relative z-20 max-w-4xl mx-auto"
      >
        <Label className="mb-5">
          About
        </Label>

        <Heading
          as="h2"
          size="lg"
          className="tracking-tight leading-[0.92] mb-8"
        >
          Designing thoughtful systems for
          humans, products, and future-facing
          digital experiences.
        </Heading>

        <Text
          size="lg"
          muted
          className="leading-relaxed text-foreground/80 text-xl md:text-[1.55rem] max-w-2xl mb-8"
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
          className="leading-relaxed text-base md:text-lg text-foreground/60 max-w-xl"
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

        <motion.div
          variants={fadeUp}
          transition={smoothTransition}
          className="grid grid-cols-2 gap-16 pt-12 mt-12 max-w-2xl"
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
