import { Route, Routes } from "react-router-dom"

import { Home } from "../Home/Home" 
import { Habitaciones } from "../Habitaciones/Habitaciones"
import { Contacto } from "../Contacto/Contacto"
import { Formulario } from "../Reservas/Formulario"
import { Menu } from "../Menu/Menu"

export function Rutas(){
    return(
        <>
        <Menu/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/habitaciones" element={<Habitaciones />} />
        <Route path="/reservas" element={<Formulario />} />
        <Route path="/contacto" element={<Contacto />} />
        </Routes>
        </>
    )
}