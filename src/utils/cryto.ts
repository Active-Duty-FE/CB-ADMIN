import CryptoJS from 'crypto-js'

export function encrypt(data: Object, privateKey: string) {
  return CryptoJS.AES.encrypt(JSON.stringify(data), privateKey).toString()
}
export const decrypt: (encryptData: string, privateKey: string) => { token: string; time: number } = (
  encryptData: string,
  privateKey: string
) => {
  const bytes = CryptoJS.AES.decrypt(encryptData, privateKey)
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
}
