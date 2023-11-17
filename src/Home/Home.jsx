import { useEffect,useState } from "react";
import './Home.css'
import { Formulario } from "../Formulario/Formulario";
import { Menu } from "../Menu/Menu";

export function Home(){
    return(
        <>
        <Menu/>
        <div className="banner">
            <div className="row">
                <div className="col-12 col-md-4jmn">
                    <h3 className="titulo">¡Reserva con Nosotros!</h3>
                    <br />
                <Formulario/>
                </div>
            </div>
            
        </div>
        </>
    )
}