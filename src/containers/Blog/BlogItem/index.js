// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'


class BlogItem extends Component {
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
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Blog</a></li>
                                <li>Single</li>
                            </ul>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12">
                            <div class="featured-img">
                                <figure>
                                    <img src="images/single-blog.jpg" alt="blog" />
                                </figure>
                            </div>
                        </div>

                        <div class="col-12 col-lg-8">
                            <div class="content-area">
                                <header class="entry-header">
                                    <div class="post-meta">
                                        <a href="#">Portfolio</a>
                                    </div>

                                    <h1>Open Portfolio Items With Custom Links in Portfolio Grid in New Tab</h1>

                                    <span class="byline">by <span class="author"><a href="#">Phil Martinez</a></span></span>
                                </header>

                                <div class="entry-content">
                                    <p>Get the latest fashion tips and outfit ideas from your favorite celebrities and designers. Click through runway and front row photos from fashion week shows in New York, London, Paris, and Milan. Plus: browse key accessories like bags, shoes, and sunglasses, must-have denim </p>

                                    <p>Liusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qui s nostrud exercitation ullamLorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
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

                                <div class="post-share">
                                    <label>share</label>
                                    <ul>
                                        <li class="fb"><a href="#"><i class="fa fa-facebook"></i></a></li>
                                        <li class="gp"><a href="#"><i class="fa fa-google-plus"></i></a></li>
                                        <li class="in"><a href="#"><i class="fa fa-instagram"></i></a></li>
                                        <li class="tw"><a href="#"><i class="fa fa-twitter"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </aside>

                        <div class="col-12 col-lg-7">
                            <div class="content-area">
                                <div class="post-comments">
                                    <h3 class="comments-title"><span class="comments-number">02 Comments</span></h3>

                                    <ol class="comment-list">
                                        <li class="comment">
                                            <article class="comment-body">
                                                <figure class="comment-author-avatar">
                                                    <img src="images/sofia-joelsson.jpg" alt="Sofia" />
                                                </figure>

                                                <div class="comment-wrap">
                                                    <div class="comment-author">
                                                        <span class="fn">
                                                            <a href="#">Sofia Joelsson,</a>
                                                        </span>

                                                        <span class="comment-meta">
                                                            <a href="#">Dec 018 2018</a>
                                                        </span>
                                                    </div>

                                                    <p>Neque porro qui squam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.</p>

                                                    <div class="reply">
                                                        <a href="#">like</a>
                                                        <a href="#">reply</a>
                                                    </div>
                                                </div>

                                                <div class="clearfix"></div>
                                            </article>

                                            <ol class="children">
                                                <li class="comment">
                                                    <article class="comment-body">
                                                        <figure class="comment-author-avatar">
                                                            <img src="images/dave-dubois.jpg" alt="Dave" />
                                                        </figure>

                                                        <div class="comment-wrap">
                                                            <div class="comment-author">
                                                                <span class="fn">
                                                                    <a href="#">Dave Dubois,</a>
                                                                </span>

                                                                <span class="comment-meta">
                                                                    <a href="#">Aug 11, 2018</a>
                                                                </span>
                                                            </div>

                                                            <p>Neque porro qui squam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>

                                                            <div class="reply">
                                                                <a href="#">like</a>
                                                                <a href="#">reply</a>
                                                            </div>
                                                        </div>

                                                        <div class="clearfix"></div>
                                                    </article>
                                                </li>
                                            </ol>
                                        </li>
                                    </ol>
                                </div>

                                <div class="comments-form">
                                    <div class="comment-respond">
                                        <h3 class="comment-reply-title">Leave a comment</h3>

                                        <form class="comment-form">
                                            <input type="text" placeholder="Name" />
                                            <input type="email" placeholder="Email" />
                                            <input type="url" placeholder="Website" />
                                            <textarea rows="4" placeholder="Messages"></textarea>
                                            <input type="submit" value="send message" />
                                        </form>
                                    </div>
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

export default connect(null)(BlogItem)
