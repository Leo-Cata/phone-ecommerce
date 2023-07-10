import { useState, useEffect } from 'react'
import { getBrands } from '../services/phoneApi'
import { Grid } from '@mui/material'
import Cards from '../components/Cards'
import { PhoneBrands } from '../types/types'

const CardsContainer = () => {
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
    <Grid
      className="h-full w-full bg-purple-950 px-40 py-10"
      container
      justifyContent={'center'}>
      {phoneBrands && <Cards phoneBrands={phoneBrands} />}
    </Grid>
  )
}

export default CardsContainer
