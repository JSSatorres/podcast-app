import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styles from './podcastPage.module.css'
import useGetAllPodcast from '../../hook/useGetAllPodcast'
import DescriptionCard from '../../components/DescriptionCard'
import Table from '../../components/Table'
import { episodes } from '../../utils/constants'

const PodcastPage = () => {
  const [singlePodcast, setSinglePodcast] = useState(null)
  const { podcastId } = useParams()
  const podcasts = useGetAllPodcast()
  const navigate = useNavigate()

  useEffect(() => {
    const foundPodcast = podcasts.find(podcast => podcast.id === podcastId)
    setSinglePodcast(foundPodcast)
  }, [podcastId, podcasts])

  const handleEpisode = (episodeId) => {
    navigate(`/podcast/${podcastId}/episode/${episodeId}`)
  }

  return (
    <div className={styles.container}>
      <DescriptionCard podcast={singlePodcast} />
      <div className={styles.containerEpisodes}>
        <div className={styles.length}>
          <h3 className={styles.titleEpisode}>Episodes:</h3>
          <h3>{episodes.length}</h3>
        </div>
        <div className={styles.tableContainer}>
          <Table handleEpisode={handleEpisode} episodes={episodes} />
        </div>

      </div>
    </div>
  )
}

export default PodcastPage
