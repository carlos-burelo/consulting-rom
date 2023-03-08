import WeekMap from '../WeekAppointments'
import _ from './Calendar.module.scss'

const Calendar: FC = () => {
  return (
    <div className={_.calendar}>
      <WeekMap />
    </div>
  )
}

export default Calendar
