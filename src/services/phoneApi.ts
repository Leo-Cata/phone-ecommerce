import axios from 'axios'

const baseURL = 'https://phone-specs-api.vercel.app/'

//create a base url
const api = axios.create({
  baseURL,
})

export const getPhoneSpecs = async (phoneSlug: string) => {
  try {
    const response = await api.get(`/${phoneSlug}`)
    return response.data
  } catch (error) {
    throw new Error('Failed to fetch phone specs.')
  }
}
//fetch list of all brands
export const getBrands = () => api.get('/brands')

//fetch from an specific brand
export const getBrandBySlug = (brandSlug: string, page?: number) =>
  api.get(`/brands/${brandSlug}`, {
    params: {
      page: page ? page.toString() : undefined,
    },
  })
