import { Box, Typography } from '@mui/material'
import { BasicInfoProps } from '../../types/types'

const BasicInfo = ({ os, storage, dimension, release }: BasicInfoProps) => {
  console.log(typeof os)
  return (
    <Box>
      <Typography variant="subtitle1">
        <span className="font-semibold">OS:</span> {os}
      </Typography>
      <Typography variant="subtitle1">
        <span className="font-semibold">Storage:</span> {storage}
      </Typography>
      <Typography variant="subtitle1">
        <span className="font-semibold">Dimensions:</span> {dimension}
      </Typography>
      <Typography variant="subtitle1">{release}</Typography>
    </Box>
  )
}

export default BasicInfo
