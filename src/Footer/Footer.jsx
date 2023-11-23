import './Footer.css'

export function Footer(){
    return(
        <>
        <footer class="footer">
  <div class="footer-container">
    <div class="footer-logo">
      <img src="../../src/assets/icono.png" alt="Hotel Polar's" class="logo"/>
      <p class="tagline">Descubre la magia del invierno con nosotros.</p>
    </div>
    <div class="footer-links">
      <h3>Explorar</h3>
      <ul>
      <li><a href="inicio" class="icon-link"><i class="fa-solid fa-house"></i>Inicio</a></li>
      <li><a href="habitaciones" class="icon-link"><i class="fa-solid fa-igloo"></i>Habitaciones</a></li>
      <li><a href="reservas" class="icon-link"><i class="fa-solid fa-hotel"></i>Reservas</a></li>
      </ul>
    </div>
    <div class="footer-contact">
      <h3>Contacto</h3>
      <a href="https://github.com/sebastiangib" class="icon-link"><i class="fab fa-github"></i> Habitaciones</a>
    </div>
    <div class="footer-social">
      <h3>Síguenos</h3>
      <ul class="social-icons">
        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <p>&copy; 2023 Hotel Polar's. Todos los derechos reservados.</p>
  </div>
</footer>

        </>
    )
}