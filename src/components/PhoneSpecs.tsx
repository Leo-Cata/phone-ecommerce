import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { getPhoneSpecs } from '../services/phoneApi'
import { PhoneSpecifications } from '../types/types'

const PhoneSpecs = () => {
  const { phoneSlug } = useParams()
  const [phoneSpecifications, setPhoneSpecifications] =
    useState<PhoneSpecifications | null>(null)
  useEffect(() => {
    const fetchPhoneSpecs = async () => {
      try {
        if (phoneSlug) {
          const response = await getPhoneSpecs(phoneSlug)
          setPhoneSpecifications(response.data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchPhoneSpecs()
  }, [phoneSlug])

  return <div>{phoneSpecifications?.brand} </div>
}

export default PhoneSpecs
