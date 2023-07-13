import { useEffect, useState } from 'react'
import { getPodcastById } from '../services/podcastService'
import { getHoursDiff } from '../utils/getDifHours'
// import { episodes, ACTIONS } from '../utils/constants'
import { ACTIONS } from '../utils/constants'
import { useLoadingContextDispatch } from './useLoadingContexDispatch'

const useGetPodcastById = (id) => {
  const [podcastById, setPodcastById] = useState([])
  const dispatch = useLoadingContextDispatch()

  useEffect(() => {
    dispatch({ type: ACTIONS.SET_LOADING, payload: true })
    const storedPodcastsId = localStorage.getItem(`Podcast-${id}`)
    const storedTimestampId = localStorage.getItem(`Podcast-${id}-Timestamp`)

    if (storedPodcastsId && storedTimestampId) {
      const parsedPodcasts = JSON.parse(storedPodcastsId)
      const timestamp = new Date(storedTimestampId)

      const currentTimestamp = new Date()
      const hoursDiff = getHoursDiff(timestamp, currentTimestamp)

      if (hoursDiff < 24) {
        setPodcastById(parsedPodcasts)

        // Añado un setTimeout para que se vea el indicador de carga del componente header
        setTimeout(() => {
          dispatch({ type: ACTIONS.SET_LOADING, payload: false })
        }, '300')
        return
      }
    }

    getPodcastById(id)
      .then(data => {
        setPodcastById(data)
        localStorage.setItem(`Podcast-${id}`, JSON.stringify(data))
        localStorage.setItem(`Podcast-${id}-Timestamp`, new Date())
      })
      .catch(error => {
        console.log(`Error getting podcasts: ${error}`)
      })
      .finally(() => dispatch({ type: ACTIONS.SET_LOADING, payload: false }))
  }, [id, dispatch])

  return podcastById
}

export default useGetPodcastById
