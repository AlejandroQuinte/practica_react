import React, { useContext } from 'react'
import { DataContext } from './context/DataContext'

export const Button = () => {
    const {data,setData} = useContext(DataContext)

    const newData = {
        nombre: "Alejandro",
        edad: 20
    }

    console.log()
  return (
    <div>

        <h2>{JSON.stringify(data)}</h2>
        <button onClick={()=>setData(newData)}>Presionar</button>

         
    </div>
  )
}
