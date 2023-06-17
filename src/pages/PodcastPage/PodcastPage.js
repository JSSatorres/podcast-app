import React, { useEffect, useState } from 'react'
// import useGetPodcastById from '../../hook/useGetPodcastById'
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
  // const podcast = useGetPodcastById(podcastId)

  return (
    <div className={styles.container}>
      <DescriptionCard podcast={singlePodcast} />
      <div className={styles.container_episodes}>
        <div className={styles.length}>
          <h3>Episodes:</h3>
          <h3>{episodes.length}</h3>
        </div>
        <Table handleEpisode={handleEpisode} episodes={episodes} />
      </div>
    </div>
  )
}

export default PodcastPage
