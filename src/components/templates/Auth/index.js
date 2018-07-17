import auth0 from 'auth0-js'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import 'rxjs/add/observable/never'
import 'rxjs/add/observable/of'
import 'rxjs/add/operator/delay'
import 'rxjs/add/operator/concat'
import { history } from '../../../state/store'
import { AUTH_CONFIG } from './auth0-variables'

const loggedOutAuthObject = {
  accessToken: null,
  idToken: null,
  expiresIn: -1,
  expiresAt: null
}

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: AUTH_CONFIG.domain,
    clientID: AUTH_CONFIG.clientId,
    redirectUri: AUTH_CONFIG.callbackUrl,
    audience: `https://${AUTH_CONFIG.domain}/api/v2/`,
    responseType: 'token id_token',
    scope: 'openid'
  })

  constructor() {
    const accessToken = localStorage.getItem('access_token')
    const idToken = localStorage.getItem('id_token')
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'))
    this.authSubject = new BehaviorSubject({ accessToken, idToken, expiresAt })
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
    this.handleAuthentication = this.handleAuthentication.bind(this)
    this.isAuthenticated = this.isAuthenticated.bind(this)
  }

  login() {
    this.auth0.authorize()
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult)
        history.push('/dashboard')
      } else if (err) {
        history.push('/')
        console.log(err)
        alert(`Error: ${err.error}. Check the console for further details.`)
      }
    })
  }

  setSession(authResult) {
    // Set the time that the access token will expire at
    const { expiresIn, accessToken, idToken } = authResult
    let expiresAt = JSON.stringify(expiresIn * 1000 + new Date().getTime())
    localStorage.setItem('access_token', accessToken)
    localStorage.setItem('id_token', idToken)
    localStorage.setItem('expires_at', expiresAt)
    this.authSubject.next({ accessToken, idToken, expiresAt })
    // navigate to the home route
    history.push('/')
  }

  clearSession() {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token')
    localStorage.removeItem('id_token')
    localStorage.removeItem('expires_at')
    this.authSubject.next(loggedOutAuthObject)
  }

  logout() {
    this.clearSession()
    // navigate to the home route
    history.push('/')
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at') || 0)
    const isAuthenticated = new Date().getTime() < expiresAt
    if (!isAuthenticated) {
      this.clearSession()
    }
    return isAuthenticated
  }
}
