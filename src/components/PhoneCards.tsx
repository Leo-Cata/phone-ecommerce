import { Grid } from '@mui/material'
import { Phones } from '../types/types'
import CustomCard from './CustomCard'

const PhoneCards = ({ brandsPhones }: { brandsPhones: Phones[] }) => {
  return (
    <Grid container>
      {brandsPhones.map((phone) => (
        <CustomCard
          customKey={phone.slug}
          linkTo={`/${phone.slug}`}
          image={phone.image}
          alt={`${phone.phone_name}`}
          title={phone.phone_name}
          text={null}
        />
      ))}
    </Grid>
  )
}

export default PhoneCards
