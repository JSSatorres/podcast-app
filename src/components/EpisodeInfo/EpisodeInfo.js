import React from 'react'

import styles from './episodeInfo.module.css'

const EpisodeInfo = ({ episode }) => {
  const stripHtmlTags = (html) => {
    const tmp = document.createElement('div')
    tmp.innerHTML = html
    return tmp.textContent || tmp.innerText || ''
  }

  const strippedDescription = stripHtmlTags(episode?.description)

  return (
    <div>
      <h3>{episode?.title}</h3>
      <p className={styles.textParragraph}>{strippedDescription}</p>
    </div>
  )
}

export default EpisodeInfo
