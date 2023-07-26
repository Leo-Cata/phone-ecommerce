import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { getPhoneSpecs } from '../services/phoneApi'
import { PhoneSpecifications } from '../types/types'
import { Stack, Paper, Typography, Divider } from '@mui/material'
import BasicInfo from '../components/PhoneSpecs/BasicInfo'
import PhoneSpecs from '../components/PhoneSpecs/PhoneSpecs'

const PhoneSpecsContainer = () => {
  //getting the slug from params
  const { phoneSlug } = useParams()

  //state to save the data fetched
  const [phoneSpecifications, setPhoneSpecifications] =
    useState<PhoneSpecifications | null>(null)
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
  return (
    <>
      {phoneSpecifications && (
        <Paper className="w-full">
          <Stack spacing={2} className="p-4">
            <Typography variant="h3" textAlign={'center'}>
              {phoneSpecifications.brand} {''} {phoneSpecifications.phone_name}
            </Typography>

            <img
              src={phoneSpecifications.phone_images[1]}
              alt={`${phoneSpecifications.phone_name} image`}
              className="flex w-full min-w-[220px] max-w-[500px] self-center rounded-lg object-contain"
            />
            <Divider />

            {/* basic info component */}
            <BasicInfo
              // os is giving error when type is set to string so it is set to any in types.ts
              os={phoneSpecifications.os}
              storage={phoneSpecifications.storage}
              dimension={phoneSpecifications.dimension}
              release={phoneSpecifications.release_date}
            />
            <Divider />

            {/* specs component */}
            <PhoneSpecs specifications={phoneSpecifications.specifications} />
          </Stack>
        </Paper>
      )}
    </>
  )
}

export default PhoneSpecsContainer
