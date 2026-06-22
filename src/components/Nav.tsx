import { useEffect, useState } from 'react'
import logo from '../assets/emp-logo.webp'

const links = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-2.5' : 'py-4 sm:py-6'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <div
          className={`flex w-full items-center justify-between rounded-full px-3 pr-3 transition-all duration-500 sm:px-4 ${
            scrolled
              ? 'glass py-2 shadow-[0_10px_40px_-20px_rgba(46,197,255,0.6)]'
              : 'py-1.5'
          }`}
        >
          <a href="#top" className="flex items-center gap-2.5">
            <img src={logo} alt="Earned Media Productions" className="h-9 w-auto sm:h-10" />
            <span className="sr-only">Earned Media Productions</span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative rounded-full px-4 py-2 text-sm font-medium text-haze transition-colors hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden rounded-full grad-bg px-5 py-2.5 text-sm font-semibold text-ink transition-transform duration-300 hover:scale-[1.04] sm:inline-block"
            >
              Start a project
            </a>
            <button
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 md:hidden"
            >
              <span className="relative block h-3 w-5">
                <span
                  className={`absolute left-0 h-0.5 w-5 bg-white transition-all ${
                    open ? 'top-1.5 rotate-45' : 'top-0'
                  }`}
                />
                <span
                  className={`absolute left-0 top-1.5 h-0.5 w-5 bg-white transition-all ${
                    open ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`absolute left-0 h-0.5 w-5 bg-white transition-all ${
                    open ? 'top-1.5 -rotate-45' : 'top-3'
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile sheet */}
      <div
        className={`mx-5 mt-2 overflow-hidden rounded-3xl glass transition-all duration-500 md:hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 border-transparent opacity-0'
        }`}
      >
        <nav className="flex flex-col p-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-base font-medium text-haze transition-colors hover:bg-white/5 hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-1 rounded-2xl grad-bg px-4 py-3 text-center text-base font-semibold text-ink"
          >
            Start a project
          </a>
        </nav>
      </div>
    </header>
  )
}
