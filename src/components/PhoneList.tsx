import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getBrandBySlug } from '../services/phoneApi'
import { BrandsPhoneList, Phones } from '../types/types'
import { AxiosResponse } from 'axios'

const PhoneList = () => {
  const { brandSlug } = useParams()
  const [brandsPhones, setBrandsPhones] = useState<Phones[]>()

  console.log(brandSlug)

  //fetch the list of phones for said brand
  useEffect(() => {
    const fetchBrandsPhones = async () => {
      try {
        if (brandSlug) {
          const response: AxiosResponse<BrandsPhoneList> = await getBrandBySlug(
            brandSlug,
          )
          console.log(response.data)
          const brandsPhones: Phones[] = response.data.data.phones
          setBrandsPhones(brandsPhones)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchBrandsPhones()
  }, [brandSlug])

  console.log(brandsPhones)

  return <div>{brandSlug}</div>
}

export default PhoneList
