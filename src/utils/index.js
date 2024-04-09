export const ContentType = {
  JSON: 'application/json;charset=UTF-8',
  FORM: 'application/x-www-form-urlencoded;charset=UTF-8',
  UPLOAD: 'multipart/form-data'
}

/**
 * @description: 转化成formData
 * @param {*} param
 * @returns
 * url
 */
export function toFormData(param) {
  const formD = new FormData()
  for (const key in param) {
    formD.append(key, param[key])
  }
  return formD
}
