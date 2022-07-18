import React, { useEffect, useState } from 'react'
import { CargaDatos } from './CargaDatos';
import { Tabla } from './Tabla';


const styles = {
    button: {
        background: "black"
    }
}

const UserList = () => {

    const [users, setUsers] = useState([]);

    const obtenerUsuarios = async () => {
        const res = await fetch("https://reqres.in/api/users?page=1");
        const json = await res.json();
        setUsers(json.data);
    };

    useEffect(() => {
        obtenerUsuarios();
        return () => {
        }
    }, [])

    

    return (
        <div>

            <Tabla />

            <h1 className='mb-2'>Lista de usuarios</h1>

            <select defaultValue={'DEFAULT'}  className="form-select" aria-label="">
                <option  value="DEFAULT" disabled>Open this select menu</option>
                {
                    users.map(user => (
                        <option value={user.id} key={user.id} >{user.first_name} {user.last_name}</option>
                    ))
                }
            </select>

            {
                users.map(user => (
                    <div style={styles.button} className='d-flex shadow p-3 mb-4 bg-body rounded bg-light' key={user.id}>
                        <div className='me-3'>
                            <img src={user.avatar} alt="Avatar" />
                        </div>
                        <div className='d-block'>
                            <h5>Nombre:</h5>
                            <p>{user.first_name} {user.last_name}</p>
                            <h5>Email:</h5>
                            <p>{user.email}</p>
                        </div>



                    </div>
                ))
            }



        </div>
    )
}

export default UserList