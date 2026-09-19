import { photos, profile } from '../data'
import { Reveal } from './Reveal'
import { WaveDivider } from './WaveDivider'

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-ink pb-16 pt-6 text-white">
      <WaveDivider fill="#0f1e33" flip />
      <div className="absolute -right-20 -top-20 h-72 w-72 animate-blob rounded-full bg-sky-deep/25 blur-3xl" />
      <div className="absolute -bottom-24 left-0 h-72 w-72 animate-blob rounded-full bg-mint-deep/20 blur-3xl [animation-delay:-8s]" />

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal from="scale">
          <div className="mx-auto -mt-4 mb-8 h-24 w-24 overflow-hidden rounded-full border-4 border-white/20 shadow-xl sm:h-28 sm:w-28">
            <img src={photos.stemExpo} alt={profile.name} className="h-full w-full object-cover object-top" />
          </div>
        </Reveal>
        <Reveal delay={80}>
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-mint-deep">Let’s connect</span>
          <h2 className="font-display mt-3 text-4xl font-extrabold tracking-tight sm:text-6xl">
            Ready to build<br />something great.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/70">
            Whether it’s a research opportunity, a robotics collaboration, or a college application question — I’d love to hear from you.
          </p>
        </Reveal>

        <Reveal delay={180}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-white px-7 py-3.5 text-sm font-bold text-ink shadow-lg transition hover:-translate-y-0.5 hover:shadow-2xl"
            >
              {profile.email}
            </a>
            <a href={`tel:${profile.phone.replace(/[^\d+]/g, '')}`} className="glass rounded-full bg-white/10 px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/20">
              {profile.phone}
            </a>
          </div>
        </Reveal>

        <Reveal delay={260}>
          <p className="mt-16 text-xs text-white/40">
            © {new Date().getFullYear()} {profile.name} · {profile.location}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
