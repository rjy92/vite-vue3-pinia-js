import request from '@/utils/request.js'
import { toFormData, ContentType } from '@/utils/index'

const baseURL = '/api/v2'
export function checkEnv(params) {
  return request({
    url: baseURL + '/env',
    method: 'post',
    headers: {
      'Content-Type': ContentType.UPLOAD
    },
    data: toFormData(params)
  })
}

/**
 * @description: 获取app列表
 * @param {*} params
 * @return {*}
 */
export function getAppList(params) {
  return request({
    url: baseURL + '/menus',
    method: 'post',
    data: params
  })
}
