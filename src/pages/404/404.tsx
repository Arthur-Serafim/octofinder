import React, { FunctionComponent as FC } from 'react';
import './404.scss'
import NotFoundImage from '../../assets/NotFound.svg'

const NotFound: FC = () => {
  return (
    <div className="section notfound-container">
      <h2 className="section-title">Perfil não pôde ser encontrado!</h2>
      <img src={NotFoundImage} alt="Not found icon" className="section-image" />
    </div>
  )
}

export default NotFound