import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { portfolioPaths } from './urls'
import LazyLoad from '../../components/atoms/LazyLoad'

const PortfolioListing = LazyLoad({
  loader: () => import('./PortfolioListing')
})
const PortfolioItem = LazyLoad({
  loader: () => import('./PortfolioItem')
})

class Portfolio extends Component {
  render() {
    const { match, currentPage } = this.props
    const redirectPath = currentPage
      ? match.url + currentPage.path
      : match.url + portfolioPaths.portfolioListing
    return (
      <div>
        <Switch>
          <Route
            path={match.url + portfolioPaths.portfolioListing}
            component={PortfolioListing}
          />
          <Route path={match.url + portfolioPaths.portfolio} component={PortfolioItem} />
          <Route path="*" render={() => <Redirect to={redirectPath} />} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = ({ portfolio }) => ({
  currentPage: portfolio.currentPage
})
export default connect(mapStateToProps)(Portfolio)
