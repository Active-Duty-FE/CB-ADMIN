## 어드민 시스템

### (아이디: admin 비밀번호: 123456)

#### 사용한 스택

주요: react + typescirpt + lodash + react-router-dom + axios(intercepter 넣은 캡슐화 버전) + tailwindcss + materialUI

유틸: formik(form control and submit) + yup(schema) + crypto-js(로그인 암호화)

configuration: create-react-app + craco + prettier

### 프로젝트 설명

#### 기술 사용 설명

기본 Material UI를 바탕으로 UX가 업그레이드 된 컴포넌트를 만들어 적용시켰고 react-query를 사용하여 caching을 함으로써 렌더링 속도를 더 향상 시킴

| 종류     | 스택               | 이유                                                                                    |
| -------- | ------------------ | --------------------------------------------------------------------------------------- |
| 기본     | react, Material UI | 중국에서는 많이 쓰지 않지만 세계적으로 가장 많이 쓰는 UI를 체험하고 싶어서 Matireial UI |
| 네트워크 | react-query        | caching이 아주 뛰어난 기술이지만 업무에서 사용 해 본적이 없어서 체험 목적               |
