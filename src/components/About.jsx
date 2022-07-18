import React, { useState } from 'react'
import { useForm } from './hooks/useForm'

export const About = () => {

    const { onChange, reset, state } = useForm({
        nombre: '',
        numero: '',
    });

    const { nombre, numero } = state;

    return (
        <div>
            <form >

                <input
                    className="form-control mb-1"
                    type="text"
                    name='nombre'
                    value={nombre}
                    placeholder='Nombre'
                    onChange={onChange}
                />
                <input
                    className="form-control mb-2"
                    type="text"
                    name='numero'
                    value={numero}
                    placeholder='Numero'
                    onChange={onChange}
                />


            </form>
        </div>
    )
}
