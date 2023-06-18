import { useEffect, useState } from 'react'
import { getAllPodcasts } from '../services/podcastService'
import { getHoursDiff } from '../utils/getDifHours'
import { useLoadingContext } from './useLoadingContext'

const useGetAllPodcast = () => {
  const [podcasts, setPodcasts] = useState([])
  const { setStateLoading } = useLoadingContext()

  useEffect(() => {
    setStateLoading(true)
    const storedPodcasts = localStorage.getItem('podcasts')
    const storedTimestamp = localStorage.getItem('timestamp')

    if (storedPodcasts && storedTimestamp) {
      const parsedPodcasts = JSON.parse(storedPodcasts)
      const timestamp = new Date(storedTimestamp)

      const currentTimestamp = new Date()
      const hoursDiff = getHoursDiff(timestamp, currentTimestamp)

      if (hoursDiff < 24) {
        setTimeout(() => {
          setStateLoading(false)
          setPodcasts(parsedPodcasts)
        }, 500)

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
      .finally(() => setStateLoading(false))
  }, [setStateLoading])

  return podcasts
}

export default useGetAllPodcast
