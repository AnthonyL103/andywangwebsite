import { useRef, type CSSProperties } from 'react'
import { photos, profile } from '../data'

const collage = [
  { src: photos.usOpen, alt: 'Andy celebrating as VEX U.S. Open champion', cls: 'left-[6%] top-0 w-[62%] aspect-[4/3]', rot: -4, depth: 10, anim: 'animate-float' },
  { src: photos.selfie, alt: 'Andy mirror selfie', cls: 'right-0 top-[10%] w-[32%] aspect-[3/4]', rot: 6, depth: 26, anim: 'animate-float-slow' },
  { src: photos.soccer, alt: 'Andy playing soccer', cls: 'left-0 bottom-0 w-[30%] aspect-[3/4]', rot: -7, depth: 32, anim: 'animate-float-slow' },
  { src: photos.dad, alt: 'Andy at a soccer stadium', cls: 'right-[6%] bottom-[2%] w-[54%] aspect-[16/10]', rot: 3, depth: 18, anim: 'animate-float' },
]

const badges = [
  { text: 'VEX U.S. Open Champion', cls: 'left-[2%] top-[42%]', color: 'bg-peach' },
  { text: '10th · TSA Nationals', cls: 'right-[4%] top-[2%]', color: 'bg-mint' },
  { text: 'NPSL Champion', cls: 'right-[30%] bottom-[38%]', color: 'bg-lilac' },
]

export function Hero() {
  const stage = useRef<HTMLDivElement>(null)

  const onMove = (e: React.PointerEvent) => {
    const el = stage.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--mx', String((e.clientX - r.left) / r.width - 0.5))
    el.style.setProperty('--my', String((e.clientY - r.top) / r.height - 0.5))
  }

  return (
    <section
      id="top"
      onPointerMove={onMove}
      className="relative isolate overflow-hidden bg-gradient-to-b from-sky/70 via-paper to-mint/60 pb-16 pt-28 sm:pt-32"
    >
      {/* drifting colour blobs */}
      <div className="absolute -left-24 top-10 -z-10 h-80 w-80 animate-blob rounded-full bg-sky-deep/20 blur-3xl" />
      <div className="absolute right-0 top-1/3 -z-10 h-96 w-96 animate-blob rounded-full bg-lilac-deep/15 blur-3xl [animation-delay:-6s]" />
      <div className="absolute bottom-0 left-1/3 -z-10 h-72 w-72 animate-blob rounded-full bg-mint-deep/20 blur-3xl [animation-delay:-12s]" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr]">
        <div className="[&>*]:animate-[rise_0.9s_cubic-bezier(0.22,1,0.36,1)_both]">
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted sm:text-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-mint-deep" />
            {profile.school} · {profile.grad} · {profile.location}
          </span>
          <h1 className="font-display mt-6 text-5xl font-extrabold leading-[1.02] tracking-tight [animation-delay:120ms] sm:text-7xl">
            Hi, I’m <span className="text-gradient">{profile.first}</span>
            <br />
            I build things<br />that matter.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted [animation-delay:240ms]">{profile.blurb}</p>
          <div className="mt-8 flex flex-wrap gap-3 [animation-delay:360ms]">
            <a href="#projects" className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-ink/20 transition hover:-translate-y-0.5 hover:shadow-xl">
              See my work →
            </a>
            <a href="#contact" className="glass rounded-full px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-white">
              Get in touch
            </a>
          </div>
          <p className="font-display mt-10 text-sm font-semibold uppercase tracking-[0.2em] text-sky-deep [animation-delay:480ms]">
            {profile.tagline}
          </p>
        </div>

        {/* photo collage with pointer parallax */}
        <div
          ref={stage}
          style={{ '--mx': 0, '--my': 0 } as CSSProperties}
          className="relative mx-auto h-[420px] w-full max-w-[560px] sm:h-[540px] lg:h-[580px]"
        >
          {collage.map((p, i) => (
            <div
              key={p.alt}
              className={`absolute ${p.cls} transition-transform duration-300 ease-out`}
              style={{ transform: `translate(calc(var(--mx) * ${p.depth}px), calc(var(--my) * ${p.depth}px))` }}
            >
              <div
                className={`h-full w-full ${p.anim} overflow-hidden rounded-3xl border-4 border-white shadow-2xl shadow-ink/20`}
                style={{ '--r': `${p.rot}deg`, animationDelay: `${i * -1.5}s`, transform: `rotate(${p.rot}deg)` } as CSSProperties}
              >
                <img src={p.src} alt={p.alt} className="h-full w-full object-cover" loading="eager" />
              </div>
            </div>
          ))}
          {badges.map((b, i) => (
            <div
              key={b.text}
              className={`absolute ${b.cls} ${b.color} z-10 animate-float whitespace-nowrap rounded-full px-3 py-1.5 text-[11px] font-semibold shadow-lg sm:text-xs`}
              style={{ animationDelay: `${i * -2}s` } as CSSProperties}
            >
              {b.text}
            </div>
          ))}
        </div>
      </div>

      <a href="#stats" aria-label="Scroll down" className="mx-auto mt-10 flex w-fit flex-col items-center gap-2 text-xs font-medium text-muted">
        Scroll
        <span className="flex h-9 w-5 justify-center rounded-full border-2 border-muted/40 pt-1.5">
          <span className="h-2 w-1 animate-bounce rounded-full bg-muted" />
        </span>
      </a>
    </section>
  )
}
