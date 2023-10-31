import AInput from '@/components/common/form/a-input'
import ModalBox from '@/components/common/modal/modal-box'
import { userListKeys } from '@/keys'
import { createUserSchema } from '@/schema'
import { appRequest } from '@/service'
import { CreateUser } from '@/types'
import { Close, Refresh } from '@mui/icons-material'
import { Backdrop, Button, IconButton, Modal, Tooltip } from '@mui/material'
import { Form, Formik } from 'formik'
import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { useQueryClient } from 'react-query'

interface IProps {
  children?: ReactNode
  setAddedNewFn: (added: boolean) => void
  totalCount: number
  setTotalCount: (total: number) => void
}

const AddUser: FC<IProps> = memo(({ totalCount, setTotalCount, setAddedNewFn }) => {
  const queryClient = useQueryClient()
  const [open, setOpen] = useState(false)
  const handleClose = () => {
    setOpen(false)
  }
  const submitForm = (value: CreateUser) => {
    queryClient
      .fetchQuery({ queryKey: userListKeys.add(value), queryFn: () => appRequest.post('/users', { data: value }) })
      .then((res) => {
        alert('创建成功')
        setOpen(false)
        setAddedNewFn(true)
        setTotalCount(totalCount + 1)
        // queryClient.prefetchQuery({ queryKey: userListKeys.list({ pagenum: pagenum - 1, pagesize, query: keyword }) })
      })
  }

  return (
    <>
      <div className="flex">
        <Button className="h-14" variant="contained" onClick={() => setOpen(true)}>
          관리자 추가
        </Button>
      </div>
      <Backdrop open={open} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        hideBackdrop={true}
      >
        <ModalBox>
          <Formik
            initialValues={{ username: '', password: '', email: '', mobile: '' }}
            onSubmit={submitForm}
            validationSchema={createUserSchema}
          >
            {(formkik) => (
              <Form>
                <div className="flex flex-col">
                  <AInput className="" label="ID" name="username" placeholder="ID를 입력하세요."></AInput>
                  <AInput
                    className="mt-2"
                    label="PW"
                    name="password"
                    placeholder="비밀번호를 입력하세요."
                    type="password"
                  ></AInput>
                  <AInput className="mt-2" label="E-MAIL" name="email" placeholder="이메일을 입력하세요."></AInput>
                  <AInput className="mt-2" label="PHONE" name="mobile" placeholder="핸드폰 번호를 입력하세요."></AInput>
                  <div className="flex items-center mt-3 ">
                    <Button className="flex-1" variant="contained" type="submit">
                      새로 만들기
                    </Button>
                    <Tooltip className="ml-2" title="리셋" placement="top">
                      <IconButton onClick={() => formkik.resetForm()}>
                        <Refresh />
                      </IconButton>
                    </Tooltip>
                  </div>
                  <IconButton className="absolute right-2 top-2" onClick={() => setOpen(false)}>
                    <Close />
                  </IconButton>
                </div>
              </Form>
            )}
          </Formik>
        </ModalBox>
      </Modal>
    </>
  )
})

export default AddUser

AddUser.displayName = 'AddUser'
