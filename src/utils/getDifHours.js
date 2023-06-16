export const getHoursDiff = (date1, date2) => {
  const diffInMilliseconds = Math.abs(date2 - date1)
  const hours = diffInMilliseconds / (1000 * 60 * 60)
  return hours
}
