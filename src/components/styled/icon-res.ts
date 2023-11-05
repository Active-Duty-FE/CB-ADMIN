import { Device } from '@/types/user-interface'
import styled from 'styled-components'

export const IconRes = styled.img<{ type?: 'mobile' | 'pc' }>`
  width: ${(props) => (props.type === 'mobile' ? '30px' : '100px')};
  height: ${(props) => (props.type === 'mobile' ? '30px' : '100px')};
`
