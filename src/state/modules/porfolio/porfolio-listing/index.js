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
import { porfolioPaths } from '../../../../containers/Porfolio/urls'
import { porfolioItems } from '../utils'

const REQUEST_PORFOLIO_UPDATE = 'porfolio/REQUEST_PORFOLIO_UPDATE'
const PORFOLIO_UPDATE = 'porfolio/PORFOLIO_UPDATE'

/**
 * Initial State for porfolio
 *
 */
const initialState = {
  porfolioItems: [],
  isLoading: false
}

/**
 * STATE KEY
 */
export const STATE_KEY = 'porfolioListing'

/**
 * Reducer
 * @param state
 * @param action
 * @return {*}
 */
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_PORFOLIO_UPDATE:
      return {
        ...state,
        isLoading: true
      }
    case PORFOLIO_UPDATE:
      return {
        ...state,
        isLoading: false,
        porfolioItems: action.porfolioItems
      }
    default:
      return state
  }
}

// Action Creators
export function requestPorfolioUpdate() {
  return {
    type: REQUEST_PORFOLIO_UPDATE
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
const updatePorfolioEpic = (action$, store, { ajax }) =>
  action$
    .ofType(REQUEST_PORFOLIO_UPDATE)
    .switchMapTo(
      porfolioItems
    )
    .map(porfolioItems => ({ type: PORFOLIO_UPDATE, porfolioItems }))

const fetchPorfolioOnInitialLoadEpic = action$ =>
  action$
    .ofType(LOCATION_CHANGE)
    .map(({ payload }) => payload.pathname)
    .filter(pathname => pathname.indexOf(porfolioPaths.porfolioListing) > -1)
    .take(1)
    .mapTo({ type: REQUEST_PORFOLIO_UPDATE })

// Export a combined epic, less boilerplate in the rootEpic file
export const porfolioListingRootEpic = combineEpics(
  updatePorfolioEpic,
  fetchPorfolioOnInitialLoadEpic
)

/**
 * For testing purposes, we need individual epics and types
 * @type {{types: {REQUEST_PORFOLIO_UPDATE: string, PORFOLIO_UPDATE: string, SELECT_STORE: string, UNSELECT_STORE: string, SEARCH_STORE: string, SEARCH_PORFOLIO_RESULTS: string, EDIT_SELECTED_STORE: string}, epics: {getPorfolioSearchResultEpic: function(*, *): Observable<any>, fetchPorfolioOnInitialLoadEpic: function(*): Observable<{type: string}>, updatePorfolioEpic: function(*, *, {ajax?: *}): Observable<{type: string, Porfolio: any}>}}}
 * @private
 */
export const __test = {
  types: {
    REQUEST_PORFOLIO_UPDATE,
    PORFOLIO_UPDATE
  },
  epics: {
    fetchPorfolioOnInitialLoadEpic,
    updatePorfolioEpic
  }
}
