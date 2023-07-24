import { useState, useEffect } from 'react'
import { getBrands } from '../services/phoneApi'
import { Stack } from '@mui/material'
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
    <Stack
      className="m-4 2xl:mx-40 2xl:my-10"
      alignItems={'center'}
      spacing={2}>
      {phoneBrands && <BrandsCards phoneBrands={phoneBrands} />}
    </Stack>
  )
}

export default BrandsCardsContainer
