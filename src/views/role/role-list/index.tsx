import { TreeItem, TreeView } from '@mui/x-tree-view'
import React, { memo, useState } from 'react'
import type { FC, MouseEvent, ReactNode } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { useRoleList } from '@/service/fetchdata'
import { RoleChild } from '@/types/ResponseType'
import {
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material'
import { Close, Refresh } from '@mui/icons-material'
import { nanoid } from 'nanoid'
import { useQueryClient } from 'react-query'
import { permissionKeys, roleListKeys } from '@/keys'
import { appRequest } from '@/service'
import ConfirmDialog from '@/components/common/confirm-dailog'
import Row from './row'

interface IProps {
  children?: ReactNode
  expanded: boolean
}

const RoleList: FC<IProps> = memo(({ expanded }) => {
  const { data } = useRoleList()
  const queryClient = useQueryClient()
  const [confirmOpen, setConfirmOpen] = useState(false)
  const [deleteId, setDeleteId] = useState(NaN)
  const [rightsId, setRightsId] = useState(NaN)
  const [confirmPosition, setConfirmPosition] = useState({ left: 0, top: 0 })

  console.log(data, 'role data')

  return (
    <TableContainer className="mt-4" component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead className="bg-slate-300">
          <TableRow>
            <TableCell width={30} />
            <TableCell width={50}>No.</TableCell>
            <TableCell align="center">역할이름</TableCell>
            <TableCell align="center">역할소개</TableCell>
            <TableCell align="center">컨트롤</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row, index) => <Row expanded={expanded} key={row.id} row={row} index={index} />)}
        </TableBody>
      </Table>
    </TableContainer>
  )
})

export default RoleList

RoleList.displayName = 'RoleList'
