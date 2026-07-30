import { motion, useReducedMotion } from 'framer-motion'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Experience from './components/Experience'
import Tech from './components/Tech'
import Education from './components/Education'
import Footer from './components/Footer'
import { pageFade } from './lib/motion'

export default function App() {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className="min-h-dvh bg-bg text-ink"
      {...(reduce
        ? {}
        : {
            initial: pageFade.initial,
            animate: pageFade.animate,
          })}
    >
      <Nav />
      <main>
        <Hero />
        <About />
        <Work />
        <Experience />
        <Tech />
        <Education />
      </main>
      <Footer />
    </motion.div>
  )
}
