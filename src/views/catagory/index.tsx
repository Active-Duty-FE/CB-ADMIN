import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Category: FC<IProps> = memo(() => {
  return <div>Category</div>
})

export default Category

Category.displayName = 'Category'
