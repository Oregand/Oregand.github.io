import { LOADING_STATE_KEY } from './utils'

/**
 * Initial State for registration
 * @type {}
 */

const initialState = {}

/**
 * STATE KEY
 */
export const STATE_KEY = LOADING_STATE_KEY

const REGEX = /(.+)_(REQUEST|FAIL|SUCCESS)$/

/**
 * Reducer
 * @param state
 * @param action
 * @return {*}
 */
export default function reducer(state = initialState, action) {
  if (REGEX.test(action.type)) {
    const [, actionName, actionStatus] = REGEX.exec(action.type)
    const newState = {
      ...state,
      [actionName]: actionStatus === 'REQUEST'
    }
    if (action.tag) {
      return {
        ...newState,
        [actionName + '_' + action.tag]: actionStatus === 'REQUEST'
      }
    }
    return newState
  } else {
    return state
  }
}
