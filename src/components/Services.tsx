import creationImg from '../assets/creation.webp'
import brandImg from '../assets/brand.webp'

const services = [
  {
    n: '01',
    title: 'Video Editing & Content Production',
    blurb:
      'Hand us the footage and we cut it into something people stop scrolling for. Clean edits, motion graphics when it earns the attention, and copy that lands the hook.',
    points: [
      'Editing for short form and long form',
      'Scripts, headlines, and copywriting',
      'Production support and consultation',
      'Content ops and performance tracking',
    ],
    image: undefined,
  },
  {
    n: '02',
    title: 'End-to-End Creation',
    blurb:
      'You bring the idea, we run the whole thing. Pre-production through final delivery, with scripts built for the platform and graphics that match the brand.',
    points: [
      'Pre-production and planning',
      'Platform-optimized scripting',
      'Social and marketing graphic design',
      'One team, start to finish',
    ],
    image: creationImg,
  },
  {
    n: '03',
    title: 'Personal Brand Growth & Strategy',
    blurb:
      'For founders and creators who want to be known. We ghostwrite, shape the positioning, and run the channels so your presence grows while you stay focused on the work.',
    points: [
      'Ghostwriting in your voice',
      'Personal branding strategy',
      'Engagement amplification',
      'Full social media management',
    ],
    image: brandImg,
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-bright">
            What we do
          </p>
          <h2 className="font-display mt-4 text-4xl font-black leading-[1.02] tracking-[-0.03em] text-white sm:text-5xl">
            Three ways we put your content to work
          </h2>
          <p className="mt-5 text-lg text-haze">
            Plug into one piece or hand us the whole pipeline. However you start,
            you get a team that treats your content like it owns the results.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {services.map((s, i) => (
            <article
              key={s.n}
              className={`reveal group relative overflow-hidden rounded-3xl border border-white/8 bg-panel/70 p-7 transition-all duration-500 hover:border-cyan/30 ${
                i === 0 ? 'lg:row-span-1' : ''
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* hover glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[radial-gradient(closest-side,rgba(46,197,255,0.25),transparent)] opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

              {s.image && (
                <div className="mb-6 overflow-hidden rounded-2xl border border-white/8">
                  <img
                    src={s.image}
                    alt=""
                    className="h-40 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              )}

              <div className="flex items-center justify-between">
                <span className="font-display text-sm font-bold tracking-widest text-haze/60">
                  {s.n}
                </span>
                <span className="grad-text font-display text-xl font-black opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  →
                </span>
              </div>

              <h3 className="font-display mt-4 text-2xl font-extrabold leading-tight tracking-[-0.02em] text-white">
                {s.title}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-haze">{s.blurb}</p>

              <ul className="mt-6 space-y-2.5">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-white/85">
                    <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full grad-bg">
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none">
                        <path d="M5 13l4 4L19 7" stroke="#05070e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
