import { cn } from '@/lib/utils'

interface HeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4'
  size?: 'display' | 'xl' | 'lg' | 'md' | 'sm'
  className?: string
  children: React.ReactNode
  gradient?: boolean
}

export function Heading({
  as: Component = 'h2',
  size = 'lg',
  className,
  children,
  gradient = false,
}: HeadingProps) {
  return (
    <Component
      className={cn(
        'font-medium tracking-tight text-balance',
        size === 'display' && 'text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.95]',
        size === 'xl' && 'text-4xl md:text-5xl lg:text-6xl leading-[1.05]',
        size === 'lg' && 'text-3xl md:text-4xl lg:text-5xl leading-[1.1]',
        size === 'md' && 'text-2xl md:text-3xl leading-[1.15]',
        size === 'sm' && 'text-xl md:text-2xl leading-[1.2]',
        gradient && 'text-gradient',
        className
      )}
    >
      {children}
    </Component>
  )
}

interface TextProps {
  as?: 'p' | 'span' | 'div'
  size?: 'lg' | 'base' | 'sm' | 'xs'
  className?: string
  children: React.ReactNode
  muted?: boolean
}

export function Text({
  as: Component = 'p',
  size = 'base',
  className,
  children,
  muted = false,
}: TextProps) {
  return (
    <Component
      className={cn(
        'leading-relaxed',
        size === 'lg' && 'text-lg md:text-xl',
        size === 'base' && 'text-base md:text-lg',
        size === 'sm' && 'text-sm',
        size === 'xs' && 'text-xs',
        muted ? 'text-muted-foreground' : 'text-foreground/90',
        className
      )}
    >
      {children}
    </Component>
  )
}

interface LabelProps {
  className?: string
  children: React.ReactNode
}

export function Label({ className, children }: LabelProps) {
  return (
    <span
      className={cn(
        'text-xs font-medium text-muted-foreground uppercase tracking-widest',
        className
      )}
    >
      {children}
    </span>
  )
}
