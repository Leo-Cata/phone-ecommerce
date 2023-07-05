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
        const response = await getBrands()
        setPhoneBrands(response.data.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchBrands()
  }, [])
  return (
    <Grid
      className="h-full w-full bg-blue-300 px-40 py-10"
      container
      justifyContent={'center'}>
      {phoneBrands && <Cards phoneBrands={phoneBrands} />}
    </Grid>
  )
}

export default CardsContainer
