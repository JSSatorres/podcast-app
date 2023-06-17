import React, { useState } from 'react'
import styles from './podcastList.module.css'
import PodcastCard from '../PodcastCard/PodcastCard'
import usePodcasts from '../../hook/useGetAllPodcast'
import Search from '../Search/Search'

const PodcastList = () => {
  const [search, setSearch] = useState('')
  const podcasts = usePodcasts()

  const handleChange = (inputData) => {
    setSearch(inputData)
  }

  const filteredPodcasts = podcasts.filter((podcast) =>
    podcast.name.toLowerCase().includes(search.toLowerCase()) ||
    podcast.author.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      <Search handleChange={handleChange} />
      <div className={styles.container}>
        {podcasts && filteredPodcasts && filteredPodcasts.map(podcast => (
          <PodcastCard podcast={podcast} key={podcast.id} />
        ))}
      </div>
    </>
  )
}

export default PodcastList
