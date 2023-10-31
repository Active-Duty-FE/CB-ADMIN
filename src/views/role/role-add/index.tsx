import AInput from '@/components/common/form/a-input'
import ModalBox from '@/components/common/modal/modal-box'
import { roleListKeys, userListKeys } from '@/keys'
import { appRequest } from '@/service'
import { Close, Refresh } from '@mui/icons-material'
import { Backdrop, Button, IconButton, Modal, Tooltip } from '@mui/material'
import { Form, Formik } from 'formik'
import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { useQueryClient } from 'react-query'
import FormModal from '../common/form-modal'

interface IProps {
  children?: ReactNode
}

const AddRole: FC<IProps> = memo(() => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="flex">
        <Button className="h-14" variant="contained" onClick={() => setOpen(true)}>
          역할 추가
        </Button>
      </div>
      <FormModal open={open} setOpen={setOpen} type="create" />
    </>
  )
})

export default AddRole

AddRole.displayName = 'AddRole'
