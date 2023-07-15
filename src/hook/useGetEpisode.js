import { useEffect, useState } from 'react'
import { getEpisodes } from '../services/podcastService'
import { ACTIONS, KEY_LOCALSTORAGE } from '../utils/constants'
import { useLoadingContextDispatch } from './useLoadingContexDispatch'
import { getHoursDiff } from '../utils/timesUtils'

const useGetEpisode = (url, name) => {
  const [episode, setEpisode] = useState([])
  const dispatch = useLoadingContextDispatch()

  useEffect(() => {
    if (!name) return
    dispatch({ type: ACTIONS.SET_LOADING, payload: true })
    const storedEpisodes = localStorage.getItem(`${KEY_LOCALSTORAGE.EPISODES}-${name}`)
    const storedTimestamp = localStorage.getItem(`${KEY_LOCALSTORAGE.EPISODES}-${name}-${KEY_LOCALSTORAGE.TIMESTAMP}`)

    if (storedEpisodes && storedTimestamp) {
      const parsedPodcasts = JSON.parse(storedEpisodes)
      const timestamp = new Date(storedTimestamp)

      const currentTimestamp = new Date()
      const hoursDiff = getHoursDiff(timestamp, currentTimestamp)

      if (hoursDiff < 24) {
        setEpisode(parsedPodcasts)
        setTimeout(() => {
          dispatch({ type: ACTIONS.SET_LOADING, payload: false })
        }, 300)
        return
      }
    }

    getEpisodes(url)
      .then(data => {
        setEpisode(data)
        localStorage.setItem(`${KEY_LOCALSTORAGE.EPISODES}-${name}`, JSON.stringify(data))
        localStorage.setItem(`${KEY_LOCALSTORAGE.EPISODES}-${name}-${KEY_LOCALSTORAGE.TIMESTAMP}`, new Date())
      })
      .catch(error => {
        console.log(`Error getting episodes: ${error}`)
      })
      .finally(() => dispatch({ type: ACTIONS.SET_LOADING, payload: false }))
  }, [url, dispatch, name])

  return episode
}

export default useGetEpisode
