## 어드민 시스템

테스트아이디: admin 비밀번호: 123456

#### 프로젝트 설명

상품 판매사이트의 어드만 시스템으로써 관리자, 상품, 주문등을 관리 할수 있는 웹 어프리케이션.

#### 사용한 스택

| 분류     | 스택                                                                     |
| -------- | ------------------------------------------------------------------------ |
| 기본     | react + typescirpt + react-router-dom + tailwindcss + materialUI         |
| 네트워크 | reacy-query                                                              |
| 상태관리 | reduxjs/toolkit                                                          |
| 기타     | formik(form control and submit) + yup(schema) + crypto-js(로그인 암호화) |

#### 기술 사용 이유

| 종류     | 스택               | 이유                                                                  |
| -------- | ------------------ | --------------------------------------------------------------------- |
| 기본     | react, Material UI | Material UI 와 Tailwindcss 의 조합이 UI를 만들기에 가장 빠르다고 판단 |
| 네트워크 | react-query        | caching이 아주 뛰어난 기술                                            |
| 상태관리 | reduxjs/toolkit    | 사용하기 간편                                                         |

#### TODOLIST

- [ ] 전역
  - [ ] alert 메세지 component로 대체
  - [ ] Reselect로 redux 코드 최적화
- [x] 레이아웃
- [x] 로그인
- [ ] 홈
  - [ ] welcome이미지 넣기
- [x] 관리자 리스트
- [ ] 권한관리 롤 리스트
  - [x] 롤 삭제 확인 절차 추가
  - [ ] 롤 권한부여
  - [ ] div cannot be nested in a tbody 에러 잡기
- [ ] 권한관리 리스트
- [ ] 상품관리 리스트
- [ ] 상품관리 파라미터
- [ ] 상품관리 분류
- [ ] 주문 리스트
- [ ] 데이터 리스트
