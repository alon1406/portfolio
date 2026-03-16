function Projects() {
  const items = [
    { href: 'https://github.com/alon1406/CityScan', title: 'CityScan', body: 'Map-based platform where residents report urban hazards—potholes, broken streetlights, debris, flooding—on a live shared map.\n\nWhat you can do: search by address or click on the map to pick a spot; sign in to submit reports with type and description; view all hazards as markers; filter by category and status. AI (Gemini) checks for similar issues within 50m and blocks duplicates with a clear message.\n\nOne place for reports, one view for the city. Built with React, Node.js, MongoDB, and a Python + FastAPI AI service.', linkText: 'View on GitHub' },
    { href: 'https://city-scan-tawny.vercel.app/', title: 'CityScan Demo', body: 'Front-end demo — no backend or AI; data is saved in your browser only.\n\nUser: view the map, search by address, click to add a report, choose hazard type and description, see all reports as markers.\n\nAdmin: sign in as admin to see all reports in a list, update status (e.g. open → in progress → fixed), and manage hazards. Use the demo login buttons to try both User and Admin roles.', linkText: 'View Demo' },
    { href: 'https://todo-app-omega-snowy-46.vercel.app/', title: 'Todo App', body: 'A personal todo app you can use in the browser.\n\nWhat you can do: add new tasks (you cannot set a time or date in the past); search for tasks; mark tasks complete or incomplete; edit task text; delete tasks; see your full list in one place.\n\nTasks that pass their due time without being completed show as overdue.\n\nQuick to use — open the link and start adding tasks.', linkText: 'View Demo' },
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
