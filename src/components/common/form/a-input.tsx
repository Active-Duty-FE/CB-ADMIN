import { TextField } from '@mui/material'
import { useField } from 'formik'
import React, { forwardRef, memo, useEffect } from 'react'

const AInput = memo(
  forwardRef((props: any, ref) => {
    const [field, meta] = useField(props)
    return (
      <>
        {/* <TextField
          inputRef={ref}
          error={props.blurwithempty === 'true' && meta.error && meta.touched}
          helperText={props.blurwithempty === 'true' && meta.error && meta.touched && `${meta.error}`}
          {...field}
          {...props}
        /> */}
        <TextField
          inputRef={ref}
          error={meta.error && meta.touched}
          helperText={meta.error && meta.touched && `${meta.error}`}
          {...field}
          {...props}
        />
      </>
    )
  })
)

export default AInput

AInput.displayName = 'AInput'
