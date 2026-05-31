import { Link } from 'react-router-dom'
import styles from './About.module.css'

const skills = {
  Languages: ['Java', 'Python', 'JavaScript', 'HTML', 'CSS', 'SQL','C#'],
  'Frameworks & Tools': ['Spring Boot', 'React', 'Vite', 'Maven', 'Git', 'Eclipse', 'BlueJ'],
  Concepts: ['OOP', 'REST APIs', 'MVC', 'Responsive Design', 'File I/O','Documentation'],
}

const timeline = [
  { year: '2026', event: 'Cinosphere — Spring Boot migration + Docker deployment' },
  { year: '2026', event: 'React Chat UI — first React + Vite project' },
  { year: '2026', event: 'Python Billing System — Fundamentals coursework' },
  { year: '2025', event: 'Art Gallery Visitor System — Java OOP + Swing GUI' },
  { year: '2025', event: 'Multi-page Web App — HTML/CSS/JS coursework' },
  { year: '2024', event: 'Started BSc Computer Science at Islington College' },
]

export default function About() {
  return (
    <div className={`${styles.page} page-enter`}>

      <div className={styles.header}>
        <p className={styles.label}>Background</p>
        <h1 className={styles.title}>About me</h1>
      </div>

      <div className={styles.body}>

        {/* Left col */}
        <div className={styles.main}>
          <div className={styles.bio}>
            <p>
              I'm <strong>Raunit Giri</strong>, a Computing Hons student at{' '}
              <strong>Islington College, Kathmandu</strong>, building real projects across
              the full stack — from Python scripts and Java desktop apps to Spring Boot
              REST APIs and React interfaces.
            </p>
            <p>
              I like taking coursework seriously: writing clean code, thinking about
              architecture, and pushing projects toward production quality rather than
              just getting them to pass. Cinosphere is a good example — what started as
              a group submission became an independent exploration of Spring Boot
              migration, and REST API design.
            </p>
            <p>
              Currently deepening my skills in <strong>backend Java systems</strong>,
              modern frontend development with <strong>React</strong>, and{' '}
              <strong>DevOps fundamentals</strong> like containerisation and deployment.
            </p>
            <p>
              When I'm not coding, I'm usually reading about software architecture,
              exploring new frameworks, or contributing to projects that challenge me
              to learn something new.
            </p>
          </div>

          <div className={styles.cta}>
            <Link to="/contact" className={styles.btnPrimary}>Get in touch →</Link>
            <Link to="/projects" className={styles.btnGhost}>View my work</Link>
          </div>
        </div>

        {/* Right col */}
        <aside className={styles.aside}>

          <div className={styles.block}>
            <p className={styles.blockLabel}>Skills</p>
            {Object.entries(skills).map(([group, list]) => (
              <div key={group} className={styles.skillGroup}>
                <p className={styles.skillGroupName}>{group}</p>
                <div className={styles.chips}>
                  {list.map(s => (
                    <span key={s} className={styles.chip}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.block}>
            <p className={styles.blockLabel}>Timeline</p>
            <div className={styles.timeline}>
              {timeline.map((item, i) => (
                <div key={i} className={styles.timelineItem}>
                  <span className={styles.timelineYear}>{item.year}</span>
                  <span className={styles.timelineEvent}>{item.event}</span>
                </div>
              ))}
            </div>
          </div>

        </aside>
      </div>

    </div>
  )
}
