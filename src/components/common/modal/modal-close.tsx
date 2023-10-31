import { Close } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
  setOpen: (open: boolean) => void
}

const ModalClose: FC<IProps> = memo(({ setOpen }) => {
  return (
    <IconButton className="absolute right-2 top-2" aria-label="close" onClick={() => setOpen(false)}>
      <Close />
    </IconButton>
  )
})

export default ModalClose

ModalClose.displayName = 'ModalClose'
