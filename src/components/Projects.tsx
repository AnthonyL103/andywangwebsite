import { projects } from '../data'
import { ProjectFeature } from './ProjectFeature'
import { Reveal } from './Reveal'
import { WaveDivider } from './WaveDivider'

const accents = ['sky', 'mint', 'peach'] as const

export function Projects() {
  return (
    <section id="projects" className="relative bg-paper pb-28 pt-6">
      <WaveDivider fill="#f8fbff" />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-sky-deep">Flagship Projects</span>
          <h2 className="font-display mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">Things I’ve engineered</h2>
          <p className="mt-4 text-lg text-muted">
            Independent builds spanning aerospace, environmental science and competitive robotics, designed, prototyped and tested end to end.
          </p>
        </Reveal>

        <div className="mt-20 flex flex-col gap-28 sm:mt-24 sm:gap-32">
          {projects.map((p, i) => (
            <ProjectFeature key={p.id} project={p} reverse={i % 2 === 1} accent={accents[i % accents.length]} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
