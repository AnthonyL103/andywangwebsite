import { skills } from '../data'
import { Reveal } from './Reveal'
import { WaveDivider } from './WaveDivider'

export function Skills() {
  return (
    <section id="skills" className="relative bg-sky/40 py-24">
      <WaveDivider fill="#dcecff" />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-sky-deep">Toolkit</span>
          <h2 className="font-display mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">Skills & Fluencies</h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => (
            <Reveal key={s.group} delay={i * 90} from="scale">
              <div className="glass h-full rounded-3xl p-6 transition hover:-translate-y-1 hover:shadow-lg">
                <h3 className="font-display text-sm font-bold uppercase tracking-wider text-sky-deep">{s.group}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.items.map((it) => (
                    <span key={it} className="rounded-full bg-white px-3 py-1.5 text-sm font-medium shadow-sm">
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
