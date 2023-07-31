import Grid from '@mui/material/Grid'
import { Link } from 'react-router-dom'
import CardMediaComponent from './CardMediaComponent'
import { Card, CardContent, Typography } from '@mui/material'
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
        <Card className="m-2 bg-custom-secondary px-2 transition hover:scale-105 hover:cursor-pointer hover:bg-custom-accent">
          <CardMediaComponent image={image} alt={`${alt} image`} />
          <CardContent className="px-1">
            <Typography textAlign={'center'} variant="h5">
              {title}
            </Typography>
            {text && <Typography variant="body2">{text}</Typography>}
          </CardContent>
        </Card>
      </Link>
    </Grid>
  )
}

export default CustomCard
