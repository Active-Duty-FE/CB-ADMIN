import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { StyledEngineProvider, createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@emotion/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { queryClient } from './router'
import { ErrorBoundary } from 'react-error-boundary'
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
function fallbackRender() {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.

  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>error</pre>
    </div>
  )
}
root.render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <ErrorBoundary fallback={<div>fallback render</div>}>
      <QueryClientProvider client={queryClient}>
        <StyledEngineProvider injectFirst>
          <App />
        </StyledEngineProvider>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProvider>
    </ErrorBoundary>
  </ThemeProvider>
  // </React.StrictMode>
)
