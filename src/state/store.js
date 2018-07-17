import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import storage from 'redux-persist/lib/storage'
import { routerMiddleware } from 'react-router-redux'
import { createEpicMiddleware } from 'redux-observable'
import createHistory from 'history/createBrowserHistory'
import { STATE_KEY as AUTH_STATE_KEY } from './modules/auth'

import rootEpic from './epic'
import rootReducer from './reducer'

const initialState = {}

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [AUTH_STATE_KEY],
  stateReconciler: autoMergeLevel2
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const history = createHistory()
const enhancers = []
const epicMiddleware = createEpicMiddleware(rootEpic)
const middleware = [routerMiddleware(history), epicMiddleware]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers)

const store = createStore(persistedReducer, initialState, composedEnhancers)

if (process.env.NODE_ENV !== 'production') {
  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./reducer')
      store.replaceReducer(persistReducer(persistConfig, nextRootReducer))
    })

    module.hot.accept('./epic', () => {
      epicMiddleware.replaceEpic(rootEpic)
    })
  }
}

export const persistor = persistStore(store)
export default store
