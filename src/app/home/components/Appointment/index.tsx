'use client'
import { cx } from '#/lib/utils'
import _ from './Appointment.module.scss'
import { useState } from 'react'

interface Props {
  hour: string
  reserved: boolean
}


const Appointment: FC<Props> = ({ hour, reserved }) => {
  const active = reserved && _.active
  const now =
    // redondea a la hora exacta (sin minutos)
    new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate(),
      new Date().getHours(),
      0,
    ).toString()
  const inProgress = hour === now ? _.now : ''

  return (
    <div className={cx(_.appointment, active, inProgress)}>
      {inProgress ? 'En curso' :
        reserved ? 'Reservado' : '+'
      }
    </div>
  )
}

export default Appointment
