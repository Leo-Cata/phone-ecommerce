import { Grid, Card, CardMedia, Typography, CardContent } from '@mui/material'
import { Phones } from '../types/types'

const PhoneCards = ({ brandsPhones }: { brandsPhones: Phones[] }) => {
  console.log(brandsPhones)
  return (
    <Grid container justifyContent={'center'} spacing={2}>
      {brandsPhones.map((phone) => (
        <Grid item key={phone.phone_name}>
          <Card className=" min-h-[400px] w-[220px] pb-2 pt-4 transition-transform duration-300 hover:scale-105 hover:bg-[#333333]">
            <CardMedia
              component="img"
              image={phone.image}
              alt={`${phone.phone_name} image`}
              loading="lazy"
              className="h-[250px] object-contain "
            />
            <CardContent>
              <Typography textAlign={'center'} variant="h5">
                {phone.phone_name}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default PhoneCards
