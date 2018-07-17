import Auth from './index'

export default new Auth()

export function isAuthenticated({ accessToken, expiresAt }) {
  return accessToken != null && new Date().getTime() < expiresAt
}

export function checkSession() {
  // Check whether the current time is past the
  // access token's expiry time
  let accessToken = localStorage.getItem('access_token')
  let expiresAt = JSON.parse(localStorage.getItem('expires_at') || 0)
  return isAuthenticated({ accessToken, expiresAt })
}

export function isCallbackFromAuth(location = {}) {
  return /access_token|id_token|error/.test(location.hash)
}
