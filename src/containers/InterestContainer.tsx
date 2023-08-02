import { useEffect, useState } from 'react'
import { ByInterestType } from '../types/types'
import { getByInterest } from '../services/phoneApi'
import ByInterest from '../components/TopByInterest'

const InterestContainer = () => {
  const [byInterestPhones, setByInterestPhones] = useState<ByInterestType[]>()

  useEffect(() => {
    const fetchByInterest = async () => {
      try {
        const response = await getByInterest()
        setByInterestPhones(response.data.data.phones)
      } catch (error) {
        console.log(error)
      }
    }
    fetchByInterest()
  }, [])

  return (
    <>
      {byInterestPhones && <ByInterest byInterestPhones={byInterestPhones} />}
    </>
  )
}

export default InterestContainer
