import React, { useEffect, useState } from 'react'
import DescriptionCard from '../../components/DescriptionCard'
import useGetAllPodcast from '../../hook/useGetAllPodcast'
import styles from './episode.module.css'
import { useParams } from 'react-router-dom'
import EpisodeInfo from '../../components/EpisodeInfo'
import Divider from '../../components/Divider'
import EpisodePlayer from '../../components/EpisodePlayer'

// Directamente lo traigo desde una archivo de contantes
// pero seria igual el funcionamiento que en la PodcastPage
// Lo hago para terminar con ele ejercicio saltandome
// las restricciones de cors
import { episode } from '../../utils/constants'
// episode seria desde el hook de obtener por id que vendria toda la
// informacion para rellenar los componentes siguientes

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
