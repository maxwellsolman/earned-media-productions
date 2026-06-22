import { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import LogoMarquee from './components/LogoMarquee'
import Services from './components/Services'
import Capabilities from './components/Capabilities'
import Process from './components/Process'
import Stats from './components/Stats'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useReveal } from './lib/useReveal'
import { useLenis } from './lib/useLenis'

function ScrollProgress() {
  const [p, setP] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const max = h.scrollHeight - h.clientHeight
      setP(max > 0 ? (h.scrollTop / max) * 100 : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-0.5 bg-transparent">
      <div className="h-full grad-bg" style={{ width: `${p}%` }} />
    </div>
  )
}

export default function App() {
  useLenis()
  useReveal()

  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <LogoMarquee />
        <Services />
        <Capabilities />
        <Process />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
