'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { ReactNode } from 'react'

interface MagneticCardProps {
  children: ReactNode
  className?: string
}

export function MagneticCard({
  children,
  className = '',
}: MagneticCardProps) {
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)

  const smoothRotateX = useSpring(rotateX, {
    stiffness: 120,
    damping: 14,
  })

  const smoothRotateY = useSpring(rotateY, {
    stiffness: 120,
    damping: 14,
  })

  function handleMouseMove(
    e: React.MouseEvent<HTMLDivElement>
  ) {
    const rect = e.currentTarget.getBoundingClientRect()

    const width = rect.width
    const height = rect.height

    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const rotateYValue = ((mouseX / width) - 0.5) * 8
    const rotateXValue = ((mouseY / height) - 0.5) * -8

    rotateX.set(rotateXValue)
    rotateY.set(rotateYValue)
  }

  function handleMouseLeave() {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <motion.div
      style={{
        rotateX: smoothRotateX,
        rotateY: smoothRotateY,
        transformPerspective: 1200,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  )
}