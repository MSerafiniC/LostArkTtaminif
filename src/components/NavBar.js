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
                        <ul className="dropdown-menu navis" aria-labelledby="navbarDropdownMenuLink">
                            <li><a className="dropdown-item" href="#">Historia</a></li>
                            <li><a className="dropdown-item" href="#">Clases</a></li>
                            <li><NavLink exact activeClassName="active" to="/media" className="dropdown-item">Multimedia</NavLink></li>
                            <li><a className="dropdown-item" href="#">Preguntas frecuentes</a></li>
                        </ul>
                        </li>
                        
                        <li className="nav-item">
                        <NavLink exact activeClassName="active" to="/news" className="nav-link colorcito">Noticias</NavLink>
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
                        <a className="nav-link colorcito2" href="https://www.playlostark.com/es-es/signup?returnUrl=%2Fes-es%2Fgame%2Fmedia">Registrarse</a>
                        </li>
                        <div className="barrin">|</div>
                        <li className="nav-item">
                        <a className="nav-link colorcito2" href="https://www.amazon.com/ap/signin?clientContext=136-4681897-4352452&openid.return_to=https%3A%2F%2Fwww.playlostark.com%3A443%2Fap%2Fredirect&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=amzn_games_lostark_us&openid.mode=checkid_setup&marketPlaceId=ATVPDKIKX0DER&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&pageId=amzn_games_us&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.pape.max_auth_age=3600&siteState=clientContext%3D136-4681897-4352452%2CsourceUrl%3Dhttps%253A%252F%252Fwww.playlostark.com%253A443%252Fes-es%252Fgame%252Fmedia%2Csignature%3Dj2FtmESZ8U3wRAPcn7GsK3y9pWFGQj3D&language=es_ES&language=es_ES">Iniciar sesión</a>
                        </li>
                    </ul>


                    </div>
                </div>
            </nav>
        </div>
    )
}
