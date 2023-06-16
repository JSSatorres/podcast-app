import React, { useEffect, useState } from 'react'
import styles from './podcastList.module.css'
import PodcastCard from '../PodcastCard/PodcastCard'
import { getAllPodcasts } from '../../services/podcastService'

const PodcastList = () => {
  const [podcasts, setPodcasts] = useState([])
  console.log(podcasts)
  useEffect(() => {
    const getPodcasts = async () => {
      try {
        const fetchedPodcasts = await getAllPodcasts()
        setPodcasts(fetchedPodcasts)
      } catch (error) {
        console.log('Error fetching podcasts:', error)
      }
    }

    getPodcasts()
  }, [])

  return (
    <div className={styles.container}>
      {podcasts && podcasts.map(podcast => (
        <PodcastCard podcast={podcast} key={podcast.id} />
      ))}
    </div>
  )
}

export default PodcastList
