'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

import {
  motion,
  AnimatePresence,
} from 'framer-motion'

import { cn } from '@/lib/utils'

const navLinks = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false)

  const [scrolled, setScrolled] =
    useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24)
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

  useEffect(() => {
    document.body.style.overflow =
      mobileMenuOpen ? 'hidden' : 'auto'

    return () => {
      document.body.style.overflow =
        'auto'
    }
  }, [mobileMenuOpen])

  return (
    <>
      {/* Floating Navigation */}
      <motion.header
        initial={false}
        animate={{
          top: scrolled ? 14 : 0,
          scale: scrolled ? 0.988 : 1,
          paddingTop: scrolled ? 5 : 0,
        }}
        transition={{
          duration: 0.55,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed left-0 right-0 z-50 px-3 md:px-6"
      >
        <motion.div
          animate={{
            maxWidth: scrolled
              ? '960px'
              : '1100px',
          }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={cn(
            'mx-auto transition-all duration-500',
            scrolled
              ? 'rounded-[26px] border border-white/[0.08] bg-black/35 backdrop-blur-md md:backdrop-blur-2xl shadow-[0_6px_30px_rgba(0,0,0,0.28)] md:shadow-[0_12px_80px_rgba(0,0,0,0.42)]'
              : 'bg-transparent'
          )}
        >
          <nav
            className={cn(
              'flex items-center justify-between transition-all duration-500',
              scrolled
                ? 'h-[54px] md:h-[72px] px-5 md:px-8'
                : 'h-[78px] md:h-24 px-3 md:px-2'
            )}
          >
            {/* Logo */}
            <Link
              href="/"
              className="relative z-[60] text-white font-medium text-lg tracking-tight hover:opacity-80 transition-opacity"
            >
              Neel Shah
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-12">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 text-sm font-medium tracking-wide hover:text-white transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm md:backdrop-blur-md transition-all duration-300 hover:bg-white/[0.08]"
              >
                Let’s Talk
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              type="button"
              className={cn(
                'md:hidden relative z-[60] flex items-center justify-center w-11 h-11 rounded-full border transition-all duration-500',
                mobileMenuOpen
                  ? 'bg-white/10 border-white/10 backdrop-blur-md'
                  : 'bg-black/20 border-white/5 backdrop-blur-sm'
              )}
              onClick={() =>
                setMobileMenuOpen(
                  !mobileMenuOpen
                )
              }
              aria-label="Toggle menu"
              whileTap={{ scale: 0.94 }}
              animate={{
                rotate: mobileMenuOpen
                  ? 180
                  : 0,
              }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <motion.div
                animate={{
                  rotate:
                    mobileMenuOpen
                      ? 90
                      : 0,
                }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {mobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.7}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.7}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </motion.div>
            </motion.button>
          </nav>
        </motion.div>
      </motion.header>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.35,
            }}
            className="fixed inset-0 z-[45] md:hidden bg-black/94 backdrop-blur-md"
          >
            {/* Atmospheric glow */}
            <div className="absolute top-[-10%] left-[-20%] w-[220px] h-[220px] bg-cyan-500/8 blur-[60px] rounded-full" />

            <div className="absolute bottom-[-10%] right-[-20%] w-[220px] h-[220px] bg-fuchsia-500/8 blur-[60px] rounded-full" />

            {/* Grid texture */}
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:42px_42px]" />

            {/* Menu content */}
            <div className="relative z-10 flex flex-col justify-center h-full px-8">
              <ul className="flex flex-col gap-7">
                {navLinks.map(
                  (link, index) => (
                    <motion.li
                      key={link.href}
                      initial={{
                        opacity: 0,
                        y: 14,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: 14,
                      }}
                      transition={{
                        delay:
                          index * 0.05,
                        duration: 0.45,
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={() =>
                          setMobileMenuOpen(
                            false
                          )
                        }
                        className="text-4xl tracking-tight leading-none text-white/90 hover:text-white transition-colors duration-300"
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  )
                )}
              </ul>

              {/* Footer note */}
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 0.25,
                }}
                className="absolute bottom-12 left-8"
              >
                <p className="text-sm text-white/40 leading-relaxed max-w-xs">
                  Designing thoughtful digital
                  systems with cinematic
                  interaction design and
                  emotional clarity.
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
