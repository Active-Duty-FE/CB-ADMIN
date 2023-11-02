import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
interface IProps {
  children?: ReactNode
  arrowTop: number
}

const Arrow: FC<IProps> = memo(({ arrowTop }) => {
  return (
    <div className={`absolute left-[250px] top-${arrowTop} arrow-bounce`}>
      <span className="absolute top-[15px] left-[14px] w-[100px] h-1 bg-white"></span>
      <ArrowBackIosNewIcon fontSize="large" style={{ color: 'white' }} className="absolute" />
    </div>
  )
})

export default Arrow

Arrow.displayName = 'Arrow'
