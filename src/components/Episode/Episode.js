import React, { useEffect, useState } from 'react'
import styles from './episode.module.css'
import { useParams } from 'react-router-dom'
import EpisodeInfo from '../EpisodeInfo'
import Divider from '../Divider'
import EpisodePlayer from '../EpisodePlayer'
import useGetPodcastById from '../../hook/useGetPodcastById'
import useGetEpisode from '../../hook/useGetEpisode'

const Episode = () => {
  const { podcastId, episodeId } = useParams()
  const podcastById = useGetPodcastById(podcastId)
  const [episode, setEpisode] = useState(null)
  const episodes = useGetEpisode(podcastById?.episodesUrl, podcastById?.name)

  useEffect(() => {
    let foundEpiosde
    if (episodes.length > 0) {
      foundEpiosde = episodes.find(episodeElemetn => episodeElemetn.id === episodeId)
      setEpisode(foundEpiosde)
    }
  }, [podcastId, episodeId, episodes])

  return (
    <section className={styles.containerEpisode}>
      <EpisodeInfo episode={episode} />
      <Divider />
      <EpisodePlayer episode={episode} />
    </section>
  )
}

export default Episode
