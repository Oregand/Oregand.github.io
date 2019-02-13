import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer
          style={{
            marginTop: rhythm(2.5),
            paddingTop: rhythm(1)
          }}
        >
          <div style={{ float: 'right' }}>
            <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
              rss
            </a>
          </div>
          <a
            href="https://twitter.com/doregand"
            target="_blank"
            rel="noopener noreferrer"
          >
            twitter
          </a>{' '}
          &bull;{' '}
          <a
            href="https://github.com/Oregand"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>{' '}
          &bull;{' '}
          <a
            href="https://stackoverflow.com/users/1788750/david-oregan"
            target="_blank"
            rel="noopener noreferrer"
          >
            stack overflow
          </a>
          <a
            href="/assets/David_O_Regan_-_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            CV
          </a>
        </footer>
      </div>
    )
  }
}

export default Layout
