interface userListFilter {
  pagenum: number
  pagesize: number
  query?: string
}
export const userListKeys = {
  all: ['users'] as const,
  lists: () => [...userListKeys.all, 'list'] as const,
  list: (filters: userListFilter) => [...userListKeys.lists(), { ...filters }] as const,
  search: (id: string) => [...userListKeys.all, 'search', id] as const,
  add: (value: any) => [...userListKeys.all, 'add', value] as const
}

export const roleListKeys = {
  all: ['roles'] as const,
  lists: () => [...roleListKeys.all, 'list'] as const,
  search: (query: string) => [...roleListKeys.all, 'search', query] as const,
  delete: (rid: number) => [...roleListKeys.all, 'delete', rid] as const,
  add: (value: any) => [...roleListKeys.all, 'add', value] as const
}

export const permissionKeys = {
  all: ['permissions'] as const,
  lists: () => [...permissionKeys.all, 'list'] as const,
  delete: (roleId: number, rightsId: number) => [...permissionKeys.all, 'delete', roleId, rightsId] as const
}
