import React, { ReactNode, useState } from 'react'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogTitle from '@mui/material/DialogTitle'
import Button from '@mui/material/Button'
import { styled } from 'styled-components'

interface ConfirmDialogProps {
  open: boolean
  onClose: (confirmed: boolean) => void
  onConfirm: () => void
  title: string
  left: number
  top: number
  translatex: number
  translatey: number
}
interface WProp {
  left: number
  top: number
  translatex: number
  translatey: number
}
const StyleWrapper = styled(Dialog)<WProp>`
  .MuiDialog-paper {
    position: absolute;
    left: ${(props) => props.left}px;
    top: ${(props) => props.top}px;
    transform: translate(${(props) => props.translatex}px, ${(props) => props.translatey}px);
    margin: 0;
  }
  .MuiTypography-root {
    font-size: 12px;
    line-height: 21px;
    padding: 0;
    text-align: center;
  }
  .MuiDialogActions-root {
    padding: 0;
  }
  .MuiButtonBase-root {
    font-size: 12px;
    padding: 0;
  }
`
function ConfirmDialog(props: ConfirmDialogProps) {
  const { open, onClose, onConfirm, title, top, left, translatex, translatey } = props

  const handleClose = () => {
    onClose(false)
  }

  const handleConfirm = () => {
    onConfirm()
    onClose(false)
  }

  return (
    <StyleWrapper
      translatex={translatex}
      translatey={translatey}
      left={left}
      top={top}
      open={open}
      onClose={handleClose}
      hideBackdrop
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogActions>
        <Button onClick={handleConfirm} color="primary">
          YES
        </Button>
        <Button onClick={handleClose} color="primary">
          NO
        </Button>
      </DialogActions>
    </StyleWrapper>
  )
}

export default ConfirmDialog
