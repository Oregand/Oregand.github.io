import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './styles/index.css'
import david from '../../assets/img/david.jpg'

class Home extends Component {
  render() {
    return (
      <div>
        <div className="welcome d-flex justify-content-center flex-column">
          <Container className="inner-wrapper mt-auto mb-auto">
            <Row>
              <div className="col-lg-5 col-md-5 col-sm-12 mt-auto mb-auto mr-3">
                <h1 className="welcome-heading display-4 text-white">
                  David O'Regan
                </h1>
                <p className="text-white">
                  So one day I noticed I was basically a large collection of
                  atoms that had somehow become conscious, currently living on a
                  actively hostile planet made of molten lava. Bit odd, but sure
                  look have a cup of tea and keep going. It'll be grand.
                </p>
              </div>
            </Row>
          </Container>
        </div>
        <div id="app-features" className="app-features section">
          <div className="container-fluid">
            <div className="row">
              <div className="app-screenshot col-lg-4 col-md-12 col-sm-12 px-0 py-5">
                <img
                  className="mt-auto mb-auto"
                  src={david}
                  alt="Personal Photo"
                />
              </div>

              <div className="app-features-wrapper col-lg-4 col-md-6 col-sm-12 py-5 mx-auto">
                <div className="container">
                  <h3 className="section-title underline--left my-5">
                    About Me
                  </h3>
                  <div className="feature py-4 d-flex">
                    <div className="icon text-muted bg-default mr-5">
                      <FontAwesomeIcon icon="code" />
                    </div>
                    <div>
                      <h5>My big loves</h5>
                      <p>
                        JavaScript. Maths. Functional Programming. React. Redux.
                        RXJS. JavaScript.{' '}
                        <a href="https://twitter.com/dan_abramov">
                          Dan Abramov.
                        </a>{' '}
                        <a href="http://jussi.hallila.com/">Jussi Hallila.</a>{' '}
                        Did I mention JavaScript?
                      </p>
                    </div>
                  </div>

                  <div className="feature py-4 d-flex">
                    <div className="icon text-muted bg-default mr-5">
                      <FontAwesomeIcon icon="terminal" />
                    </div>
                    <div>
                      <h5>Stuff I am good at</h5>
                      <p>
                        My career has taken me down a front end focused
                        discipline when it comes to development, so im pretty
                        niffty in terms of just about anything front end
                        related.
                      </p>
                    </div>
                  </div>

                  <div className="feature py-4 d-flex">
                    <div className="icon text-muted bg-default mr-5">
                      <FontAwesomeIcon icon="code-branch" />
                    </div>
                    <div>
                      <h5>Stuff I am ok at</h5>
                      <p>
                        I take time to ensure I can work across a stack,
                        learning Python, Java, Kotlin, Jenkins, Mongo, SQL, AWS
                        and much more to ensure that I have a reasonable grasp
                        of all the technology I touch on a daily basis. Its very
                        important to me to be comfortable with all levels of the
                        tech stack.
                      </p>
                    </div>
                  </div>

                  <div className="feature py-4 d-flex">
                    <div className="icon text-muted bg-default mr-5">
                      <FontAwesomeIcon icon="code-branch" />
                    </div>
                    <div>
                      <h5>Stuff I suck at</h5>
                      <p>
                        Writing self deprecating lists. Using classes. Trying to
                        not use composition to solve a problem.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonials section py-4">
          <h3 className="section-title text-center m-5">Portfolio</h3>

          <div className="container py-5">
            <div className="row">
              <div className="col-md-4 testimonial text-center">
                <div className="avatar rounded-circle with-shadows mb-3 ml-auto mr-auto">
                  <img
                    src="images/common/avatar-1.jpeg"
                    className="w-100"
                    alt="Testimonial Avatar"
                  />
                </div>
                <h5 className="mb-1">Osbourne Tranter</h5>
                <span className="text-muted d-block mb-2">CEO at Megacorp</span>
                <p>
                  Vivamus quis ex mattis, gravida erat a, iaculis urna. Proin ac
                  eleifend tortor. Nunc in augue eget enim venenatis viverra.
                </p>
              </div>

              <div className="col-md-4 testimonial text-center">
                <div className="avatar rounded-circle with-shadows mb-3 ml-auto mr-auto">
                  <img
                    src="images/common/avatar-2.jpeg"
                    className="w-100"
                    alt="Testimonial Avatar"
                  />
                </div>
                <h5 className="mb-1">Darrin Ollie</h5>
                <span className="text-muted d-block mb-2">CEO at Megacorp</span>
                <p>
                  Nullam eu ligula facilisis, commodo velit non, vulputate
                  dolor. Aenean congue euismod vestibulum.
                </p>
              </div>

              <div className="col-md-4 testimonial text-center">
                <div className="avatar rounded-circle with-shadows mb-3 ml-auto mr-auto">
                  <img
                    src="images/common/avatar-3.jpeg"
                    className="w-100"
                    alt="Testimonial Avatar"
                  />
                </div>
                <h5 className="mb-1">Quinton Bruce</h5>
                <span className="text-muted d-block mb-2">CEO at Megacorp</span>
                <p>
                  {' '}
                  Aenean imperdiet ultrices tortor id convallis. Donec id metus
                  magna. Morbi pretium odio faucibus blandit gravida.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="blog section section-invert py-4">
          <h3 className="section-title text-center m-5">Blog</h3>
          <div className="container">
            <div className="py-4">
              <div className="row">
                <div className="card-deck">
                  <div className="col-md-12 col-lg-4">
                    <div className="card mb-4">
                      <img
                        className="card-img-top"
                        src="images/common/card-1.jpg"
                        alt="Card image cap"
                      />
                      <div className="card-body">
                        <h4 className="card-title">
                          Find Great Places to Work While Travelling
                        </h4>
                        <p className="card-text">
                          He seems sinking under the evidence could not only
                          grieve and a visit. The father is to bless and placed
                          in his length hid...
                        </p>
                        <a
                          className="btn btn-outline-success btn-pill"
                          href="#"
                        >
                          Read More &rarr;
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12 col-lg-4">
                    <div className="card mb-4">
                      <img
                        className="card-img-top"
                        src="images/common/card-3.jpg"
                        alt="Card image cap"
                      />
                      <div className="card-body">
                        <h4 className="card-title">
                          Quick Tips for Improving Your Website's Design
                        </h4>
                        <p className="card-text">
                          He seems sinking under the evidence could not only
                          grieve and a visit. The father is to bless and placed
                          in his length hid...
                        </p>
                        <a
                          className="btn btn-outline-success btn-pill"
                          href="#"
                        >
                          Read More &rarr;
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12 col-lg-4">
                    <div className="card mb-4">
                      <img
                        className="card-img-top"
                        src="images/common/card-2.jpg"
                        alt="Card image cap"
                      />
                      <div className="card-body">
                        <h4 className="card-title">
                          A Designer's Tips While Travelling and Working
                        </h4>
                        <p className="card-text">
                          He seems sinking under the evidence could not only
                          grieve and a visit. The father is to bless and placed
                          in his length hid...
                        </p>
                        <a
                          className="btn btn-outline-success btn-pill"
                          href="#"
                        >
                          Read More &rarr;
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact section-invert py-4">
          <h3 className="section-title text-center m-5">Contact Me</h3>
        </div>
      </div>
    )
  }
}

export default Home
