import React, { createElement, useEffect, useState } from 'react'

export const Inicio = () => {

    const element = {
        type: 'h1',
        props: {
            className: 'greeting',
            children: 'Hello, world!'
        }
    };

    const url = "https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/purina-para-que-sirven-los-bigotes-de-los-gatos.png?itok=2ebKusX3"

    const agregarElementos = () =>{
        const img = document.createElement("img");      // Creamos un <img>
        img.src = url
        img.id = "img1"
        document.body.appendChild(img)
    }

    useEffect(() => {
        agregarElementos();
        return ()=>{
            document.getElementById("img1").remove();
        }
    }, [])
    

   const [tiempo, setTiempo] = useState(new Date().toLocaleTimeString()) 

   setInterval(() => {
        setTiempo(new Date().toLocaleTimeString());
   }, 1000);

    return (
       <> 
       <h1>Time: {tiempo}</h1>
       </>
    )
}
