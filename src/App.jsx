import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [showSocial, setShowSocial] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'education', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

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

  useEffect(() => {
    let timeoutId
    const showTemporarySocial = () => {
      setShowSocial(true)
      timeoutId = setTimeout(() => setShowSocial(false), 8000)
    }

    showTemporarySocial()
    const intervalId = setInterval(showTemporarySocial, 60000)

    return () => {
      clearInterval(intervalId)
      clearTimeout(timeoutId)
    }
  }, [])

  const socialLinks = [
    {
      id: 'instagram',
      href: 'https://www.instagram.com/yagshy_ashyrov',
      src: '/instagram-1-svgrepo-com.svg',
      label: 'yagshy_ashyrov',
    },
    {
      id: 'linkedin',
      href: 'https://www.linkedin.com/in/yagshy-ashyrov-a39b92213/',
      src: '/linkedin-svgrepo-com.svg',
      label: 'Yagshy Ashyrov',
    },
    {
      id: 'github',
      href: 'https://github.com/yagshy-ash',
      src: '/github-svgrepo-com.svg',
      label: 'yagshy-ash',
    },
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>

      <div className="fixed bottom-10 left-5 z-50 flex flex-col gap-3">
        {socialLinks.map((item, index) => (
          <a
            key={item.id}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className={`flex items-center gap-2 rounded-full border border-gray-700 bg-slate-900/90 px-4 py-3 text-sm text-gray-100 shadow-xl transition-all duration-500 ${
              showSocial ? 'translate-x-0 opacity-100' : '-translate-x-40 opacity-0'
            }`}
            style={{ transitionDelay: `${index * 300}ms` }}
          >
            <img src={item.src} alt={item.label} className="h-6 w-6" />
            <span>{item.label}</span>
          </a>
        ))}
      </div>

      <footer className="border-t border-gray-800 py-8 text-center text-gray-500">
        <p>© 2026 Yagshygeldi Ashyrov</p>
      </footer>
    </div>
  )
}

export default App
