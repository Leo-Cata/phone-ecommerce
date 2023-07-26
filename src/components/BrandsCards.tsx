import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CircularProgress,
} from '@mui/material'
import { PhoneBrands } from '../types/types'
import { useEffect, useState } from 'react'
import { getBrandBySlug } from '../services/phoneApi'
import { Link } from 'react-router-dom'

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
      {phoneBrands?.map((brand, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={brand.brand_id}>
          <Link to={`/brands/${brand.brand_slug}`}>
            <Card className="m-2 px-2 transition hover:scale-105 hover:cursor-pointer hover:bg-[#333333]">
              {phoneImages ? (
                <CardMedia
                  component="img"
                  image={phoneImages ? phoneImages[index] : ''}
                  alt={`${brand.brand_name} phone image`}
                  className="mt-2 h-[270px] min-w-[220px] object-contain"
                  loading="lazy"
                />
              ) : (
                <div className="mt-2 flex h-[270px] min-w-[220px] items-center justify-center">
                  <CircularProgress />
                </div>
              )}

              <CardContent>
                <Typography variant="h5" className="text-center">
                  {brand.brand_name}
                </Typography>
                <Typography variant="body2">
                  Available Devices {brand.device_count}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  )
}

export default BrandsCards
