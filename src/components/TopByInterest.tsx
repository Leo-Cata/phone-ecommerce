import Grid from '@mui/material/Grid'
import { ByInterestCardsProps } from '../types/types'
import CustomCard from './CustomCard'

const TopByInterest = ({ byInterestPhones }: ByInterestCardsProps) => {
  return (
    <Grid container>
      {byInterestPhones.map((phone) => (
        <CustomCard
          customKey={phone.slug}
          linkTo={`/${phone.slug}`}
          image={phone.phone_name}
          alt={phone.phone_name}
          title={phone.phone_name}
          text={phone.hits}
        />
      ))}
    </Grid>
  )
}

export default TopByInterest
