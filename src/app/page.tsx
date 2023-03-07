import WeekMap from '#/app/home/components/WeekMap'
import _ from './home/home.module.scss'


const HomePage: Page = () => {
  return (
    <div className={_.container}>
      <WeekMap />
    </div>
  )
}

export default HomePage