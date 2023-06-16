import { useEffect, useState } from 'react'
import { getAllPodcasts } from '../services/podcastService'
import { getHoursDiff } from '../utils/getDifHours'

const usePodcasts = () => {
  const [podcasts, setPodcasts] = useState([])

  useEffect(() => {
    const storedPodcasts = localStorage.getItem('podcasts')
    const storedTimestamp = localStorage.getItem('timestamp')

    if (storedPodcasts && storedTimestamp) {
      const parsedPodcasts = JSON.parse(storedPodcasts)
      const timestamp = new Date(storedTimestamp)

      const currentTimestamp = new Date()
      const hoursDiff = getHoursDiff(timestamp, currentTimestamp)

      if (hoursDiff < 24) {
        setPodcasts(parsedPodcasts)
        return
      }
    }

    getAllPodcasts()
      .then(data => {
        setPodcasts(data)
        localStorage.setItem('podcasts', JSON.stringify(data))
        localStorage.setItem('timestamp', new Date())
      })
      .catch(error => {
        console.log(`Error getting podcasts: ${error}`)
      })
  }, [])

  return podcasts
}

export default usePodcasts
