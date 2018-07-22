import 'rxjs/add/operator/map'
import 'rxjs/add/operator/distinctUntilChanged'
import 'rxjs/add/operator/filter'
import find from 'lodash/find'
import { LOCATION_CHANGE } from 'react-router-redux'
import { porfolioPaths } from '../../../containers/Porfolio/urls'

const CHANGE_PAGE = 'porfolio/CHANGE_PAGE'

const steps = [
  {
    id: 0,
    name: 'Porfolio Listing',
    path: porfolioPaths.porfolioListing,
    disabled: false,
    hidden: false
  },
  {
    id: 1,
    name: 'Porfolio',
    path: porfolioPaths.porfolio,
    disabled: false,
    hidden: false
  }
]

/**
 * Initial State for porfolio navigation
 * @type {{currentPage: {id, name, path, disabled, hidden}|*, steps: *[]}}
 */
const initialState = {
  currentPage: steps[0], // variable for convenience and easy access
  steps
}

/**
 * STATE KEY
 */
export const STATE_KEY = 'porfolio'

/**
 * Reducer
 * @param state
 * @param action
 * @return {*}
 */
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_PAGE:
      const newState = {
        ...state,
        currentPage: action.step
      }
      if (state.currentPage) {
        newState.steps[state.currentPage.id].active = false
      }
      if (action.step) {
        newState.steps[action.step.id].active = true
      }
      return newState
    default:
      return state
  }
}
///
// Action Creators
export function changePage(page) {
  return {
    type: CHANGE_PAGE,
    page
  }
}

///
// Epics

/**
 * Keeps the current step in sync with the current router location
 * Looks for the step.path presence in the current location.pathname
 * (ie: '/porfolio/addporfolioMember/bla/bla/bla' and '/porfolioListing' will make the 'porfolioListing' step active)
 * @param action$
 * @param store
 * @return {Observable<any>}
 */
export const keepcurrentPageInSyncEpic = (action$, store) =>
  action$
    .ofType(LOCATION_CHANGE)
    .map(({ payload }) => payload.pathname)
    .distinctUntilChanged()
    .filter(pathname => pathname.indexOf(porfolioPaths) > -1) // filters out location change that are not porfolio related (keeps the active step when moving away from porfolio)
    .map(pathname =>
      find(
        store.getState().porfolio.steps,
        step => pathname.indexOf(step.path) > -1
      )
    )
    .filter(step => step != null)
    .map(step => ({ type: CHANGE_PAGE, step }))
