import _ from './Header.module.scss'

const Header: FC = () => {
  return (
    <header className={_.header}>
      <h1 className={_.title}>Calendar</h1>
    </header>
  )
}

export default Header
