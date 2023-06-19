import { URL_PODCAST_ALL, URL_PODCAST_BY_ID, CORS_ACCESS } from '../utils/constants'

export const getPodcastById = async (podcastId) => {
  try {
    const response = await fetch(`${CORS_ACCESS}${URL_PODCAST_BY_ID}${podcastId}`, {
      headers: {
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Authorization',
        'Access-Control-Allow-Origin': 'http://localhost:3000'
      }
    })
    const data = await response.json()
    const podcastD = data.results[0]
    const podcast = {
      id: podcastD?.trackId,
      name: podcastD?.trackName,
      artist: podcastD?.artistName,
      episodes: podcastD?.episodes
    }

    return podcast
  } catch (error) {
    console.log(`Error at fetching podcast: ${error}`)
    throw error
  }
}

export const getAllPodcasts = async () => {
  try {
    const response = await fetch(URL_PODCAST_ALL)
    const data = await response.json()

    const podcasts = data.feed.entry.map(podcast => ({
      id: podcast?.id?.attributes?.['im:id'],
      name: podcast?.['im:name']?.label,
      author: podcast?.['im:artist']?.label,
      image: podcast?.['im:image']?.[2]?.label,
      description: podcast?.summary?.label
    }))

    return podcasts
  } catch (error) {
    console.log(`Error getting podcasts: ${error}`)
    throw error
  }
}
