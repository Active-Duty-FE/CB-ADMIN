import { AppError } from '@/types'
import { decrypt } from '@/utils/cryto'
import axios, { Axios, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { AppRequest } from './axios'
import { QueryKey, useQuery } from 'react-query'
import { AppAxiosRequestConfig } from './axios/config'

export const appRequest = new AppRequest({
  baseURL: 'http://127.0.0.1:8888/api/private/v1'
})
