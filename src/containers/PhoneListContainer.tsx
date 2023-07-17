import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getBrandBySlug } from '../services/phoneApi'
import { BrandsPhoneList, Phones } from '../types/types'
import { AxiosResponse } from 'axios'
import { Button, ButtonGroup, Stack } from '@mui/material'
import PhoneCards from '../components/PhoneCards'

const PhoneListContainer = () => {
  //get the brand slug when the user clicks on the brand list
  const { brandSlug } = useParams()

  //set the array of phones
  const [brandsPhones, setBrandsPhones] = useState<Phones[]>()

  const [page, setPage] = useState(1)

  const [numberOfPages, setNumberOfPages] = useState(1)

  //fetch the list of phones for said brand
  useEffect(() => {
    const fetchBrandsPhones = async () => {
      try {
        if (brandSlug) {
          const response: AxiosResponse<BrandsPhoneList> = await getBrandBySlug(
            brandSlug,
            page,
          )
          setNumberOfPages(response.data.data.last_page)
          const brandsPhones: Phones[] = response.data.data.phones
          setBrandsPhones(brandsPhones)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchBrandsPhones()
  }, [brandSlug, page])
  console.log('number of pages: ' + numberOfPages)
  const pageNumbers = Array.from(
    { length: numberOfPages },
    (_, index) => index + 1,
  )
  console.log(pageNumbers)

  const handlePage = (page: number) => {
    setPage(page)
  }

  return (
    <Stack className="h-full w-full px-40 py-10" spacing={4}>
      {brandsPhones && <PhoneCards brandsPhones={brandsPhones} />}
      <ButtonGroup className="flex justify-center">
        {pageNumbers.map((number) => (
          <Button key={number} onClick={() => handlePage(number)}>
            {number}
          </Button>
        ))}
      </ButtonGroup>
    </Stack>
  )
}

export default PhoneListContainer
