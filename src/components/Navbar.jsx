import { NavLink, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar() {
  const location = useLocation()

  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={styles.logo}>
        Raunit <span>Giri</span>
      </NavLink>
      <ul className={styles.links}>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
          >
            Work
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
