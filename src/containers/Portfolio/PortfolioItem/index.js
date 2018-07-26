// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'


class PortfolioItem extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div> 
        <div class="nav-bar-sep d-lg-none"></div>

        <div class="outer-container">
            <div class="container single-portfolio">
                <div class="row">
                    <div class="col-12">
                        <div class="featured-img">
                            <figure>
                                <img src="images/single-portfolio.png" alt="" />
                            </figure>
                        </div>
                    </div>

                    <div class="col-12 col-lg-8">
                        <div class="content-area">
                            <header class="entry-header">
                                <h1>Black & Colors</h1>
                            </header>

                            <div class="entry-content">
                                <p>Get the latest fashion tips and outfit ideas from your favorite celebrities and designers. Click through runway and front row photos from fashion week shows in New York, London, Paris, and Milan. Plus: browse key accessories like bags, shoes, and sunglasses, must-have denim </p>
                            </div>

                            <div class="post-share flex align-items-center">
                                <label>share:</label>

                                <ul class="flex align-items-center">
                                    <li class="fb"><a href="#"><i class="fa fa-facebook"></i></a></li>
                                    <li class="gp"><a href="#"><i class="fa fa-google-plus"></i></a></li>
                                    <li class="in"><a href="#"><i class="fa fa-instagram"></i></a></li>
                                    <li class="tw"><a href="#"><i class="fa fa-twitter"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <aside class="col-12 col-lg-3 offset-lg-1">
                        <div class="entry-meta">
                            <div class="posted-date">
                                <label>Date</label>

                                <span class="date-format"><a href="#">December 20, 2018</a></span>
                            </div>

                            <div class="post-category">
                                <label>Category</label>
                                <span><a href="#">Photography</a></span>
                            </div>

                            <div class="posted-tags">
                                <label>tags</label>
                                <span><a href="#">Photography</a>, <a href="#">nature</a>, <a href="#">hat</a> </span>
                            </div>
                        </div>
                    </aside>
                </div>

                <div class="row">
                    <div class="col">
                        <nav class="post-nav">
                            <ul class="flex justify-content-between align-items-center">
                                <li><a href="#"><img src="images/angle-left.png" alt="Previous" /></a></li>
                                <li><a href="#"><img src="images/portfolio-icon.png" alt="Back to Portfolio" /></a></li>
                                <li><a href="#"><img src="images/angle-right.png" alt="Next" /></a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default connect(null)(PortfolioItem)
