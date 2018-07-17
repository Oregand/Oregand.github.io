// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'

import David from '../../assets/img/david.jpg'

class About extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <div class="nav-bar-sep d-lg-none"></div>
          <div class="outer-container">
              <div class="single-post">
                  <div class="container">
                      <div class="row">
                          <div class="col">
                              <ul class="breadcrumbs flex align-items-center">
                                  <li><a href="/">Home</a></li>
                                  <li><a href="/about">About</a></li>
                              </ul>
                          </div>
                      </div>

                      <div class="row">
                          <div class="col-12">
                              <div class="featured-img">
                                  <figure>
                                      <img src={David} alt="" />
                                  </figure>
                              </div>
                          </div>

                          <div class="col-12 offset-lg-1 col-lg-10">
                              <div class="content-area">
                                  <header class="entry-header">
                                      <div class="post-meta">
                                          <a href="/porfolio">See My Portfolio</a>
                                      </div>

                                      <h1>I love the work I do. I always have.</h1>

                                      <span class="byline">by <span class="author"><a href="#">David O'Regan</a></span></span>
                                  </header>

                                  <div class="entry-content">
                                      <p>Design is the method of putting form and content together. Design, just as art, has multiple definitions there is no single
                                          definition. Design can be art. Design can be aesthetics. Design is so simple, that's why it is so complicated.</p>

                                      <p>Working with the people who have passion and drive is usually what helps me decide on which projects to take on. I appreciate
                                          people that are driven by a vision, and my part in their vision is to give it a medium of expression here
                                          on the web.</p>

                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}

export default connect(null)(About)
