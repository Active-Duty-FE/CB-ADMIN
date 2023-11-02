import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import userInterfaceSlice from './modules/user-interface'
const store = configureStore({
  reducer: {
    [userInterfaceSlice.name]: userInterfaceSlice.reducer
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     immutableCheck: { warnAfter: 128 },
  //     serializableCheck: { warnAfter: 128 }
  //   }),
  devTools: process.env.NODE_ENV !== 'production'
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
