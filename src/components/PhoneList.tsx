import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getBrandBySlug } from '../services/phoneApi'
import { BrandsPhoneList, Phones } from '../types/types'
import { AxiosResponse } from 'axios'

const PhoneList = () => {
  //get the brand slug when the user clicks on the brand list
  const { brandSlug } = useParams()

  //set the array of phones
  const [brandsPhones, setBrandsPhones] = useState<Phones[]>()

  const [page, setPage] = useState(1)

  const [pagesNumber, setPagesNumber] = useState(1)

  console.log(brandSlug)

  //fetch the list of phones for said brand
  useEffect(() => {
    const fetchBrandsPhones = async () => {
      try {
        if (brandSlug) {
          const response: AxiosResponse<BrandsPhoneList> = await getBrandBySlug(
            brandSlug,
            page,
          )
          console.log(response.data)
          setPagesNumber(response.data.data.last_page)
          const brandsPhones: Phones[] = response.data.data.phones
          setBrandsPhones(brandsPhones)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchBrandsPhones()
  }, [brandSlug, page])

  console.log(brandsPhones)
  console.log(pagesNumber)

  const handleSetPage = () => {
    const pageNumb = prompt('asd')
    setPage(parseInt(pageNumb))
  }
  console.log(page)
  return <div onClick={handleSetPage}>{brandSlug}</div>
}

export default PhoneList
