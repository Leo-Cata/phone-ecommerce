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
