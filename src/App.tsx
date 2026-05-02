import './styles/index.css'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import ParticleBackground from './components/ParticleBackground'

import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

function App() {

  return (
    <>
      <ParticleBackground />
      <Sidebar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
