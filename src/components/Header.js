import React from 'react'
import logo from '../assets/img/logo.svg'

const Header = props => {
  return (
    <header className="header container">
      <img className="header__brand" src={logo} alt="logo" />
      <nav className="header__nav">
        <a href="/" className="link link--primary header__nav-item">Features</a>
        <a href="/" className="link link--primary header__nav-item">Pricing</a>
        <a href="/" className="link link--primary header__nav-item">Resources</a>
      </nav>
      <div className="header__action">
        <button className="button button--secondary button--sm">Login</button>
        <button className="button button--primary button--sm">Sign up</button>
      </div>
    </header>
  )
}

export default Header