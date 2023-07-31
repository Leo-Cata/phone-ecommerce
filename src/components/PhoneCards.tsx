import { Grid } from '@mui/material'
// import { Grid, Typography, CardContent } from '@mui/material'
import { Phones } from '../types/types'
// import { Link } from 'react-router-dom'
// import CardMediaComponent from './CardMediaComponent'
// import CardComponent from './CardComponent'
import CustomCard from './CustomCard'

const PhoneCards = ({ brandsPhones }: { brandsPhones: Phones[] }) => {
  return (
    <Grid container>
      {brandsPhones.map((phone) => (
        // <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={phone.phone_name}>
        //   <Link to={`/${phone.slug}`}>
        //     <CardComponent>
        //       <CardMediaComponent
        //         image={phone.image}
        //         alt={`${phone.phone_name} image`}
        //       />
        //       <CardContent className="px-0">
        //         <Typography textAlign={'center'} variant="h5">
        //           {phone.phone_name}
        //         </Typography>
        //       </CardContent>
        //     </CardComponent>
        //   </Link>
        // </Grid>
        <CustomCard
          key={phone.slug}
          linkTo={`/${phone.slug}`}
          mediaImg={phone.image}
          alt={`${phone.phone_name}`}
          firstTypography={phone.phone_name}
        />
      ))}
    </Grid>
  )
}

export default PhoneCards
