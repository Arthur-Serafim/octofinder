import React, { FunctionComponent as FC } from 'react';
import './Home.scss'
import Search from '../../assets/Search.svg'

const Home: FC = () => {
  return (
    <div className="section">
      <h2 className="section-title">Confira seus perfis favoritos!</h2>
      <p className="section-description">Veja as informações básicas sobre qualquer conta no GitHub!</p>
      <img src={Search} alt="Search icon" className="section-image" />
    </div>
  )
}

export default Home