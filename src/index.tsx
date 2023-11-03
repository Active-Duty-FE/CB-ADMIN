import React, { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { StyledEngineProvider, createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@emotion/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { queryClient } from './router'
import { ErrorBoundary } from 'react-error-boundary'
import { Provider } from 'react-redux'
import store from './store'
import { SnackbarProvider, useSnackbar } from 'notistack'
import { useAppSelector } from './hooks/store'
const rootElement = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(rootElement)
const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#409fff',
      dark: '#002884',
      contrastText: '#fff'
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000'
    }
  },
  components: {
    MuiPopover: {
      defaultProps: {
        container: rootElement
      }
    },
    MuiPopper: {
      defaultProps: {
        container: rootElement
      }
    },
    MuiDialog: {
      defaultProps: {
        container: rootElement
      }
    },
    MuiModal: {
      defaultProps: {
        container: rootElement
      }
    }
  }
})

root.render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <ErrorBoundary fallback={<div>fallback render</div>}>
      <QueryClientProvider client={queryClient}>
        <StyledEngineProvider injectFirst>
          <Provider store={store}>
            <SnackbarProvider anchorOrigin={{ horizontal: 'center', vertical: 'top' }}>
              <App />
            </SnackbarProvider>
          </Provider>
        </StyledEngineProvider>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProvider>
    </ErrorBoundary>
  </ThemeProvider>
  // </React.StrictMode>
)
