'use client'
import { cx } from '#/lib/utils'
import { useState } from 'react'
import { useCiteStore } from '../../context'
import { getExactHour } from '../../services/date'
import _ from './Appointment.module.scss'

interface Props {
  hour: string
  reserved: boolean
}

type Status = 'reserved' | 'available' | 'in_progress' | 'finished'
const Appointment: FC<Props> = ({ hour, reserved }) => {
  const store = useCiteStore()

  const inProgress = hour === getExactHour()
  const finished = new Date(hour) < new Date()
  const [status, setStatus] = useState<Status>(
    inProgress ? 'in_progress' :
      reserved && !finished ? 'reserved' :
        finished ? 'finished' : 'available'
  )

  const reserve = () => {
    if (!finished && !reserved) {
      store.addCite({
        date: new Date(hour),
        description: 'Some description',
        patient: 'Some patient'
      })
      setStatus('reserved')
    }
  }

  return (
    <>
      <div
        onClick={reserve}
        className={cx(
          _.appointment,
          status === 'reserved' && _.reserved,
          status == 'in_progress' && _.now,
          status == 'finished' && _.finished
        )}
      >
        {status}
      </div>
    </>
  )
}

export default Appointment
