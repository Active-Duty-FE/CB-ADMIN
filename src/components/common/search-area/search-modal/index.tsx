import { Backdrop, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material'
import React, { memo, useCallback } from 'react'
import type { FC, ReactNode } from 'react'
import ModalBox from '../../modal/modal-box'
import ModalClose from '../../modal/modal-close'
import { styled } from 'styled-components'
import { CustomHorBody, CustomHorTable, CustomHorTableTd, CustomHorTableTh } from '@/components/styled'

interface IProps {
  children?: ReactNode
  open: boolean
  setOpen: (open: boolean) => void
  data: any
}
interface IUserItem {
  label: string
  value: string | ReactNode
}
function UserItem(props: IUserItem) {
  return (
    <span className="leading-[56px] flex mb-2">
      <span className="w-1/3 shrink-0 break-words">{props.label}:</span>
      <span className="ml-4 flex-1">{props.value}</span>
    </span>
  )
}

const SearchModal: FC<IProps> = memo(({ open, setOpen, data }) => {
  return (
    <>
      <Backdrop open={open} sx={{ zIndex: 1 }} />
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        hideBackdrop
      >
        <ModalBox>
          <CustomHorTable>
            {data
              ? Object.keys(data).map((item, index) => {
                  return (
                    <CustomHorBody
                      isLast={Object.keys(data).length - 1 === index}
                      className="flex flex-row overflow-x-auto"
                    >
                      <CustomHorTableTh className="w-[25%] sticky top-0 z-[1] break-words">
                        {item.toUpperCase()}
                      </CustomHorTableTh>
                      <CustomHorTableTd>{data[item]}</CustomHorTableTd>
                    </CustomHorBody>
                  )
                })
              : 'No such id of user, please try with another id!'}

            <ModalClose setOpen={useCallback(setOpen, [])} />
          </CustomHorTable>
        </ModalBox>
      </Modal>
    </>
  )
})
export default SearchModal

SearchModal.displayName = 'SearchModal'
