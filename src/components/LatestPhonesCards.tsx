import { CardContent, Grid, Typography } from '@mui/material'
import { LatestPhonesCardsProps } from '../types/types'
import { Link } from 'react-router-dom'
import CardComponent from './CardComponent'
import CardMediaComponent from './CardMediaComponent'

const LatestPhonesCards = ({ latestPhones }: LatestPhonesCardsProps) => {
  return (
    <Grid container>
      {latestPhones.map((phone) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={phone.slug}>
          <Link to={`/${phone.slug}`}>
            <CardComponent>
              <CardMediaComponent
                image={phone.image}
                alt={`${phone.phone_name} image`}
              />
              <CardContent className="px-0">
                <Typography textAlign={'center'} variant="h5">
                  {phone.phone_name}
                </Typography>
              </CardContent>
            </CardComponent>
          </Link>
        </Grid>
      ))}
    </Grid>
  )
}

export default LatestPhonesCards
