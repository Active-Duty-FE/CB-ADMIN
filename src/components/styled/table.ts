import styled, { css } from 'styled-components'

export const CustomHorTableTh = styled.div`
  position: sticky;
  display: flex;
  align-items: center;
  z-index: 1;
  width: 25%;
  height: 3rem;
  padding: 12px;
  word-break: break-all;
  background-color: #ccc;
`
export const CustomHorTableTd = styled.div`
  flex: 1;
  overflow-x: scroll;
  width: 25%;
  height: 3rem;
  padding: 12px;
  line-height: 3rem;
  white-space: nowrap;
`
export const CustomHorTable = styled.div`
  overflow: hidden;
  border: 1px solid #111;
  border-radius: 5px;
`

export const CustomHorBody = styled.div<{ isLast: boolean }>`
  border-bottom: 1px solid #111;
  ${(props) =>
    props.isLast &&
    css`
      border-bottom: 0;
    `}
`
