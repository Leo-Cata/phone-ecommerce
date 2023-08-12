import { Divider, Link, Stack, Typography } from '@mui/material'
import { RatingsProps } from '../types/types'

const PhonesAndRatings = ({
  firstText,
  SecondText,
  slug,
  customKey,
}: RatingsProps) => {
  return (
    // modular component to display links for phones liked by fans/interest
    <>
      <Link
        underline="none"
        className="cursor-pointer"
        href={`/${slug}`}
        key={customKey}>
        <Stack
          direction={'row'}
          className="w-[350px]"
          justifyContent={'space-between'}>
          <Typography variant="h6">{firstText}</Typography>
          <Typography variant="h6">{SecondText}</Typography>
        </Stack>
      </Link>
      <Divider />
    </>
  )
}

export default PhonesAndRatings
