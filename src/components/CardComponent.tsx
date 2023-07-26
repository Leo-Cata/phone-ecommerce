import { Card } from '@mui/material'
import { ChildrenProp } from '../types/types'

const CardComponent = ({ children }: ChildrenProp) => {
  return (
    <Card className="m-2  px-2 transition hover:scale-105 hover:cursor-pointer hover:bg-[#333333]">
      {children}
    </Card>
  )
}

export default CardComponent
