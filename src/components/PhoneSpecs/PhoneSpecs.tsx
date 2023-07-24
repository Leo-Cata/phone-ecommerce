import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { getPhoneSpecs } from '../../services/phoneApi'
import { PhoneSpecifications } from '../../types/types'
import { Stack, Paper, Typography } from '@mui/material'
import BasicInfo from './BasicInfo'

const PhoneSpecs = () => {
  //getting the slug from params
  const { phoneSlug } = useParams()

  //state to save the data fetched
  const [phoneSpecifications, setPhoneSpecifications] =
    useState<PhoneSpecifications | null>(null)
  console.log(phoneSpecifications)
  //use effect to fetch
  useEffect(() => {
    const fetchPhoneSpecs = async () => {
      try {
        if (phoneSlug) {
          const response = await getPhoneSpecs(phoneSlug)
          //save as .data to avoid repeating in the rest of the code
          setPhoneSpecifications(response.data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchPhoneSpecs()
  }, [phoneSlug])
  console.log(typeof phoneSpecifications?.os)
  return (
    <Stack className="m-4 sm:mx-40 sm:my-10" alignItems={'center'}>
      {phoneSpecifications && (
        <Paper>
          <Stack spacing={2} className="p-4">
            <Typography variant="h2">
              {phoneSpecifications.brand} {''} {phoneSpecifications.phone_name}
            </Typography>
            <img
              src={phoneSpecifications.phone_images[1]}
              alt={`${phoneSpecifications.phone_name} image`}
              className="flex w-80 self-center"
            />

            <BasicInfo
              // os is giving error when type is set to string so it is set to any in types.ts
              os={phoneSpecifications.os}
              storage={phoneSpecifications.storage}
              dimension={phoneSpecifications.dimension}
              release={phoneSpecifications.release_date}
            />
          </Stack>
        </Paper>
      )}
    </Stack>
  )
}

export default PhoneSpecs
