import { leadership } from '../data'
import { Reveal } from './Reveal'
import { WaveDivider } from './WaveDivider'

export function Leadership() {
  return (
    <section id="leadership" className="relative bg-mint/40 py-24">
      <WaveDivider fill="#d5f5ec" flip />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-mint-deep">Leadership & Service</span>
          <h2 className="font-display mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">Beyond the workbench</h2>
          <p className="mt-4 text-lg text-muted">Mentoring, teaching and leading — on the field, in the classroom and in the community.</p>
        </Reveal>

        <div className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6 [&>*]:break-inside-avoid">
          {leadership.map((l, i) => (
            <Reveal key={l.title} delay={(i % 3) * 100} from="scale">
              <div className="group overflow-hidden rounded-3xl bg-white shadow-lg shadow-mint-deep/10 transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl">
                {l.image && (
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={l.image} alt={l.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
                  </div>
                )}
                <div className="p-6">
                  <span className="rounded-full bg-mint px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-mint-deep">{l.tag}</span>
                  <h3 className="font-display mt-3 text-lg font-bold leading-snug">{l.title}</h3>
                  <p className="text-xs font-semibold text-muted">
                    {l.org} · {l.date}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{l.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
