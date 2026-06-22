import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Reveals any element carrying the `.reveal` class as it scrolls into view.
 * Honors prefers-reduced-motion (the class is reset by CSS in that case).
 */
export function useReveal() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>('.reveal')
      items.forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 86%',
            toggleActions: 'play none none none',
          },
        })
      })
    })

    // Recalculate once fonts/images settle.
    const t = setTimeout(() => ScrollTrigger.refresh(), 400)
    return () => {
      clearTimeout(t)
      ctx.revert()
    }
  }, [])
}
