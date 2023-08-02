import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
import { ByFansType } from '../types/types'
import { getByFans } from '../services/phoneApi'
import PhonesAndRatings from '../components/PhonesAndRatings'

const FansContainer = () => {
  const [byFansPhones, setByFansPhones] = useState<ByFansType[]>()

  useEffect(() => {
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
  console.log(byFansPhones)
  return (
    <Box>
      {byFansPhones &&
        byFansPhones.map((phone) => (
          <PhonesAndRatings
            firstText={phone.phone_name}
            SecondText={phone.favorites}
            customKey={phone.detail}
            slug={phone.slug}
          />
        ))}
    </Box>
  )
}

export default FansContainer
