'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { ReactNode } from 'react'

interface ParallaxLayerProps {
  children: ReactNode
  offset?: number
  className?: string
}

export function ParallaxLayer({
  children,
  offset = 20,
  className = '',
}: ParallaxLayerProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const smoothX = useSpring(x, {
    stiffness: 80,
    damping: 20,
  })

  const smoothY = useSpring(y, {
    stiffness: 80,
    damping: 20,
  })

  function handleMouseMove(
    e: React.MouseEvent<HTMLDivElement>
  ) {
    const rect = e.currentTarget.getBoundingClientRect()

    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    x.set(((mouseX - centerX) / centerX) * offset)
    y.set(((mouseY - centerY) / centerY) * offset)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      style={{
        x: smoothX,
        y: smoothY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  )
}