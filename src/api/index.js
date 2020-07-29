import { axios } from '@xcedu/web-share'

// 测试环境需要在请求url前加前缀
const prefix = '/api-personalized'
// const prefix = ''

// 选人接口
export function getChooseUserDataByParams (params) {
  return axios.get('/api-base/rangeScopes', { params })
}
// 选人输入
export function gettSearchListByValue (params) {
  return axios.get('/api-base/rangeScopes?type=search', { params })
}
