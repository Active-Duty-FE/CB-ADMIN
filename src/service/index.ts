import { AppRequest } from './axios'

export const appRequest = new AppRequest({
  baseURL: 'http://127.0.0.1:8888/api/private/v1'
})
