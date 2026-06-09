'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'


const images = [
  '/about/about-1.jpeg',
  '/about/about-2.jpeg',
  '/about/about-3.jpeg',
  '/about/about-4.jpeg',
  '/about/about-5.jpeg',
  '/about/about-6.jpeg',
  '/about/about-7.jpeg',
  '/about/about-8.jpeg',
  '/about/about-9.jpeg',
  '/about/about-10.jpeg',
  '/about/about-11.jpeg',
  '/about/about-12.jpeg',
]

export function LittleAboutSection() {
  return (
    <section className="relative py-28 md:py-40 overflow-hidden bg-black mt-10 md:mt-20">
      {/* Cinematic grid */}
      <div className="absolute inset-0 opacity-[0.03] md:opacity-[0.04] pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:42px_42px] md:bg-[size:48px_48px]" />

      {/* Atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(120,119,198,0.08),transparent_45%)] pointer-events-none" />

      {/* Ambient orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[220px] h-[220px] md:w-[500px] md:h-[500px] bg-fuchsia-500/8 md:bg-fuchsia-500/10 blur-[60px] md:blur-[140px] rounded-full pointer-events-none" />

      <div className="absolute bottom-[-10%] right-[-10%] w-[220px] h-[220px] md:w-[500px] md:h-[500px] bg-cyan-500/8 md:bg-cyan-500/10 blur-[60px] md:blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          viewport={{ once: true }}
          className="max-w-5xl mb-16 md:mb-20"
        >
          <p className="text-[11px] md:text-sm uppercase tracking-[0.25em] text-white/40 mb-5 md:mb-6">
            A LITTLE ABOUT ME
          </p>

          <h2 className="text-[2.4rem] leading-[0.96] md:text-[5.6rem] font-semibold tracking-tight md:leading-[0.92] text-white">
            Beyond interfaces,
            <br />
            I’m deeply obsessed
            <br />
            with stories, systems,
            <br />
            and cinematic experiences.
          </h2>

          <p className="mt-6 md:mt-8 text-[15px] md:text-xl text-white/60 max-w-3xl leading-relaxed">
            I love crafting emotionally clear experiences —
            from fintech systems and AI-native products
            to visual storytelling, interaction experiments,
            and documenting moments that inspire design.
          </p>
        </motion.div>

        {/* Cinematic gallery */}
        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8">
            {images.map((src, index) => (
              <motion.div
                key={src}
                initial={{
                  opacity: 0,
                  y: 50,
                  rotate:
                    index % 2 === 0
                      ? -1.5
                      : 1.5,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotate:
                    index % 2 === 0
                      ? -1
                      : 1,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.035,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -6,
                  rotate: 0,
                  scale: 1.015,
                }}
                className={`
                  relative overflow-hidden
                  rounded-[22px] md:rounded-[28px]
                  border border-white/10
                  bg-white/[0.04]
                  shadow-[0_6px_30px_rgba(0,0,0,0.28)]
                  md:shadow-[0_10px_60px_rgba(0,0,0,0.45)]
                  backdrop-blur-[2px] md:backdrop-blur-sm
                  group
                  ${
                    index % 5 === 0
                      ? 'md:translate-y-16'
                      : ''
                  }
                  ${
                    index % 3 === 0
                      ? 'md:-translate-y-10'
                      : ''
                  }
                `}
              >
                <div className="relative aspect-[0.82] overflow-hidden">
                  <Image
                    src={src}
                    alt="About image"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 md:duration-700 group-hover:scale-105 md:group-hover:scale-110"
                    priority={index < 4}
                  />

                  {/* Hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 md:duration-700 bg-gradient-to-br from-fuchsia-500/8 via-transparent to-cyan-400/8 blur-xl md:blur-2xl" />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70" />

                  {/* Glass label */}
                  <div className="absolute top-3 left-3 md:top-4 md:left-4 px-2.5 py-1 md:px-3 md:py-1.5 rounded-full border border-white/10 bg-white/10 backdrop-blur-sm text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-white/70 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    Moment
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          viewport={{ once: true }}
          className="mt-20 md:mt-36 max-w-3xl"
        >
          <p className="text-[1.4rem] md:text-[2.4rem] leading-[1.2] text-white/85 font-medium">
            I believe the best digital experiences
            feel less like software —
            and more like thoughtfully directed moments.
          </p>
        </motion.div>
      </div>

      {/* Cinematic bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 md:h-40 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  )
}