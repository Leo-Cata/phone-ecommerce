import BrandsCardsContainer from './containers/BrandsCardsContainer'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes, useLocation } from 'react-router'
import PhoneListContainer from './containers/PhoneListContainer'
import PhoneSpecsContainer from './containers/PhoneSpecsContainer'
import WrapperContainer from './containers/WrapperContainer'
import LatestContainer from './containers/LatestContainer'
import FansAndInterest from './components/FansAndInterest'

const App = () => {
  const location = useLocation()
  const isDefaultOrBrands =
    location.pathname === '/' || location.pathname === '/brands'

  return (
    <div>
      <Navbar />
      <WrapperContainer>
        <Routes>
          <Route path="/" element={<LatestContainer />} />
          <Route path="/brands" element={<BrandsCardsContainer />} />
          <Route path="/brands/:brandSlug" element={<PhoneListContainer />} />
          <Route path="/:phoneSlug" element={<PhoneSpecsContainer />} />
        </Routes>
        {isDefaultOrBrands && <FansAndInterest />}
      </WrapperContainer>
    </div>
  )
}

export default App
