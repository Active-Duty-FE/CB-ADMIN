import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { useQueryClient } from 'react-query'
import type { ChangeEvent, FC, ReactNode } from 'react'
import { Backdrop, Button, Modal, Portal } from '@mui/material'
import { Form, Formik, FormikProps } from 'formik'

import AInput from '@/components/common/form/a-input'
import ModalBox from '@/components/common/modal/modal-box'
import ModalClose from '@/components/common/modal/modal-close'
import { object, string } from 'yup'
import { keywordSchema } from '@/schema'
import { userListKeys } from '@/keys'
import { appRequest } from '@/service'
import { SearchForm } from '@/types'

interface IProps {
  children?: ReactNode
  searchFn: (keyword: string) => void
  setKeyword: (keyword: string) => void
  setIsKeywordFocused: (isKeywordFocused: boolean) => void
  isKeywordFocused: boolean
}

const SearchUser: FC<IProps> = memo(({ searchFn, setKeyword, setIsKeywordFocused }) => {
  // const [blurWithEmpty, setBlurWithEmpty] = useState(true)
  const searchButtonRef = useRef<HTMLButtonElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)
  {
    /*const checkSearchBlur = (event: MouseEvent) => {
    event.stopPropagation()
    if (searchButtonRef.current && event.target !== searchButtonRef.current && keyword === '') {
      setBlurWithEmpty(false)
    } else {
      setBlurWithEmpty(true)
      setIsKeywordFocused(true)
      setIsKeywordFocused(false)
    }
    if (searchInputRef.current && event.target === searchInputRef.current) {
      setIsKeywordFocused(true)
    }
  }*/
  }
  const submitFormHandler = (value: { keyword: string }) => {
    searchFn(value.keyword)
  }
  {
    /*useEffect(() => {
    document.addEventListener('click', checkSearchBlur)
    return () => {
      document.removeEventListener('click', checkSearchBlur)
    }
  }, [])*/
  }
  return (
    <div>
      <Formik
        initialValues={{ keyword: '' }}
        validationSchema={keywordSchema}
        onSubmit={submitFormHandler}
        validateOnBlur={false}
        validateOnChange={false}
      >
        {(formik) => (
          <Form className="flex">
            <AInput
              ref={searchInputRef}
              // blurwithempty={blurWithEmpty.toString()}
              name="keyword"
              type="text"
              placeholder="ID를 입력하세요."
            />
            <Button type="submit" ref={searchButtonRef} className="ml-4 h-14" variant="contained">
              검색
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  )
})

export default SearchUser

SearchUser.displayName = 'SearchUser'
