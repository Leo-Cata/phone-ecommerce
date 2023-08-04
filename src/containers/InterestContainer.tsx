import { useEffect, useState } from 'react'
import { ByInterestType } from '../types/types'
import { getByInterest } from '../services/phoneApi'
import PhonesAndRatings from '../components/PhonesAndRatings'
import { Box, Typography } from '@mui/material'
import CustomTextSkeleton from '../components/CustomTextSkeleton'

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
    <Box className="w-fit">
      <Typography textAlign={'center'} variant="h5" className="mb-2 lg:mb-4">
        Top Phones By Interest
      </Typography>
      {byInterestPhones ? (
        byInterestPhones.map((phone) => (
          <PhonesAndRatings
            firstText={phone.phone_name}
            SecondText={phone.hits}
            slug={phone.slug}
            customKey={phone.slug}
          />
        ))
      ) : (
        <CustomTextSkeleton />
      )}
    </Box>
  )
}

export default InterestContainer
