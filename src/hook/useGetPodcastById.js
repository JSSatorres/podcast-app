import { useEffect, useState } from 'react'
import { getPodcastById } from '../services/podcastService'
import { ACTIONS, KEY_LOCALSTORAGE } from '../utils/constants'
import { useLoadingContextDispatch } from './useLoadingContexDispatch'
import { getHoursDiff } from '../utils/timesUtils'

const useGetPodcastById = (id) => {
  const [podcastById, setPodcastById] = useState([])
  const dispatch = useLoadingContextDispatch()

  useEffect(() => {
    dispatch({ type: ACTIONS.SET_LOADING, payload: true })
    const storedPodcast = localStorage.getItem(`${KEY_LOCALSTORAGE.PODCAST}-${id}`)
    const storedTimestamp = localStorage.getItem(`${KEY_LOCALSTORAGE.PODCAST}-${id}-${KEY_LOCALSTORAGE.TIMESTAMP}`)

    if (storedPodcast && storedTimestamp) {
      const parsedPodcasts = JSON.parse(storedPodcast)
      const timestamp = new Date(storedTimestamp)

      const currentTimestamp = new Date()
      const hoursDiff = getHoursDiff(timestamp, currentTimestamp)

      if (hoursDiff < 24) {
        setPodcastById(parsedPodcasts)
        setTimeout(() => {
          dispatch({ type: ACTIONS.SET_LOADING, payload: false })
        }, 300)
        return
      }
    }
    getPodcastById(id)
      .then(data => {
        setPodcastById(data)
        localStorage.setItem(`${KEY_LOCALSTORAGE.PODCAST}-${id}`, JSON.stringify(data))
        localStorage.setItem(`${KEY_LOCALSTORAGE.PODCAST}-${id}-${KEY_LOCALSTORAGE.TIMESTAMP}`, new Date())
      })
      .catch(error => {
        console.log(`Error getting podcasts: ${error}`)
      })
      .finally(() => dispatch({ type: ACTIONS.SET_LOADING, payload: false }))
  }, [id, dispatch])

  return podcastById
}

export default useGetPodcastById
