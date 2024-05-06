import axios from 'axios'

const useApi = axios.create({
  baseURL: 'http://localhost:3000' || import.meta.env.VITE_API_URL
})

export default useApi
