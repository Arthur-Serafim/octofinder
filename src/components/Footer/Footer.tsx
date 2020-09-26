import React, { useState, FunctionComponent as FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './Footer.scss';

const Footer: FC<RouteComponentProps> = (props: any) => {
  const [username, setUsername] = useState('')

  function handleSubmit(e: any) {
    e.preventDefault()
    setUsername('')

    props.history.push(`/perfil/${username}`)
  }

  return (
    <footer className="footer-container">
      <form onSubmit={(e: any) => handleSubmit(e)} className="footer-form">
        <input id="footer-input" type="text" className="footer-input" placeholder="Pesquisar usuário" value={username} onChange={e => setUsername(e.target.value)} />
        <button type='submit' className="footer-button">
          Procurar perfil
        </button>
      </form>
    </footer>
  )
}

export default Footer