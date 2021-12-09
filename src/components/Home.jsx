import React from "react";

import royal from "../assets/img/royal.jpg";
import spiderman from "../assets/img/spiderman.jpg";
import encanto from "../assets/img/encanto.png";
const Home = () => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={royal} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={spiderman} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={encanto} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <br></br>
      <div  classNameName="card">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                PROMOCIONES
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>
                  Para participar deber cumplir con estos requisitos.
                </strong>{" "}
                Si eres usuario Claro de servicios móvil y/o hogar, podrás
                acceder a los descuentos de Viernes de cine con Claro Club y
                Royal Films.
                <strong>1 combo CLARO CLUB individual o doble</strong> los días
                viernes en todos los Multicines Royal Films del país. Combo
                individual Claro Club: 1 crispeta mediana + 1 gaseosa mediana +
                1 chocolatina pequeña Combo doble Claro Club: 1 crispeta mediana
                + 2 gaseosas medianas + 1 perro caliente
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                PELICULAS
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>las peliculas las puedes ver.</strong> en 3D - Dob 2D -
                Sub y VIP 2D - Dob
                <code></code>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                DESCUENTOS
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>
                  1 código para comprar con el 30% de descuento de una boleta.
                </strong>{" "}
                para cualquier función de los días viernes en todos los
                Multicines Royal Films habilitados del país. Aplican términos y
                condiciones.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
