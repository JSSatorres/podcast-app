import { getHoursDiff, formatDate, formatDuration } from './timesUtils'

describe('getHoursDiff', () => {
  test('should return the correct number of hours', () => {
    const date1 = new Date('2023-01-01T12:00:00')
    const date2 = new Date('2023-01-01T15:30:00')
    const expectedHours = 3.5

    const result = getHoursDiff(date1, date2)

    expect(result).toBe(expectedHours)
  })
})

describe('formatDate', () => {
  test('should return the formatted date', () => {
    const dateString = '2023-01-01'
    const expectedFormattedDate = '01/01/2023'

    const result = formatDate(dateString)

    expect(result).toBe(expectedFormattedDate)
  })
})

describe('formatDuration', () => {
  test('should return the formatted duration when given seconds', () => {
    const duration = 3665
    const expectedFormattedDuration = '01:01:05'

    const result = formatDuration(duration)

    expect(result).toBe(expectedFormattedDuration)
  })

  test('should return the duration as is if it includes ":"', () => {
    const duration = '01:01:05'

    const result = formatDuration(duration)

    expect(result).toBe(duration)
  })
})
