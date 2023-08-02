import { ByInterestCardsProps } from '../types/types'
import { Box } from '@mui/material'
import PhonesAndRatings from './PhonesAndRatings'
// import CustomCard from './CustomCard'

const ByInterest = ({ byInterestPhones }: ByInterestCardsProps) => {
  return (
    <Box>
      {byInterestPhones.map((phone, index) => (
        <PhonesAndRatings
          firstText={phone.phone_name}
          SecondText={phone.hits}
          slug={phone.slug}
          customKey={phone.slug + index}
        />
      ))}
    </Box>
  )
}

export default ByInterest
