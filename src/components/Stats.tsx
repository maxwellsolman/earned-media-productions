import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const stats = [
  { value: 11, suffix: '+', label: 'Brands we have shipped work for' },
  { value: 3, suffix: ' day', label: 'Typical turnaround on a first cut' },
  { value: 5, suffix: ' min', label: 'All it takes to send us a brief' },
  { value: 24, suffix: '/7', label: 'A team that moves on your timeline' },
]

export default function Stats() {
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      const nums = gsap.utils.toArray<HTMLElement>('[data-count]')
      nums.forEach((el) => {
        const target = Number(el.dataset.count)
        if (reduce) {
          el.textContent = String(target)
          return
        }
        const obj = { v: 0 }
        gsap.to(obj, {
          v: target,
          duration: 1.6,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 88%' },
          onUpdate: () => {
            el.textContent = Math.round(obj.v).toString()
          },
        })
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={root} className="relative overflow-hidden py-20">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-60">
        <div className="absolute left-1/2 top-1/2 h-[40vh] w-[70vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(123,91,255,0.18),transparent)] blur-2xl" />
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-5 sm:px-8 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="reveal text-center">
            <p className="font-display text-5xl font-black tracking-[-0.03em] text-white sm:text-6xl">
              <span data-count={s.value}>{ScrollTrigger.isTouch ? s.value : 0}</span>
              <span className="grad-text">{s.suffix}</span>
            </p>
            <p className="mx-auto mt-3 max-w-[12rem] text-sm text-haze">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
