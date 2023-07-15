import React, { useEffect, useState } from 'react'
import DescriptionCard from '../../components/DescriptionCard'
import useGetAllPodcast from '../../hook/useGetAllPodcast'
import styles from './episode.module.css'
import { useParams } from 'react-router-dom'
import EpisodeInfo from '../../components/EpisodeInfo'
import Divider from '../../components/Divider'
import EpisodePlayer from '../../components/EpisodePlayer'

// import { episode } from '../../utils/constants'
import useGetPodcastById from '../../hook/useGetPodcastById'
import useGetEpisode from '../../hook/useGetEpisode'

const EpisodePage = () => {
  const { podcastId, episodeId } = useParams()
  const podcasts = useGetAllPodcast()
  const podcastById = useGetPodcastById(podcastId)
  const [singlePodcast, setSinglePodcast] = useState(null)
  const [episode, setEpisode] = useState(null)
  const episodes = useGetEpisode(podcastById?.episodesUrl, podcastById?.name)

  useEffect(() => {
    const foundPodcast = podcasts.find(podcast => podcast.id === podcastId)
    setSinglePodcast(foundPodcast)

    let foundEpiosde
    if (episodes.length > 0) {
      foundEpiosde = episodes.find(episodeElemetn => episodeElemetn.id === episodeId)
      setEpisode(foundEpiosde)
    }
  }, [podcastId, podcasts, episodeId, episodes])

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
