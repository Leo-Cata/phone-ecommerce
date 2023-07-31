import BrandsCardsContainer from './containers/BrandsCardsContainer'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router'
import TopByInterest from './components/TopByInterest'
import TopByFans from './components/TopByFans'
import PhoneListContainer from './containers/PhoneListContainer'
import PhoneSpecsContainer from './containers/PhoneSpecsContainer'
import WrapperContainer from './containers/Wrapper'
import LatestContainer from './containers/LatestContainer'
import InterestContainer from './containers/InterestContainer'

const App = () => {
  return (
    <div>
      <Navbar />
      <WrapperContainer>
        <Routes>
          <Route path="/" element={<LatestContainer />} />
          <Route path="/brands" element={<BrandsCardsContainer />} />
          <Route path="/brands/:brandSlug" element={<PhoneListContainer />} />
          <Route path="/:phoneSlug" element={<PhoneSpecsContainer />} />
          <Route path="/interest" element={<InterestContainer />} />
          <Route path="/fans" element={<TopByFans />} />
        </Routes>
      </WrapperContainer>
    </div>
  )
}

export default App
