import Grid from '@mui/material/Grid'
import { Link } from 'react-router-dom'
import CardComponent from './CardComponent'
import CardMediaComponent from './CardMediaComponent'
import { CardContent, Typography } from '@mui/material'
import { CustomCardProps } from '../types/types'

const CustomCard = ({
  customKey,
  linkTo,
  image,
  alt,
  title,
  text,
}: CustomCardProps) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={customKey}>
      <Link to={linkTo}>
        <CardComponent>
          <CardMediaComponent image={image} alt={`${alt} image`} />
          <CardContent className="px-1">
            <Typography textAlign={'center'} variant="h5">
              {title}
            </Typography>
            {text && <Typography variant="body2">{text}</Typography>}
          </CardContent>
        </CardComponent>
      </Link>
    </Grid>
  )
}

export default CustomCard
