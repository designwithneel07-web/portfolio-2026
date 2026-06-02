'use client'

import {
  AnimatePresence,
  motion,
} from 'framer-motion'

import {
  useEffect,
  useState,
} from 'react'

export function IntroLoader() {
  const [loading, setLoading] =
    useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
            scale: 1.03,
            filter: 'blur(10px)',
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="fixed inset-0 z-[99999] overflow-hidden bg-black flex items-center justify-center"
        >
          {/* Base atmosphere */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.025),transparent_65%)]" />

          {/* Cinematic grid */}
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 0.06,
            }}
            transition={{
              duration: 1.4,
            }}
            className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:56px_56px] md:bg-[size:72px_72px]"
          />

          {/* Ambient orb left */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.82,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute top-[-10%] left-[-10%] w-[260px] h-[260px] md:w-[700px] md:h-[700px] rounded-full bg-cyan-500/8 md:bg-cyan-500/10 blur-[70px] md:blur-[180px]"
          />

          {/* Ambient orb right */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.82,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute bottom-[-10%] right-[-10%] w-[260px] h-[260px] md:w-[700px] md:h-[700px] rounded-full bg-fuchsia-500/8 md:bg-fuchsia-500/10 blur-[70px] md:blur-[180px]"
          />

          {/* Cinematic rings */}
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
              duration: 1.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute flex items-center justify-center"
          >
            <div className="relative w-[300px] h-[300px] md:w-[640px] md:h-[640px] rounded-full border border-white/[0.05]">
              <div className="absolute inset-[14%] rounded-full border border-white/[0.04]" />

              <div className="absolute inset-[28%] rounded-full border border-white/[0.03]" />

              <div className="absolute inset-[40%] rounded-full bg-gradient-to-br from-cyan-500/8 via-fuchsia-500/8 to-violet-500/8 blur-2xl md:blur-3xl" />
            </div>
          </motion.div>

          {/* Intro content */}
          <motion.div
            initial={{
              opacity: 0,
              y: 24,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -14,
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-10 text-center"
          >
            {/* Label */}
            <motion.p
              initial={{
                opacity: 0,
                letterSpacing: '0.45em',
              }}
              animate={{
                opacity: 1,
                letterSpacing: '0.24em',
              }}
              transition={{
                duration: 1.1,
                delay: 0.15,
              }}
              className="text-white/35 text-[10px] md:text-[11px] uppercase mb-6"
            >
              Portfolio 2026
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 14,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1.1,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-white text-4xl md:text-7xl font-semibold tracking-tight"
            >
              Neel Shah
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.9,
                delay: 0.75,
              }}
              className="mt-4 md:mt-5 text-white/40 text-xs md:text-sm tracking-wide"
            >
              Systems • UX • Cinematic Interaction
            </motion.p>

            {/* Line */}
            <motion.div
              initial={{
                opacity: 0,
                scaleX: 0,
              }}
              animate={{
                opacity: 1,
                scaleX: 1,
              }}
              transition={{
                duration: 1,
                delay: 0.85,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mx-auto mt-7 md:mt-8 h-px w-28 md:w-40 bg-gradient-to-r from-transparent via-white/40 to-transparent"
            />
          </motion.div>

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-36 md:h-48 bg-gradient-to-t from-black to-transparent pointer-events-none" />
        </motion.div>
      )}
    </AnimatePresence>
  )
}