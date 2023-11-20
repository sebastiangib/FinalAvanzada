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
      <br /> 
      <div className="container">
      <hr />
      <div className="row">
        <div className="col-12 col-md-6">
                <h1 className="title">ACTIVIDADES INVERNALES</h1>
                <img
                  src="../../src/assets/excursionmotonieve.webp"
                  className="img-fluid w-100 wow animate__animated animate__slideInDown"
                />
                <br/><br />
                <p>
                Además de sumergirse en la cálida comodidad de los iglús, los huéspedes del "Hotel's Polar" tienen a su alcance un abanico cautivador de actividades diseñadas para explorar y deleitarse con la maravilla invernal. Desde aventuras que aceleran el pulso hasta momentos de serena contemplación, cada día en este paraíso nevado está repleto de emocionantes oportunidades.
                  <br /><br />
                  Las rutas de senderismo guiadas a través de los bosques nevados ofrecen la oportunidad de descubrir la vida silvestre que se adapta al frío, mientras que las excursiones en raquetas de nieve invitan a sumergirse en la quietud y la belleza natural de los alrededores. Los entusiastas del esquí encontrarán su paraíso en las cercanas pistas, donde la nieve fresca y las vistas impresionantes se combinan para ofrecer una experiencia única.
                </p>
              </div>
              <div className="col-12 col-md-6">
                <p>
                Para aquellos en busca de una dosis de adrenalina, las emocionantes carreras en trineo de perros liderados por vigorosos huskies siberianos o las vertiginosas travesías en motonieve a través de paisajes helados proporcionan una inolvidable aventura polar. Mientras tanto, los amantes de la pesca pueden probar suerte en los lagos congelados, esperando pacientemente bajo el sol reflejado en el hielo en busca de la captura perfecta.
                <br /><br />
                Las noches en el "Hotel's Polar" son una invitación a la relajación y la maravilla celestial. Las aguas termales al aire libre ofrecen un remanso de calidez y confort bajo el brillante lienzo estrellado del cielo ártico, donde los huéspedes pueden sumergirse y dejar que las tensiones se desvanezcan mientras observan las estrellas titilantes sobre ellos.
                <br /><br />
                En este lugar donde la belleza natural se fusiona con el lujo y la aventura, cada experiencia está diseñada para cautivar, inspirar y conectar a los visitantes con la asombrosa grandeza del invierno. En el "Hotel's Polar", cada momento es una oportunidad para crear recuerdos inolvidables en medio de un paisaje que parece sacado de un cuento de hadas invernal va más allá de la aventura diurna. Las noches son una sinfonía de tranquilidad y asombro, donde el manto estrellado se convierte en el telón de fondo de una de las mayores maravillas naturales: la aurora boreal,  Los huéspedes tienen el privilegio de presenciar este baile de luces en el firmamento desde la calidez de sus iglús.
                </p>
                <img
                  src="../../src/assets/auroraboreal.jpg"
                  className="w-100 img-fluid wow animate__animated animate__slideInUp"
                />
              </div>
            </div>
          </div>
          <hr />
      <div className="container">
      <div className="row">
        <div className="col-12 col-md-12">
          <center>
          <h2>¡Encuéntranos Aquí! <i class="fa-solid fa-location-dot"></i></h2>
          <hr />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17725526.671809807!2d0!3d-74.26667751218294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa4b9967b3390754b%3A0x6e52be1f740f2075!2sAnt%C3%A1rtida!5e0!3m2!1ses!2sco!4v1700438025637!5m2!1ses!2sco"
            width="600"
            height="450"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
          ></iframe>
          </center>
        </div>
      </div>
    </div>
    </>
  );
}
