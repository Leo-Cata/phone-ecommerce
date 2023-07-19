import { Grid, Card, CardMedia, Typography, CardContent } from '@mui/material'
import { Phones } from '../types/types'
import { Link } from 'react-router-dom'

const PhoneCards = ({ brandsPhones }: { brandsPhones: Phones[] }) => {
  console.log(brandsPhones)
  return (
    <Grid container spacing={4}>
      {brandsPhones.map((phone) => (
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={2}
          xl={2}
          key={phone.phone_name}
          className="flex justify-center">
          <Link to={`/${phone.slug}`}>
            <Card className="w-[210px] p-2 transition hover:scale-105 hover:cursor-pointer hover:bg-[#333333]">
              <CardMedia
                component="img"
                image={phone.image}
                className="w-[200px] object-contain"
              />
              <CardContent>
                <Typography textAlign={'center'} variant="h5">
                  {phone.phone_name}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  )
}

export default PhoneCards
