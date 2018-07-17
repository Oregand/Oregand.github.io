import { combineEpics } from 'redux-observable'
import * as ajax from '../utils/ajax'
import auth401toLogoutEpic from './utils/authorization'
import { loginRootEpic } from './modules/login'

// the {ajax} injection it there to allow mocking it in unit tests
export default (...args) =>
  combineEpics(
    auth401toLogoutEpic,
    loginRootEpic,
  )(...args, {
    ajax,
  })
