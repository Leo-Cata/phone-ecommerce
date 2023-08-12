import { Skeleton } from '@mui/material'
const CustomTextSkeleton = () => {
  return (
    <>
      {Array.from({ length: 10 }, (_, index) => (
        <Skeleton key={index + 10} className="w-[350px]" />
      ))}
    </>
  )
}

export default CustomTextSkeleton
