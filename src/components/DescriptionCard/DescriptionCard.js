import React from 'react'
import styles from './descriptionCard.module.css'
import { useNavigate, useParams } from 'react-router-dom'
import Divider from '../Divider'

const DescriptionCard = ({ podcast }) => {
  const navigate = useNavigate()
  const { episodeId } = useParams()

  const handleclick = (podcast) => {
    if (episodeId) {
      navigate(-1)
    }
  }
  const style = {
    cursor: episodeId ? 'pointer' : 'auto'
  }
  return (

    <div className={styles.card}>
      <div className={styles.card_image}>
        <img
          src={podcast?.image}
          alt={podcast?.name}
          onClick={() => handleclick(podcast)}
          style={style}
        />
      </div>
      <Divider />
      <div className={styles.card_description} onClick={() => handleclick(podcast)}>
        <h2 className={styles.card_name} style={style}>{podcast?.name} </h2>
        <p className={styles.card_author} style={style}>by {podcast?.author}</p>
      </div>
      <Divider />
      <div className={styles.card_description}>
        <p className={styles.title_description}>Description:</p>
        <p className={styles.description}>{podcast?.description}</p>
      </div>
    </div>

  )
}

export default DescriptionCard
