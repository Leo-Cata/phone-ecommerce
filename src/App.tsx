import BrandsCardsContainer from './containers/BrandsCardsContainer'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router'
import Latest from './components/Latest'
import TopByInterest from './components/Navbar/TopByInterest'
import TopByFans from './components/Navbar/TopByFans'
import PhoneListContainer from './containers/PhoneListContainer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<BrandsCardsContainer />} />
        <Route path="/brands/:brandSlug" element={<PhoneListContainer />} />
        <Route path="/latest" element={<Latest />} />
        <Route path="/interest" element={<TopByInterest />} />
        <Route path="/fans" element={<TopByFans />} />
      </Routes>
    </div>
  )
}

export default App
