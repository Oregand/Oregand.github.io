import some from 'lodash/some'
import get from 'lodash/get'

export const LOADING_STATE_KEY = 'loading'

// Check if any provided action is ongoing
export const createLoadingSelector = actions => state =>
  some(actions, action => get(state, `${LOADING_STATE_KEY}.${action}`))

// Check if any provided tagged action is ongoing
export const createLoadingTagSelector = (action, tag) => state =>
  get(state, `${LOADING_STATE_KEY}.${action + '_' + tag}`)
