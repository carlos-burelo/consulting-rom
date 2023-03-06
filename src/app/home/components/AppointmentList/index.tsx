import { parseHour } from '#/lib/time'
import Appointment from '../Appointment'
import _ from './AppointmentList.module.scss'

interface Props {
  day: Date
  hours: string[]
}


const AppointmentList: FC<Props> = ({ day, hours }) => {

  const hoursSlots = hours.map((hour, index) => {
    const [hourRaw, minuteRaw] = parseHour(hour)
    return new Date(
      day.getFullYear(),
      day.getMonth(),
      day.getDate(),
      hourRaw,
      minuteRaw,
      0
    )
  })

  return (
    <div className={_.list}>
      <div className={_.day}>{day.toLocaleString('default', { weekday: 'short' })}</div>
      {hoursSlots.map((hour, index) => (
        <Appointment key={index} />
      ))}
    </div>
  )
}

export default AppointmentList
