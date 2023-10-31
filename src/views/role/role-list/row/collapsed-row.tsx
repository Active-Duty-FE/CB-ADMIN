import { permissionKeys, roleListKeys } from '@/keys'
import { appRequest } from '@/service'
import { RoleChild } from '@/types/ResponseType'
import { Chip } from '@mui/material'
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { useQueryClient } from 'react-query'

interface IProps {
  children?: ReactNode
  roleChild: RoleChild
  roleId: number
  rightsId: number
}

const CollapsedRow: FC<IProps> = memo(({ roleChild, roleId, rightsId }) => {
  const queryClient = useQueryClient()
  const handleDelete = (roleId: number, rightsId: number) => {
    if (roleId && rightsId) {
      queryClient
        .fetchQuery({
          queryKey: [...permissionKeys.delete(roleId, rightsId)],
          queryFn: () => appRequest.delete(`/roles/${roleId}/rights/${rightsId}`)
        })
        .then((res) => {
          alert('DELETE RIGHTS SUCCEDED')
          queryClient.invalidateQueries([...roleListKeys.lists()])
        })
    } else {
      queryClient
        .fetchQuery({
          queryKey: [...roleListKeys.delete(roleId)],
          queryFn: () => appRequest.delete(`/roles/${roleId}`)
        })
        .then((res) => {
          alert('删除ROLE成功')
          queryClient.invalidateQueries([...roleListKeys.lists()])
        })
    }
  }
  return (
    <>
      <Chip
        color={roleChild.pid === '0' ? 'primary' : roleChild.pid === '1' ? 'secondary' : 'default'}
        variant="outlined"
        className="m-3 min-w-[120px] hover:bg-stone-100"
        label={roleChild.authName}
        onDelete={() => handleDelete(roleId, rightsId)}
      />
    </>
  )
})

export default CollapsedRow

CollapsedRow.displayName = 'Collapse'
