'use client'

import { motion } from 'framer-motion'

import { useScrollDepth } from '@/lib/use-scroll-depth'

interface AmbientOrbProps {
  className?: string
  duration?: number
  x?: number[]
  y?: number[]
  scale?: number[]
}

export function AmbientOrb({
  className = '',
  duration = 18,
  x = [0, 40, 0],
  y = [0, 30, 0],
  scale = [1, 1.08, 1],
}: AmbientOrbProps) {
  const scrollDepth = useScrollDepth()

  return (
    <motion.div
      animate={{
        x,
        y,
        scale,
        opacity:
          0.18 - scrollDepth * 0.12,
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={className}
    />
  )
}