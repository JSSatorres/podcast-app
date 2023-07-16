import React from 'react'
import styles from './episodeList.module.css'
import Table from '../Table'
import { useParams, useNavigate } from 'react-router-dom'
import useGetPodcastById from '../../hook/useGetPodcastById'
import useGetEpisode from '../../hook/useGetEpisode'

const EpisodeList = () => {
  const { podcastId } = useParams()
  const podcastById = useGetPodcastById(podcastId)
  const navigate = useNavigate()
  const episodes = useGetEpisode(podcastById?.episodesUrl, podcastById?.name)

  const handleEpisode = (episodeId) => {
    navigate(`/podcast/${podcastId}/episode/${episodeId}`)
  }

  return (
    <section className={styles.containerEpisodes}>
      {episodes && episodes.length > 0 && (
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
  )
}

export default EpisodeList
