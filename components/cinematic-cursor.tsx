'use client'

import {
  motion,
  useMotionValue,
  useSpring,
} from 'framer-motion'

import {
  useEffect,
  useState,
} from 'react'

export function CinematicCursor() {
  const [isPointer, setIsPointer] =
    useState(false)

  const [isCard, setIsCard] =
    useState(false)

  const [isPageTransitioning, setIsPageTransitioning] =
    useState(false)

  const [isTouchDevice, setIsTouchDevice] =
    useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const smoothX = useSpring(mouseX, {
    stiffness: 500,
    damping: 38,
    mass: 0.5,
  })

  const smoothY = useSpring(mouseY, {
    stiffness: 500,
    damping: 38,
    mass: 0.5,
  })

  useEffect(() => {
    const touch =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0

    setIsTouchDevice(touch)
  }, [])

  useEffect(() => {
    if (isTouchDevice) return

    function handleMouseMove(e: MouseEvent) {
      mouseX.set(e.clientX - 14)
      mouseY.set(e.clientY - 14)

      const target = e.target as HTMLElement

      const isInteractive =
        window.getComputedStyle(target)
          .cursor === 'pointer' ||
        target.closest('a') ||
        target.closest('button')

      const cardHover =
        target.closest('.group')

      setIsPointer(Boolean(isInteractive))
      setIsCard(Boolean(cardHover))
    }

    window.addEventListener(
      'mousemove',
      handleMouseMove
    )

    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      )
    }
  }, [
    mouseX,
    mouseY,
    isTouchDevice,
  ])

  useEffect(() => {
    function handleTransition() {
      setIsPageTransitioning(true)
    }

    window.addEventListener(
      'beforeunload',
      handleTransition
    )

    return () => {
      window.removeEventListener(
        'beforeunload',
        handleTransition
      )
    }
  }, [])

  if (isTouchDevice) return null

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
      style={{
        x: smoothX,
        y: smoothY,
      }}
      animate={{
        scale: isPageTransitioning
          ? 0
          : isCard
          ? 2.8
          : isPointer
          ? 2.2
          : 1,

        opacity: isPageTransitioning
          ? 0
          : isCard
          ? 0.55
          : isPointer
          ? 0.85
          : 0.75,

        filter: isPageTransitioning
          ? 'blur(10px)'
          : isCard
          ? 'blur(1px)'
          : 'blur(0px)',
      }}
      transition={{
        duration: 0.24,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Outer Glow */}
      <motion.div
        animate={{
          scale: isCard ? 1.6 : 1,
          opacity: isCard ? 0.22 : 0,
        }}
        transition={{
          duration: 0.35,
        }}
        className="absolute inset-0 w-7 h-7 rounded-full bg-white blur-xl"
      />

      {/* Core Cursor */}
      <div className="relative w-7 h-7 rounded-full border border-white/20 bg-white mix-blend-difference" />
    </motion.div>
  )
}