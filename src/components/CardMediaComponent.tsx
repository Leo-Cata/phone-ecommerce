import { CardMedia } from '@mui/material'
import { CardMediaProps } from '../types/types'

const CardMediaComponent = ({ image, alt }: CardMediaProps) => {
  return (
    <CardMedia
      component="img"
      image={image}
      alt={alt}
      className="mt-2 h-[270px] min-w-[220px] object-contain"
      loading="lazy"
    />
  )
}

export default CardMediaComponent
