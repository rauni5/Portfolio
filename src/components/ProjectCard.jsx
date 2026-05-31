import { Link } from 'react-router-dom'
import styles from './ProjectCard.module.css'

export default function ProjectCard({ project, featured = false }) {
  return (
    <div className={`${styles.card} ${featured ? styles.featured : ''}`}>
      {featured && (
        <div className={styles.featuredLeft}>
          <p className={styles.num}>{project.num} — Featured</p>
          <span className={styles.badge}>Production</span>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.desc}>{project.desc}</p>
          <div className={styles.tags}>
            {project.tags.map(tag => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
          <div className={styles.actions}>
            <Link to={`/projects/${project.id}`} className={styles.internalLink}>
              Case study →
            </Link>
            <a href={project.github} target="_blank" rel="noreferrer" className={styles.externalLink}>
              GitHub ↗
            </a>
          </div>
        </div>
      )}

      {featured && (
        <div className={styles.featuredRight}>
          <p className={styles.groupLabel}>Key features</p>
          <ul className={styles.featureList}>
            {project.features.map(f => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
      )}

      {!featured && (
        <>
          <p className={styles.num}>{project.num}</p>
          <p className={styles.type}>{project.type}</p>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.desc}>{project.desc}</p>
          <div className={styles.tags}>
            {project.tags.map(tag => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
          <div className={styles.actions}>
            <Link to={`/projects/${project.id}`} className={styles.internalLink}>
              Case study →
            </Link>
            <a href={project.github} target="_blank" rel="noreferrer" className={styles.externalLink}>
              GitHub ↗
            </a>
          </div>
        </>
      )}
    </div>
  )
}
