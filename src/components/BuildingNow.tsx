import { buildingNow } from '../data'
import { Reveal } from './Reveal'
import { WaveDivider } from './WaveDivider'

const icons = {
  rocket: (
    <path d="M12 2c2.5 2 4 5.5 4 9 0 2-.5 3.7-1.2 5.2L12 22l-2.8-5.8C8.5 14.7 8 13 8 11c0-3.5 1.5-7 4-9Z" />
  ),
  city: <path d="M4 21V9l5-4 5 4v12M14 21V5l6-2v18M4 21h16M9 21v-4h1v4M9 12h1v1H9zm0-4h1v1H9z" />,
}

export function BuildingNow() {
  return (
    <section className="relative bg-lilac/40 py-24">
      <WaveDivider fill="#ece5ff" flip />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-lilac-deep">Right Now</span>
          <h2 className="font-display mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">What I’m building next</h2>
          <p className="mt-4 text-lg text-muted">Current projects still in motion.</p>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
          {buildingNow.map((item, i) => (
            <Reveal key={item.title} delay={i * 130} from="scale">
              <div className="glass group h-full rounded-3xl p-7 shadow-lg shadow-lilac-deep/10 transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lilac text-lilac-deep transition group-hover:scale-110 group-hover:bg-ink group-hover:text-white">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                    {icons[item.icon]}
                  </svg>
                </div>
                <h3 className="font-display mt-5 text-xl font-bold leading-snug">{item.title}</h3>
                <p className="mt-1 text-xs font-semibold text-muted">
                  {item.role} · {item.date}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {item.points.map((pt, j) => (
                    <li key={j} className="flex gap-2 text-sm leading-relaxed text-muted">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-lilac-deep" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {item.tags.map((t) => (
                    <span key={t} className="rounded-full bg-white px-2.5 py-1 text-[11px] font-medium">
                      {t}
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
