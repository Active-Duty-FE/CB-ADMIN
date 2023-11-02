import React, { useEffect, useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import router from './router'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ErrorBoundary } from 'react-error-boundary'
import { useAppSelector } from './hooks/store'
import { Fade, Snackbar } from '@mui/material'

function App() {
  const [alertOpen, setAlertOpen] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const { meta } = useAppSelector((state) => {
    return {
      meta: state.metaSlice
    }
  })

  useEffect(() => {
    setAlertOpen(true)
    setAlertMessage(meta.msg)
  }, [meta.switch])
  const handleSnackBarClose = () => {
    setAlertOpen(false)
  }
  return (
    <div>
      <RouterProvider router={router} />
      <Snackbar
        autoHideDuration={2000}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={alertOpen}
        message={alertMessage}
        key="topcenter"
        onClose={handleSnackBarClose}
        TransitionComponent={Fade}
      />
    </div>
  )
}

export default App
