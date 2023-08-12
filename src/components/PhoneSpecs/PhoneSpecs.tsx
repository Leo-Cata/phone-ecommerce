import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Divider,
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { PhoneSpecsProps } from '../../types/types'

const PhoneSpecs = ({ specifications }: PhoneSpecsProps) => {
  // more in depth information about the phone is received through props

  return (
    <Box>
      {/* maps and displays the titles with accordions */}
      {specifications.map((specifications, index) => (
        <Accordion
          key={specifications.title && index}
          elevation={4}
          className="bg-custom-primary">
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls={`panel${index}a-content`}
            id={`panel${index}-header`}>
            <Typography variant="h4">{specifications.title}</Typography>
          </AccordionSummary>

          {/* each title contains keys and data to display, maps through them */}
          {specifications.specs.map((specs, specsIndex) => (
            <AccordionDetails key={specs.key && specsIndex}>
              <Box>
                <Typography variant="subtitle1" className="font-semibold">
                  {specs.key}
                </Typography>
                <Divider />

                {/* then map the values to display */}
                {specs.val.map((values) => (
                  <Typography variant="subtitle2" key={values}>
                    {values}
                  </Typography>
                ))}
              </Box>
            </AccordionDetails>
          ))}
        </Accordion>
      ))}
    </Box>
  )
}

export default PhoneSpecs
