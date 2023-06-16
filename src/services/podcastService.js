export const getAllPodcasts = async () => {
  const url = 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'

  try {
    const response = await fetch(url)
    const data = await response.json()

    const podcasts = data.feed.entry.map(podcast => ({
      id: podcast?.id?.attributes?.['im:id'],
      name: podcast?.['im:name']?.label,
      category: podcast?.category?.attributes?.label,
      author: podcast?.['im:artist']?.label,
      img: podcast?.['im:image']?.[2]?.label,
      summary: podcast?.summary?.label
    }))

    return podcasts
  } catch (error) {
    console.log(`Error getting podcasts: ${error}`)
    throw error
  }
}
