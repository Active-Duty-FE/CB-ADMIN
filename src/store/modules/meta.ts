import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
  status: 200 | 201 | 204 | 400 | 401 | 403 | 404 | 422 | 500
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
