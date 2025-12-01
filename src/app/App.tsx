import { HomePage } from '../page/homePage/HomePage'
import { Header } from '../shared/components/header/Header'
import { MobileNavigation } from '../shared/components/mobileNavigation/MobileNavigation'

function App() {
  return (
    <div className='container px-3 xxs:px-0'>
      <Header />
      <HomePage />
      <MobileNavigation />
    </div>
  )
}

export default App
