import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://209.38.227.47:3003',
  timeout: 30000
})

export default axiosInstance
