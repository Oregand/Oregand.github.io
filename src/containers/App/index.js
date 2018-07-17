import React, { Component } from 'react'
import MainRoutes from '../routes'
import auth from '../../components/templates/Auth'
import { isCallbackFromAuth } from '../../components/templates/Auth/utils'

import Header from '../../components/templates/Header'

const handleAuthentication = ({ location }) => {
  if (isCallbackFromAuth(location)) {
    auth.handleAuthentication(location)
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <MainRoutes handleAuthentication={handleAuthentication} auth={auth} />
        </main>
      </div>
    )
  }
}

export default App
