import { Grid } from '@mui/material'
import { PhoneBrands } from '../types/types'
import { useEffect, useState } from 'react'
import { getBrandBySlug } from '../services/phoneApi'
import CustomCard from './CustomCard'
import CustomCardsSkeleton from './CustomCardsSkeleton'

const BrandsCards = ({ phoneBrands }: { phoneBrands: PhoneBrands[] }) => {
  const [phoneImages, setPhoneImages] = useState<string[]>()

  useEffect(() => {
    //from phoneBrands map through them and then same each brand slug in a new array
    const extractBrandSlugs = (Array: PhoneBrands[]): string[] =>
      Array.map((brand) => brand.brand_slug)
    const extractedSlugs = extractBrandSlugs(phoneBrands)

    //we map through those brand slugs and for each one, fetch them, then return the image of the first element of each brand slug
    const fetchBrandsImgBySlug = async () => {
      try {
        const brandDataPromises = extractedSlugs.map(async (brandSlug) => {
          const response = await getBrandBySlug(brandSlug)
          return response.data.data.phones[0].image
        })
        //wait for it to complete all the fetching and then save it in a state
        const phoneData = await Promise.all(brandDataPromises)
        setPhoneImages(phoneData)
      } catch (error) {
        console.log(error)
      }
    }
    fetchBrandsImgBySlug()
  }, [phoneBrands])

  return (
    <Grid container>
      {phoneImages ? (
        phoneBrands.map((brand, index) => (
          <CustomCard
            customKey={brand.brand_slug}
            linkTo={`/brands/${brand.brand_slug}`}
            image={phoneImages[index]}
            alt={`${brand.brand_name}`}
            title={brand.brand_name}
            text={`Available Devices ${brand.device_count}`}
          />
        ))
      ) : (
        <CustomCardsSkeleton />
      )}
    </Grid>
  )
}

export default BrandsCards
