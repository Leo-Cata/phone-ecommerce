import { useState, useEffect } from 'react'
import { getBrands } from '../services/phoneApi'
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

  return <>{phoneBrands && <BrandsCards phoneBrands={phoneBrands} />}</>
}

export default BrandsCardsContainer
