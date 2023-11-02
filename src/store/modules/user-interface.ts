import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
const initialState = {
  tipReset: false
}
const userInterfaceSlice = createSlice({
  name: 'userInterface',
  initialState,
  reducers: {
    updateTipReset(state, action: PayloadAction<boolean>) {
      state.tipReset = action.payload
    }
  }
})

export const { updateTipReset } = userInterfaceSlice.actions
export default userInterfaceSlice
