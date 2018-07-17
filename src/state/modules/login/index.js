import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/mapTo'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/take'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/pluck'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged'
import { combineEpics } from 'redux-observable'
import { createAsyncActions, mapToPayload } from '../../utils'
import { isAuthenticated } from '../../../components/templates/Auth/utils'
import { LOGIN_STATE_KEY, NEW_SESSION } from './utils'

const LOGIN_UPDATE = 'login/LOGIN_UPDATE'
const [
  LOGIN_UPDATE_REQUEST,
  LOGIN_UPDATE_SUCCESS,
  LOGIN_UPDATE_FAIL
] = createAsyncActions(LOGIN_UPDATE)

/**
 * STATE KEY
 */
export const STATE_KEY = LOGIN_STATE_KEY

/**
 * Initial State for login
 */
const initialState = {
  isAdmin: false
}

/**
 * Reducer
 * @param state
 * @param action
 * @return {*}
 */
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_UPDATE_SUCCESS:
      return {
        ...state,
        isAdmin:
          action.payload.admin === 'true' || action.payload.admin === true
      }
    default:
      return state
  }
}

// Action Creators
export function requestLoginUpdate() {
  return {
    type: LOGIN_UPDATE_REQUEST
  }
}

// Epics
/**
 * Epic
 * @param action$
 * @param store
 * @return {Observable<any>}
 */
const updateLoginEpic = (action$, store, { ajax }) =>
  action$.ofType(LOGIN_UPDATE_REQUEST).switchMap(() =>
    ajax
      .get('/api/private/user/roles/admin')
      .pluck('response')
      .retry(1)
      .map(payload => ({
        type: LOGIN_UPDATE_SUCCESS,
        payload
      }))
      .catch(error =>
        Observable.of({
          type: LOGIN_UPDATE_FAIL,
          error: error.response || error
        })
      )
  )

const askForExtraCredentialOnAuth = actions$ =>
  actions$
    .ofType(NEW_SESSION)
    .map(mapToPayload)
    .filter(isAuthenticated)
    .map(({ access_token }) => access_token)
    .distinctUntilChanged()
    .mapTo(requestLoginUpdate())

// Export a combined epic, less boilerplate in the rootEpic file
export const loginRootEpic = combineEpics(
  updateLoginEpic,
  askForExtraCredentialOnAuth
)
