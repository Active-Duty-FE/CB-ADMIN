import React, { useEffect, useRef, useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import router from './router'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ErrorBoundary } from 'react-error-boundary'
import { useAppSelector } from './hooks/store'
import { Fade, Snackbar } from '@mui/material'
import { SnackbarProvider, useSnackbar } from 'notistack'
type SnackBar = {
  open: boolean
  msg: string
}
function App() {
  const { enqueueSnackbar } = useSnackbar()
  const isFirstLoad = useRef(true)
  const { meta } = useAppSelector((state) => {
    return {
      meta: state.metaSlice
    }
  })
  const isSuccessType = /^2\d+/.test(meta.status.toString())
  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false
      return
    }
    enqueueSnackbar(meta.msg, {
      variant: isSuccessType ? 'success' : 'warning',
      autoHideDuration: isSuccessType ? 1000 : 5000
    })
  }, [meta.switch])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
