import { URL_PODCAST_ALL, URL_PODCAST_BY_ID } from '../utils/constants'
import XMLParser from 'react-xml-parser'

export const getPodcastById = async podcastId => {
  return fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(URL_PODCAST_BY_ID + podcastId)}`)
    .then(response => {
      if (response.ok) return response.json()
      throw new Error('Network response was not ok.')
    })
    .then(data => {
      const parsedData = JSON.parse(data.contents)
      const podcastByIdData = parsedData.results[0]
      const podcast = {
        id: podcastByIdData?.trackId,
        collectionId: podcastByIdData?.collectionId,
        img: podcastByIdData.artworkUrl600,
        name: podcastByIdData?.trackName,
        artist: podcastByIdData?.artistName,
        episodesUrl: podcastByIdData?.feedUrl,
        count: data.resultCount
      }
      return podcast
    })
}

export const getEpisodes = async (url) => {
  try {
    const response = await fetch(url)
    const xmlData = await response.text()
    const xml = new XMLParser().parseFromString(xmlData)
    const rootElement = xml.getElementsByTagName('rss')[0]

    if (rootElement && rootElement.name === 'rss') {
      const items = xml.getElementsByTagName('item')
      const episodes = items.map((item) => ({
        id: item.getElementsByTagName('guid')[0]?.value,
        title: item.getElementsByTagName('title')[0]?.value,
        duration: item.getElementsByTagName('itunes:duration')[0]?.value,
        date: item.getElementsByTagName('pubDate')[0]?.value,
        description: item.getElementsByTagName('description')[0]?.value,
        img: item.getElementsByTagName('itunes:image')[0]?.value,
        url: item.getElementsByTagName('enclosure')[0]?.attributes.url
      }))
      return episodes
    }
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
