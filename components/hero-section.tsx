'use client'

import { motion } from 'framer-motion'

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

import { ParallaxLayer } from '@/components/parallax-layer'
import { ElasticButton } from '@/components/elastic-button'
import { AmbientOrb } from '@/components/ambient-orb'

export function HeroSection() {
  return (
    <Section
      size="hero"
      className="relative overflow-hidden"
    >
      {/* Base atmosphere */}
      <div className="absolute inset-0 gradient-radial pointer-events-none" />

      {/* Cinematic grid */}
      <div className="absolute inset-0 opacity-[0.03] md:opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:72px_72px] md:bg-[size:80px_80px] pointer-events-none" />

      {/* Ambient Orbs */}
      <AmbientOrb
        duration={18}
        x={[0, 40, 0]}
        y={[0, 24, 0]}
        scale={[1, 1.05, 1]}
        className="absolute top-[-10%] left-[-10%] w-[320px] h-[320px] md:w-[700px] md:h-[700px] bg-cyan-500/12 md:bg-cyan-500/15 blur-[90px] md:blur-[180px] rounded-full pointer-events-none"
      />

      <AmbientOrb
        duration={22}
        x={[0, -40, 0]}
        y={[0, -24, 0]}
        scale={[1, 1.05, 1]}
        className="absolute bottom-[-10%] right-[-10%] w-[320px] h-[320px] md:w-[700px] md:h-[700px] bg-fuchsia-500/12 md:bg-fuchsia-500/15 blur-[90px] md:blur-[180px] rounded-full pointer-events-none"
      />

      {/* Hero Visual Anchor */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.94,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="relative w-[340px] h-[340px] md:w-[700px] md:h-[700px] rounded-full border border-white/[0.05] bg-white/[0.02] backdrop-blur-[1px] md:backdrop-blur-[2px]">
          {/* Inner rings */}
          <div className="absolute inset-[12%] rounded-full border border-white/[0.03]" />

          <div className="absolute inset-[24%] rounded-full border border-white/[0.025]" />

          {/* Glow Core */}
          <div className="absolute inset-[34%] rounded-full bg-gradient-to-br from-cyan-500/8 via-fuchsia-500/8 to-violet-500/8 blur-2xl md:blur-3xl" />
        </div>
      </motion.div>

      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.02] md:opacity-[0.03] mix-blend-soft-light pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <Container>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          transition={smoothTransition}
          className="relative z-10 flex flex-col items-center text-center max-w-[980px] mx-auto"
        >
          {/* Label */}
          <motion.div
            variants={fadeUp}
            transition={smoothTransition}
          >
            <Label className="mb-5 md:mb-8">
              Systems • UX • Interaction Design
            </Label>
          </motion.div>

          {/* Headline */}
          <ParallaxLayer offset={10}>
            <motion.div
              variants={fadeUp}
              transition={smoothTransition}
            >
              <Heading
                as="h1"
                size="display"
                gradient
                className="mb-5 md:mb-8 tracking-tight leading-[0.94] md:leading-[0.88] max-w-4xl"
              >
                Designing calm digital systems
                for products, people, and
                future-facing experiences.
              </Heading>
            </motion.div>
          </ParallaxLayer>

          {/* Supporting text */}
          <motion.div
            variants={fadeUp}
            transition={smoothTransition}
          >
            <Text
              size="lg"
              muted
              className="max-w-3xl mt-1 mb-10 md:mb-14 text-[15px] md:text-xl leading-relaxed text-foreground/65"
            >
              Neel Shah is a UX/UI designer crafting
              scalable product experiences through
              systems thinking, cinematic interaction
              design, and AI-native workflows.
            </Text>
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            transition={smoothTransition}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <ElasticButton
              href="#work"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-medium rounded-full transition-all duration-300 shadow-[0_0_24px_rgba(255,255,255,0.06)] hover:scale-[1.02]"
            >
              Explore Work
            </ElasticButton>

            <ElasticButton
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/10 bg-white/[0.03] backdrop-blur-sm md:backdrop-blur-md font-medium rounded-full transition-all duration-300 hover:bg-white/[0.06]"
            >
              Let’s Connect
            </ElasticButton>
          </motion.div>

          {/* Bottom Note */}
          <motion.div
            variants={fadeUp}
            transition={smoothTransition}
            className="mt-12 md:mt-20"
          >
            <p className="text-[10px] md:text-xs uppercase tracking-[0.22em] text-white/30">
              Building thoughtful systems through
              cinematic interaction design.
            </p>
          </motion.div>
        </motion.div>
      </Container>

      {/* Cinematic transition bridge */}
      <div className="absolute bottom-0 left-0 right-0 h-56 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />

        <div className="absolute bottom-[-120px] left-1/2 -translate-x-1/2 w-[320px] md:w-[900px] h-[180px] md:h-[300px] bg-cyan-500/8 md:bg-cyan-500/10 blur-[70px] md:blur-[140px] rounded-full opacity-60" />
      </div>
    </Section>
  )
}
