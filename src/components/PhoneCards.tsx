import { Grid, Card, Typography, CardContent } from '@mui/material'
import { Phones } from '../types/types'
import { Link } from 'react-router-dom'
import CardMediaComponent from './CardMediaComponent'

const PhoneCards = ({ brandsPhones }: { brandsPhones: Phones[] }) => {
  console.log(brandsPhones)
  return (
    <Grid container>
      {brandsPhones.map((phone) => (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={phone.phone_name}>
          <Link to={`/${phone.slug}`}>
            <Card className="m-2  px-2 transition hover:scale-105 hover:cursor-pointer hover:bg-[#333333]">
              <CardMediaComponent
                image={phone.image}
                alt={`${phone.phone_name} image`}
              />
              <CardContent className="px-0">
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
