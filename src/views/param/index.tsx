import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Param: FC<IProps> = memo(() => {
  return <div>Param</div>
})

export default Param

Param.displayName = 'Param'
