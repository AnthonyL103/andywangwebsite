import { honors } from '../data'
import { Reveal } from './Reveal'
import { WaveDivider } from './WaveDivider'

const tierStyle: Record<string, string> = {
  top: 'bg-peach-deep text-white',
  major: 'bg-sky-deep text-white',
  minor: 'bg-white text-ink border border-ink/10',
}

export function Honors() {
  return (
    <section id="honors" className="relative bg-peach/40 py-24">
      <WaveDivider fill="#ffe8d6" />
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-peach-deep">Honors & Awards</span>
          <h2 className="font-display mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">Recognition along the way</h2>
        </Reveal>

        <ol className="relative mt-16 border-s-2 border-peach-deep/25 ps-8 sm:ps-10">
          {honors.map((h, i) => (
            <Reveal key={i} delay={i * 70} from="left" className="relative pb-9 last:pb-0">
              <span className={`absolute -start-[calc(2rem+7px)] top-1 h-3.5 w-3.5 rounded-full ring-4 ring-peach/40 sm:-start-[calc(2.5rem+7px)] ${tierStyle[h.tier].split(' ')[0]}`} />
              <div className="flex flex-wrap items-center gap-2.5">
                <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold ${tierStyle[h.tier]}`}>{h.date}</span>
                <h3 className="font-display text-base font-bold sm:text-lg">{h.title}</h3>
              </div>
              {'note' in h && h.note && <p className="mt-1 text-sm text-muted">{h.note}</p>}
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
