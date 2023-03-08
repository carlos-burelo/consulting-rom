import { FormEvent } from 'react'
import { useCiteStore } from '../../context'
import _ from './AppointmentForm.module.scss'

const AppointmentForm: FC = () => {
  const store = useCiteStore()
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    store.addCite(null)
  }
  // convert date to format: 2021-08-01T10:30
  const format = (date: Date) => {
    const base = new Date(date).toISOString().substring(0, 16)
    return base
  }

  const dateFm = format(store.cite?.date || new Date())

  return (
    <div className={_.container}>
      <form className={_.form} onSubmit={submit}>
        <h2>Formulario de citas</h2>
        <div className={_.formGroup}>
          <label htmlFor="patient">Paciente</label>
          <input type="text" name="patient" id="patient" />
        </div>
        <div className={_.formGroup}>
          <label htmlFor="description">Descripción</label>
          <textarea name="description" id="description" />
        </div>
        <div className={_.formGroup}>
          <label htmlFor="date">Fecha y hora</label>
          <input
            type="datetime-local"
            name="date"
            id="date"
            defaultValue={dateFm}
          />
        </div>

        <button type="submit">Guardar</button>
      </form>
    </div>
  )
}

export default AppointmentForm
