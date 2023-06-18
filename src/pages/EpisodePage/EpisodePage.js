import React, { useEffect, useState } from 'react'
import DescriptionCard from '../../components/DescriptionCard'
import useGetAllPodcast from '../../hook/useGetAllPodcast'
import styles from './episode.module.css'
import { useParams } from 'react-router-dom'
import EpisodeInfo from '../../components/EpisodeInfo'
import { episode } from '../../utils/constants'
import Divider from '../../components/Divider'
import EpisodePlayer from '../../components/EpisodePlayer'

const EpisodePage = () => {
  const podcasts = useGetAllPodcast()
  const [singlePodcast, setSinglePodcast] = useState(null)
  const { podcastId } = useParams()

  useEffect(() => {
    const foundPodcast = podcasts.find(podcast => podcast.id === podcastId)
    setSinglePodcast(foundPodcast)
  }, [podcastId, podcasts])

  return (
    <div className={styles.container}>
      <DescriptionCard podcast={singlePodcast} />
      <div className={styles.containerEpisodes}>
        <div className={styles.length}>
          <EpisodeInfo episode={episode} />
          <Divider />
          <EpisodePlayer episode={episode} />
        </div>
      </div>
    </div>
  )
}

export default EpisodePage
