import { Box, Typography } from '@mui/material'
import { BasicInfoProps } from '../../types/types'

const BasicInfo = ({ os, storage, dimension, release }: BasicInfoProps) => {
  // receive various basic information about the phone through props

  // delete the word "Release" from the release prop so it only displays date
  const onlyReleaseDate: string = release.replace(/Released /i, '')

  return (
    <Box>
      <Typography variant="h4" textAlign={'center'} className="pb-2">
        Basic Information
      </Typography>
      <Typography variant="subtitle1">
        <span className="font-semibold">OS:</span> {os}
      </Typography>
      <Typography variant="subtitle1">
        <span className="font-semibold">Storage:</span> {storage}
      </Typography>
      <Typography variant="subtitle1">
        <span className="font-semibold">Dimensions:</span> {dimension}
      </Typography>
      <Typography variant="subtitle1">
        <span className="font-semibold">Release Date:</span> {onlyReleaseDate}
      </Typography>
    </Box>
  )
}

export default BasicInfo
