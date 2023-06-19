import { useEffect, useState } from 'react'
import { getAllPodcasts } from '../services/podcastService'
import { getHoursDiff } from '../utils/getDifHours'
import { useLoadingContext } from './useLoadingContext'
import { ACTIONS } from '../utils/constants'

const useGetAllPodcast = () => {
  const [podcasts, setPodcasts] = useState([])
  const { dispatch } = useLoadingContext()

  useEffect(() => {
    // setStateLoading(true)

    dispatch({ type: ACTIONS.SET_LOADING, payload: true })
    const storedPodcasts = localStorage.getItem('podcasts')
    const storedTimestamp = localStorage.getItem('timestamp')

    if (storedPodcasts && storedTimestamp) {
      const parsedPodcasts = JSON.parse(storedPodcasts)
      const timestamp = new Date(storedTimestamp)

      const currentTimestamp = new Date()
      const hoursDiff = getHoursDiff(timestamp, currentTimestamp)

      if (hoursDiff < 24) {
        setTimeout(() => {
          dispatch({ type: ACTIONS.SET_LOADING, payload: false })
          // setStateLoading(false)
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
      .finally(() => dispatch({ type: ACTIONS.SET_LOADING, payload: false }))
      // .finally(() => setStateLoading(false))
  }, [dispatch])

  return podcasts
}

export default useGetAllPodcast
