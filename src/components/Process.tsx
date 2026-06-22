const steps = [
  {
    k: 'Brief',
    t: 'Tell us about the project',
    d: 'A short five-minute form gets us the goal, the footage, and the deadline. No drawn-out discovery calls before we can start.',
  },
  {
    k: 'Build',
    t: 'We cut the first version',
    d: 'You usually see a first edit within a few days. Real frames, real pacing, not a mood board you have to imagine.',
  },
  {
    k: 'Refine',
    t: 'You react, we sharpen',
    d: 'Notes go in, the cut gets tighter. We keep what works and kill what drags until the piece earns its watch time.',
  },
  {
    k: 'Ship',
    t: 'Deliver and track',
    d: 'Final files sized for every platform, then we watch how they perform so the next batch hits harder.',
  },
]

export default function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-bright">
              How it works
            </p>
            <h2 className="font-display mt-4 text-4xl font-black leading-[1.02] tracking-[-0.03em] text-white sm:text-5xl">
              Simple to start.
              <br className="hidden sm:block" /> Built to keep going.
            </h2>
          </div>
          <p className="text-lg text-haze lg:pb-2">
            Most teams overthink the kickoff and underdeliver on the cut. We flip
            it. Getting started takes minutes, and the work speaks before we ever
            send an invoice.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/8 bg-white/8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={s.k}
              className="reveal group relative bg-ink-soft p-7 transition-colors duration-500 hover:bg-panel"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <span className="font-display text-5xl font-black text-transparent [-webkit-text-stroke:1px_rgba(138,160,198,0.35)] transition-all duration-500 group-hover:[-webkit-text-stroke:1px_rgba(92,216,255,0.8)]">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-bright">
                {s.k}
              </p>
              <h3 className="font-display mt-2 text-xl font-extrabold tracking-[-0.01em] text-white">
                {s.t}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-haze">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
