'use client'
import { getCurrentWeek, parseRelativeTime, parseTime } from '#/lib/time'
import { useCiteStore } from '../../context'
import { generateSchedule } from '../../services/date'
import AppointmentForm from '../AppointmentForm'
import AppointmentList from '../AppointmentList'
import _ from './WeekMap.module.scss'

interface ConfigI {
  showDays: DayFormat
  activeHours: HourFormat
  startTime: RelativeTimeFormat
}

const CONFIG: ConfigI = {
  showDays: '7d',
  activeHours: '8h',
  startTime: '7am'
}


const WeekMap: FC = () => {
  const store = useCiteStore()
  const { unit: startHour } = parseRelativeTime(CONFIG.startTime)
  const { unit: maxHours } = parseTime(CONFIG.activeHours)
  const endHour = startHour + maxHours
  const hours = generateSchedule(new Date(), startHour, endHour)
  const days = getCurrentWeek(CONFIG.showDays)
  return (
    <>
      <div className={_.week}>
        <div className={_.hours}>
          <div className={_.head}>
            Hora
          </div>
          {hours.map((hour, index) => (
            <div key={index} className={_.hour}>
              {new Intl.DateTimeFormat('en-ES', {
                hour: 'numeric',
                minute: 'numeric'
              }).format(hour)}
            </div>
          ))}
        </div>
        {days.map((day, index) => (
          <AppointmentList
            key={index}
            day={day}
            endHour={endHour}
            startHour={startHour}
          />
        ))}
      </div>
      {store.cite && <AppointmentForm />}
    </>
  )
}

export default WeekMap
