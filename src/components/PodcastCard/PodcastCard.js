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
      <div className={styles.card_image}>
        <img
          src={podcast?.image}
          alt={podcast?.name}
          onClick={() => handleclick(podcast)}
          className={styles.img_card}
        />
      </div>
      <div className={styles.card_description} onClick={() => handleclick(podcast)}>
        <h2 className={styles.card_name}>{podcast?.name}</h2>
        <p className={styles.card_author}>Author: {podcast?.author}</p>
      </div>
    </div>

  )
}

export default PodcastList
