import { Section, Container } from '@/components/section'
import { Heading, Text, Label } from '@/components/typography'

export function ContactSection() {
  return (
    <Section id="contact" size="large" className="border-t border-border">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 gradient-radial pointer-events-none" />

      <Container size="narrow" className="relative">
        <div className="flex flex-col items-center text-center">
          <Label className="mb-6">Contact</Label>

          <Heading as="h2" size="xl" className="mb-6">
            {"Let's work together"}
          </Heading>

          <Text size="lg" muted className="max-w-xl mb-10">
            Have a project in mind? I&apos;d love to hear about it. Send me a
            message and let&apos;s create something exceptional.
          </Text>

          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center justify-center px-10 py-5 bg-primary text-primary-foreground font-medium text-lg rounded-full hover:opacity-90 transition-opacity"
          >
            hello@example.com
          </a>

          {/* Social links */}
          <div className="flex items-center gap-8 mt-12 pt-12 border-t border-border">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground text-sm hover:text-foreground transition-colors"
            >
              Twitter
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground text-sm hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground text-sm hover:text-foreground transition-colors"
            >
              Dribbble
            </a>
          </div>
        </div>
      </Container>
    </Section>
  )
}
