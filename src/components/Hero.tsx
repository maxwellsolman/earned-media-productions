import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import heroImg from '../assets/hero-editing.webp'

export default function Hero() {
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      if (reduce) {
        gsap.set('[data-hero]', { opacity: 1, y: 0 })
        return
      }
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from('[data-hero="eyebrow"]', { y: 18, opacity: 0, duration: 0.6 })
        .from('[data-hero="line"]', { y: 40, opacity: 0, duration: 0.85, stagger: 0.1 }, '-=0.3')
        .from('[data-hero="sub"]', { y: 22, opacity: 0, duration: 0.7 }, '-=0.45')
        .from('[data-hero="cta"]', { y: 18, opacity: 0, duration: 0.6, stagger: 0.08 }, '-=0.4')
        .from('[data-hero="panel"]', { y: 50, opacity: 0, scale: 0.96, duration: 1 }, '-=0.7')

      // subtle pointer parallax on the preview panel
      const panel = root.current?.querySelector<HTMLElement>('[data-hero="panel"]')
      const onMove = (e: PointerEvent) => {
        if (!panel) return
        const rx = (e.clientX / window.innerWidth - 0.5) * 8
        const ry = (e.clientY / window.innerHeight - 0.5) * -8
        gsap.to(panel, { rotateY: rx, rotateX: ry, duration: 0.6, ease: 'power2.out' })
      }
      window.addEventListener('pointermove', onMove)
      return () => window.removeEventListener('pointermove', onMove)
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={root}
      id="top"
      className="relative overflow-hidden pb-16 pt-32 sm:pb-24 sm:pt-40 lg:pt-44"
    >
      {/* Ambient energy field */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[60vh] w-[80vw] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(46,197,255,0.22),transparent)] blur-2xl" />
        <div className="absolute right-[-10%] top-[20%] h-[50vh] w-[50vw] rounded-full bg-[radial-gradient(closest-side,rgba(193,46,255,0.18),transparent)] blur-2xl" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:54px_54px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(5,7,14,0.7)_85%)]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left: copy */}
        <div>
          <span
            data-hero="eyebrow"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-bright"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan" />
            </span>
            Your one-stop content partner
          </span>

          <h1 className="font-display mt-6 text-[2.6rem] font-black leading-[0.95] tracking-[-0.03em] text-white sm:text-6xl lg:text-[4.6rem]">
            <span data-hero="line" className="block">
              We turn raw footage
            </span>
            <span data-hero="line" className="block">
              into <span className="grad-text">attention</span>.
            </span>
          </h1>

          <p
            data-hero="sub"
            className="mt-6 max-w-xl text-base leading-relaxed text-haze sm:text-lg"
          >
            From a single timeline to a full content engine, we handle editing,
            production, and strategy so your brand actually gets watched. The same
            team that builds work for Sprite and Gatorade can build it for you.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              data-hero="cta"
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full grad-bg px-7 py-3.5 text-base font-semibold text-ink transition-transform duration-300 hover:scale-[1.03]"
            >
              Tell us about your project
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              data-hero="cta"
              href="#work"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/5"
            >
              See the work
            </a>
          </div>

          <div data-hero="cta" className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
            {[
              ['11+', 'brands shipped'],
              ['3 day', 'avg first cut'],
              ['Full', 'service team'],
            ].map(([n, l], i) => (
              <div key={l} className="flex items-center gap-6">
                {i > 0 && <span className="hidden h-8 w-px bg-white/10 sm:block" />}
                <div className="flex flex-col">
                  <span className="font-display text-2xl font-extrabold leading-none text-white">{n}</span>
                  <span className="mt-1 text-sm text-haze">{l}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: floating editor preview */}
        <div className="relative [perspective:1400px]">
          <div
            data-hero="panel"
            className="animate-floaty relative rounded-2xl ring-glow [transform-style:preserve-3d]"
          >
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-panel">
              {/* window bar */}
              <div className="flex items-center gap-2 border-b border-white/8 bg-ink-soft/80 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                <span className="ml-3 text-xs font-medium text-haze">project_final_v4.mp4</span>
                <span className="ml-auto rounded-full bg-cyan/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-cyan-bright">
                  rendering
                </span>
              </div>
              <div className="relative">
                <img
                  src={heroImg}
                  alt="An editor color grading a video on a multi-track timeline"
                  className="h-auto w-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(5,7,14,0.55),transparent_45%)]" />
                {/* play button */}
                <button
                  aria-label="Play reel"
                  className="group absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full grad-bg shadow-[0_10px_40px_-8px_rgba(193,46,255,0.7)] transition-transform duration-300 hover:scale-110"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="#05070e" className="ml-1">
                    <path d="M6 4l14 8-14 8z" />
                  </svg>
                </button>
              </div>
              {/* fake timeline */}
              <div className="space-y-1.5 bg-ink-soft/90 px-4 py-3.5">
                {[
                  ['w-[82%]', 'grad-bg'],
                  ['w-[58%]', 'bg-cyan/40'],
                  ['w-[71%]', 'bg-magenta/40'],
                ].map(([w, c], i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-[9px] uppercase tracking-wider text-haze/70">V{i + 1}</span>
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/5">
                      <div className={`h-full rounded-full ${w} ${c}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* floating chips */}
            <div className="absolute -left-5 top-16 hidden rounded-2xl glass px-4 py-3 sm:block">
              <p className="text-xs text-haze">Hook retention</p>
              <p className="font-display text-xl font-extrabold text-white">+38%</p>
            </div>
            <div className="absolute -right-4 bottom-20 hidden rounded-2xl glass px-4 py-3 lg:block">
              <p className="text-xs text-haze">Delivered</p>
              <p className="font-display text-xl font-extrabold grad-text">on time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
