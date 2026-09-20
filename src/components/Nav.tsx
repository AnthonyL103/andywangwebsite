import { useEffect, useState } from 'react'
import { nav, profile } from '../data'
import { useScrollY } from '../hooks/useScrollY'

/** Floating pill nav with a scroll-progress bar and active-section highlight. */
export function Nav() {
  const y = useScrollY()
  const [active, setActive] = useState('top')
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const max = document.documentElement.scrollHeight - window.innerHeight
    setProgress(max > 0 ? y / max : 0)
    const probe = y + window.innerHeight * 0.35
    let current = 'top'
    for (const { id } of nav) {
      const el = document.getElementById(id)
      if (el && el.offsetTop <= probe) current = id
    }
    setActive(current)
  }, [y])

  const scrolled = y > 40

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50 h-1 bg-transparent">
        <div className="h-full origin-left bg-gradient-to-r from-sky-deep via-mint-deep to-lilac-deep" style={{ transform: `scaleX(${progress})` }} />
      </div>
      <header className="fixed inset-x-0 top-3 z-40 flex justify-center px-4">
        <nav
          className={`glass flex items-center gap-1 rounded-full px-2 py-1.5 shadow-lg shadow-sky-deep/5 transition-all duration-500 ${
            scrolled ? 'translate-y-0 opacity-100' : 'translate-y-0 opacity-95'
          }`}
        >
          <a href="#top" className="font-display hidden px-3 text-sm font-bold sm:block">
            {profile.first}
          </a>
          {nav.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors sm:text-sm ${
                active === n.id ? 'bg-ink text-white' : 'text-muted hover:bg-sky'
              } ${n.id === 'top' ? 'sm:hidden' : ''}`}
            >
              {n.label}
            </a>
          ))}
        </nav>
      </header>
    </>
  )
}
