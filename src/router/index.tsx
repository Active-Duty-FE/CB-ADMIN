import Main from '@/views/main'
import Login from '@/views/login'
import { createBrowserRouter } from 'react-router-dom'
import Layout from '@/views/layout'
import UserList from '@/views/user/user-list'
import ErrorEl from '@/components/layout/error-el'
import AuthRoute from '@/components/layout/auth-route'
// import { loader as userListLoader } from '@/views/user-manage/user-list'
import { QueryClient } from 'react-query'
import RoleList from '@/views/role/role-list'
import Role from '@/views/role'
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      useErrorBoundary: true
    }
  }
})
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AuthRoute>
        <Layout />
      </AuthRoute>
    ),
    children: [
      {
        index: true,
        element: <Main />
      },
      {
        path: '/user-list',
        element: <UserList />
      },
      {
        path: '/role-list',
        element: <Role />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '*',
    element: <div>error</div>
  }
])
export default router
