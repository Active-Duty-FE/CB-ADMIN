import Header from '../../components/layout/header'
import Siderbar from '../../components/layout/siderbar'
import { Outlet, useLocation, useRoutes } from 'react-router-dom'
import { useEffect, useState } from 'react'

function delayClass(str: string) {
  const now = new Date().getTime()
  // while (new Date().getTime() - now < 500) {}
  return str
}
function Layout() {
  const [collapsed, setCollapsed] = useState(false)
  const [paddingLeft, setPaddingLeft] = useState('200px')
  const pathname = useLocation().pathname

  useEffect(() => {
    if (collapsed) {
      setPaddingLeft('81')
    } else {
      setPaddingLeft('[200px]')
    }
  }, [collapsed])
  return (
    <div className="">
      <Header />
      <div className="fixed left-0 top-16">
        <Siderbar collapsed={collapsed} setCollapsed={setCollapsed} pathname={pathname} />
      </div>
      <div className={`pt-16 pl-${paddingLeft} duration-500`}>
        <div className="p-7">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout
