import { Stack } from '@mui/material'
import { WrapperProps } from '../types/types'

const WrapperContainer = ({ children }: WrapperProps) => {
  return (
    <Stack
      className="m-4 2xl:mx-40 2xl:my-10"
      alignItems={'center'}
      spacing={2}>
      {children}
    </Stack>
  )
}

export default WrapperContainer
