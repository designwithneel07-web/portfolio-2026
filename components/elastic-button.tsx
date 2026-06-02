'use client'

import {
  motion,
  useMotionValue,
  useSpring,
} from 'framer-motion'

import { ReactNode } from 'react'

interface ElasticButtonProps {
  children: ReactNode
  className?: string
  href?: string
}

export function ElasticButton({
  children,
  className = '',
  href,
}: ElasticButtonProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const smoothX = useSpring(x, {
    stiffness: 150,
    damping: 12,
  })

  const smoothY = useSpring(y, {
    stiffness: 150,
    damping: 12,
  })

  function handleMouseMove(
    e: React.MouseEvent<HTMLAnchorElement>
  ) {
    const rect = e.currentTarget.getBoundingClientRect()

    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const offsetX = (e.clientX - centerX) * 0.2
    const offsetY = (e.clientY - centerY) * 0.2

    x.set(offsetX)
    y.set(offsetY)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        x: smoothX,
        y: smoothY,
      }}
      whileHover={{
        scale: 1.03,
      }}
      whileTap={{
        scale: 0.97,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 18,
      }}
      className={className}
    >
      {children}
    </motion.a>
  )
}