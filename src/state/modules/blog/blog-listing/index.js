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
import { blogPaths } from '../../../../containers/Blog/urls'

const REQUEST_BLOG_UPDATE = 'blog/REQUEST_BLOG_UPDATE'
const BLOG_UPDATE = 'blog/BLOG_UPDATE'

/**
 * Initial State for products
 *
 */
const initialState = {
  products: [],
  selectedProducts: [],
  searchResults: [],
  searchTerm: '',
  isProductValid: false,
  entities: {
    products: {},
    productSetup: {}
  },
  isLoading: false
}

/**
 * STATE KEY
 */
export const STATE_KEY = 'productsListing'

/**
 * Reducer
 * @param state
 * @param action
 * @return {*}
 */
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_BLOG_UPDATE:
      return {
        ...state,
        isLoading: true
      }
    case BLOG_UPDATE:
      return {
        ...state,
        isLoading: false,
        products: action.products
      }
    default:
      return state
  }
}

// Action Creators
export function requestProductsUpdate() {
  return {
    type: REQUEST_BLOG_UPDATE
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
const updateProductsEpic = (action$, store, { ajax }) =>
  action$
    .ofType(REQUEST_BLOG_UPDATE)
    .switchMapTo(
      ajax
        .get('/products')
        .pluck('response')
        .retry(2) // retry twice
        .catch(err => [])
    )
    .map(products => ({ type: BLOG_UPDATE, products }))

const fetchProductsOnInitialLoadEpic = action$ =>
  action$
    .ofType(LOCATION_CHANGE)
    .map(({ payload }) => payload.pathname)
    .filter(pathname => pathname.indexOf(porfolioPaths.porfolioListing) > -1)
    .take(1)
    .mapTo({ type: REQUEST_BLOG_UPDATE })

// Export a combined epic, less boilerplate in the rootEpic file
export const productsListingRootEpic = combineEpics(
  updateProductsEpic,
  fetchProductsOnInitialLoadEpic
)

/**
 * For testing purposes, we need individual epics and types
 * @type {{types: {REQUEST_BLOG_UPDATE: string, BLOG_UPDATE: string, SELECT_STORE: string, UNSELECT_STORE: string, SEARCH_STORE: string, SEARCH_BLOG_RESULTS: string, EDIT_SELECTED_STORE: string}, epics: {getProductsSearchResultEpic: function(*, *): Observable<any>, fetchProductsOnInitialLoadEpic: function(*): Observable<{type: string}>, updateProductsEpic: function(*, *, {ajax?: *}): Observable<{type: string, Products: any}>}}}
 * @private
 */
export const __test = {
  types: {
    REQUEST_BLOG_UPDATE,
    BLOG_UPDATE
  },
  epics: {
    fetchProductsOnInitialLoadEpic,
    updateProductsEpic
  }
}
