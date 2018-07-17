// create 3 actions name for API calls
// This will be used by the loading reducer
export function createAsyncActions(actionPrefix) {
  return [
    `${actionPrefix}_REQUEST`,
    `${actionPrefix}_SUCCESS`,
    `${actionPrefix}_FAIL`
  ]
}

export function mapToPayload(action) {
  return action.payload
}
