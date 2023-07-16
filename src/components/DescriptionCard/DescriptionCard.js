import React from 'react'
import styles from './descriptionCard.module.css'
import { useNavigate, useParams } from 'react-router-dom'
import Divider from '../Divider'

const DescriptionCard = ({ podcast }) => {
  const navigate = useNavigate()
  const { episodeId } = useParams()

  const handleclick = () => {
    if (episodeId) {
      navigate(-1)
    }
  }
  const style = {
    cursor: episodeId ? 'pointer' : 'auto'
  }
  return (

    <div className={styles.card}>
      <div className={styles.cardImage}>
        <img
          src={podcast?.image}
          alt={podcast?.name}
          onClick={() => handleclick()}
          style={style}
        />
      </div>
      <Divider />
      <div className={styles.cardDescription} onClick={() => handleclick(podcast)}>
        <h2 className={styles.cardName} style={style}>{podcast?.name} </h2>
        <p className={styles.cardAuthor} style={style}>by {podcast?.author}</p>
      </div>
      <Divider />
      <div className={styles.cardDescription}>
        <p className={styles.titleDescription}>Description:</p>
        <p className={styles.description}>{podcast?.description}</p>
      </div>
    </div>

  )
}

export default DescriptionCard
