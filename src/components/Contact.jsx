function Contact() {
  return (
    <section className="panel contact" id="contact" data-reveal>
      <div className="panel__header">
        <p className="eyebrow">Contact</p>
        <h2>Reach out</h2>
      </div>
      <div className="contact-details">
        <p className="contact-detail-line">📞 <a href="tel:+972544352525" className="contact-link">+972-54-435-2525</a></p>
        <p className="contact-detail-line">✉️ <a href="mailto:alonet2468@gmail.com" className="contact-link">alonet2468@gmail.com</a></p>
      </div>
      <div className="contact-buttons">
        <a className="social-btn linkedin" href="https://www.linkedin.com/in/alonetos/" target="_blank" rel="noreferrer noopener">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="" /> LinkedIn
        </a>
        <a className="social-btn github" href="https://github.com/alon1406" target="_blank" rel="noreferrer noopener">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="" /> GitHub
        </a>
      </div>
    </section>
  )
}

export default Contact
