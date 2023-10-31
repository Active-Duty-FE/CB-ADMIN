export type User = {
  email: string
  id: number
  mobile: string
  rid: number
  token: string
  username: string
}
export type Response<T> = {
  data: T
  meta: {
    msg: string
    status: number
  }
}
export type UserListItem = {
  create_time: number
  email: string
  id: number
  mg_state: boolean
  mobile: string
  role_name: string
  username: string
}
export type UserListType = {
  pagenum: number
  total: number
  users: UserListItem[]
}
export type RoleChild = {
  id: number
  authName: string
  path: string
  pid: string
  children?: RoleChild[]
}
export type RoleParent = {
  id: number
  roleName: string
  roleDesc: string
  children: RoleChild[]
}

export type SearchUser = {
  id: number
  username: string
  rid: number
  email: string
  mobile: string
}
export type SearchRole = {
  roleId: number
  roleName: string
  roleDesc: string
}
