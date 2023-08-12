import { useState, useEffect } from 'react'
import { LatestPhones } from '../types/types'
import { getLatestPhones } from '../services/phoneApi'
import LatestPhonesCards from '../components/LatestPhonesCards'
import CustomSkeleton from '../components/Skeletons/CustomCardsSkeleton'
import { Grid } from '@mui/material'

const LatestContainer = () => {
  //fetch data from /latest and save it
  const [latestPhones, setLatestPhones] = useState<LatestPhones[]>()

  useEffect(() => {
    const fetchLatestPhones = async () => {
      try {
        const response = await getLatestPhones()
        setLatestPhones(response.data.data.phones)
      } catch (error) {
        console.log(error)
      }
    }
    fetchLatestPhones()
  }, [])
  return (
    <>
      {latestPhones ? (
        <LatestPhonesCards latestPhones={latestPhones} />
      ) : (
        <Grid container>
          <CustomSkeleton />
        </Grid>
      )}
    </>
  )
}

export default LatestContainer
