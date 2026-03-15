import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Education from './components/Education.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Skills from './components/Skills.jsx'
import Languages from './components/Languages.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

const THEME_KEY = 'portfolio-theme'

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem(THEME_KEY) || 'dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem(THEME_KEY, theme)
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  useEffect(() => {
    const nav = document.getElementById('nav')
    const navToggle = document.getElementById('navToggle')
    if (nav && navToggle) {
      navToggle.addEventListener('click', () => nav.classList.toggle('open'))
      nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => nav.classList.remove('open'))
      })
    }
  }, [])

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href')?.slice(1)
        if (!targetId) return
        const target = document.getElementById(targetId)
        if (!target) return
        e.preventDefault()
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    })
  }, [])

  useEffect(() => {
    const revealItems = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.18 }
    )
    revealItems.forEach((el) => observer.observe(el))
  }, [])

  useEffect(() => {
    document.querySelectorAll('.tilt').forEach((item) => {
      item.addEventListener('mousemove', (e) => {
        const rect = item.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const rotateX = ((y / rect.height) - 0.5) * 6
        const rotateY = ((x / rect.width) - 0.5) * -6
        item.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`
      })
      item.addEventListener('mouseleave', () => { item.style.transform = '' })
    })
  }, [])

  useEffect(() => {
    const hero = document.querySelector('.hero')
    if (!hero) return
    const onMove = (e) => {
      const rect = hero.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      hero.style.transform = `perspective(1200px) rotateX(${y * -4}deg) rotateY(${x * 4}deg)`
    }
    hero.addEventListener('mousemove', onMove)
    hero.addEventListener('mouseleave', () => { hero.style.transform = '' })
    return () => {
      hero.removeEventListener('mousemove', onMove)
    }
  }, [])

  useEffect(() => {
    const progressBar = document.getElementById('progressBar')
    const toTop = document.getElementById('toTop')
    const update = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const width = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      if (progressBar) progressBar.style.width = `${width}%`
      if (toTop) toTop.classList.toggle('show', scrollTop > 260)
    }
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    update()
    if (toTop) toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }))
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <>
      <div className="progress-bar" id="progressBar" />
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Education />
        <Projects />
        <Experience />
        <Skills />
        <Languages />
        <Contact />
      </main>
      <Footer />
      <button className="to-top" id="toTop" aria-label="Back to top">↑</button>
    </>
  )
}

export default App
