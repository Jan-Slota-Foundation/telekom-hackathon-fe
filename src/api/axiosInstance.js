import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://209.38.227.47:3000',
  timeout: 1000
})

export default axiosInstance
