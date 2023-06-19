import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styles from './podcastPage.module.css'
import useGetAllPodcast from '../../hook/useGetAllPodcast'
import DescriptionCard from '../../components/DescriptionCard'
import Table from '../../components/Table'
import useGetPodcastById from '../../hook/useGetPodcastById'

const PodcastPage = () => {
  const [singlePodcast, setSinglePodcast] = useState(null)
  const { podcastId } = useParams()
  const navigate = useNavigate()
  const podcasts = useGetAllPodcast()

  // realmete del hook useGetPodcastById vendria un objeto
  // con la informacion del Podcast y sus episodios
  // al hacerlo asi es para continuar a pesa de poder
  // evitar la restriccion CORS
  const episodes = useGetPodcastById(podcastId)

  useEffect(() => {
    // busco el podcast en el los podcast que tengo guardados en
    // localStorage pero no seria necesario ya lo tendria en el hook
    // que tengo cmentado arriba

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
