import React from 'react';
import { NavBar } from '../components/NavBar';
import { Noticias } from '../components/Noticias';

import '../styles/Slider.css'
import '../styles/ColorNubeFondo.css'

export const Overall = () => {
    return (
        <div className="colorNubeFondo">
            <NavBar/>
            
                <div className="slider">
                    <Noticias />
                    
                </div>
        </div>
    )
}
