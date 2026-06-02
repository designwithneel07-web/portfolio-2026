import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Neel Shah — UX/UI Designer',
  
  description:
    'UX/UI designer crafting cinematic digital experiences through systems thinking, interaction design, and AI-native workflows.',

  keywords: [
    'Neel Shah',
    'UX Designer',
    'UI Designer',
    'Product Designer',
    'Interaction Design',
    'Portfolio',
    'Fintech UX',
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
    'https://portfolioneelshah.vercel.app'
  ),

  openGraph: {
    title:
      'Neel Shah — UX/UI Designer',

    description:
      'Designing thoughtful digital systems for products, people, and future-facing experiences.',

    url: 'https://portfolioneelshah.vercel.app/',

    siteName: 'Neel Shah Portfolio',

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

    images: ['/projects/sync-hero.jpg'],
  },

  themeColor: '#000000',
}