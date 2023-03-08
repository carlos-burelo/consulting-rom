import Calendar from './home/components/Calendar'
import Header from './home/components/Header'
import _ from './home/home.module.scss'


const HomePage: Page = () => {
  return (
    <div className={_.container}>
      <Header />
      <div className={_.calendar}>
        <Calendar />
      </div>
    </div>
  )
}

export default HomePage