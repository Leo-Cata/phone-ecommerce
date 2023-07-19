import { Grid, Card, CardMedia, Typography, CardContent } from '@mui/material'
import { Phones } from '../types/types'

const PhoneCards = ({ brandsPhones }: { brandsPhones: Phones[] }) => {
  return (
    // <Grid
    //   container
    //   className="mx-auto justify-center sm:justify-start"
    //   spacing={4}>
    //   {brandsPhones.map((phone) => (
    //     <Grid item key={phone.phone_name}>
    //       <Card className=" min-h-[400px] w-[220px] pb-2 pt-4 transition-transform duration-300 hover:scale-105 hover:bg-[#333333]">
    //         <CardMedia
    //           component="img"
    //           image={phone.image}
    //           alt={`${phone.phone_name} image`}
    //           loading="lazy"
    //           className="h-[250px] object-contain "
    //         />
    //         <CardContent>
    //           <Typography textAlign={'center'} variant="h5">
    //             {phone.phone_name}
    //           </Typography>
    //         </CardContent>
    //       </Card>
    //     </Grid>
    //   ))}
    // </Grid>
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
        </Grid>
      ))}
    </Grid>
  )
}

export default PhoneCards
