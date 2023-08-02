import BrandsCardsContainer from './containers/BrandsCardsContainer'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router'
import PhoneListContainer from './containers/PhoneListContainer'
import PhoneSpecsContainer from './containers/PhoneSpecsContainer'
import WrapperContainer from './containers/Wrapper'
import LatestContainer from './containers/LatestContainer'
import InterestContainer from './containers/InterestContainer'
import FansContainer from './containers/FansContainer'
// import ByRatingsPhones from './components/ByRatingsPhones'

const App = () => {
  return (
    <div>
      <Navbar />
      <WrapperContainer>
        <div className="flex flex-col space-y-10 lg:flex-row lg:space-x-10 lg:space-y-0">
          <InterestContainer />
          <FansContainer />
        </div>
        <Routes>
          <Route path="/" element={<LatestContainer />} />
          <Route path="/brands" element={<BrandsCardsContainer />} />
          <Route path="/brands/:brandSlug" element={<PhoneListContainer />} />
          <Route path="/:phoneSlug" element={<PhoneSpecsContainer />} />
        </Routes>
      </WrapperContainer>
    </div>
  )
}

export default App
