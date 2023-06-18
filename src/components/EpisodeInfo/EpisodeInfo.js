import React from 'react'

import styles from './episodeInfo.module.css'

const EpisodeInfo = ({ episode }) => {
  return (
    <div>
      <h3>{episode.title}</h3>
      <p className={styles.textParragraph}>{episode.description}</p>

    </div>
  )
}

export default EpisodeInfo
