'use client'

import { useEffect, useState } from 'react'

export function useScrollDepth() {
  const [scrollDepth, setScrollDepth] = useState(0)

  useEffect(() => {
    function handleScroll() {
      const maxScroll =
        document.body.scrollHeight -
        window.innerHeight

      const depth =
        window.scrollY / maxScroll

      setScrollDepth(depth)
    }

    window.addEventListener(
      'scroll',
      handleScroll
    )

    handleScroll()

    return () => {
      window.removeEventListener(
        'scroll',
        handleScroll
      )
    }
  }, [])

  return scrollDepth
}