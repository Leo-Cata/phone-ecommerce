import axios from 'axios'

const baseURL = 'https://phone-specs-api.vercel.app/'

const api = axios.create({
  baseURL,
})

export const getBrands = () => api.get('/brands')
