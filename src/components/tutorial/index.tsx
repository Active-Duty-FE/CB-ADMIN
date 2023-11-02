import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import Item from './cpns/item'
import Mask from '../mask'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
interface IProps {
  children?: ReactNode
}

const Tutorial: FC<IProps> = memo(() => {
  const [open, setOpen] = useState(true)
  return (
    <Mask open={open} setOpen={setOpen}>
      <Item setOpen={setOpen} />
    </Mask>
  )
})

export default Tutorial

Tutorial.displayName = 'Tutorial'
