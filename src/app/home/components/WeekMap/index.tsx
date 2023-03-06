import { getCurrentWeek } from '#/lib/time'
import Appointment from '../Appointment'
import AppointmentList from '../AppointmentList'
import _ from './WeekMap.module.scss'

const WeekMap: FC = () => {
  const days = getCurrentWeek()
  const hoursRaw = [
    '8:00',
    '8:30',
    '9:00',
    '9:30',
    '10:00',
    '10:30',
    '11:00',
  ]

  return (
    <div className={_.week}>
      <div className={_.hours}>
        <div className={_.head}>
          Hora
        </div>
        {hoursRaw.map((day, index) => (
          <div key={index} className={_.hour}>
            {day}
          </div>
        ))}
      </div>
      {days.map((day, index) => (
        <AppointmentList key={index} hours={hoursRaw} day={day} />
      ))}
    </div>
  )
}

export default WeekMap
