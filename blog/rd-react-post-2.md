# Introducción a React (parte 2): Crear componentes

## Introducción

Como vimos en el [artículo anterior](https://rd.rocktech.mx/publicaciones/entrada/introduccion-a-react-crear-una-aplicacion), las aplicaciones en React están construídas a 
través de componentes, los cuales a su vez pueden representar desde los más simple, como un botón,
hasta lo más complejo, como una página entera. En este artículo veremos qué componentes
existen en React y cómo trabajar con ellos.

## ¿Cómo crear componentes?

Los componentes son entendidos como piezas independientes y reutilizables, 
que en conjunto nos permiten crear interfaces de usuario. La forma más sencilla y útil 
de definir un componente es crear una función de Javascript:

```javascript
import React from 'react';

const Boton = () => (
    <button>Clic aquí</button>
);

export default Boton;
```

La función ``Boton`` es un componente válido por que devuelve un elemento de React. Este tipo
de componentes se llaman **_funcionales_** por que literalmente son funciones de Javascript.

También se puede utilizar una clase para definir un componente de Javascript:

```javascript
import React, { Component } from 'react';

class Boton extends Component {
    render() {
        return <button>Clic aquí</button>;
    }
}
```

Las dos definiciones anteriores son equivalentes para React.

### Componentes aislados

Podemos decir que el ejemplo anterior ``Boton`` es un componente aislado de React, que representa
un elemento ``<button>`` y que tiene su propio estado y atributos. 

También podemos agregar propiedades al componente de manera similar a los parámetros en 
las funciones de Javascript, con el fin de poder manipular el estado del mismo:

```javascript
import React from 'react';

const Boton = ({ titulo }) => (
    <button>
        {titulo}
    </button>
);

export default Boton;
```

De esta manera, podemos utilizarlo todas las veces que sea necesario
en otros componentes o en otras páginas:

```javascript
import React from 'react';
import Boton from "./components/boton";

const PaginaInicio = () => {
    return (
        <div>
            <Boton title="Clic uno" />
            <Boton title="Clic dos" />
            <Boton title="Clic tres" />
        </div>
    );
}

export default PaginaInicio
```

![resultado](https://i.imgur.com/FjW12JF.png "Resultado")

## Agregar estilo a los componentes

### Hojas de estilo

Para cada componente podemos crear una hoja de estilo e importarla dentro del mismo:

###### botonPrimario.css
```css
.boton-primario {
    color: white;
    background-color: black;
    border-radius: 30px;
}
```

###### botonPrimario.js
```javascript
import React  from 'react';
import './botonPrimario.css';

const BotonPrimario = () => (
    <button className="boton-primario">
        Clic aquí
    </button>
);

export default BotonPrimario;
```

![botonPrimario](https://i.imgur.com/8SBabWP.png "botonPrimario")

### Módulos CSS

Todas las hojas de estilo son agrupadas en un solo archivo al momento de compilar
el proyecto de React, por lo que pueden existir conflictos entre nombres de clases. Para
solucionar esto, podemos trabajar con módulos css:

###### botonSecundario.module.css
```css
.botonSecundario {
    color: white;
    background-color: black;
    border-radius: 30px;
    padding: 10px;
}
```

###### botonSecundarioPrueba.css
```css
.botonSecundario {
    color: white;
    background-color: red;
    border-radius: 30px;
}
```

Las clases pueden tener el mismo nombre, pero dentro del componente podemos decidir cuál se
debe aplicar.

###### botonSecundario.js
```javascript
import React  from 'react';
import styles from './botonSecundario.module.css';
import './botonSecundarioPrueba.css';

const BotonSecundario = () => (
    <button className={styles.botonSecundario}>
        Clic aquí
    </button>
);

export default BotonSecundario;
```

![botonSecundario](https://i.imgur.com/l8yDVSo.png "botonSecundario")

## Agregar imágenes, fuentes o archivos

Para agregar este tipo de archivos a un componente, basta con utilizar la 
sentencia ``import``, similar al uso de las hojas de estilo, pero en este caso lo que 
obtenemos es una cadena que representa la ruta hacía el archivo que estamos importando, por
lo que podemos utilizarla como atributo ``src`` de una imagen o ``href`` para un enlace:

```javascript
import React from 'react';
import memoji from '../assets/img/memoji.png';

const Imagen = () => (
    <div>
        <img src={memoji} alt="memoji" width={100} />
        <br/>
        <br/>
        <a href={memoji} target="_blank">
            Abrir imagen en otra pestaña
        </a>
    </div>
);

export default Imagen;
```

![imagen](https://i.imgur.com/RDLPGAS.png "imagen")

### Agregar SVGs

Los archivos o imágenes SVG pueden importarse directamente como elementos o 
componentes de React:

```javascript
import React from 'react';
import './App.css';
import { ReactComponent as Logo } from './logo.svg';

const App = () => {
    return (
        <div>
            <br/>
            <Logo width={100} />
        </div>
    );
}

export default App;
```

![logo](https://i.imgur.com/G1cgZUf.png "logo")

## Conclusiones

Es muy sencillo crear componentes en React, que utilicen imágenes o archivos y aplicarles 
estilos para que luzcan lo mejor posible. En este artículo se mostraron ejemplos sencillos 
de componentes para poder entender cómo funcionan y cómo podemos aprovecharlos en la creación
de interfaces de usuario.

## Recursos

Puedes consultar los ejemplos de este artículo en el repositorio 
[https://github.com/leonardlib/blog-rd-react](https://github.com/leonardlib/blog-rd-react)

## Enlaces de referencia

* Create React App: [https://create-react-app.dev/docs/getting-started](https://create-react-app.dev/docs/getting-started)
* React JS: [https://reactjs.org/docs/getting-started.html](https://reactjs.org/docs/getting-started.html)

## ¿Tienes alguna pregunta o sugerencia?

Puedes escribirme en **@leonardo_lib** o **@RocktechRD** a través de twitter, 
o a mi correo **leonardo.lira@rocktech.mx**.
