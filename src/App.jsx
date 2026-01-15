import { useState, useEffect } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import EmailSidebar from './components/EmailSidebar'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CodeBackground from './components/CodeBackground'
import CursorEffect from './components/CursorEffect'
import ScrollProgress from './components/ScrollProgress'
import BootAnimation from './components/BootAnimation'
import ServerStatus from './components/ServerStatus'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [bootComplete, setBootComplete] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact']
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="App">
      {!bootComplete && <BootAnimation onComplete={() => setBootComplete(true)} />}
      {bootComplete && (
        <>
          <CodeBackground />
          <CursorEffect />
          <ScrollProgress />
          <ServerStatus />
          <Sidebar activeSection={activeSection} />
          <EmailSidebar />
          <Header activeSection={activeSection} />
          <main>
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  )
}

export default App