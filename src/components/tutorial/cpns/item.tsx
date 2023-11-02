import React, { memo, useEffect, useRef, useState } from 'react'
import type { FC, LegacyRef, ReactNode } from 'react'
import Arrow from './arrow'
import DescItem from './desc-item'
import Slider, { Settings } from 'react-slick'
import styled from 'styled-components'
import { Button } from '@mui/material'

interface IProps {
  children?: ReactNode
  setOpen: (open: boolean) => void
}
const data = [
  [
    {
      title: '관리자',
      content: '어드민에 등록할 수 있는 유저'
    }
  ],
  [
    {
      title: '롤(역할)',
      content: '하나의 역할은 여러개의 권한을 소유'
    },
    {
      title: '권한',
      content: '상품, 관리자, 주문 등에 대한 추가, 수정, 삭제를 할 수있는 권한'
    }
  ],
  [
    {
      title: '상품',
      content: '사이트에서 판매하는 물건'
    },
    {
      title: '상품분류',
      content: '상품의 분류로써 2개 하위 레벨까지 있음 예: 가전제품 -> TV -> LG'
    },
    {
      title: '파라미터',
      content:
        '매개 분류에 적용되는 특성으로써 한개 분류에 여러가지 파라미터가 있을수 있고 파라미터는 여러개의 값이 있을 수 있음: 가전제품{색상: [블랙, 화이트], 가격대: ["50~99", "100~200"]}'
    }
  ],
  [
    {
      title: '주문',
      content: '판매된 상품의 가격, 결제여부, 판매된 시간, 발송여부, 택배현황 등 상세정보'
    }
  ],
  [
    {
      title: '데이터',
      content: '상품의 판매된 정황을 가격별, 분류별등 여러가지 분류로 나누어 시각화 한 수치통계'
    }
  ]
]
const settings: Settings = {
  arrows: false,
  speed: 0,
  infinite: false
}
const StyledButton = styled(Button)`
  border-color: #d3d3d3;
  color: #d3d3d3;
  &:hover {
    border-color: #fff;
    color: #fff;
  }
`
const Item: FC<IProps> = memo(({ setOpen }) => {
  const [arrowTop, setArrowTop] = useState(150)
  const [sliderIndex, setSliderIndex] = useState(0)
  const sliderRef = useRef<Slider>(null)
  useEffect(() => {}, [sliderIndex])
  const handleSliderChange = (index: number) => {
    setSliderIndex(index)
    setArrowTop(50 * (index + 3))
  }
  return (
    <div className="relative">
      <Arrow arrowTop={arrowTop} />

      <div className="absolute left-[390px] top-[90px] ">
        <h2 className="text-sky-600">Tips!</h2>
        <Slider ref={sliderRef} {...settings} className="w-500" afterChange={(i) => handleSliderChange(i)}>
          {data.map((item) => (
            <DescItem item={item} />
          ))}
        </Slider>
        <div className="absolute -right-32">
          {sliderIndex !== 0 && (
            <StyledButton variant="outlined" onClick={() => sliderRef.current?.slickPrev()}>
              이전
            </StyledButton>
          )}
          {sliderIndex === data.length - 1 ? (
            <StyledButton variant="outlined" onClick={() => setOpen(false)}>
              닫기
            </StyledButton>
          ) : (
            <StyledButton variant="outlined" onClick={() => sliderRef.current?.slickNext()}>
              다음
            </StyledButton>
          )}
        </div>
      </div>
    </div>
  )
})

export default Item

Item.displayName = 'Item'
