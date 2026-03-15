function Projects() {
  const items = [
    { href: 'https://github.com/alon1406/CityScan', title: 'CityScan', body: 'GIS-based platform for reporting and tracking urban hazards on a live map. Full stack: React, Node.js, MongoDB, AI (Gemini). This link opens the GitHub repository (source code).', linkText: 'View on GitHub' },
    { href: 'https://city-scan-tawny.vercel.app/', title: 'CityScan Demo', body: 'Live demo of CityScan: open the app in the browser and try the map and reporting flow. Hosted on Vercel (no backend required for demo).', linkText: 'View Demo' },
    { href: 'https://todo-app-omega-snowy-46.vercel.app/', title: 'Todo App', body: 'A todo application I built, deployed on Vercel. This link opens the running app so you can use it in the browser.', linkText: 'View Demo' },
    { href: 'https://github.com/alon1406/2048-Ubuntu', title: 'C course: 2048 – Ubuntu', body: 'Implementation of the 2048 game in C for Ubuntu as part of the C programming course.', linkText: 'View on GitHub' },
    { href: 'https://github.com/alon1406/OOP', title: 'OOP course: OOP – Java', body: 'Object-oriented programming project in Java, based on core OOP principles learned in the OOP course.', linkText: 'View on GitHub' },
    { href: 'https://github.com/alon1406/OOP_SQL', title: 'Database course: OOP with SQL', body: 'Extension of the OOP Java project by connecting it to a PostgreSQL database using SQL, developed as part of the Database course.', linkText: 'View on GitHub' },
  ]
  return (
    <section className="panel" id="projects" data-reveal>
      <div className="panel__header">
        <p className="eyebrow">Academic Projects</p>
        <h2>Selected work</h2>
      </div>
      <div className="projects-list">
        {items.map((item) => (
          <a key={item.href} className="project-card card" href={item.href} target="_blank" rel="noreferrer noopener">
            <div className="project-main">
              <h3 className="card__title">{item.title}</h3>
              <p className="card__body">{item.body}</p>
            </div>
            <span className="project-link">{item.linkText}</span>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Projects
