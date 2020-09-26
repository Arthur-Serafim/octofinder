import React, { FunctionComponent as FC } from 'react';
import './Navigation.scss'
import Octocat from '../../assets/Octocat.png'
import { RouteComponentProps } from 'react-router-dom';

const Navigation: FC<RouteComponentProps> = (props: any) => {
  function navigateHome() {
    props.history.push('/')
  }

  return (
    <nav className="navigation-container">
      <div onClick={navigateHome} className="icons-container">
        <img src={Octocat} alt="Octocat logo" className="navigation-logo" />
        <span className="navigation-title">Octocat</span>
      </div>
    </nav>
  )
}

export default Navigation