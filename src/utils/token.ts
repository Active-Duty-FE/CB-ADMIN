import { decrypt } from './cryto'

export function verifyToken() {
  const token = window.localStorage.getItem('token')
  if (token && token !== '') {
    const data = decrypt(token, 'my-token')
    const now = new Date().getTime()
    const duration = now - data.time
    if (duration > 24 * 60 * 60 * 1000) {
      window.localStorage.setItem('token', '')
      return false
    } else {
      return true
    }
  } else {
    return false
  }
}
