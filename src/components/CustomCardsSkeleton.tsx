import { Skeleton, Grid } from '@mui/material'

const CustomCardsSkeleton = () => {
  return (
    <>
      {Array.from({ length: 40 }, (_, index) => (
        <Grid
          key={index}
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          xl={3}
          className="p-2">
          <Skeleton variant="rectangular" className="h-[364px] rounded" />
        </Grid>
      ))}
    </>
  )
}

export default CustomCardsSkeleton
