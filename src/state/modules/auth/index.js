import 'rxjs/add/operator/mapTo'
import 'rxjs/add/operator/switchMapTo'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/take'
import 'rxjs/add/operator/pluck'
import 'rxjs/add/operator/debounceTime'
import { combineEpics } from 'redux-observable'
import { REHYDRATE } from 'redux-persist'

const UPDATE = 'UPDATE'
const AUTH_STATUS_CHANGE = 'auth/AUTH_STATUS_CHANGE'

/**
 * STATE KEY
 */
export const STATE_KEY = 'auth'

/**
 * Initial State for auth
 */
const initialState = {
  idToken: null,
  accessToken: null,
  expiresAt: 0
}

/**
 * Reducer
 * @param state
 * @param action
 * @return {*}
 */
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_STATUS_CHANGE:
      return {
        ...state,
        ...action.auth
      }
    case REHYDRATE:
      return {
        ...state
      }
    case UPDATE:
      return {
        ...state,
        persistedState: action.payload
      }
    default:
      return state
  }
}

// Action Creators
export function requestStorePersist() {
  return {
    type: REHYDRATE
  }
}

// Epics
/**
 * Epic
 * @param action$
 * @param store
 * @return {Observable<any>}
 */
const updateStorePersist = (action$, store) =>
  action$.ofType(REHYDRATE).map(persistedState => ({
    type: UPDATE,
    persistedState
  }))

const getLatestAuthStatus = (actions$, store, { auth$ }) =>
  auth$.distinctUntilChanged().map(auth => ({
    type: AUTH_STATUS_CHANGE,
    auth
  }))

// Export a combined epic, less boilerplate in the rootEpic file
export const authRootEpic = combineEpics(
  updateStorePersist,
  getLatestAuthStatus
)
