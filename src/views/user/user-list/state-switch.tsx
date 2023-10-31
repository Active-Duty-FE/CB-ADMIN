import { Chip, Switch } from '@mui/material'
import React, { memo, useState } from 'react'
import type { ChangeEvent, FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
  state: boolean
  editState: boolean
}

const StateSwitch: FC<IProps> = memo(({ editState, state }) => {
  const [defaultState, setDefaultState] = useState(state)
  const changeUserState = (e: ChangeEvent<HTMLInputElement>) => {
    setDefaultState(e.target.checked)
  }
  return (
    <div className="px-4">
      {defaultState ? <Chip label="ON" color="primary" /> : <Chip label="OFF" color="primary" variant="outlined" />}
      {editState && <Switch className="ml-8" onChange={changeUserState} defaultChecked={defaultState} />}
    </div>
  )
})

export default StateSwitch

StateSwitch.displayName = 'StateSwitch'
