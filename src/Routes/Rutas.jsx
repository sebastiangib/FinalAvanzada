import { Route, Routes } from "react-router-dom"

import { Home } from "../Home/Home" 
import { Habitaciones } from "../Habitaciones/Habitaciones"
import { Formulario } from "../Reservas/Formulario"
import { Menu } from "../Menu/Menu"
import { Footer } from "../Footer/Footer"

export function Rutas(){
    return(
        <>
        <Menu/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/habitaciones" element={<Habitaciones />} />
        <Route path="/reservas" element={<Formulario />} />
        </Routes>
        <Footer/>
        </>
    )
}