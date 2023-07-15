import React, { useEffect, useState } from 'react'
import styles from './podcastPage.module.css'
import { useParams, useNavigate } from 'react-router-dom'
import useGetAllPodcast from '../../hook/useGetAllPodcast'
import useGetPodcastById from '../../hook/useGetPodcastById'
import useGetEpisode from '../../hook/useGetEpisode'
import DescriptionCard from '../../components/DescriptionCard'
import Table from '../../components/Table'

const PodcastPage = () => {
  const { podcastId } = useParams()
  const podcasts = useGetAllPodcast()
  const podcastById = useGetPodcastById(podcastId)
  const [singlePodcast, setSinglePodcast] = useState(null)
  const navigate = useNavigate()

  const episodes = useGetEpisode(podcastById?.episodesUrl, podcastById?.name)

  useEffect(() => {
    const foundPodcast = podcasts.find(podcast => podcast.id === podcastId)
    setSinglePodcast(foundPodcast)
  }, [podcastId, podcasts])

  const handleEpisode = (episodeId) => {
    navigate(`/podcast/${podcastId}/episode/${episodeId}`)
  }

  return (
    <main className={styles.container}>
      <DescriptionCard podcast={singlePodcast} />
      <section className={styles.containerEpisodes}>
        {episodes.length === 0 && <h3>...loading</h3>}
        {episodes.length > 0 && (
          <>
            <div className={styles.length}>
              <h3 className={styles.titleEpisode}>Episodes:</h3>
              <h3>{episodes?.length}</h3>
            </div>
            <div className={styles.tableContainer}>
              <Table handleEpisode={handleEpisode} episodes={episodes} />
            </div>
          </>
        )}
      </section>
    </main>
  )
}

export default PodcastPage
