import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import { About } from './About';
import { CargaDatos } from './CargaDatos';
import { Contact } from './Contact';
import { Inicio } from './Inicio';

const PruebaRouter = () => {

    return (
        <BrowserRouter>
            <div>
                <h1>Home</h1>
                <nav>
                    <Link className='btn btn-primary mb-2' to="/">Home</Link> {" "}
                    <Link className='btn btn-primary mb-2' to="/about">About</Link> {" "}
                    <Link className='btn btn-primary mb-2' to="/contact">Contact</Link>
                </nav>
            </div>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    )
}

export default PruebaRouter