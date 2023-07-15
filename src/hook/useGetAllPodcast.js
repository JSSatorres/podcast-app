import { useEffect, useState } from 'react'
import { getAllPodcasts } from '../services/podcastService'
import { getHoursDiff } from '../utils/timesUtils'
import { ACTIONS, KEY_LOCALSTORAGE } from '../utils/constants'
import { useLoadingContextDispatch } from './useLoadingContexDispatch'

const useGetAllPodcast = () => {
  const [podcasts, setPodcasts] = useState([])
  const dispatch = useLoadingContextDispatch()

  useEffect(() => {
    dispatch({ type: ACTIONS.SET_LOADING, payload: true })
    const storedPodcasts = localStorage.getItem(KEY_LOCALSTORAGE.AllPODCASTS)
    const storedTimestamp = localStorage.getItem(`${KEY_LOCALSTORAGE.AllPODCASTS}-${KEY_LOCALSTORAGE.TIMESTAMP}`)

    if (storedPodcasts && storedTimestamp) {
      const parsedPodcasts = JSON.parse(storedPodcasts)
      const timestamp = new Date(storedTimestamp)

      const currentTimestamp = new Date()
      const hoursDiff = getHoursDiff(timestamp, currentTimestamp)

      if (hoursDiff < 24) {
        setPodcasts(parsedPodcasts)
        setTimeout(() => {
          dispatch({ type: ACTIONS.SET_LOADING, payload: false })
        }, 300)
        return
      }
    }

    getAllPodcasts()
      .then(data => {
        setPodcasts(data)
        localStorage.setItem(KEY_LOCALSTORAGE.AllPODCASTS, JSON.stringify(data))
        localStorage.setItem(`${KEY_LOCALSTORAGE.AllPODCASTS}-${KEY_LOCALSTORAGE.TIMESTAMP}`, new Date())
      })
      .catch(error => {
        console.log(`Error getting podcasts: ${error}`)
      })
  }, [dispatch])
  console.log(podcasts)
  return podcasts
}

export default useGetAllPodcast
