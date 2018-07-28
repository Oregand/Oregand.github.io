// @flow

import 'rxjs/add/operator/mapTo'
import 'rxjs/add/operator/switchMapTo'
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/take'
import 'rxjs/add/operator/pluck'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/retry'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import { LOCATION_CHANGE } from 'react-router-redux'
import { combineEpics } from 'redux-observable'
import { portfolioPaths } from '../../../../containers/Portfolio/urls'
import { portfolioItems } from '../utils'

const REQUEST_PORTFOLIO_UPDATE = 'portfolio/REQUEST_PORTFOLIO_UPDATE'
const PORTFOLIO_UPDATE = 'portfolio/PORTFOLIO_UPDATE'

/**
 * Initial State for portfolio
 *
 */
const initialState = {
  portfolioItems: [],
  isLoading: false
}

/**
 * STATE KEY
 */
export const STATE_KEY = 'portfolioListing'

/**
 * Reducer
 * @param state
 * @param action
 * @return {*}
 */
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_PORTFOLIO_UPDATE:
      return {
        ...state,
        isLoading: true
      }
    case PORTFOLIO_UPDATE:
      return {
        ...state,
        isLoading: false,
        portfolioItems: action.portfolioItems
      }
    default:
      return state
  }
}

// Action Creators
export function requestportfolioUpdate() {
  return {
    type: REQUEST_PORTFOLIO_UPDATE
  }
}

// Epics
/**
 * Keeps the current step in sync with the current router location
 * Looks for the step.path presence in the current location.pathname
 * @param action$
 * @param store
 * @return {Observable<any>}
 */
const updatePortfolioEpic = (action$, store, { ajax }) =>
  action$
    .ofType(REQUEST_PORTFOLIO_UPDATE)
    .switchMapTo(
      Object.values(portfolioItems)
    )
    .map(portfolioItems => ({ type: PORTFOLIO_UPDATE, portfolioItems }))

const fetchPortfolioOnInitialLoadEpic = action$ =>
  action$
    .ofType(LOCATION_CHANGE)
    .map(({ payload }) => payload.pathname)
    .filter(pathname => pathname.indexOf(portfolioPaths.portfolioListing) > -1)
    .take(1)
    .mapTo({ type: REQUEST_PORTFOLIO_UPDATE })

// Export a combined epic, less boilerplate in the rootEpic file
export const portfolioListingRootEpic = combineEpics(
  updatePortfolioEpic,
  fetchPortfolioOnInitialLoadEpic
)

/**
 * For testing purposes, we need individual epics and types
 * @type {{types: {REQUEST_PORTFOLIO_UPDATE: string, PORTFOLIO_UPDATE: string, SELECT_STORE: string, UNSELECT_STORE: string, SEARCH_STORE: string, SEARCH_PORTFOLIO_RESULTS: string, EDIT_SELECTED_STORE: string}, epics: {getportfolioSearchResultEpic: function(*, *): Observable<any>, fetchPortfolioOnInitialLoadEpic: function(*): Observable<{type: string}>, updatePortfolioEpic: function(*, *, {ajax?: *}): Observable<{type: string, portfolio: any}>}}}
 * @private
 */
export const __test = {
  types: {
    REQUEST_PORTFOLIO_UPDATE,
    PORTFOLIO_UPDATE
  },
  epics: {
    fetchPortfolioOnInitialLoadEpic,
    updatePortfolioEpic
  }
}
