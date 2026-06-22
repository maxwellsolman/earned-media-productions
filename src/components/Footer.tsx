import logo from '../assets/emp-logo.webp'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/8 bg-ink-soft/60">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <img src={logo} alt="Earned Media Productions" className="h-12 w-auto" />
            <p className="mt-5 text-sm leading-relaxed text-haze">
              Your one-stop content partner. We edit, produce, and grow brands and
              creators who want to be watched.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <FootCol
              title="Explore"
              links={[
                ['Work', '#work'],
                ['Services', '#services'],
                ['Process', '#process'],
              ]}
            />
            <FootCol
              title="Services"
              links={[
                ['Video editing', '#services'],
                ['Production', '#services'],
                ['Brand growth', '#services'],
              ]}
            />
            <div>
              <p className="text-sm font-semibold text-white">Get in touch</p>
              <a
                href="mailto:contact@earnedmediaproductions.com"
                className="mt-4 block text-sm text-haze transition-colors hover:text-cyan-bright"
              >
                contact@earnedmediaproductions.com
              </a>
              <a
                href="#contact"
                className="mt-4 inline-block rounded-full grad-bg px-5 py-2.5 text-sm font-semibold text-ink transition-transform duration-300 hover:scale-105"
              >
                Start a project
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/8 pt-6 text-xs text-haze/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Earned Media Productions. All rights reserved.</p>
          <p>Built to move.</p>
        </div>
      </div>
    </footer>
  )
}

function FootCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <p className="text-sm font-semibold text-white">{title}</p>
      <ul className="mt-4 space-y-3">
        {links.map(([l, h]) => (
          <li key={l}>
            <a href={h} className="text-sm text-haze transition-colors hover:text-cyan-bright">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
