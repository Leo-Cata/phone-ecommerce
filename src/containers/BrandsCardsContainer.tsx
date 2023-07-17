import { useState, useEffect } from 'react'
import { getBrands } from '../services/phoneApi'
import { Box } from '@mui/material'
import BrandsCards from '../components/BrandsCards'
import { PhoneBrands } from '../types/types'

const BrandsCardsContainer = () => {
  const [phoneBrands, setPhoneBrands] = useState<PhoneBrands[]>()

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const brandsResponse = await getBrands()
        setPhoneBrands(brandsResponse.data.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchBrands()
  }, [])

  return (
    <Box className="h-full w-full px-40 py-10">
      {phoneBrands && <BrandsCards phoneBrands={phoneBrands} />}
    </Box>
  )
}

export default BrandsCardsContainer
