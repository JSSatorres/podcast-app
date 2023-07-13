import { useEffect, useState } from 'react'
import { getAllPodcasts } from '../services/podcastService'
import { getHoursDiff } from '../utils/getDifHours'
import { ACTIONS } from '../utils/constants'
import { useLoadingContextDispatch } from './useLoadingContexDispatch'

const useGetAllPodcast = () => {
  const [podcasts, setPodcasts] = useState([])
  const dispatch = useLoadingContextDispatch()

  useEffect(() => {
    dispatch({ type: ACTIONS.SET_LOADING, payload: true })

    const storedPodcasts = localStorage.getItem('Allpodcasts')
    const storedTimestamp = localStorage.getItem('AllPodcatsTimestamp')

    if (storedPodcasts && storedTimestamp) {
      const parsedPodcasts = JSON.parse(storedPodcasts)
      const timestamp = new Date(storedTimestamp)

      const currentTimestamp = new Date()
      const hoursDiff = getHoursDiff(timestamp, currentTimestamp)

      if (hoursDiff < 24) {
        dispatch({ type: ACTIONS.SET_LOADING, payload: false })
        setPodcasts(parsedPodcasts)
        return
      }
    }

    getAllPodcasts()
      .then(data => {
        setPodcasts(data)
        localStorage.setItem('Allpodcasts', JSON.stringify(data))
        localStorage.setItem('AllPodcatsTimestamp', new Date())
      })
      .catch(error => {
        console.log(`Error getting podcasts: ${error}`)
      })
      .finally(() => dispatch({ type: ACTIONS.SET_LOADING, payload: false }))
  }, [dispatch])

  return podcasts
}

export default useGetAllPodcast
