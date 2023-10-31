import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { AppAxiosRequestConfig, AppCreateAxiosDefaults, AppInternalAxiosRequestConfig } from './config'
import { decrypt } from '@/utils/cryto'
import { Response } from '@/types/ResponseType'

export class AppRequest {
  private instance: AxiosInstance
  constructor(config: AppCreateAxiosDefaults) {
    this.instance = axios.create(config)
    this.instance.interceptors.request.use(
      (config: AppInternalAxiosRequestConfig) => {
        let token = window.localStorage.getItem('token')
        if (!!token) {
          token = decrypt(token, 'my-token').token
          config.headers.setAuthorization(token)
        }
        return config
      }
      // (error: any) => {
      //   console.log(error)
      // }
    )
    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        // if (res.headers.getAuthorization) {
        //   const token = res.headers.getAuthorization()
        //   window.localStorage.setItem('token', token.toString())
        // }
        return res
      },
      (error: any) => {
        console.log(error, 'interceptor response err catch')
      }
    )
    this.instance.interceptors.request.use(
      config.interceptors?.onRequestFulfilled,
      config.interceptors?.onRequestRejected
    )
    this.instance.interceptors.response.use(
      config.interceptors?.onResponseFulfilled,
      config.interceptors?.onResponseRejected
    )
  }
  request<T>(config: AppAxiosRequestConfig) {
    if (config.interceptors?.onRequestFulfilled) {
      config = config.interceptors.onRequestFulfilled(config)
    }
    return this.instance.request<T>({
      ...config
    })
  }
  get<T>(url: string, config?: AppAxiosRequestConfig) {
    return this.request<T>({
      url,
      method: 'get',
      ...config
    })
  }
  post<T>(url: string, config?: AppAxiosRequestConfig) {
    return this.request<T>({
      url,
      method: 'post',
      ...config
    })
  }
  put<T>(url: string, config?: AppAxiosRequestConfig) {
    return this.request<T>({
      url,
      method: 'put',
      ...config
    })
  }
  delete<T>(url: string, config?: AppAxiosRequestConfig) {
    return this.request<T>({
      url,
      method: 'delete',
      ...config
    })
  }
  // Here you can add more requests eg. delete, put, etc.
}
