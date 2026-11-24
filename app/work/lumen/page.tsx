import type { Metadata } from 'next'

import { LumenCaseStudy } from '@/components/lumen-case-study'

export const metadata: Metadata = {
  title: 'Lumen — Role-Based Permissions for Enterprise SaaS',
  description:
    'A case study on designing a role-aware permissions layer for an enterprise consumer intelligence platform.',
  openGraph: {
    title: 'Lumen — Role-Based Permissions for Enterprise SaaS',
    description:
      'How I designed and prototyped an admin permissions layer in six days.',
    images: ['/projects/lumen-hero.jpg'],
  },
}

export default function LumenCaseStudyPage() {
  return <LumenCaseStudy />
}
