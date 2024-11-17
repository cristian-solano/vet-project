import React from 'react'
import '../Style/error.css'
import { Link } from 'react-router-dom'
import mistake from '../Images/iconmistake.png'
import logo from '../Images/logo.png'

const Error = () => {
  return (
    <div className='error-container'>
      <div className='error-logo'>
        <Link to="/" className='error-logo-content'>
          <img src={logo} alt="logo"/>
        </Link>
      </div>
      <div className='error-content'>
        <img src={mistake} alt="error"/>
        <h2>Pagina no encontrada</h2>
      </div>
      <div className='error-redirection'>
        <p>Esta enlace no hace parte de nuestra pagina web</p>
        <Link to="/">Ir a login</Link>
      </div>
    </div>
  )
}

export default Error