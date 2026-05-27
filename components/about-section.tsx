import { Section, Container } from '@/components/section'
import { Heading, Text, Label } from '@/components/typography'

export function AboutSection() {
  return (
    <Section id="about" className="border-t border-border">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left column */}
          <div className="lg:col-span-5">
            <Label className="mb-4">About</Label>
            <Heading as="h2" size="xl">
              Background
            </Heading>
          </div>

          {/* Right column */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <Text size="lg" muted className="leading-relaxed">
              I specialize in creating user-centered digital products that solve
              real problems. With a focus on clarity, usability, and craft, I
              help teams build experiences that users genuinely enjoy.
            </Text>

            <Text muted className="leading-relaxed">
              My approach combines strategic thinking with meticulous attention
              to detail. I believe great design emerges from understanding both
              user needs and business goals, then finding elegant solutions that
              serve both.
            </Text>

            {/* Skills/Capabilities */}
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border">
              <div>
                <Label className="mb-4 block">Capabilities</Label>
                <ul className="flex flex-col gap-2">
                  <li className="text-foreground/80 text-sm">UX Strategy</li>
                  <li className="text-foreground/80 text-sm">Interface Design</li>
                  <li className="text-foreground/80 text-sm">Design Systems</li>
                  <li className="text-foreground/80 text-sm">Prototyping</li>
                </ul>
              </div>
              <div>
                <Label className="mb-4 block">Tools</Label>
                <ul className="flex flex-col gap-2">
                  <li className="text-foreground/80 text-sm">Figma</li>
                  <li className="text-foreground/80 text-sm">Framer</li>
                  <li className="text-foreground/80 text-sm">Webflow</li>
                  <li className="text-foreground/80 text-sm">Principle</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
