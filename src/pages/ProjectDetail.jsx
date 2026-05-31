import { useParams, Link, Navigate } from 'react-router-dom'
import { projects } from '../data/projects.js'
import styles from './ProjectDetail.module.css'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find(p => p.id === id)

  if (!project) return <Navigate to="/projects" replace />

  const currentIndex = projects.findIndex(p => p.id === id)
  const next = projects[(currentIndex + 1) % projects.length]
  const prev = projects[(currentIndex - 1 + projects.length) % projects.length]

  return (
    <div className={`${styles.page} page-enter`}>

      {/* Back */}
      <div className={styles.back}>
        <Link to="/projects" className={styles.backLink}>← All projects</Link>
      </div>

      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerMeta}>
          <span className={styles.num}>{project.num}</span>
          <span className={styles.year}>{project.year}</span>
          <span className={styles.type}>{project.type}</span>
        </div>
        <h1 className={styles.title}>{project.title}</h1>
        <p className={styles.tagline}>{project.tagline}</p>
        <div className={styles.tags}>
          {project.tags.map(tag => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
        <div className={styles.headerActions}>
          <a href={project.github} target="_blank" rel="noreferrer" className={styles.btnGithub}>
            View on GitHub ↗
          </a>
        </div>
      </header>

      <div className={styles.divider} />

      {/* Body */}
      <div className={styles.body}>
        <div className={styles.bodyMain}>
          <p className={styles.bodyLabel}>Overview</p>
          {project.longDesc.split('\n\n').map((para, i) => (
            <p key={i} className={styles.bodyPara}>{para}</p>
          ))}
        </div>

        <aside className={styles.sidebar}>
          <div className={styles.sideSection}>
            <p className={styles.sideLabel}>Key features</p>
            <ul className={styles.featureList}>
              {project.features.map(f => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>

          <div className={styles.sideSection}>
            <p className={styles.sideLabel}>Stack</p>
            <div className={styles.sideTags}>
              {project.tags.map(tag => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
          </div>

          <div className={styles.sideSection}>
            <p className={styles.sideLabel}>Links</p>
            <a href={project.github} target="_blank" rel="noreferrer" className={styles.sideLink}>
              GitHub repository ↗
            </a>
          </div>
        </aside>
      </div>

      <div className={styles.divider} />

      {/* Navigation */}
      <nav className={styles.projectNav}>
        <Link to={`/projects/${prev.id}`} className={styles.navCard}>
          <span className={styles.navDir}>← Previous</span>
          <span className={styles.navTitle}>{prev.title}</span>
        </Link>
        <Link to={`/projects/${next.id}`} className={styles.navCard}>
          <span className={styles.navDir}>Next →</span>
          <span className={styles.navTitle}>{next.title}</span>
        </Link>
      </nav>

    </div>
  )
}
