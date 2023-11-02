import {
  Box,
  Button,
  Chip,
  Collapse,
  Dialog,
  DialogActions,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from '@mui/material'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import BuildCircleIcon from '@mui/icons-material/BuildCircle'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import React, { memo, useEffect, useRef, useState } from 'react'
import type { FC, MouseEvent, ReactNode } from 'react'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { RoleParent, RoleChild, Response } from '@/types/ResponseType'
import CollapsedRow from './collapsed-row'
import { ArrowRightOutlined } from '@mui/icons-material'
import { border } from '@mui/system'
import FormModal from '../../common/form-modal'
import { queryClient } from '@/router'
import { appRequest } from '@/service'
import { roleListKeys } from '@/keys'
import SelectPermissionModal from './select-permission-modal'
import ConfirmDialog from '@/components/common/confirm-dailog'
import { useAppDispatch, useAppSelector } from '@/hooks/store'
import { updateMetaSlice } from '@/store/modules/meta'
import { useSelector } from 'react-redux'
interface IProps {
  children?: ReactNode
  row: RoleParent
  index: number
  expanded: boolean
}

const Row: FC<IProps> = memo((props) => {
  const { row, index, expanded } = props
  const [open, setOpen] = React.useState(false)
  const [popupOpen, setPopupOpen] = useState(false)
  const [confirmOpen, setConfirmOpen] = useState(false)
  const [deleteId, setDeleteId] = useState(NaN)
  const [selectedPermissionsModalOpen, setSelectedPermissionsModalOpen] = useState(false)
  const appDispatch = useAppDispatch()
  const { metaSwitch } = useAppSelector((state) => {
    return {
      metaSwitch: state.metaSlice.switch
    }
  })
  const roleDescRef = useRef<HTMLTableCellElement>()
  const checkHasChildren = (roleChild: RoleChild[]) => {
    for (const item of roleChild) {
      if (item.children) {
        return true
      }
      return false
    }
  }

  const generateBorderClass = (roleChild: RoleChild[], index: number) => {
    let borderClass = ''
    if (checkHasChildren(roleChild)) {
      borderClass += 'border-stone-200 border border-solid border-t-0 border-l-0 border-r-0'
      if (roleChild.length === index + 1) {
        borderClass += ' border-b-0'
      }
    }
    return borderClass
  }
  const generateTreeData = (roleChildren: RoleChild[], roleId: number) => {
    return (
      <div className={checkHasChildren(roleChildren) ? '' : 'flex flex-row flex-wrap m-w-[1000px]'}>
        {roleChildren.map((roleChild, i) => (
          <div key={roleChild.id} className={`flex items-center ${generateBorderClass(roleChildren, i)}`}>
            <CollapsedRow roleId={roleId} roleChild={roleChild} />
            {checkHasChildren(roleChildren) ? <ArrowRightOutlined /> : <></>}
            {roleChild.children && generateTreeData(roleChild.children, row.id)}
          </div>
        ))}
      </div>
    )
  }
  useEffect(() => {
    setOpen(false)
  }, [expanded])
  const editRoleHandler = (e: MouseEvent) => {
    e.stopPropagation()
    setPopupOpen(true)
  }
  const deleteRoleHandler = (e: MouseEvent, roleId: number) => {
    e.stopPropagation()
    setDeleteId(roleId)
    setConfirmOpen(true)
  }
  const confirmDeleteRole = (roleId: number) => {
    queryClient.fetchQuery({
      queryKey: [roleListKeys.all, 'delete', roleId],
      queryFn: () =>
        appRequest.delete<Response>(`/roles/${roleId}`).then((res) => {
          appDispatch(updateMetaSlice({ ...res.data.meta, switch: !metaSwitch }))
          queryClient.invalidateQueries(roleListKeys.lists())
        })
    })
  }
  const distributeRoleHandler = (e: MouseEvent, roleId: number) => {
    e.stopPropagation()
  }
  return (
    <React.Fragment>
      <TableRow
        className={`hover:bg-slate-200 cursor-pointer ${index % 2 === 0 ? 'bg-slate-50' : ''}`}
        onClick={() => setOpen(!open)}
      >
        <TableCell>{open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}</TableCell>
        <TableCell>{index + 1}</TableCell>
        <TableCell align="center">{row.roleName}</TableCell>
        <TableCell ref={roleDescRef} align="center">
          {row.roleDesc}
        </TableCell>
        <TableCell align="center">
          <Button onClick={(e) => editRoleHandler(e)}>
            <BorderColorIcon />
          </Button>
          <Button onClick={(e) => deleteRoleHandler(e, row.id)}>
            <DeleteForeverIcon />
          </Button>
          <Button onClick={(e) => distributeRoleHandler(e, row.id)}>
            <BuildCircleIcon />
          </Button>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1, paddingY: 1, border: '1px solid #ddd', borderLeft: 0, borderRight: 0 }}>
              {generateTreeData(row.children, row.id)}
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <FormModal open={popupOpen} setOpen={setPopupOpen} type="update" defaultValue={row} />
      <SelectPermissionModal
        open={selectedPermissionsModalOpen}
        setSelectedPermissionsModalOpen={setSelectedPermissionsModalOpen}
      />
      <Dialog open={confirmOpen} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogActions>
          <Button onClick={() => confirmDeleteRole(deleteId)} autoFocus>
            확인
          </Button>
          <Button onClick={() => setConfirmOpen(false)}>취소</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
})

export default Row

Row.displayName = 'Row'
