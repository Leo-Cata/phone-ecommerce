import { Box, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { ByFansType } from '../types/types'
import { getByFans } from '../services/phoneApi'
import PhonesAndRatings from '../components/PhonesAndRatings'
import CustomTextSkeleton from '../components/Skeletons/CustomTextSkeleton'

const FansContainer = () => {
  const [byFansPhones, setByFansPhones] = useState<ByFansType[]>()

  useEffect(() => {
    // fetches by fans data and ignores unnecessary paths
    const fetchByFans = async () => {
      try {
        const response = await getByFans()
        setByFansPhones(response.data.data.phones)
      } catch (error) {
        console.log(error)
      }
    }
    fetchByFans()
  }, [])

  return (
    // display skeleton if the data isn't loaded
    <Box className="w-fit">
      <Typography textAlign={'center'} variant="h5" className="mb-2 lg:mb-4">
        Top Phones By Fans
      </Typography>
      {byFansPhones ? (
        byFansPhones.map((phone) => (
          <PhonesAndRatings
            firstText={phone.phone_name}
            SecondText={phone.favorites}
            customKey={phone.detail}
            slug={phone.slug}
          />
        ))
      ) : (
        <CustomTextSkeleton />
      )}
    </Box>
  )
}

export default FansContainer
