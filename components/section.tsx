import { cn } from '@/lib/utils'

interface SectionProps {
  id?: string
  className?: string
  children: React.ReactNode
  size?: 'default' | 'large' | 'hero'
}

export function Section({
  id,
  className,
  children,
  size = 'default',
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'relative',
        size === 'default' && 'py-24 md:py-32 lg:py-40',
        size === 'large' && 'py-32 md:py-40 lg:py-48',
        size === 'hero' && 'pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40',
        className
      )}
    >
      {children}
    </section>
  )
}

interface ContainerProps {
  className?: string
  children: React.ReactNode
  size?: 'default' | 'narrow' | 'wide'
}

export function Container({
  className,
  children,
  size = 'default',
}: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto px-6 lg:px-8',
        size === 'default' && 'max-w-7xl',
        size === 'narrow' && 'max-w-4xl',
        size === 'wide' && 'max-w-screen-2xl',
        className
      )}
    >
      {children}
    </div>
  )
}
