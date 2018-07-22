import { combineEpics } from 'redux-observable'
import * as ajax from '../utils/ajax'
import auth401toLogoutEpic from './utils/authorization'
import { loginRootEpic } from './modules/login'
import { porfolioListingRootEpic } from './modules/porfolio/porfolio-listing'

// the {ajax} injection it there to allow mocking it in unit tests
export default (...args) =>
  combineEpics(
    auth401toLogoutEpic,
    loginRootEpic,
    porfolioListingRootEpic
  )(...args, {
    ajax,
  })
