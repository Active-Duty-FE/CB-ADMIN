import { loginSchema, userEditSchema } from '@/schema'
import { InferType } from 'yup'

export type MenuItemType = {
  label: string
  icon: any
  to?: string
  children?: MenuItemType[]
}
export type LoginData = InferType<typeof loginSchema>
export type UserEdit = {
  id: number
  email: string
  mobile: string
  role_name: string
}
export type CreateUser = {
  username: string
  password: string
  email: string
  mobile: string
}
export type SetSubmitting = (isSubmitting: boolean) => void

export type AppError = {
  data: any
  internal: boolean
  status: number
  statusText: string
}

export type SearchType = 'USER' | 'ROLE' | 'CATEGORY' | 'PRODUCT'

// ROLE

export type RoleForm = {
  roleName: string
  roleDesc: string
}

// SEARCH

export type SearchForm = {
  keyword: string
}
