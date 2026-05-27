import { Section, Container } from '@/components/section'
import { Heading, Text, Label } from '@/components/typography'

export function WorkSection() {
  return (
    <Section id="work">
      <Container>
        <div className="mb-16 md:mb-20">
          <Label className="mb-4">Selected Work</Label>
          <Heading as="h2" size="xl">
            Projects
          </Heading>
        </div>

        {/* Work grid placeholder - ready for projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Project cards will be added here */}
          <div className="aspect-[4/3] rounded-2xl glass-subtle flex items-center justify-center">
            <Text muted className="text-center">Project 1</Text>
          </div>
          <div className="aspect-[4/3] rounded-2xl glass-subtle flex items-center justify-center">
            <Text muted className="text-center">Project 2</Text>
          </div>
          <div className="aspect-[4/3] rounded-2xl glass-subtle flex items-center justify-center">
            <Text muted className="text-center">Project 3</Text>
          </div>
          <div className="aspect-[4/3] rounded-2xl glass-subtle flex items-center justify-center">
            <Text muted className="text-center">Project 4</Text>
          </div>
        </div>
      </Container>
    </Section>
  )
}
