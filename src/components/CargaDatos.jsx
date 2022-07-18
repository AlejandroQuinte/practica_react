import { useEffect, useState } from 'react'

export const CargaDatos = () => {
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



    return {users}
}
