import { CONFIG } from '#/config'
import { parseTime, parseRelativeTime } from '#/lib/time'

// genera tabla de horarios
// ex:
/**
  {
    activeHours: '8h', // 8 hours per day
    activeDays: '6d', // 5 days per week (Monday to Saturday)
    minTimePerAppointment: '30m', // 30 minutes per appointment
    startHour: '5am', // 5am
  }
 */

// expected output:
/*
  {
    table: {
      rows: [
        '5:00',
        '5:30',
        '6:00',
        '6:30',
        '7:00',
        '7:30',
        '8:00',
        '8:30',
        '9:00',
        '9:30',
        '10:00',
        '10:30',
        '11:00',
        '11:30',
        '12:00',
        '12:30',
        '13:00',
      ],
      columns: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ]
    }
  }
*/

interface Table {
  rows: string[]
  columns: string[]
}

interface TableInterface {
  table: Table
}

export function generateTable (config: typeof CONFIG = CONFIG): TableInterface {
  const { unit: activeHours } = parseTime(config.activeHours)
  const { unit: activeDays } = parseTime(config.activeDays)
  const { unit: minTimePerAppointment } = parseTime(config.minTimePerAppointment)
  const { value: startHour } = parseRelativeTime(config.startHour)

  const rows = []
  const columns = []

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  for (let i = 0; i < activeDays; i++) {
    columns.push(days[i])
  }

  // calcula la cantidad de horas que hay entre el inicio con respecto a las horas activas ex: { startHour: '5am', activeHours: '8h' } --> 13
  // para iterar hasta las 13 horas
  const hours = new Date(startHour).getHours() + activeHours
  for (let i = new Date(startHour).getHours(); i < hours; i++) {
    for (let j = 0; j < 60; j += minTimePerAppointment) {
      const hour = i < 10 ? `0${i}` : i
      const minute = j < 10 ? `0${j}` : j
      rows.push(`${hour}:${minute}`)
    }
  }

  // add last hour
  const lastHour = new Date(startHour).getHours() + activeHours
  rows.push(`${lastHour}:00`)

  return {
    table: {
      rows,
      columns
    }
  }
}