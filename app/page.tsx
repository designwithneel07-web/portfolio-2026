import { HeroSection } from '@/components/hero-section'
import { WorkSection } from '@/components/work-section'
import { AboutSection } from '@/components/about-section'
import { LittleAboutSection } from '@/components/little-about-section'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WorkSection />
      <AboutSection />
      <LittleAboutSection />
    </>
  )
}
