import * as React from 'react';
import './Navigation.scss'
import Octocat from '../../assets/Octocat.png'

export default function Navigation() {
  return (
    <nav className="navigation-container">
      <img src={Octocat} alt="Octocat logo" className="navigation-logo" />
      <span className="navigation-title">Octocat</span>
    </nav>
  )
}