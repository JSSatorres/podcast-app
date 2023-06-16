import React from 'react'
import styles from './podcastList.module.css'
import PodcastCard from '../PodcastCard/PodcastCard'
import usePodcasts from '../../hook/useGetAllPodcast'

const PodcastList = () => {
  const podcasts = usePodcasts()
  return (
    <div className={styles.container}>
      {podcasts && podcasts.map(podcast => (
        <PodcastCard podcast={podcast} key={podcast.id} />
      ))}
    </div>
  )
}

export default PodcastList
