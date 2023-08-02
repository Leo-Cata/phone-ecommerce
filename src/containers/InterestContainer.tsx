import { useEffect, useState } from 'react'
import { ByInterestType } from '../types/types'
import { getByInterest } from '../services/phoneApi'
import PhonesAndRatings from '../components/PhonesAndRatings'
import { Box } from '@mui/material'

const InterestContainer = () => {
  const [byInterestPhones, setByInterestPhones] = useState<ByInterestType[]>()

  useEffect(() => {
    const fetchByInterest = async () => {
      try {
        const response = await getByInterest()
        setByInterestPhones(response.data.data.phones)
      } catch (error) {
        console.log(error)
      }
    }
    fetchByInterest()
  }, [])

  return (
    <Box>
      {byInterestPhones &&
        byInterestPhones.map((phone) => (
          <PhonesAndRatings
            firstText={phone.phone_name}
            SecondText={phone.hits}
            slug={phone.slug}
            customKey={phone.slug}
          />
        ))}
    </Box>
  )
}

export default InterestContainer
