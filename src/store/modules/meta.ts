import { MetaStatus } from '@/types/ResponseType'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
  status: MetaStatus
  msg: string
  switch: boolean
}
const metaSlice = createSlice({
  name: 'metaSlice',
  initialState: {
    status: 200,
    msg: '',
    switch: false
  },
  reducers: {
    updateMetaSlice(state, action: PayloadAction<InitialState>) {
      state.msg = action.payload.msg
      state.status = action.payload.status
      state.switch = action.payload.switch
    }
  }
})

export default metaSlice
export const { updateMetaSlice } = metaSlice.actions
