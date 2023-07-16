import React from 'react'
import { Link } from 'react-router-dom'
import styles from './noMatchPage.module.css'

const NoMatchPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404 Not Found</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to='/' className={styles.link}>Go to Podcast</Link>
    </div>
  )
}

export default NoMatchPage
