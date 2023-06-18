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

    <div className={styles.card}>
      <div className={styles.cardImage}>
        <img
          src={podcast?.image}
          alt={podcast?.name}
          onClick={() => handleclick(podcast)}
          className={styles.imgCard}
        />
      </div>
      <div className={styles.cardDescription} onClick={() => handleclick(podcast)}>
        <h2 className={styles.cardName}>{podcast?.name}</h2>
        <p className={styles.cardAuthor}>Author: {podcast?.author}</p>
      </div>
    </div>

  )
}

export default PodcastList
