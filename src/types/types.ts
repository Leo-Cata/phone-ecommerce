import { ReactNode } from 'react'

export interface PhoneBrands {
  brand_id: number
  brand_name: string
  brand_slug: string
  detail: string
  device_count: number
}

export interface BrandsPhoneList {
  status: boolean
  data: {
    title: string
    current_page: number
    last_page: number
    phones: Phones[]
  }
}
export interface Phones {
  brand: string
  phone_name: string
  slug: string
  image: string
  detail: string
}

export interface ButtonInputAndPages {
  handlePage: (page: number) => void
  numberOfPages: number
  page: number
}

export interface PhoneSpecifications {
  brand: string
  phone_name: string
  thumbnail: string
  phone_images: string[]
  release_date: string
  dimension: string
  os: number
  storage: string
  specifications: PhoneSpecificationItem[]
}

interface PhoneSpecificationItem {
  title: string
  specs: PhoneSpecification[]
}

interface PhoneSpecification {
  key: string
  val: string[]
}

export interface PhoneSpecsProps {
  specifications: PhoneSpecificationItem[]
}

export interface BasicInfoProps {
  // os is giving error when type is set to string so it is set to any in types.ts
  os: any
  storage: string
  dimension: string
  release: string
}

export type ChildrenProp = {
  children: ReactNode
}

export type CardMediaProps = {
  image: string
  alt: string
}

export interface LatestPhones {
  phone_name: string
  slug: string
  image: string
  detail: string
}

export interface LatestPhonesCardsProps {
  latestPhones: LatestPhones[]
}
