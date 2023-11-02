import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Permission: FC<IProps> = memo(() => {
  return <div>Permission</div>
})

export default Permission

Permission.displayName = 'Permission'
