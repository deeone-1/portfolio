import { useEffect, useState } from 'react'
import Preloader from './components/Preloader'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Marquee from './components/Marquee'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Services from './sections/Services'
import Contact from './sections/Contact'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1400)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <>
      <Preloader show={loading} />
      <Cursor />

      <div className="relative min-h-screen overflow-x-hidden bg-ink-950">
        {/* ambient background */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-grid opacity-[0.35]" />
          <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[140px]" />
          <div className="absolute bottom-0 right-0 h-[420px] w-[520px] rounded-full bg-cyan-500/10 blur-[140px]" />
        </div>

        <Navbar />

        <main>
          <Hero />
          <Marquee />
          <About />
          <Skills />
          <Projects />
          <Services />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  )
}