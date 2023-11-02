import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
  item: { title: string; content: string }[]
}

const DescItem: FC<IProps> = memo(({ item }) => {
  return (
    <>
      {item.map((item, index) => (
        <div className={`border border-white border-solid p-5 text-white ${index !== 0 && 'mt-5'}`}>
          <h2 className="">{item.title}</h2>
          <div>{item.content}</div>
        </div>
      ))}
    </>
  )
})

export default DescItem

DescItem.displayName = 'DescItem'
