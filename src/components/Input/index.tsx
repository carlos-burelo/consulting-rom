import _ from './Input.module.scss'

interface Props {
  text: string
  id: string
  type?: string
}

const Input: FC<Props> = ({ id, text, type = 'text' }) => {
  return (
    <div className={_.formGroup}>
      <label htmlFor={id}>{text}</label>
      <input type={type} id={id} />
    </div>
  )
}

export default Input
