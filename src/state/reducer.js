import {
  combineReducers
} from 'redux'
import {
  routerReducer
} from 'react-router-redux'
import authReducer, {
  STATE_KEY as AUTH_STATE_KEY
} from './modules/auth'
import loadingReducer, {
  STATE_KEY as LOADING_STATE_KEY
} from './modules/loading'
import loginReducer, {
  STATE_KEY as LOGIN_STATE_KEY
} from './modules/login'
import porfolioReducer, {
  STATE_KEY as PORFOLIO_STATE_KEY
} from './modules/porfolio'
import porfolioListingReducer, {
  STATE_KEY as PORFOLIO_LISTING_STATE_KEY
} from './modules/porfolio/porfolio-listing'

export default combineReducers({
  routing: routerReducer,
  [AUTH_STATE_KEY]: authReducer,
  [LOADING_STATE_KEY]: loadingReducer,
  [LOGIN_STATE_KEY]: loginReducer,
  [PORFOLIO_STATE_KEY]: porfolioReducer,
  [PORFOLIO_LISTING_STATE_KEY]: porfolioListingReducer
})