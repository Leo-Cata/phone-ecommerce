import { useParams } from 'react-router'

const PhoneSpecs = () => {
  const { phoneSlug } = useParams()
  console.log(phoneSlug)

  return <div>{phoneSlug} asd</div>
}

export default PhoneSpecs
