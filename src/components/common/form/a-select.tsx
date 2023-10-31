import { Select } from '@mui/material'
import { useField } from 'formik'
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

const ASelect = memo((props: any) => {
  const [field, meta] = useField(props)
  return <Select {...props} {...field}></Select>
})

export default ASelect

ASelect.displayName = 'ASelect'
