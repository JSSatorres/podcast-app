import React from 'react'
import { Link } from 'react-router-dom'
import styles from './header.module.css'
import { useLoadingContextState } from '../../hook/useLoadingContextState'

const Header = () => {
  const state = useLoadingContextState()

  return (
    <header className={styles.header}>
      <div className={styles.containerElements}>
        <div>
          <Link to='/' className={styles.link}>
            Podcaster
          </Link>
        </div>
        {state.isLoading && <div data-testid='loading-circle' className={styles.circle} />}
      </div>
      <div className={styles.line} />
    </header>
  )
}

export default Header
