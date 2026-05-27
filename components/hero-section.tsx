import { Section, Container } from '@/components/section'
import { Heading, Text, Label } from '@/components/typography'

export function HeroSection() {
  return (
    <Section size="hero" className="relative overflow-hidden">
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 gradient-radial pointer-events-none" />

      <Container>
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <Label className="mb-6 md:mb-8">UX Designer</Label>

          <Heading as="h1" size="display" gradient className="mb-6 md:mb-8">
            Crafting digital experiences
          </Heading>

          <Text size="lg" muted className="max-w-2xl mb-10 md:mb-12">
            I design intuitive interfaces and meaningful interactions that
            connect people with products they love.
          </Text>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#work"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full hover:opacity-90 transition-opacity"
            >
              View work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 glass font-medium rounded-full hover:bg-white/5 transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>
      </Container>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </Section>
  )
}
