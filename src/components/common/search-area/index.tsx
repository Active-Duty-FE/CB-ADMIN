import { keywordSchema } from '@/schema'
import { Form, Formik } from 'formik'
import React, { memo, useCallback, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import AInput from '../form/a-input'
import { Button } from '@mui/material'
import SearchModal from './search-modal'
import { SearchType } from '@/types'
import { getSearchData } from '@/service/fetchdata'

interface IProps {
  children?: ReactNode
  type: 'USER' | 'ROLE' | 'CATEGORY' | 'PRODUCT'
}

const SearchArea: FC<IProps> = memo(({ type }) => {
  const [open, setOpen] = useState(false)
  const [searchId, setSearchId] = useState('')
  const [data, setData] = useState<any>()
  const submitHandler = async (value: { keyword: string }) => {
    setOpen(true)
    setSearchId(value.keyword)
  }

  useEffect(() => {
    if (open) {
      getSearchData(type, searchId).then((res) => {
        setData(res?.data.data)
      })
    }
  }, [open])
  return (
    <div>
      <Formik
        initialValues={{ keyword: '' }}
        validationSchema={keywordSchema}
        onSubmit={submitHandler}
        validateOnBlur={false}
        validateOnChange={false}
      >
        <Form className="flex">
          <AInput name="keyword" type="text" placeholder={`PL ENTER ${type}ID`} />
          <Button className="ml-4 h-14" variant="contained" type="submit">
            查询
          </Button>
        </Form>
      </Formik>
      <SearchModal data={data} open={open} setOpen={setOpen}></SearchModal>
    </div>
  )
})

export default SearchArea

SearchArea.displayName = 'SearchArea'
