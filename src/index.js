import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { PersistGate } from 'redux-persist/integration/react'
import store, { history, persistor } from './state/store'

import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

const target = document.querySelector('#root')

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <div>
          <App />
        </div>
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  target
)

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    render(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ConnectedRouter history={history}>
            <div>
              <App />
            </div>
          </ConnectedRouter>
        </PersistGate>
      </Provider>,
      target
    )
  })
}

registerServiceWorker();
