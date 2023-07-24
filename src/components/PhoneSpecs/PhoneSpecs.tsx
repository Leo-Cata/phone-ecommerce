import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material'
import { PhoneSpecsProps } from '../../types/types'

const PhoneSpecs = ({ specifications }: PhoneSpecsProps) => {
  console.log(specifications)
  return <Box>PhoneSpecs</Box>
}

export default PhoneSpecs
