import "./Carreta.css";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import { EffectCards } from "swiper/modules";
import { EffectCube, Pagination } from "swiper/modules";

export function Carreta() {
  return (
    <>
      <h3 className="title">Hotel's Polar</h3>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8">
            <p>
              <br />
              En el corazón de un reino de blancura infinita, donde los copos de
              nieve danzan al compás del viento, emerge majestuoso el "Hotel's
              Polar". Envuelto en un manto de nieve fresca y pura, este
              santuario de descanso y aventura se erige como un refugio único
              para los amantes del invierno y la belleza helada.
              <br />
              <br />
              Bienvenidos a un mundo de elegancia y confort en un entorno gélido
              y mágico. Imagina despertar dentro de tu propio iglú privado,
              donde las luces danzan sobre las paredes de hielo y el cálido
              abrazo de las pieles y mantas te transporta a un mundo de
              comodidad. Cada habitación es una obra maestra, una fusión
              perfecta entre el encanto ancestral de los iglús y las comodidades
              modernas que garantizan una estadía inolvidable. <br />
              <br />
              Con un equipo atento y cálido, el "Hotel's Polar" ofrece una
              experiencia excepcional. Desde la privacidad de tus aposentos
              hasta las áreas comunes donde se mezclan la emoción de las
              actividades invernales con el regocijo de la relajación, aquí cada
              momento se convierte en un recuerdo indeleble.
            </p>
          </div>
          <div className="col-12 col-md-4">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img
                  src="../../src/assets/iglu1.jpg"
                  className="w-100 h-100 img-fluid"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="../../src/assets/iglu3.jpg"
                  className="w-100 h-100 img-fluid"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="../../src/assets/iglu2.jpg"
                  className="w-100 h-100 img-fluid"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="../../src/assets/iglu5.jpg"
                  className="w-100 h-100 img-fluid"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="../../src/assets/iglu4.jpg"
                  className="w-100 h-100 img-fluid"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img
                  src="../../src/assets/iglu8.jpg"
                  className="w-100 h-100 img-fluid"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="../../src/assets/iglu9.jpg"
                  className="w-100 h-100 img-fluid"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="../../src/assets/iglu6.jpg"
                  className="w-100 h-100 img-fluid"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="../../src/assets/iglu7.jpg"
                  className="w-100 h-100 img-fluid"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="../../src/assets/iglu10.jpg"
                  className="w-100 h-100 img-fluid"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="col-12 col-md-8">
            <p>
              Las estancias en este santuario nevado son mucho más que simples
              alojamientos; son un viaje a un mundo de maravillas invernales.
              Cada iglú está meticulosamente diseñado para ofrecer una
              combinación perfecta de encanto tradicional y confort moderno. Las
              paredes de hielo parecen susurrar historias antiguas, mientras que
              el interior acoge a los huéspedes con suaves edredones,
              iluminación suave y vistas panorámicas que muestran la
              majestuosidad del paisaje nevado. <br /> <br />
              El "Hotel's Polar" se
              enorgullece de su compromiso con la sostenibilidad, utilizando
              tecnologías innovadoras para garantizar una huella ambiental
              mínima. Los iglús están construidos con técnicas respetuosas con
              el medio ambiente, integrando la arquitectura tradicional con
              sistemas de energía renovable y prácticas eco-friendly que
              preservan la belleza natural que los rodea.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
