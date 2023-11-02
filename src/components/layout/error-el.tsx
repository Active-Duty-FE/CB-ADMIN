import { useNavigate, useRouteError } from 'react-router-dom'
import Header from './header'
import Siderbar from './siderbar'
import { useEffect } from 'react'

function ErrorEl() {
  const navigate = useNavigate()
  const error: any = useRouteError()

  useEffect(() => {
    if (error.message === 'invalid token') {
      window.localStorage.setItem('token', '')
      navigate('/login')
    }
  }, [error])
  return (
    <div className="">
      <Header />
      <div className="fixed left-0 top-16">
        <Siderbar />
      </div>
      <div className="pt-16 pl-[200px]">{error.message}</div>
    </div>
  )
}

export default ErrorEl
