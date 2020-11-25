import React, { useState } from 'react';
import {
    Grid, TextField, Button
} from '@material-ui/core';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 500px;
`;

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

export default UserForm;
