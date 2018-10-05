import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from 'containers/Home'
import Blog from 'containers/Blog'
import Work from 'containers/Work'
import Header from 'components/organisims/Header'

import './App.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCode,
  faTerminal,
  faCodeBranch,
  faEnvelope,
  faPhone,
  faInbox,
  faDove,
  faBarcode,
  faLaptopCode,
  faAtom,
  faGraduationCap,
  faProjectDiagram
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faCode,
  faTerminal,
  faCodeBranch,
  faEnvelope,
  faPhone,
  faInbox,
  faDove,
  faBarcode,
  faLaptopCode,
  faAtom,
  faGraduationCap,
  faProjectDiagram
)

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/work" component={Work} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
