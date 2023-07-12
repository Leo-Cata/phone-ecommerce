import CardsContainer from './containers/CardsContainer'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router'
import Latest from './components/Latest'
import TopByInterest from './components/Navbar/TopByInterest'
import TopByFans from './components/Navbar/TopByFans'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<CardsContainer />} />
        <Route path="/latest" element={<Latest />} />
        <Route path="/interest" element={<TopByInterest />} />
        <Route path="/fans" element={<TopByFans />} />
      </Routes>
    </div>
  )
}

export default App
