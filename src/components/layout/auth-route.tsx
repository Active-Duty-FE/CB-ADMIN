import { verifyToken } from '@/utils/token'
import { ReactNode, useEffect } from 'react'
import { Navigate } from 'react-router-dom'

function AuthRoute({ children }: { children: ReactNode }) {
  const isAuth = verifyToken()
  if (isAuth) {
    return <>{children}</>
  } else {
    return <Navigate to="/login" />
  }
}

export default AuthRoute
