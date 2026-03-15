import { useEffect } from 'react'
import profileImage from '../assets/images/Gemini_Generated_Image_rdpjwdrdpjwdrdpj.png'
import cvPdf from '../assets/documents/Alon_Etos_CV.pdf'

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
          Third year Software Engineering student at Afeka College, specializing in AI.
          I love solving problems and building software that helps people in the real world.
          A great example of this is CityScan, a platform I'm developing to help municipalities manage data and report hazards more easily.
          I've built a functional Full Stack demo using React and Node.js to show exactly how the system works, turning the initial idea into a simple and easy to use application.
        </p>
        <p className="ai-line" id="aiLine" />
        <div className="hero__cta">
          <a className="btn primary" href="mailto:alonet2468@gmail.com">Email Me</a>
          <a className="btn cv" href={cvPdf} download>Download CV</a>
        </div>
      </div>
      <div className="hero__visual">
        <div className="profile-card">
          <div className="profile-photo">
            <img src={profileImage} alt="Alon Etos profile photo" />
          </div>
          <div className="profile-body">
            <p className="profile-name">Alon Etos<span className="profile-info-inline">, 25</span></p>
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
