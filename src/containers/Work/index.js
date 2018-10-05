import React, { Component } from 'react'

class Work extends Component {
  render() {
    return (
      <div>
        <div className="inner-wrapper mt-auto mb-auto container">
          <div className="row">
            <div className="col-lg-5 col-md-5 col-sm-12 mt-auto mb-auto mr-3">
              <h1 className="welcome-heading display-4 text-white">
                Keep Your Files in Sync
              </h1>
              <p className="text-muted">
                Keep your files in sync using the most secure and advanced
                solution to date.
              </p>
              <a
                href="https://designrevision.com/download/shards"
                className="btn btn-lg btn-success btn-pill align-self-center"
              >
                <i className="fa fa-download mr-2" />
                Download
              </a>

              <div className="d-block mt-4">
                <a href="https://designrevision.com/download/shards">
                  <img
                    className="w-25 mt-2 mr-3"
                    src="images/app-promo/badge-apple-store.png"
                    alt="Get it on Apple Store"
                  />
                </a>
                <a href="https://designrevision.com/download/shards">
                  <img
                    className="w-25 mt-2"
                    src="images/app-promo/badge-google-play-store.png"
                    alt="Get it on Google Play Store"
                  />
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-5 col-sm-12 ml-auto">
              <img
                className="iphone-mockup ml-auto"
                src="images/app-promo/iphone-app-mockup.png"
                alt="iPhone App Mockup - Shards App Promo Demo"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Work
