# Introducción a React: Crear una aplicación

## Introducción

En este primer artículo de la serie "Introducción a React", descubrirás de qué se trata
esta herramienta y para qué te puede ayudar en algún proyecto de desarrollo de software 
que tengas, además de aprender a configurar un entorno desde cero para poder utilizar 
esta herramienta.

## ¿Qué es React? 

React es una biblioteca de JavaScript que te permite escribir interfaces de usuario
interactivas de forma muy sencilla. Se basa en el uso de componentes encapsulados que 
pueden ser desde un botón simple hasta una página completa.

### Componentes en React

Un componente es una clase o una función escrita en JavaScript (aunque también se 
puede utilizar TypeScript), que tiene su propio estado y que puede ser actualizado y 
renderizado en la pantalla mediante React cuando sus datos cambien.

Cada componente implementa una función llamada `render()` que puede usar datos
del mismo componente y que retorna lo que se va a mostrar en la pantalla, por ejemplo:

```javascript
class HolaMundo extends React.Component {
    render() {
        return (
            <div>{ this.props.mensaje }</div>
        );
    }
};

ReactDOM.render(
    <HolaMundo mensaje="Hola mundo!" />,
    document.getElementById('id-elemento')
);
```

La clase `HolaMundo`, que es un componente de React, retorna un mensaje dentro de 
una etiqueta `div` de HTML. 

Justo después de la clase, vemos como se puede 
renderizar el componente en algún elemento de HTML que tengamos, en este caso React 
busca el elemento con el ID `id-elemento` y lo cambia por el resultado de la 
función `render()` del componente:

```
Hola mundo!
```

Como se mencionó antes, cada componente tiene un estado interno, lo que nos permite 
ejecutar funciones dentro del mismo para actualizar lo que se muestra en pantalla. 
Por ejemplo:

```javascript
class HolaMundo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { mostrarMensaje: false };
    }

    toggleMostrarMensaje(mostrar) {
        this.setState({
            mostrarMensaje: mostrar
        });
    }    

    render() {
        return (
            <div>
                <button onClick={() => this.toggleMostrarMensaje(true) }>
                Mostrar mensaje
                </button>
                <button onClick={() => this.toggleMostrarMensaje(false) }>
                    Ocultar mensaje
                </button>
                <div>
                    { this.state.mostrarMensaje && this.props.mensaje }
                </div>
            </div>
        );
    }
};

ReactDOM.render(
    <HolaMundo mensaje="Hola mundo!" />,
    document.getElementById('id-elemento')
);
```

El componente ahora tiene dos botones que actualizan su estado cambiando el valor de la 
variable `mostrarMensaje`, por lo que cuando se le de clic a alguno de los botones,
React actualizará el componente y volverá a renderizarlo en la pantalla, mostrando el 
nuevo resultado.

![resultado](https://media.giphy.com/media/YMv2WragpaRFTiq2Uq/giphy.gif "Resultado")

### Cosas interesantes sobre React

* Dado que las pantallas son creadas a través de componentes, la depuración es mucho más
rápida y sencilla.
* El uso de componentes escritos en JavaScript y no en plantillas de HTML hace que 
las propiedades y estados de tu aplicación permanezcan fuera del DOM.
* React puede también renderizar desde el servidor usando Node.
* Puedes crear o potencializar aplicaciones móviles utilizando React Native.

## Creando una aplicación con React

El único requerimiento para empezar a trabajar en una aplicación con React es instalar 
Node.js, si no sabes que es Node.js, da clic [aquí](https://nodejs.org/en/about/), para 
ver cómo instalarlo ve [aquí](https://nodejs.org/en/). Debes instalar la versión 10.16.0 o 
alguna versión superior.

### Construir proyecto

Una vez que lo tengas instalado, ejecuta la siguiente línea en tu terminal para crear una 
nueva aplicación con React, sustituyendo `my-app` por el nombre que quieras ponerle
a tu proyecto:

```
npx create-react-app my-app
```

### Estructura del proyecto

Verás que se creara una carpeta con el nombre del proyecto y tendrá una estructura 
similar a la siguiente:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

* El archivo `README.md` es una descripción de para qué es el proyecto que estamos
creando y que tecnologías se están utilizando.
* En la carpeta `node_modules` se almacenan todos los paquetes que se instalan en 
el proyecto mediante NPM.
* El archivo `package.json` contiene la información general del proyecto y una lista
de qué paquetes o dependencias son necesarios para su correcto funcionamiento.
* En la carpeta `public` se almacena el proyecto una vez que es compilado para 
lanzarse a producción.
* En la carpeta `src` se escribe toda la lógica de nuestra aplicación.

Los siguientes archivos siempre deben existir:

* `public/index.html` que es el template de la aplicación.
* `src/index.js` que es el punto de entrada para todo el código que escribamos en JavaScript.

### React en acción

Para poder ver tu aplicación en el navegador, ejecuta la siguiente secuencia de comandos en tu terminal:

```
cd my-app
yarn start
```

Escribiendo [http://localhost:3000](http://localhost:3000) en tu navegador, podrás ver
la aplicación en acción. Si haces algún cambio en el código, React lo renderizará en la 
pantalla de inmediato.

![app](https://media.giphy.com/media/KfNisx1amBSOXTcz3g/giphy.gif "app")

¡Listo!, has creado tu primer proyecto con React.

## Conclusiones

React es un framework que nos ayuda a desarrollar aplicaciones en base a componentes interactivos, 
que son reutilizables y que nos permiten crear interfaces de usuario dinámicas. Como se mencionó
anteriormente, con el uso de componentes encapsulados, la depuración es mucho más sencilla y certera, 
además de que ahorras bastante tiempo de desarrollo ya que puedes visualizar inmediatamente en la pantalla 
los cambios que hagas a tu código.

Otra ventaja de React es que es un framework en el que puedes trabajar tanto para plataformas
web como para plataformas móvil, haciendo uso de React Native, que en su mayoría, están estructurados
de la misma manera, por lo que incluso puedes compartir componentes entre ambos.

Como viste, es muy sencillo aprender React y es un lenguaje altamente demandado por las 
empresas de desarrollo de software hoy en día.


## ¿Tienes alguna pregunta o sugerencia?

No dudes en escribirme a **@leonardo_lib** o **@RocktechRD** en twitter, o a mi correo **leonardo.lira@rocktech.mx**.

