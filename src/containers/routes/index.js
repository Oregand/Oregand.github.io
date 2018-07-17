import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import PrivateRoute from '../../components/atoms/PrivateRoute'
import LazyLoad from '../../components/atoms/LazyLoad'
const Home = LazyLoad({
  loader: () => import('../Home')
})
const Porfolio = LazyLoad({
  loader: () => import('../Porfolio')
})
const Blog = LazyLoad({
  loader: () => import('../Blog')
})
const Education = LazyLoad({
  loader: () => import('../Education')
})
const About = LazyLoad({
  loader: () => import('../About')
})
const Contact = LazyLoad({
  loader: () => import('../Contact')
})
const Callback = LazyLoad({
  loader: () => import('../Callback')
})
const NoMatch = LazyLoad({
  loader: () => import('../NoMatch')
})

class MainRoutes extends Component {
  render() {
    const auth = this.props.auth
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/callback"
          render={props => {
            this.props.handleAuthentication(props)
            return <Callback {...props} />
          }}
        />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/portfolio" component={Porfolio} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <PrivateRoute auth={auth} path="/education" component={Education} />
        <Route component={NoMatch} />
      </Switch>
    )
  }
}

export default MainRoutes
