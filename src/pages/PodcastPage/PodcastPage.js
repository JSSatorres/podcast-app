import React, { useEffect, useState } from 'react'
import styles from './podcastPage.module.css'
import { useParams, Outlet } from 'react-router-dom'
import useGetAllPodcast from '../../hook/useGetAllPodcast'
import DescriptionCard from '../../components/DescriptionCard'

const PodcastPage = () => {
  const { podcastId } = useParams()
  const podcasts = useGetAllPodcast()
  const [singlePodcast, setSinglePodcast] = useState([])

  useEffect(() => {
    const foundPodcast = podcasts.find(podcast => podcast.id === podcastId)
    setSinglePodcast(foundPodcast)
  }, [podcastId, podcasts])

  return (
    <main className={styles.container}>
      <DescriptionCard podcast={singlePodcast} />
      <Outlet />
    </main>
  )
}

export default PodcastPage
