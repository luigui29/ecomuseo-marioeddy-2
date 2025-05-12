import React from 'react'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-md navbar-dark">
      <div className="container position-relative">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="Logo" width="80px" className="d-inline-block align-top me-2" id="ecomuseo-icon"/>
          <div id="ecomuseo-title"> Ecomuseo Marioeddy </div>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link " href="/">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/collection">Colección</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/talleres">Talleres</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contacto">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
