import { projects } from '../data/projects.js'
import ProjectCard from '../components/ProjectCard.jsx'
import styles from './Projects.module.css'

export default function Projects() {
  const featured = projects.find(p => p.featured)
  const rest = projects.filter(p => !p.featured)

  return (
    <div className={`${styles.page} page-enter`}>
      <div className={styles.header}>
        <p className={styles.label}>All work</p>
        <h1 className={styles.title}>Projects</h1>
        <p className={styles.sub}>
          {projects.length} projects — from coursework to production
        </p>
      </div>

      <div className={styles.grid}>
        <ProjectCard project={featured} featured />
        {rest.map(p => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  )
}
