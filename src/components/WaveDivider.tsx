type Props = {
  /** Fill colour of the wave — set this to the NEXT section's background. */
  fill: string
  flip?: boolean
  variant?: 1 | 2
}

const paths = {
  1: 'M0,64 C240,120 480,0 720,48 C960,96 1200,16 1440,64 L1440,120 L0,120 Z',
  2: 'M0,32 C180,96 420,96 720,48 C1020,0 1260,24 1440,80 L1440,120 L0,120 Z',
}

/** Curved seam that blends one section's background into the next. */
export function WaveDivider({ fill, flip = false, variant = 1 }: Props) {
  return (
    <div className={`pointer-events-none relative -mb-px h-16 w-full overflow-hidden sm:h-24 ${flip ? 'rotate-180' : ''}`} aria-hidden>
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
        <path d={paths[variant]} fill={fill} />
      </svg>
    </div>
  )
}
