import { useState, useEffect } from 'react'
import { getBrands } from '../services/phoneApi'
import BrandsCards from '../components/BrandsCards'
import { PhoneBrands } from '../types/types'
import CustomCardsSkeleton from '../components/CustomCardsSkeleton'

const BrandsCardsContainer = () => {
  const [phoneBrands, setPhoneBrands] = useState<PhoneBrands[]>()
  // saves the data in state and later passes it

  //fetches the brands, ignoring unnecessary path
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

  //if the data is loaded, displays it else load the skeleton
  return (
    <>
      {phoneBrands ? (
        <BrandsCards phoneBrands={phoneBrands} />
      ) : (
        <CustomCardsSkeleton />
      )}
    </>
  )
}

export default BrandsCardsContainer
