# Introducción a React (parte 3): Formularios y Listas

## Introducción

En este artículo veremos cómo crear un formulario para guardar o eliminar 
usuarios de una lista, además de aprender a crear, manipular y renderizar esta lista
en React.

## Crear formulario

Para este ejemplo crearemos un formulario que permita capturar el nombre y correo
electrónico de un usuario. En la creación de la interfaz, utilizaremos la 
librería [material-ui](https://material-ui.com/), que nos provee una colección
de componentes listos para ser utilizados. También agregaremos la librería 
[styled-components](https://styled-components.com/) para aplicar estilo CSS a los 
componentes de manera directa:

```
yarn add @material-ui/core
yarn add styled-components
```

Podemos incluir la fuente por defecto de la librería [material-ui](https://material-ui.com/), 
agregando la siguiente linea en el archivo ``public/index.html`` dentro de la etiqueta ``<head>``

```html
<head>
    ...
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
</head>
```

Crearemos un nuevo componente, en dónde agregaremos el formulario:

```javascript
import React from 'react';

const UserForm = () => (
    <form></form>
);

export default UserForm;
```

Dentro del formulario, crearemos un grid con cuatro renglones, donde el primer renglon es
el título del formulario, después irá el campo para escribir el nombre del usuario, en el 
siguiente irá el campo del correo electrónico y en el último renglón ira el botón para guardar
la información.

```javascript
import React from 'react';
import {
    Grid, TextField, Button
} from '@material-ui/core';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 500px;
`;

const UserForm = () => {
    return (
        <Wrapper>
            <form noValidate autoComplete="off">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <h1>Datos del usuario</h1>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField  label="Nombre"
                            variant="outlined"
                            required
                            type="text" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField  label="Correo electrónico"
                            variant="outlined"
                            required
                            type="email" />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained"
                            color="primary">
                            Guardar
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Wrapper>
    );
};

export default UserForm;
```

El formulario debería verse así:

![form](https://i.imgur.com/pOBjpS9.png "Formulario")

Para manejar los valores que se escriban en los campos, debemos usar el estado interno 
del componente, por lo que declararemos una serie de variables utilizando el hook 
[useState](https://es.reactjs.org/docs/hooks-state.html) de React y agregando las variables
a los campos, para actualizar su valor cada que el texto cambie:

```javascript
const UserForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    return (
        <Wrapper>
            <form noValidate autoComplete="off">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <h1>Datos del usuario</h1>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField  label="Nombre"
                            variant="outlined"
                            required
                            value={name}
                            onChange={e => setName(e.target.value)}
                            type="text" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField  label="Correo electrónico"
                            variant="outlined"
                            required
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            type="email" />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained"
                            color="primary">
                            Guardar
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Wrapper>
    );
};
```

Ahora, escribiremos la función para manipular el clic en el botón para 
guardar la información. En este ejemplo, guardaremos la información en localStorage
para después mostrarla como una lista.

```javascript
const UserForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const save = () => {
        let users = JSON.parse(localStorage.getItem('users'));

        if (!users) {
            users = [];
        }

        if (name != '' && email != '') {
            users.push({ name, email });
        }

        localStorage.setItem('users', JSON.stringify(users));
        console.log(users);
    };

    return (
        <Wrapper>
            <form noValidate autoComplete="off">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <h1>Datos del usuario</h1>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField  label="Nombre"
                            variant="outlined"
                            required
                            value={name}
                            onChange={e => setName(e.target.value)}
                            type="text" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField  label="Correo electrónico"
                            variant="outlined"
                            required
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            type="email" />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained"
                            onClick={save}
                            color="primary">
                            Guardar
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Wrapper>
    );
};
```

El resultado debería ser el siguiente:

![res](https://i.imgur.com/M4BNo0R.png "Resultado")

## Renderizar lista de elementos

Ya que tenemos nuestra lista de usuarios almacenada en localStorage, podemos
renderizarla en la pantalla para poder ver que usuarios se han agregado. Dentro
del componente del formulario, agregamos una lista ``ul`` en la que pondremos
la información de cada usuario:

```javascript
<div style={{ textAlign: 'left' }}>
    <ul>
        {
            users?.map((user, key) =>
                <li key={key}>Nombre: {user.name} <br />Correo: {user.email}</li>
            )
        }
    </ul>
</div>
```

Como se observa, para iterar los elementos de una lista en un componente de React, se 
utiliza la función ``map`` de JavaScript. El resultado final debería verse así:

```javascript
const UserForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')));

    const save = () => {
        let aux_users = users ? [...users] : [];

        if (name != '' && email != '') {
            aux_users.push({ name, email });
        }

        localStorage.setItem('users', JSON.stringify(aux_users));
        setUsers(aux_users);
    };

    return (
        <Wrapper>
            <form noValidate autoComplete="off">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <h1>Datos del usuario</h1>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField  label="Nombre"
                            variant="outlined"
                            required
                            value={name}
                            onChange={e => setName(e.target.value)}
                            type="text" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField  label="Correo electrónico"
                            variant="outlined"
                            required
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            type="email" />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained"
                            onClick={save}
                            color="primary">
                            Guardar
                        </Button>
                    </Grid>
                </Grid>
            </form>
            <br/>
            <div style={{ textAlign: 'left' }}>
                <ul>
                    {
                        users?.map((user, key) =>
                            <li key={key}>Nombre: {user.name} <br />Correo: {user.email}</li>
                        )
                    }
                </ul>
            </div>
        </Wrapper>
    );
};
```

Ahora cada que demos clic en el botón, un nuevo usuario será renderizado en la lista:

![lista](https://i.imgur.com/6GaabE6.png "Lista")

## Conclusiones

Crear formularios y listas es lo más común en el desarrollo de software. En este artículo 
aprendimos como se manejan este tipo de elementos en React y como podemos manipularlos
y ajustarlos a las necesidades de nuestro proyecto.

## Recursos

Puedes consultar los ejemplos de este artículo en el repositorio 
[https://github.com/leonardlib/blog-rd-react](https://github.com/leonardlib/blog-rd-react)

## Enlaces de referencia

* Create React App: [https://create-react-app.dev/docs/getting-started](https://create-react-app.dev/docs/getting-started)
* React JS: [https://reactjs.org/docs/getting-started.html](https://reactjs.org/docs/getting-started.html)
* Styled Components: [https://styled-components.com/](https://styled-components.com/)
* Material UI React: [https://material-ui.com/](https://material-ui.com/)

## ¿Tienes alguna pregunta o sugerencia?

Puedes escribirme en **@leonardo_lib** o **@RocktechRD** a través de twitter, 
o a mi correo **leonardo.lira@rocktech.mx**.
