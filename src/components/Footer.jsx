import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copy}>
        © 2026 <span>Raunit Giri</span> — Kathmandu, Nepal
      </p>
      <p className={styles.copy}>Built with React + Vite</p>
    </footer>
  )
}
