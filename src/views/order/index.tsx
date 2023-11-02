import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Order: FC<IProps> = memo(() => {
  return <div>Order</div>
})

export default Order

Order.displayName = 'Order'
