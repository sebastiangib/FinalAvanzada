import { useEffect,useState } from "react";
import './Home.css'
import { Formulario } from "../Formulario/Formulario";

export function Home(){
    return(
        <> 
        <div className="banner">
            <div className="row">
                <div className="col-12 col-md-4jmn">
                    <h3>¡Reserva con Nostros!</h3>
                <Formulario/>
                </div>
            </div>
            
        </div>
        </>
    )
}