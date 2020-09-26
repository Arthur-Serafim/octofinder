import React, { useState } from 'react';
import './Footer.scss'

export default function Footer() {
  const [username, setUsername] = useState('')

  function handleSubmit(e: any) {
    e.preventDefault()

    alert(username)
  }

  return (
    <footer className="footer-container">
      <form onSubmit={(e: any) => handleSubmit(e)} className="footer-form">
        <input type="text" className="footer-input" placeholder="Pesquisar usuário" onChange={e => setUsername(e.target.value)} />
        <button type='submit' className="footer-button">
          Procurar perfil
        </button>
      </form>
    </footer>
  )
}