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
import portfolioReducer, {
  STATE_KEY as PORTFOLIO_STATE_KEY
} from './modules/portfolio'
import portfolioListingReducer, {
  STATE_KEY as PORTFOLIO_LISTING_STATE_KEY
} from './modules/portfolio/portfolio-listing'

export default combineReducers({
  routing: routerReducer,
  [AUTH_STATE_KEY]: authReducer,
  [LOADING_STATE_KEY]: loadingReducer,
  [LOGIN_STATE_KEY]: loginReducer,
  [PORTFOLIO_STATE_KEY]: portfolioReducer,
  [PORTFOLIO_LISTING_STATE_KEY]: portfolioListingReducer
})