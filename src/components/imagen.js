import React from 'react';
import memoji from '../assets/img/memoji.png';

const Imagen = () => (
    <div>
        <img src={memoji} alt="memoji" width={100} />
        <br/>
        <br/>
        <a href={memoji} target="_blank" rel="noopener noreferrer">Abrir imagen en otra pestaña</a>
    </div>
);

export default Imagen;
