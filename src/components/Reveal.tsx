import type { ReactNode, CSSProperties } from 'react'
import { useInView } from '../hooks/useInView'

type Props = {
  children: ReactNode
  delay?: number
  from?: 'up' | 'left' | 'right' | 'scale'
  className?: string
}

const fromClass = { up: '', left: 'reveal-left', right: 'reveal-right', scale: 'reveal-scale' }

/** Fades and slides its children in when scrolled into view. */
export function Reveal({ children, delay = 0, from = 'up', className = '' }: Props) {
  const [ref, inView] = useInView<HTMLDivElement>()
  return (
    <div
      ref={ref}
      style={{ '--d': `${delay}ms` } as CSSProperties}
      className={`reveal ${fromClass[from]} ${inView ? 'in' : ''} ${className}`}
    >
      {children}
    </div>
  )
}

/**
 * Image wrapper that unveils top-to-bottom on scroll.
 * The observed element must stay unclipped — clip-path on the observed node
 * itself makes Chromium report zero intersection forever, so the clip lives
 * on an inner child instead.
 */
export function Unveil({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const [ref, inView] = useInView<HTMLDivElement>(0.1)
  return (
    <div ref={ref} className={className}>
      <div style={{ '--d': `${delay}ms` } as CSSProperties} className={`unveil ${inView ? 'in' : ''}`}>
        {children}
      </div>
    </div>
  )
}
