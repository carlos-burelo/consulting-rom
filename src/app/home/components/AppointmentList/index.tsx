import { generateSchedule } from '../../services/date'
import Appointment from '../Appointment'
import _ from './AppointmentList.module.scss'

interface Props {
  day: Date
  endHour: number
  startHour: number
}


const AppointmentList: FC<Props> = ({ day, endHour, startHour }) => {

  const hours = generateSchedule(day, startHour, endHour)

  const parse = (date: Date) =>
    Intl.DateTimeFormat('es-ES', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit', year: '2-digit' }).format(date)

  const cites: string[] = [
    new Date(2023, 2, 5, 7, 0), // 5 de marzo de 2023 a las 7:00
    new Date(2023, 2, 5, 8, 0), // 5 de marzo de 2023 a las 8:00
    new Date(2023, 2, 6, 9, 0), // 6 de marzo de 2023 a las 9:00
    new Date(2023, 2, 6, 11, 0), // 6 de marzo de 2023 a las 11:00
    new Date(2023, 2, 7, 11, 0), // 7 de marzo de 2023 a las 11:00
  ].map(date => parse(date))

  const matches = hours.map(hour => {
    const time = parse(hour)
    const match = cites.map((cite) => time === cite).some(i => i == true)
    return { hour, pass: match }
  })


  return (
    <div className={_.list}>
      <div className={_.day}>
        {day.toLocaleString('default', { weekday: 'long' }) + ' ' + day.getDate()}
      </div>
      {matches.map(({ hour, pass }, index) => (
        <Appointment reserved={pass} hour={hour.toString()} key={index} />
      ))}
    </div>
  )
}

export default AppointmentList
