import React from 'react'
import { Link } from 'react-router-dom'
import styles from './header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <Link to='/' className={styles.link}>
          Podcaster
        </Link>
      </div>
      <div className={styles.line} />
    </header>
  )
}

export default Header
