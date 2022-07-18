
import { useEffect, useState } from "react";
import { CargaDatos } from "./CargaDatos";

export const Tabla = () => {
    const {users} = CargaDatos();
    const [data, setdata] = useState(users);
 
   
   if(users.length != 0){
    $(document).ready(function () {
        $('#table_id').DataTable();
    });
   }
    
    return (
        <div className="mt-5 mb-5">
        <table id="table_id">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Email</th>
                    <th>First_Name</th>
                    <th>Last_Name</th>
                    <th>Avatar</th>
                </tr>
            </thead>
            <tbody> 
                {
                    users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.email}</td>
                            <td>{user.first_name}</td>
                            <td>{user.last_name}</td>
                            <td>{user.avatar}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
    )
}
