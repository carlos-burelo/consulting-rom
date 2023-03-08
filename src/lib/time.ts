//ex: 1d
interface TimeFomatParams {
  unit: number // 1
  format: string // d
  value: number // 24 * 60 * 60 * 1000
}

export function parseTime (time: TimeFormat): TimeFomatParams {
  const [value, unit] = time.match(/(\d+)([dhm])/)!.slice(1)
  const multiplier = unit === 'd' ? 24 * 60 * 60 * 1000 : unit === 'h' ? 60 * 60 * 1000 : 60 * 1000
  return {
    unit: Number(value),
    format: unit,
    value: Number(value) * multiplier
  }
}


export function parseRelativeTime (time: RelativeTimeFormat): TimeFomatParams {
  // ex: 1am --> new Date().setHours(1, 0, 0, 0)
  // ex: 1pm --> new Date().setHours(13, 0, 0, 0)
  const [value, unit] = time.match(/(\d+)([ap]m)/)!.slice(1)
  const multiplier = unit === 'am' ? 1 : 12
  const fmt = new Date().setHours(Number(value) * multiplier, 0, 0, 0)
  return {
    unit: Number(value),
    format: unit,
    value: fmt
  }
}

export function getCurrentWeek (numberOfDays: DayFormat): Date[] {
  // retorna un array de fechas de los ultimos n dias a partir del dia actual
  // ejemplo: hoy es 07-03-2023, numberOfDays = 3d --> [07-03-2023, 08-03-2023, 09-03-2023]
  const { unit: rawDays } = parseTime(numberOfDays)
  const array = Array.from({ length: rawDays }, (_, i) => i)
  const days = array.map((day, index) => {
    const date = new Date()
    date.setDate(date.getDate() + index)
    return date
  })

  return days
}

export function parseHour (hour: string) {
  // ex: '8:00' --> [8, 0]
  const [h, m] = hour.split(':')
  return [Number(h), Number(m)]

}