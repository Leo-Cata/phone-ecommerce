import Grid from '@mui/material/Grid'
import { Link } from 'react-router-dom'
import CardComponent from './CardComponent'
import CardMediaComponent from './CardMediaComponent'
import { CardContent, Typography } from '@mui/material'

const CustomCard = ({ key, linkTo, mediaImg, alt, title, text }: any) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={key}>
      <Link to={linkTo}>
        <CardComponent>
          <CardMediaComponent image={mediaImg} alt={`${alt} image`} />
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
