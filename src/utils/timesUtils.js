export const getHoursDiff = (date1, date2) => {
  const diffInMilliseconds = Math.abs(date2 - date1)
  const hours = diffInMilliseconds / (1000 * 60 * 60)
  return hours
}

export const formatDate = (dateString) => {
  const date = new Date(dateString)

  const day = date.getDate().toString().padStart(2, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const year = date.getFullYear().toString()

  return `${day}/${month}/${year}`
}

export const formatDuration = (duration) => {
  if (!duration || typeof duration !== 'number') return duration

  if (typeof duration === 'string' && duration.includes(':')) return duration

  const hours = Math.floor(duration / 3600)
  const minutes = Math.floor((duration % 3600) / 60)
  const seconds = duration % 60

  const formattedDuration = `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`

  return formattedDuration
}
