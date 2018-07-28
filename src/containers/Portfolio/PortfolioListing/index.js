// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { mainPortfolioPath, portfolioPaths } from '../urls'

import Img from '../../../assets/img/7.jpg'
import Down from '../../../assets/img/arrow-down.png'

class PortfolioListing extends Component {
  constructor(props) {
    super(props)

    console.warn(props);
    this.state = {}
  }

  renderportfolioItems() {
    return this.props.portfolioItems.map((item, index) => 
        <div className="col-12 col-md-6 col-lg-6" key={index}>
            <div className="portfolio-content">
                <figure>
                    <img src={Img} alt="" />
                </figure>

                <div className="entry-content flex flex-column align-items-center justify-content-center">
                    <h3><a href="#">{item.name}</a></h3>
                    <ul className="flex flex-wrap justify-content-center">>
                        <li>
                        <Link
                        to={{
                        pathname: `${mainPortfolioPath}${portfolioPaths.portfolio}/${
                            item.id
                        }`,
                        state: { item }
                        }}>
                            See More..
                        </Link>
                        </li>
                    </ul>
                    <p>{item.description}</p>
                </div>
            </div>
        </div>    
    )
  }

  render() {
    return (
      <div> 
        <div className="nav-bar-sep d-lg-none"></div>
        <div className="outer-container">
            <div className="container portfolio-page">
                <div className="row">
                    <div className="col">
                        <ul className="breadcrumbs flex align-items-center">
                            <li><a href="#">Home</a></li>
                            <li>Portfolio</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                   {this.renderportfolioItems()}
                </div>
            </div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => {
    return {
      portfolioItems: state.portfolioListing.portfolioItems
    }
  }
  
  const mapDispatchToProps = {}
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(PortfolioListing)
