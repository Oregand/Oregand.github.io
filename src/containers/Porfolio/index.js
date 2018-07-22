import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { porfolioPaths } from './urls'
import LazyLoad from '../../components/atoms/LazyLoad'

const PorfolioListing = LazyLoad({
  loader: () => import('./PorfolioListing')
})
const PorfolioItem = LazyLoad({
  loader: () => import('./PorfolioItem')
})

class Porfolio extends Component {
  render() {
    const { match, currentPage } = this.props
    const redirectPath = currentPage
      ? match.url + currentPage.path
      : match.url + porfolioPaths.porfolioListing
    return (
      <div>
        <Switch>
          <Route
            path={match.url + porfolioPaths.porfolioListing}
            component={PorfolioListing}
          />
          <Route path={match.url + porfolioPaths.porfolio} component={PorfolioItem} />
          <Route path="*" render={() => <Redirect to={redirectPath} />} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = ({ porfolio }) => ({
  currentPage: porfolio.currentPage
})
export default connect(mapStateToProps)(Porfolio)
