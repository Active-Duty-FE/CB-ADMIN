import AInput from '@/components/common/form/a-input'
import { useAppSelector } from '@/hooks/store'
import { loginSchema } from '@/schema'
import { appRequest } from '@/service'
import { LoginData, SetSubmitting } from '@/types'
import { Response, User } from '@/types/ResponseType'
import { decrypt, encrypt } from '@/utils/cryto'
import { verifyToken } from '@/utils/token'
import { AccountCircle, Lock, Visibility, VisibilityOff } from '@mui/icons-material'
import { Button, IconButton, InputAdornment, Paper, Snackbar } from '@mui/material'
import { Formik, Form } from 'formik'
import { useEffect, useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { Navigate, useNavigate } from 'react-router-dom'

function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const isAuth = verifyToken()
  const navigate = useNavigate()
  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }
  const queryClient = useQueryClient()

  if (isAuth) {
    return <Navigate to={'/'} />
  }

  const submitHandler = async (values: LoginData, { setSubmitting }: { setSubmitting: SetSubmitting }) => {
    setLoading(true)
    try {
      const {
        data: { data, meta }
      } = await queryClient.fetchQuery({
        queryFn: () => appRequest.post<Response<User>>('/login', { data: values }),
        staleTime: 0
      })
      if (meta.status === 200) {
        const token = data.token
        window.localStorage.setItem('token', encrypt({ token, time: new Date().getTime() }, 'my-token'))
        navigate('/')
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-blue-900 w-screen h-screen flex justify-center items-center ">
      <Paper elevation={10} className="p-4 min-w-[300px]">
        <h1 className="text-center">관리자 시스템</h1>
        <Formik
          initialValues={{
            username: '',
            password: ''
          }}
          validationSchema={loginSchema}
          onSubmit={submitHandler}
        >
          <Form className="flex flex-col">
            <AInput
              label="ID"
              name="username"
              type="text"
              placeholder="ID를 입력하세요."
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                )
              }}
            />
            <AInput
              className="mt-4"
              label="PW"
              name="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="비밀번호를 입력하세요."
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            <Button className="mt-4" type="submit" disabled={loading ? true : false}>
              확인
            </Button>
          </Form>
        </Formik>
        <div className="">id: admin, pw: 123456</div>
        <div className="text-red-400">
          서버기한이 만료되어 연장 중이니 현재 페이지가
          <br /> 옳바르게 작동되지 않는 점 양해 부탁드립니다.
        </div>
        <div className="text-red-400">긴급 복구중입니다.</div>
      </Paper>
    </div>
  )
}
export default Login
