import { apCourses, profile, stats } from '../data'
import { CountUp } from './CountUp'
import { Reveal } from './Reveal'

export function Stats() {
  return (
    <section id="stats" className="relative bg-mint/60 pb-10 pt-4">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90} from="scale">
              <div className="glass h-full rounded-3xl p-5 text-center shadow-lg shadow-mint-deep/10 transition hover:-translate-y-1 sm:p-7">
                <div className="font-display text-4xl font-extrabold text-gradient sm:text-5xl">
                  <CountUp to={s.value} decimals={s.decimals ?? 0} suffix={s.suffix ?? ''} />
                </div>
                <div className="mt-2 text-sm font-semibold">{s.label}</div>
                <div className="text-xs text-muted">{s.sub}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-8 overflow-hidden rounded-full bg-white/60 py-3 [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
            <div className="flex w-max animate-marquee gap-3">
              {[...apCourses, ...apCourses].map((c, i) => (
                <span key={i} className="whitespace-nowrap rounded-full bg-white px-4 py-1.5 text-xs font-medium text-muted shadow-sm">
                  AP {c}
                </span>
              ))}
            </div>
          </div>
          <p className="mt-3 text-center text-xs text-muted">
            {profile.school} · {profile.grad} · AP Scholar with Distinction
          </p>
        </Reveal>
      </div>
    </section>
  )
}
