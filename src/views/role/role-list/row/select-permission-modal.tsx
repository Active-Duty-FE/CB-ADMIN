import ModalBox from '@/components/common/modal/modal-box'
import { Modal } from '@mui/material'
import React, { memo } from 'react'
import type { Dispatch, FC, ReactNode, SetStateAction } from 'react'

interface IProps {
  children?: ReactNode
  open: boolean
  setSelectedPermissionsModalOpen: Dispatch<SetStateAction<boolean>>
}

const SelectPermissionModal: FC<IProps> = memo(({ open }) => {
  return (
    <div>
      <Modal open={false}>
        <ModalBox></ModalBox>
      </Modal>
    </div>
  )
})

export default SelectPermissionModal

SelectPermissionModal.displayName = 'SelectPermissionModal'
