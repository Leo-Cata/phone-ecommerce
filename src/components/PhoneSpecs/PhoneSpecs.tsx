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
  console.log(specifications)

  return (
    <Box>
      {specifications.map((specifications, index) => (
        <Accordion key={specifications.title} elevation={4}>
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls={`panel${index}a-content`}
            id={`panel${index}-header`}>
            <Typography variant="h4">{specifications.title}</Typography>
          </AccordionSummary>

          {/* map through the title of the specs */}
          {specifications.specs.map((specs) => (
            <AccordionDetails key={specs.key}>
              <Box>
                <Typography variant="subtitle1" className="font-semibold">
                  {specs.key}
                </Typography>
                <Divider />

                {/* map the values to display when theres more than 1 */}
                {specs.val.map((values) => (
                  <Typography variant="subtitle2">{values}</Typography>
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
