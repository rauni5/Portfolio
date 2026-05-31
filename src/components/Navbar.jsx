import { NavLink, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  // Close menu on route change
  useEffect(() => { setOpen(false) }, [location])

  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={styles.logo}>
        Raunit <span>Giri</span>
      </NavLink>

      <button
        className={`${styles.hamburger} ${open ? styles.open : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`${styles.links} ${open ? styles.open : ''}`}>
        {['Work:/projects', 'About:/about', 'Contact:/contact'].map(item => {
          const [label, path] = item.split(':')
          return (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
              >
                {label}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}