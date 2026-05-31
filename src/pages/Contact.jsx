import { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <div className={`${styles.page} page-enter`}>

      <div className={styles.header}>
        <p className={styles.label}>Let's connect</p>
        <h1 className={styles.title}>Get in touch</h1>
      </div>
      <div className={styles.body}>

        <div className={styles.info}>
          <p className={styles.infoText}>
            Open to internships, collaborations, and interesting conversations
            about software. Feel free to reach out through any of the channels below
            or drop a message in the form.
          </p>
          <div className={styles.channels}>
            <a
              href="https://github.com/rauni5"
              target="_blank"
              rel="noreferrer"
              className={styles.channel}
            >
              <span className={styles.channelIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </span>
              <div>
                <p className={styles.channelLabel}>GitHub</p>
                <p className={styles.channelValue}>github.com/rauni5</p>
              </div>
              <span className={styles.channelArrow}>↗</span>
            </a>
            <a href="mailto:raunit06@gmail.com" className={styles.channel}>
              <span className={styles.channelIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </span>
              <div>
                <p className={styles.channelLabel}>Email</p>
                <p className={styles.channelValue}>raunit06@gmail.com</p>
              </div>
              <span className={styles.channelArrow}>↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
