import React from 'react'
import { Link } from 'react-router-dom'
import styles from './header.module.css'
import { useLoadingContext } from '../../hook/useLoadingContext'

const Header = () => {
  const { isLoading } = useLoadingContext()

  return (
    <header className={styles.header}>
      <div className={styles.containerElements}>
        <div>
          <Link to='/' className={styles.link}>
            Podcaster
          </Link>
        </div>
        {isLoading && <div data-testid='loading-circle' className={styles.circle} />}
      </div>
      <div className={styles.line} />
    </header>
  )
}

export default Header
