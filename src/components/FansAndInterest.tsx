import InterestContainer from '../containers/InterestContainer'
import FansContainer from '../containers/FansContainer'

const FansAndInterest = () => {
  return (
    <div className="flex flex-col space-y-10 lg:flex-row lg:space-x-10 lg:space-y-0">
      <InterestContainer />
      <FansContainer />
    </div>
  )
}

export default FansAndInterest
