import { useEffect, useState } from 'react'
import { ByInterest } from '../types/types'
import { getByInterest } from '../services/phoneApi'
import TopByInterest from '../components/TopByInterest'

const InterestContainer = () => {
  const [byInterestPhones, setByInterestPhones] = useState<ByInterest[]>()

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
      {byInterestPhones && (
        <TopByInterest byInterestPhones={byInterestPhones} />
      )}
    </>
  )
}

export default InterestContainer
