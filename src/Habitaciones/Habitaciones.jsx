import React, { useRef, useState,useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Habitaciones.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import 'animate.css'
import WOW from 'wow.js'

export function Habitaciones() {

  useEffect(function(){
    const wow = new WOW();
    wow.init();
  },[])

  return (
    <>
    <h1 id="habitaciones" className="titleHabitacion">HABITACIONES</h1>
      <section>
        <div className="container my-5">
          <hr />
          <div className="row justify-content-start">
            <div className="col-12 col-md-6">
              <div className="habitaciones-container">
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiperr wow animate__animated animate__slideInLeft"
                >
                  <SwiperSlide>
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/avanzada-90a94.appspot.com/o/iglu9.jpg?alt=media&token=0c61591b-5276-41c5-b43c-0b743f591be5"
                      className="w-75 h-75 img-fluid"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/avanzada-90a94.appspot.com/o/iglu7.jpg?alt=media&token=bc313622-bbf5-4380-844e-8c22f11c20e8"
                      className="w-75 h-75 img-fluid"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/avanzada-90a94.appspot.com/o/iglu10.jpg?alt=media&token=d8b09050-aac7-4ebe-aa74-fdd66e036539"
                      className="w-75 h-75 img-fluid"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className="col-6 wow animate__animated animate__slideInRight">
              <h1 className="text-center tituloHabitaciones">
                Aurora Cristalina
              </h1>
              <br />
              <h4 className="tituloHabitaciones">Tipo de Habitación</h4>
              <p className="textoHabitacion">
                <i class="fa-solid fa-igloo"></i> Suite Panorámica Igloo.
              </p>
              <h4 className="tituloHabitaciones">Capacidad</h4>
              <p className="textoHabitacion">
                <i className="fa-solid fa-person"></i>{" "}
                <i className="fa-solid fa-person-dress"></i> (Diseñada para 2
                personas)
              </p>
              <h4 className="tituloHabitaciones">Servicios/Comodidades</h4>
              <p className="textoHabitacion">
                <i class="fa-solid fa-wifi"></i> <i class="fa-solid fa-tv"></i>{" "}
                <i class="fa-solid fa-mug-hot"></i>{" "}
                <i class="fa-solid fa-house-chimney"></i>{" "}
                <i class="fa-solid fa-bath"></i>
                <br />
                Cama queen size con dosel, baño privado con ducha de efecto
                lluvia, zona de estar con vista de 360 grados, desayuno servido
                en la habitación.
              </p>
              <h4 className="tituloHabitaciones">Vistas</h4>
              <p className="textoHabitacion">
                <i class="fa-solid fa-mountain-sun"></i> Vistas panorámicas a la
                noche estrellada y las auroras boreales desde todos los ángulos.
              </p>
              <h4 className="tituloHabitaciones">Tamaño de la Habitación</h4>
              <p className="textoHabitacion">
                <i class="fa-solid fa-expand"></i> Diseño exclusivo con un
                ambiente íntimo y acogedor.
              </p>
            </div>
          </div>
          <br /> <hr />
          <div className="row justify-content-start">
            <div className="col-6 wow animate__animated animate__slideInLeft">
              <h1 className="text-center tituloHabitaciones">
                Aurora Panoramica
              </h1>
              <br />
              <h4 className="tituloHabitaciones">Tipo de Habitación</h4>
              <p className="textoHabitacion">
                <i class="fa-solid fa-igloo"></i> Suite Premium Igloo.
              </p>
              <h4 className="tituloHabitaciones">Capacidad</h4>
              <p className="textoHabitacion">
                <i className="fa-solid fa-person"></i>{" "}
                <i className="fa-solid fa-person-dress"></i> (Diseñada para 2
                personas)
              </p>
              <h4 className="tituloHabitaciones">Servicios/Comodidades</h4>
              <p className="textoHabitacion">
                <i class="fa-solid fa-wifi"></i> <i class="fa-solid fa-tv"></i>{" "}
                <i class="fa-solid fa-mug-hot"></i>{" "}
                <i class="fa-solid fa-house-chimney"></i>{" "}
                <i class="fa-solid fa-bath"></i>
                <br />
                Cama king size, baño privado con jacuzzi, chimenea, servicio de
                habitación las 24 horas, acceso a sauna.
              </p>
              <h4 className="tituloHabitaciones">Vistas</h4>
              <p className="textoHabitacion">
                <i class="fa-solid fa-mountain-sun"></i> Impresionante vista a
                la aurora boreal desde la ventana panorámica.
              </p>
              <h4 className="tituloHabitaciones">Tamaño de la Habitación</h4>
              <p className="textoHabitacion">
                <i class="fa-solid fa-expand"></i> Espacio íntimo y acogedor
                para una experiencia inolvidable.
              </p>
            </div>
            <div className="col-12 col-md-6">
              <div className="habitaciones-container">
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiperr wow animate__animated animate__slideInRight"
                >
                  <SwiperSlide>
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/avanzada-90a94.appspot.com/o/habitacion3.jpg?alt=media&token=4bbec2a5-c753-4586-b265-dabdadb46ed4"
                      className="w-75 h-75 img-fluid"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/avanzada-90a94.appspot.com/o/habitacion3.1.jpg?alt=media&token=7f23364d-437f-49f4-9652-8f7e4ffce0fe"
                      className="w-75 h-75 img-fluid"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/avanzada-90a94.appspot.com/o/habitacion3.2.jpg?alt=media&token=29db616e-0027-4c38-874e-cc383a9fdb6e"
                      className="w-75 h-75 img-fluid"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
          <br /> <hr />
          <div className="row justify-content-start">
            <div className="col-12 col-md-6">
              <div className="habitaciones-container">
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiperr wow animate__animated animate__slideInLeft"
                >
                  <SwiperSlide>
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/avanzada-90a94.appspot.com/o/habitacion4.jpg?alt=media&token=02d125e6-75d9-4733-9d8a-8d281316773d"
                      className="h-75 img-fluid"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/avanzada-90a94.appspot.com/o/habitacion4.1.jpg?alt=media&token=de316bb3-d231-4589-9600-046b17689763"
                      className="h-75 img-fluid"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/avanzada-90a94.appspot.com/o/habitacion4.2.jpg?alt=media&token=1eaaabbe-f2c1-46e6-a8db-3d03e87ca66e"
                      className="h-75 img-fluid"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className="col-6 wow animate__animated animate__slideInRight">
              <h1 className="text-center tituloHabitaciones">Esencia Helada</h1>
              <br />
              <h4 className="tituloHabitaciones">Tipo de Habitación</h4>
              <p className="textoHabitacion">
                <i class="fa-solid fa-igloo"></i> Suite de Lujo Igloo.
              </p>
              <h4 className="tituloHabitaciones">Capacidad</h4>
              <p className="textoHabitacion">
                <i className="fa-solid fa-person"></i>{" "}
                <i className="fa-solid fa-person-dress"></i>{" "}
                <i className="fa-solid fa-person"></i> (Diseñada para 2 a 3
                personas)
              </p>
              <h4 className="tituloHabitaciones">Servicios/Comodidades</h4>
              <p className="textoHabitacion">
                <i class="fa-solid fa-wifi"></i> <i class="fa-solid fa-tv"></i>{" "}
                <i class="fa-solid fa-mug-hot"></i>{" "}
                <i class="fa-solid fa-house-chimney"></i>{" "}
                <i class="fa-solid fa-bath"></i>
                <br />
                Cama doble con dosel, baño de mármol con bañera de hidromasaje,
                área de relajación con vista a las luces del norte, servicio de
                mayordomo.
              </p>
              <h4 className="tituloHabitaciones">Vistas</h4>
              <p className="textoHabitacion">
                <i class="fa-solid fa-mountain-sun"></i> Amplias ventanas para disfrutar de las auroras boreales desde la comodidad de tu habitación.
              </p>
              <h4 className="tituloHabitaciones">Tamaño de la Habitación</h4>
              <p className="textoHabitacion">
                <i class="fa-solid fa-expand"></i>  Espacio íntimo y lujoso para una estancia inolvidable.
              </p>
            </div>
          </div>
          <br /><hr />
          <div className="row justify-content-start">
            <div className="col-6 wow animate__animated animate__slideInLeft">
              <h1 className="text-center tituloHabitaciones">
                Aurora Raleway
              </h1>
              <br />
              <h4 className="tituloHabitaciones">Tipo de Habitación</h4>
              <p className="textoHabitacion">
                <i class="fa-solid fa-igloo"></i> Carpa de Aventura.
              </p>
              <h4 className="tituloHabitaciones">Capacidad</h4>
              <p className="textoHabitacion">
                <i className="fa-solid fa-person"></i>{" "}
                <i className="fa-solid fa-person-dress"></i> (Diseñada para 2
                personas)
              </p>
              <h4 className="tituloHabitaciones">Servicios/Comodidades</h4>
              <p className="textoHabitacion">
                <i class="fa-solid fa-wifi"></i> <i class="fa-solid fa-tv"></i>{" "}
                <i class="fa-solid fa-mug-hot"></i>{" "}
                <i class="fa-solid fa-house-chimney"></i>{" "}
                <i class="fa-solid fa-bath"></i>
                <br />
                Cama cómoda, sacos de dormir térmicos, calefacción portátil, desayuno al aire libre.
              </p>
              <h4 className="tituloHabitaciones">Vistas</h4>
              <p className="textoHabitacion">
                <i class="fa-solid fa-mountain-sun"></i> Vista panorámica de las montañas nevadas y los bosques cubiertos de nieve.
              </p>
              <h4 className="tituloHabitaciones">Tamaño de la Habitación</h4>
              <p className="textoHabitacion">
                <i class="fa-solid fa-expand"></i> Espacio acogedor para disfrutar de la naturaleza invernal.
              </p>
            </div>
            <div className="col-12 col-md-6">
              <div className="habitaciones-container">
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiperr wow animate__animated animate__slideInRight"
                >
                  <SwiperSlide>
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/avanzada-90a94.appspot.com/o/habitacion1.2.jpg?alt=media&token=39b9ab98-c5ad-4733-8320-0846151f6550"
                      className="w-75 h-75 img-fluid"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/avanzada-90a94.appspot.com/o/habitacion1.1.jpg?alt=media&token=d718aec6-d04b-4cd1-a4c3-024a267c36cf"
                      className="w-75 h-75 img-fluid"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/avanzada-90a94.appspot.com/o/habitacion2.1.jpg?alt=media&token=2bb5dcbf-354f-4fb9-b20a-53dcddfd568d"
                      className="w-75 h-75 img-fluid"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
