import { Link } from 'react-router-dom'
import { projects } from '../data/projects.js'
import ProjectCard from '../components/ProjectCard.jsx'
import styles from './Home.module.css'

export default function Home() {
  const featured = projects.find(p => p.featured)
  const recent = projects.filter(p => !p.featured).slice(0, 2)

  return (
    <div className={`${styles.page} page-enter`}>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroInner}>
          <p className={styles.heroLabel}>Software Developer · Kathmandu, Nepal</p>
          <h1 className={styles.heroName}>
            Building things<br />
            with <em>code &amp; curiosity</em>
          </h1>
          <p className={styles.heroDesc}>
            Computer science student at Islington College, passionate about full-stack
            development, Java systems, and turning coursework into production-ready software.
          </p>
          <div className={styles.heroCtas}>
            <Link to="/projects" className={styles.btnPrimary}>View my work</Link>
            <Link to="/contact" className={styles.btnGhost}>Get in touch</Link>
          </div>
        </div>
        <div className={styles.heroScroll}>
          <div className={styles.scrollLine} />
          Scroll to explore
        </div>
      </section>

      {/* Featured project */}
      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionLabel}>Featured project</p>
          <Link to="/projects" className={styles.seeAll}>See all work →</Link>
        </div>
        <div className={styles.featuredGrid}>
          <ProjectCard project={featured} featured />
        </div>
      </section>

      <div className={styles.divider} />

      {/* Recent projects */}
      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionLabel}>Recent work</p>
          <Link to="/projects" className={styles.seeAll}>View all →</Link>
        </div>
        <div className={styles.recentGrid}>
          {recent.map(p => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>

      <div className={styles.divider} />

      {/* CTA strip */}
      <section className={styles.cta}>
        <p className={styles.ctaLabel}>Let's connect</p>
        <h2 className={styles.ctaTitle}>Open to internships &amp; collaborations</h2>
        <Link to="/contact" className={styles.btnPrimary}>Say hello →</Link>
      </section>

    </div>
  )
}
