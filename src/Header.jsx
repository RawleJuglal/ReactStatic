import React from 'react'
import reactLogo from './assets/react.svg'

export default function Header(){
    return (
      <header className="header">
          <nav className="nav">
            <img className="nav-logo" src={reactLogo} width="40px" />
            <ul className="nav-items">
              <li>Pricing</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
      </header>
    )
  }
