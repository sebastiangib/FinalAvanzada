import { Link } from "react-router-dom";
import './Menu.css'

export function Menu(){
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <Link className="nav-link" to="/">
  <a className="navbar-brand menu" href="#">
      <img src="../../src/assets/icono.png"  width="40" height="30" className="d-inline-block align-text-top"/>
    </a>
    <a className="navbar-brand menu" href="#">Hotel's Polar</a></Link>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
      <li className="nav-item"><Link className="nav-link" to="/">Inicio</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/habitaciones">Habitaciones</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/reservas">Reservar</Link></li>
      </div>
    </div>
  </div>
</nav>
        </>
    )
}
<div className="container-fluid">
    
  </div>