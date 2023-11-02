import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import Item from './cpns/item'
import Mask from '../mask'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
interface IProps {
  children?: ReactNode
  tipReset: boolean
}

const Tutorial: FC<IProps> = memo(({ tipReset }) => {
  const [open, setOpen] = useState(true)

  useEffect(() => {
    if (tipReset) {
      setOpen(true)
    }
  }, [tipReset])
  return (
    <Mask open={open} setOpen={setOpen}>
      <Item setOpen={setOpen} />
    </Mask>
  )
})

export default Tutorial

Tutorial.displayName = 'Tutorial'
