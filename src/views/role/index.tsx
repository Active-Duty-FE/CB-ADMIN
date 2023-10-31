import SearchArea from '@/components/common/search-area'
import React, { memo, useCallback, useState } from 'react'
import type { FC, ReactNode } from 'react'
import AddRole from './role-add'
import RoleList from './role-list'
import { Button } from '@mui/material'
import { Refresh } from '@mui/icons-material'

interface IProps {
  children?: ReactNode
}

const Role: FC<IProps> = memo(() => {
  const [expanded, setExpanded] = useState(false)
  return (
    <>
      <div className="flex">
        <AddRole />
        <Button className="ml-4" variant="outlined" onClick={() => setExpanded(!expanded)}>
          모두 접기
          <Refresh />
        </Button>
      </div>
      <RoleList expanded={expanded} />
    </>
  )
})

export default Role

Role.displayName = 'Role'
