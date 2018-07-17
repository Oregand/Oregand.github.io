import React, { Component, Fragment } from 'react'
import {
  Container,
  Row,
  Col,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'

import logo from '../../../assets/img/logo.png'
import menuIcon from '../../../assets/img/menu-icon.png'
import X from '../../../assets/img/x.png'


class Header extends Component {
  constructor(props) {
    super(props)
    this.toggleMenu = this.toggleMenu.bind(this)
    this.state = {
        isOpen: true,
    }
  }

  toggleMenu() {
      this.setState({
        isOpen: !this.state.isOpen  
      })
  }

  render() {
    return (
      <div>
        <header className={this.state.isOpen ? 'site-header': "site-header no-shadow"}>
            <div className={this.state.isOpen ? 'site-branding': "site-branding hide"}>
                <h1 className="site-title"><a href="/" rel="home"><img src={logo} alt="Logo" style={{height: '3rem'}} /></a></h1>
            </div>
            <div className={this.state.isOpen ? 'hamburger-menu': "hamburger-menu close"} onClick={this.toggleMenu}>
                <div className="menu-icon">
                    <img src={menuIcon} alt="menu icon" />
                </div>
                <div className="menu-close-icon">
                    <img src={X} alt="menu close icon" />
                </div>
            </div>
        </header>
        <nav className={this.state.isOpen ? 'site-navigation flex flex-column justify-content-between': "site-navigation flex flex-column justify-content-between show"}>
            <div className={this.state.isOpen ? 'site-branding d-none d-lg-block': "site-branding d-none d-lg-block hide"}>
                <h1 className="site-title"><a href="/" rel="home"><img src={logo}alt="Logo" style={{height: '3rem'}} /></a></h1>
            </div>
            <ul className="main-menu flex flex-column justify-content-center">
                <li className="current-menu-item"><a href="/">Home</a></li>
                <li><a href="/portfolio">Portfolio</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
            <div className="social-profiles">
                <ul className="flex justify-content-start justify-content-lg-center align-items-center">
                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                </ul>
            </div>
        </nav>
      </div>
    )
  }
}

Header.propTypes = {}

export default Header
