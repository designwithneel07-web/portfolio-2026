'use client'

import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
} from 'framer-motion'

import {
  useEffect,
  useState,
} from 'react'

export function ScrollToTop() {
  const [visible, setVisible] =
    useState(false)

  const { scrollYProgress } =
    useScroll()

  const scaleProgress = useSpring(
    scrollYProgress,
    {
      stiffness: 110,
      damping: 24,
      mass: 0.8,
    }
  )

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500)
    }

    window.addEventListener(
      'scroll',
      handleScroll,
      { passive: true }
    )

    return () => {
      window.removeEventListener(
        'scroll',
        handleScroll
      )
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{
            opacity: 0,
            y: 32,
            scale: 0.84,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: 24,
            scale: 0.84,
          }}
          transition={{
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{
            scale: 1.05,
            y: -2,
          }}
          whileTap={{
            scale: 0.96,
          }}
          onClick={scrollToTop}
          className="group fixed bottom-5 right-5 md:bottom-8 md:right-8 z-[999] w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/10 bg-black/40 backdrop-blur-md md:backdrop-blur-xl overflow-hidden shadow-[0_6px_30px_rgba(0,0,0,0.28)] md:shadow-[0_10px_60px_rgba(0,0,0,0.45)]"
        >
          {/* Ambient glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 md:duration-700 bg-gradient-to-br from-fuchsia-500/14 via-transparent to-cyan-400/14 blur-xl md:blur-2xl" />

          {/* Progress ring */}
          <svg
            className="absolute inset-0 w-full h-full -rotate-90"
            viewBox="0 0 100 100"
          >
            {/* Base ring */}
            <motion.circle
              cx="50"
              cy="50"
              r="46"
              stroke="rgba(255,255,255,0.10)"
              strokeWidth="2"
              fill="transparent"
            />

            {/* Progress */}
            <motion.circle
              cx="50"
              cy="50"
              r="46"
              stroke="white"
              strokeWidth="2.4"
              fill="transparent"
              strokeLinecap="round"
              style={{
                pathLength: scaleProgress,
              }}
            />
          </svg>

          {/* Arrow */}
          <div className="relative z-10 flex items-center justify-center w-full h-full">
            <motion.div
              whileHover={{
                y: -1.5,
              }}
              transition={{
                duration: 0.22,
              }}
              className="text-white text-lg md:text-xl"
            >
              ↑
            </motion.div>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  )
}