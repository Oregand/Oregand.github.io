// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'


class BlogListing extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div> 
        <div class="nav-bar-sep d-lg-none"></div>

        <div class="outer-container blog-page">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 col-xl-6 no-padding">
                        <div class="blog-content flex">
                            <figure>
                                <a href="#"><img src="images/1.jpg" alt="" /></a>
                            </figure>

                            <div class="entry-content flex flex-column justify-content-between align-items-start">
                                <header>
                                    <h3><a href="#">Creating A Single Portfolio Item Template</a></h3>

                                    <div class="posted-by">Phil Martinez</div>
                                </header>

                                <footer class="flex flex-wrap align-items-center">
                                    <div class="posted-on">December 20, 2018</div>

                                    <ul class="flex flex-wrap align-items-center">
                                        <li><a href="#">Portfolio,</a></li>
                                        <li><a href="#">Tree</a></li>
                                    </ul>
                                </footer>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-xl-6 no-padding">
                        <div class="blog-content flex">
                            <figure>
                                <a href="#"><img src="images/3.jpg" alt="" /></a>
                            </figure>

                            <div class="entry-content flex flex-column justify-content-between align-items-start">
                                <header>
                                    <h3><a href="#">Portfolio Post Type Editor</a></h3>

                                    <div class="posted-by">Phil Martinez</div>
                                </header>

                                <footer class="flex flex-wrap align-items-center">
                                    <div class="posted-on">December 20, 2018</div>

                                    <ul class="flex flex-wrap align-items-center">
                                        <li><a href="#">Portfolio,</a></li>
                                        <li><a href="#">Tree</a></li>
                                    </ul>
                                </footer>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-xl-6 no-padding">
                        <div class="blog-content flex flex-xl-row-reverse">
                            <figure>
                                <a href="#"><img src="images/6.jpg" alt="" /></a>
                            </figure>

                            <div class="entry-content flex flex-column justify-content-between align-items-start">
                                <header>
                                    <h3><a href="#">Portfolio Customizer Options</a></h3>

                                    <div class="posted-by">Phil Martinez</div>
                                </header>

                                <footer class="flex flex-wrap align-items-center">
                                    <div class="posted-on">December 20, 2018</div>

                                    <ul class="flex flex-wrap align-items-center">
                                        <li><a href="#">Portfolio,</a></li>
                                        <li><a href="#">Tree</a></li>
                                    </ul>
                                </footer>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-xl-6 no-padding">
                        <div class="blog-content flex flex-row-reverse">
                            <figure>
                                <a href="#"><img src="images/8.jpg" alt="" /></a>
                            </figure>

                            <div class="entry-content flex flex-column justify-content-between align-items-start">
                                <header>
                                    <h3><a href="#">Hide Related Portfolio Heading</a></h3>

                                    <div class="posted-by">Phil Martinez</div>
                                </header>

                                <footer class="flex flex-wrap align-items-center">
                                    <div class="posted-on">December 20, 2018</div>

                                    <ul class="flex flex-wrap align-items-center">
                                        <li><a href="#">Portfolio,</a></li>
                                        <li><a href="#">Tree</a></li>
                                    </ul>
                                </footer>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-xl-6 no-padding">
                        <div class="blog-content flex">
                            <figure>
                                <a href="#"><img src="images/9.jpg" alt="" /></a>
                            </figure>

                            <div class="entry-content flex flex-column justify-content-between align-items-start">
                                <header>
                                    <h3><a href="#">Automatically Display Portfolio Media</a></h3>

                                    <div class="posted-by">Phil Martinez</div>
                                </header>

                                <footer class="flex flex-wrap align-items-center">
                                    <div class="posted-on">December 20, 2018</div>

                                    <ul class="flex flex-wrap align-items-center">
                                        <li><a href="#">Portfolio,</a></li>
                                        <li><a href="#">Tree</a></li>
                                    </ul>
                                </footer>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-xl-6 no-padding">
                        <div class="blog-content flex">
                            <figure>
                                <a href="#"><img src="images/11.jpg" alt="" /></a>
                            </figure>

                            <div class="entry-content flex flex-column justify-content-between align-items-start">
                                <header>
                                    <h3><a href="#">Portfolio Single Post Builder</a></h3>

                                    <div class="posted-by">Phil Martinez</div>
                                </header>

                                <footer class="flex flex-wrap align-items-center">
                                    <div class="posted-on">December 20, 2018</div>

                                    <ul class="flex flex-wrap align-items-center">
                                        <li><a href="#">Portfolio,</a></li>
                                        <li><a href="#">Tree</a></li>
                                    </ul>
                                </footer>
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

export default connect(null)(BlogListing)