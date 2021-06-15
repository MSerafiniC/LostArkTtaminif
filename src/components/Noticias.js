import React from 'react';
import Cards from '../components/Cards';

import '../styles/Noticias.css'

export const Noticias = () => {
    return (
        <div className="content">
            <div className="principal">
                <h1>Noticias</h1>

                <div className="separador"></div>
                    
                <div className="insid">
                    <Cards />
                </div>
            </div>
        </div>
    )
}