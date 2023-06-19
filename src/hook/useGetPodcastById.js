import { useEffect, useState } from 'react'
import { getPodcastById } from '../services/podcastService'
import { getHoursDiff } from '../utils/getDifHours'
import { episodes } from '../utils/constants'

const useGetPodcastById = (id) => {
  const [podcastById, setPodcastById] = useState([])

  useEffect(() => {
    const storedPodcastsId = localStorage.getItem(id)
    const storedTimestampId = localStorage.getItem(`${id}-timestamp`)

    if (storedPodcastsId && storedTimestampId) {
      const parsedPodcasts = JSON.parse(storedPodcastsId)
      const timestamp = new Date(storedTimestampId)

      const currentTimestamp = new Date()
      const hoursDiff = getHoursDiff(timestamp, currentTimestamp)

      if (hoursDiff < 24) {
        setPodcastById(parsedPodcasts)
        return
      }
    }

    getPodcastById(id)
      .then(data => {
        setPodcastById(data)
        localStorage.setItem(id, JSON.stringify(data))
        localStorage.setItem(`${id}-timestamp`, new Date())
      })
      .catch(error => {
        console.log(`Error getting podcasts: ${error}`)
        // aqui seteo los episodios para saltarme la restriccion
        // de CORS y pode continuar con la prueba
        setPodcastById(episodes)
      })
  }, [id])

  return podcastById
}

export default useGetPodcastById
