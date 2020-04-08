import Cookies from 'js-cookie'
import sha1 from 'js-sha1'
const accessToken = "token"
//token设置
export function getToken(status) {
	return Cookies.get(status ? status : accessToken)
}

export function setToken(token) {
	return Cookies.set(accessToken, token)
}

export function removeToken() {
	return Cookies.remove(accessToken)
}

// 加密
export function encryptionReqext(value) {
  return sha1(value)
}
