import { number, object, string } from 'yup'

export const loginSchema = object({
  username: string().required('ID는 필수 입력 사항입니다.'),
  password: string().required('비밀번호는 필수 입력 사항입니다.')
})

export const userEditSchema = object({
  email: string().email().required('이메일은 필수 입력 사항입니다.'),
  mobile: string().min(11).max(11).required('핸드폰 번호는 필수 입력 사항입니다.')
})
export const keywordSchema = object({
  keyword: string().required('키워드를 입력해주세요.')
})
export const createUserSchema = object({
  username: string()
    .min(5, 'Must be between 6 ~ 20')
    .max(20, 'Must be between 6 ~ 20')
    .required('ID는 필수 입력 사항입니다.'),
  password: string()
    .min(5, 'Must be 20 characters or less')
    .max(20, 'Must be between 6 ~ 20')
    .required('비밀번호는 필수 입력 사항입니다.'),
  email: string().email().required('이메일은 필수 입력 사항입니다.'),
  mobile: string().min(11).max(11).required('핸드폰 번호는 필수 입력 사항입니다.')
})

export const RoleFormSchema = object({
  roleName: string().required(),
  roleDesc: string()
})
