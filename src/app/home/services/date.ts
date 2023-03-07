export function generateSchedule (day: Date, startHour: number, endHour: number) {
  const CONTEXT = new Date()
  const DATES: Date[] = []

  const YEAR = CONTEXT.getFullYear()
  const MONTH = CONTEXT.getMonth()
  const DAY = day.getDate()

  function generateHour (hour: number, minute: number) {
    return new Date(YEAR, MONTH, DAY, hour, minute)
  }

  for (let hour = startHour; hour <= endHour; hour++) {
    DATES.push(generateHour(hour, 0))
  }

  return DATES

}