import type { Project } from '../data'
import { Reveal, Unveil } from './Reveal'
import { useScrollY } from '../hooks/useScrollY'

type Props = { project: Project; reverse?: boolean; accent: 'sky' | 'mint' | 'peach' | 'lilac'; index: number }

const accents = {
  sky: { chip: 'bg-sky text-sky-deep', num: 'text-sky-deep', ring: 'bg-sky' },
  mint: { chip: 'bg-mint text-mint-deep', num: 'text-mint-deep', ring: 'bg-mint' },
  peach: { chip: 'bg-peach text-peach-deep', num: 'text-peach-deep', ring: 'bg-peach' },
  lilac: { chip: 'bg-lilac text-lilac-deep', num: 'text-lilac-deep', ring: 'bg-lilac' },
}

/** A resume entry paired with its photo(s). Alternates sides down the page. */
export function ProjectFeature({ project: p, reverse = false, accent, index }: Props) {
  const a = accents[accent]
  const y = useScrollY()
  // gentle parallax on the secondary image
  const drift = Math.max(-40, Math.min(40, (y % 2000) * 0 + (y - index * 900) * -0.03))

  return (
    <div className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>
      <div className="relative mx-auto w-full max-w-md lg:max-w-none">
        <div className={`absolute -inset-4 -z-10 rounded-[2.5rem] ${a.ring} opacity-70 blur-2xl`} />
        <Unveil>
          <div className="aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-2xl shadow-ink/15">
            <img
              src={p.images[0].src}
              alt={p.images[0].alt}
              style={{ objectPosition: p.images[0].pos }}
              className="h-full w-full scale-110 object-cover transition-transform duration-700 hover:scale-[1.15]"
              loading="lazy"
            />
          </div>
        </Unveil>
        {p.images[1] && (
          <div
            className={`absolute -bottom-8 w-2/5 ${reverse ? '-left-4 sm:-left-8' : '-right-4 sm:-right-8'}`}
            style={{ transform: `translateY(${drift}px)` }}
          >
            <Reveal from="scale" delay={300}>
              <div className="aspect-[3/4] overflow-hidden rounded-3xl border-4 border-white shadow-xl shadow-ink/20">
                <img src={p.images[1].src} alt={p.images[1].alt} style={{ objectPosition: p.images[1].pos }} className="h-full w-full object-cover" loading="lazy" />
              </div>
            </Reveal>
          </div>
        )}
        {p.chip && (
          <div className={`glass absolute ${reverse ? '-right-2 sm:-right-6' : '-left-2 sm:-left-6'} top-6 z-10 animate-float rounded-2xl px-4 py-2 text-xs font-bold shadow-lg sm:text-sm`}>
            ✦ {p.chip}
          </div>
        )}
      </div>

      <div>
        <Reveal from={reverse ? 'right' : 'left'}>
          <div className="flex items-center gap-3">
            <span className={`font-display text-5xl font-extrabold opacity-30 ${a.num}`}>0{index + 1}</span>
            <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${a.chip}`}>{p.eyebrow}</span>
          </div>
          <h3 className="font-display mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">{p.title}</h3>
          <p className="mt-2 text-sm font-medium text-muted">
            {p.role} · {p.date}
          </p>
          <p className="mt-5 text-lg leading-relaxed">{p.summary}</p>
        </Reveal>
        <ul className="mt-5 space-y-3">
          {p.bullets.map((b, i) => (
            <Reveal key={i} delay={120 + i * 110}>
              <li className="flex gap-3 text-[15px] leading-relaxed text-muted">
                <span className={`mt-2 h-2 w-2 shrink-0 rounded-full ${a.chip.split(' ')[0]} ring-2 ring-current ${a.num}`} />
                {b}
              </li>
            </Reveal>
          ))}
        </ul>
        <Reveal delay={450}>
          <div className="mt-6 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span key={t} className="rounded-full border border-ink/10 bg-white px-3 py-1 text-xs font-medium">
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  )
}
