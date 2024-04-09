import axios from 'axios'
import { ContentType } from '@/utils/index'
import qs from 'qs'

const service = axios.create() // Request interceptors

// 1. 导入该函数
import { useUserStore } from '@/stores/modules/user'

// 2. 调用，获得store
const userStore = useUserStore()

service.interceptors.request.use(
  config => {
    // do something
    const tokenVal = userStore.tokenVal
    const ticket = userStore.ticket
    const tenantId = userStore.tenantId
    if (tokenVal) {
      config.headers['Authorization'] = 'Bearer ' + tokenVal
    }
    if (ticket) {
      config.headers['ticket'] = ticket
    }
    // 任何情况下都携带tenantId，没有的话传空
    config.headers['tenant_id'] = tenantId || ''
    if (config.data) {
      if (config.headers['Content-Type'] === ContentType.FORM) {
        config.data = qs.stringify(config.data)
      }
    }
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
