import React from 'react';
import './App.css';
import HolaMundo from "./components/holaMundo";
import Boton from "./components/boton";
import BotonPrimario from "./components/boton-primario/botonPrimario";
import BotonSecundario from "./components/boton-secundario/botonSecundario";
import Imagen from "./components/imagen";

const App = () => {
    return (
        <div>
            <HolaMundo mensaje="¡Hola mundo!" />
            <br/>
            <Boton title="Clic uno" />
            <Boton title="Clic dos" />
            <Boton title="Clic tres" />
            <br/>
            <br/>
            <BotonPrimario />
            <br/>
            <br/>
            <BotonSecundario />
            <br/>
            <br/>
            <Imagen />
        </div>
    );
}

export default App;
