import axios from 'axios'

const service = axios.create() // Request interceptors

service.interceptors.request.use(
  config => {
    // do something
    return config
  },
  error => {
    Promise.reject(error)
  }
) // Response interceptors

service.interceptors.response.use(
  async response => {
    // do something
    console.log('response', response)
  },
  error => {
    // do something
    return Promise.reject(error)
  }
)

export default service
