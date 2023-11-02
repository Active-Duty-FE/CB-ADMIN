import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const DataView: FC<IProps> = memo(() => {
  return <div>DataView</div>
})

export default DataView

DataView.displayName = 'DataView'
