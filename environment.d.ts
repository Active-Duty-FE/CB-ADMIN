declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACTAPP_P: string
      REACT_APP_BASE_URL: string
      TIMEOUT: string
      REACT_APP_BASE_URL_ROLA_URL: string
    }
  }
}
export {}
