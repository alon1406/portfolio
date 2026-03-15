const SKILL_ICONS = [
  { name: 'C', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg' },
  { name: 'Java', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg' },
  { name: 'Python', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' },
  { name: 'HTML', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg' },
  { name: 'CSS', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg' },
  { name: 'JavaScript', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' },
  { name: 'PostgreSQL', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg' },
  { name: 'Ubuntu', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/ubuntu/ubuntu-plain.svg' },
  { name: 'Git', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg' },
  { name: 'TypeScript', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg' },
  { name: 'Node.js', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg' },
  { name: 'React', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
]

function Skills() {
  return (
    <section className="panel" id="skills" data-reveal>
      <div className="panel__header">
        <p className="eyebrow">Skills</p>
        <h2>Technical toolkit</h2>
      </div>
      <div className="card">
        <div className="card__title">Core Skills</div>
        <p className="card__body">Python · Java · C · PostgreSQL · Ubuntu · Git · Data Structures · OOP · Algorithms · Operating Systems · HTML · CSS · JavaScript · TypeScript · Node.js · React</p>
      </div>
      <div className="skill-icon-row">
        {SKILL_ICONS.map(({ name, src }) => (
          <div key={name} className="skill-icon tilt" title={name}>
            <img src={src} alt={`${name} logo`} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
