import { useEffect } from 'react'
import profileImage from '../assets/images/Gemini_Generated_Image_rdpjwdrdpjwdrdpj.png'

function Hero() {
  useEffect(() => {
    const el = document.getElementById('aiLine')
    if (!el) return
    const lines = [
      'Fast learner · Team player · Problem solver',
      'Self-learning · Responsible · Motivated',
      'Curious · Organized · Detail-oriented',
    ]
    el.textContent = lines[0]
    let i = 1
    const id = setInterval(() => {
      el.style.opacity = 0
      setTimeout(() => {
        el.textContent = lines[i]
        el.style.opacity = 1
        i = (i + 1) % lines.length
      }, 400)
    }, 3000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="hero" id="about" data-reveal>
      <div className="hero__content">
        <p className="eyebrow">Software Engineering Student</p>
        <h1>Hi, I'm Alon Etos</h1>
        <p className="lede">
          Software Engineering student at Afeka College, specializing in AI, graduating October 2027.
          I love learning new things and building software that helps people in the real world.
          Outside of studies I run, train at the gym, ride, travel, and follow football closely.
        </p>
        <p className="ai-line" id="aiLine" />
        <div className="hero__cta">
          <a className="btn primary" href="mailto:alonet2468@gmail.com">Email Me</a>
          <a className="btn cv" href="/cv.pdf" download="Alon-Etos-CV.pdf">Download CV</a>
        </div>
      </div>
      <div className="hero__visual">
        <div className="profile-card">
          <div className="profile-photo">
            <img src={profileImage} alt="Alon Etos profile photo" />
          </div>
          <div className="profile-body">
            <p className="profile-name">Alon Etos<span className="profile-info-inline">, 26</span></p>
            <p className="profile-location-line">Israel</p>
            <p className="profile-contact-line">📞 <a href="tel:+972544352525" className="contact-link">+972-54-435-2525</a></p>
            <p className="profile-contact-line">✉️ <a href="mailto:alonet2468@gmail.com" className="contact-link">alonet2468@gmail.com</a></p>
            <p className="profile-role">Software Engineering Student</p>
            <div className="profile-links">
              <a className="link-out" href="https://www.linkedin.com/in/alonetos/" aria-label="LinkedIn profile" target="_blank" rel="noreferrer noopener">LinkedIn</a>
              <a className="link-out" href="https://github.com/alon1406" aria-label="GitHub profile" target="_blank" rel="noreferrer noopener">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
