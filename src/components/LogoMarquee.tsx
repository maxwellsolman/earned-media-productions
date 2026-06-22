import { partners } from '../data/partners'

export default function LogoMarquee() {
  const row = [...partners, ...partners]
  return (
    <section id="work" className="relative border-y border-white/5 bg-ink-soft/60 py-10 sm:py-12">
      <p className="mb-7 text-center text-xs font-semibold uppercase tracking-[0.28em] text-haze">
        Trusted on work for
      </p>
      <div className="marquee-wrap relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-5">
          {row.map((p, i) => (
            <div
              key={p.name + i}
              className="flex h-20 w-36 shrink-0 items-center justify-center rounded-2xl border border-white/8 bg-white/95 px-6 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)] transition-transform duration-300 hover:-translate-y-1"
            >
              <img
                src={p.src}
                alt={p.name}
                className="max-h-12 w-auto max-w-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
