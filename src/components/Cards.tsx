import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material'
import { PhoneBrands } from '../types/types'

const Cards = ({ phoneBrands }: { phoneBrands: PhoneBrands[] }) => {
  console.log(phoneBrands)

  return (
    <Grid container justifyContent={'space-evenly'}>
      {phoneBrands.map((brand) => (
        <Grid key={brand.brand_id}>
          <Card className="m-2 px-2">
            <CardMedia
              component="img"
              image="https://fdn2.gsmarena.com/vv/bigpic/acer-chromebook-tab-10.jpg"
              alt="Phone Brand Image"
              className="h-[300px] object-contain"
            />
            <CardContent>
              <Typography variant="h5" className="text-center">
                {brand.brand_name}
              </Typography>
              <Typography variant="body2">
                Available Devices {brand.device_count}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default Cards
