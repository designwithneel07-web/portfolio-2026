'use client'

import { useEffect, useRef, useState } from 'react'

type Node = {
  x: number
  y: number
  ox: number
  oy: number
  vx: number
  vy: number
}

export function InteractiveMesh() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current

    if (!canvas) return

    const ctx = canvas.getContext('2d')

    if (!ctx) return

    let animationFrame = 0

    const mouse = {
      x: -9999,
      y: -9999,
      tx: -9999,
      ty: -9999,
    }

    let nodes: Node[] = []

    const spacing = 72
    const influenceRadius = 180

    const resize = () => {
      const parent = canvas.parentElement

      if (!parent) return

      canvas.width = parent.offsetWidth
      canvas.height = parent.offsetHeight

      nodes = []

      for (let y = 0; y <= canvas.height; y += spacing) {
        for (let x = 0; x <= canvas.width; x += spacing) {
          nodes.push({
            x,
            y,
            ox: x,
            oy: y,
            vx: 0,
            vy: 0,
          })
        }
      }
    }

    const update = () => {
      mouse.x += (mouse.tx - mouse.x) * 0.12
      mouse.y += (mouse.ty - mouse.y) * 0.12

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      

      for (const node of nodes) {
        const dx = mouse.x - node.x
        const dy = mouse.y - node.y

        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < influenceRadius) {
          const force =
            (1 - distance / influenceRadius) * 0.9

          const angle = Math.atan2(dy, dx)

          node.vx += Math.cos(angle) * force
          node.vy += Math.sin(angle) * force
        }

        node.vx += (node.ox - node.x) * 0.025
        node.vy += (node.oy - node.y) * 0.025

        node.vx *= 0.88
        node.vy *= 0.88

        node.x += node.vx
        node.y += node.vy
      }
let activeNodeIndex = -1
let closestDistance = Infinity

for (let i = 0; i < nodes.length; i++) {
  const d = Math.hypot(
    mouse.x - nodes[i].x,
    mouse.y - nodes[i].y
  )

  if (d < closestDistance) {
    closestDistance = d
    activeNodeIndex = i
  }
}
      const cols =
        Math.floor(canvas.width / spacing) + 1

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i]
        const activeStrength =
  Math.max(
    0,
    1 -
      Math.hypot(
        nodes[activeNodeIndex]?.x - node.x || 0,
        nodes[activeNodeIndex]?.y - node.y || 0
      ) /
        (spacing * 2.2)
  )

const isActive =
  activeStrength > 0.15 &&
  closestDistance < influenceRadius

        const dist = Math.hypot(
          mouse.x - node.x,
          mouse.y - node.y
        )

        const glow =
          Math.max(
            0,
            1 - dist / influenceRadius
          ) * 0.22

        ctx.fillStyle = isActive
  ? 'rgba(56,189,248,0.9)'
  : `rgba(255,255,255,${
      0.045 + glow
    })`
        ctx.beginPath()
        ctx.arc(node.x, node.y, 1.2, 0, Math.PI * 2)
        ctx.fill()

        if ((i + 1) % cols !== 0) {
          const right = nodes[i + 1]

          ctx.strokeStyle = isActive
  ? `rgba(
  56,
  189,
  248,
  ${0.18 + activeStrength * 0.55}
)`
  : `rgba(255,255,255,${
      0.035 + glow
    })`

          ctx.beginPath()
          ctx.moveTo(node.x, node.y)
          ctx.lineTo(right.x, right.y)
          ctx.stroke()
        }

        const bottom = nodes[i + cols]

        if (bottom) {
          ctx.strokeStyle = isActive
  ? `rgba(
  56,
  189,
  248,
  ${0.18 + activeStrength * 0.55}
)`
  : `rgba(255,255,255,${
      0.035 + glow
    })`

          ctx.beginPath()
          ctx.moveTo(node.x, node.y)
          ctx.lineTo(bottom.x, bottom.y)
          ctx.stroke()
        }
      }

      animationFrame = requestAnimationFrame(update)
    }

    const handleMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()

      mouse.tx = e.clientX - rect.left
      mouse.ty = e.clientY - rect.top
    }

    const handleLeave = () => {
      mouse.tx = -9999
      mouse.ty = -9999
    }

    resize()
    update()

    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mouseleave', handleLeave)

    return () => {
      cancelAnimationFrame(animationFrame)

      window.removeEventListener('resize', resize)
      window.removeEventListener(
        'mousemove',
        handleMove
      )
      window.removeEventListener(
        'mouseleave',
        handleLeave
      )
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting)
      },
      {
        threshold: 0.15,
      }
    )

    const canvas = canvasRef.current

    if (canvas) {
      observer.observe(canvas)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      className={`absolute inset-0 pointer-events-none z-0 transition-opacity duration-1000 ${
        visible
          ? 'opacity-100'
          : 'opacity-0'
      }`}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
      />
    </div>
  )
}