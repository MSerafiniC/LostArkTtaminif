import React from 'react';
import LaLogo from '../images/LaLogo.png';
// import { Noticias } from '../components/Noticias';

import '../styles/PortadaHomeScreen.css'

export const HomeScreen = () => {
    return (
        <div className="lostarklogo">
            <div ClassName="laCajita">
                <img className="laLogoEdit" src={LaLogo}/>
                <h2 className="odisea">Tu odisea te espera</h2>
                <h3 className="playfree">Juega gratis en otoño de 2021</h3>
            </div>
        </div>
    )
}
