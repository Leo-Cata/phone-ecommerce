import { Stack } from '@mui/material'
import { ChildrenProp } from '../types/types'

const WrapperContainer = ({ children }: ChildrenProp) => {
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
