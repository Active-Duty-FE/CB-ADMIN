import { Button } from '@mui/material'
import { Form, redirect, useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate()
  const handleLogout = () => {
    window.localStorage.setItem('token', '')
    navigate('/login')
  }
  return (
    <div className="fixed top-0 left-0 z-10 w-full h-16 box-border bg-[#363d40] flex px-10 items-center justify-between">
      <h1 className="text-white m-0">관리자 시스템</h1>
      <Form>
        <Button type="submit" className="" variant="contained" onClick={handleLogout}>
          로그아웃
        </Button>
      </Form>
    </div>
  )
}

export default Header
