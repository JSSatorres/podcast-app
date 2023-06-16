import React from 'react'
import styles from './podcastCard.module.css'
import { useNavigate } from 'react-router-dom'

const PodcastList = ({ podcast }) => {
  const navigate = useNavigate()

  const handleclick = (podcast) => {
    if (podcast) {
      navigate(`podcast/${podcast?.id}`)
    }
  }

  return (
    <button type='button' onClick={() => handleclick(podcast)}>
      <div className={styles['podcast-card']}>
        <div className={styles['podcast-image']}>
          <img src={podcast.image} alt={podcast.name} className={styles['podcast-image-inner']} />
        </div>
        <div className={styles['podcast-details']}>
          <h2 className={styles['podcast-name']}>{podcast.name}</h2>
          <p className={styles['podcast-author']}>Author: {podcast.author}</p>
        </div>
      </div>
    </button>
  )
}

export default PodcastList
