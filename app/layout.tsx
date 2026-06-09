import type {
  Metadata,
  Viewport,
} from 'next'

import {
  Geist,
  Geist_Mono,
} from 'next/font/google'

import { Analytics } from '@vercel/analytics/next'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { CinematicCursor } from '@/components/cinematic-cursor'
import { IntroLoader } from '@/components/intro-loader'
import { SmoothScroll } from '@/components/smooth-scroll'
import { ScrollToTop } from '@/components/scroll-to-top'

import './globals.css'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: {
    default:
      'Neel Shah — UX/UI Designer',

    template:
      '%s | Neel Shah',
  },

  description:
    'UX/UI designer crafting thoughtful digital systems through cinematic interaction design, systems thinking, and AI-native workflows.',

  keywords: [
    'Neel Shah',
    'UX Designer',
    'UI Designer',
    'Product Designer',
    'Interaction Design',
    'Portfolio',
    'Fintech UX',
    'Enterprise SaaS',
    'Design Systems',
    'Cinematic UI',
    'AI UX',
  ],

  authors: [
    {
      name: 'Neel Shah',
    },
  ],

  creator: 'Neel Shah',

  metadataBase: new URL(
    'https://neel-portfolio-site.vercel.app'
  ),

  openGraph: {
    title:
      'Neel Shah — UX/UI Designer',

    description:
      'Designing thoughtful digital systems for products, people, and future-facing experiences.',

    url:
      'https://neel-portfolio-site.vercel.app',

    siteName:
      'Neel Shah Portfolio',

    images: [
      {
        url: '/projects/sync-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Neel Shah Portfolio',
      },
    ],

    locale: 'en_US',

    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',

    title:
      'Neel Shah — UX/UI Designer',

    description:
      'Designing thoughtful digital systems through cinematic interaction design.',

    images: [
      '/projects/sync-hero.jpg',
    ],
  },

  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media:
          '(prefers-color-scheme: light)',
      },

      {
        url: '/icon-dark-32x32.png',
        media:
          '(prefers-color-scheme: dark)',
      },

      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],

    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#000000',

  width: 'device-width',

  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased min-h-screen flex flex-col overflow-x-hidden">
        <IntroLoader />

        <SmoothScroll />

        <CinematicCursor />

        <ScrollToTop />

        <Navigation />

        <main className="flex-1">
          {children}
        </main>

        <Footer />

        {process.env.NODE_ENV ===
          'production' && <Analytics />}
      </body>
    </html>
  )
}
