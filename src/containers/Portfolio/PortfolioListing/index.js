// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'

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
        <div class="col-12 col-md-6 col-lg-3">
            <div class="portfolio-content">
                <figure>
                    <img src={Img} alt="" />
                </figure>

                <div class="entry-content flex flex-column align-items-center justify-content-center">
                    <h3><a href="#">Flower Skin</a></h3>
                    <ul class="flex flex-wrap justify-content-center">
                        <li><a href="#">Portfolio,</a></li>
                        <li><a href="#">Tree</a></li>
                    </ul>
                </div>
            </div>
        </div>    
    )
  }

  render() {
    return (
      <div> 
        <div class="nav-bar-sep d-lg-none"></div>
        <div class="outer-container">
            <div class="container portfolio-page">
                <div class="row">
                    <div class="col">
                        <ul class="breadcrumbs flex align-items-center">
                            <li><a href="#">Home</a></li>
                            <li>Portfolio</li>
                        </ul>
                    </div>
                </div>
                <div class="row">
                   {this.renderportfolioItems()}
                </div>
                <div class="scroll-down flex flex-column justify-content-center align-items-center d-none d-lg-block">
                    <span class="arrow-down flex justify-content-center align-items-center"><img src={Down} alt="arrow" /></span>
                    <span class="scroll-text">Scroll Down</span>
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
