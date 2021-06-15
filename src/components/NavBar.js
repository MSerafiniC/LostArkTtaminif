import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import LostArkLogo from '../images/LostArkLogo.png'

import '../styles/NavBarStyles.css'


export const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbars navbar-dark">
                <div className="container-fluid">
                
                <Link to="/" className="LogoLostArk">
                    <img src={LostArkLogo} alt="" width="132"/>
                </Link>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">

                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle colorcito" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Juego
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a className="dropdown-item" href="#">Historia</a></li>
                            <li><a className="dropdown-item" href="#">Clases</a></li>
                            <li><a className="dropdown-item" href="#">Multimedia</a></li>
                        </ul>
                        </li>
                        
                        <li className="nav-item">
                        <Link to="/news" className="nav-link colorcito">Noticias</Link>
                        </li>
                        
                    </ul>

                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item fund-pack">
                        <a className="fundadorr nav-link" href="#"> Registro de Testers </a>
                        </li>
                        
                        <li className="nav-item fund-pack">
                        <a className="fundadorr nav-link" href="#"> Comprar Paquete de Fundador </a>
                        </li>
                        
                        <li className="nav-item">
                        <a className="nav-link colorcito2" href="#">Registrarse</a>
                        </li>
                        <div className="barrin">|</div>
                        <li className="nav-item">
                        <a className="nav-link colorcito2" href="#">Iniciar sesión</a>
                        </li>
                    </ul>


                    </div>
                </div>
            </nav>
        </div>
    )
}
