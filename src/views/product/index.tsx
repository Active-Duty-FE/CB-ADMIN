import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Product: FC<IProps> = memo(() => {
  return <div>Product</div>
})

export default Product

Product.displayName = 'Product'
