import { createContext, useState } from "react";
import { CargaDatos } from "../CargaDatos";

export const DataContext = createContext();

const dataFixed = {
    nombre: "Paco",
    edad: 19
}

export const DataProvider = ({children})=>{
   
    const [data, setData] = useState(dataFixed)
    

    return (
        <DataContext.Provider value={{
            data,
            setData, 
        }}>
            {children}
        </DataContext.Provider>
    )

}