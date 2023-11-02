import { DeleteOutline } from '@mui/icons-material'
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import HighlightOffIcon from '@mui/icons-material/HighlightOff'
interface IProps {
  children?: ReactNode
  open: boolean
  setOpen: (open: boolean) => void
}

const Mask: FC<IProps> = memo(({ children, open, setOpen }) => {
  return (
    <div
      className={`absolute left-0 top-0 z-30 right-0 bottom-0 flex justify-center items-center bg-stone-900/50 ${
        !open && 'hidden'
      }`}
    >
      {children}
      <div
        className="absolute right-10 top-10 flex justify-center items-center cursor-pointer hover:animate-spin"
        onClick={() => setOpen(false)}
      ></div>
    </div>
  )
})

export default Mask

Mask.displayName = 'Mask'
