import React from "react";
import lacocina3 from "./imagenes/lacocina3.jpg";
import lacocina2 from "./imagenes/lacocina2.jpg";
import lacocina1 from "./imagenes/lacocina1.jpg";

export default function Obras() {
  return (
    <div className="bg-dark">
      <div className="card bg-dark">
        <div className="card-body bg-dark">
          <img src={lacocina3} className="img-fluid bg-dark" alt="la cocina" />
        </div>
      </div>
      <div className="bg-dark align-items-center">
        <h2 className="text-light col">La Cocina</h2>
        <p className="bg-dark text-light">
          <ul className="bg-dark col fs-4" style={{ listStyleType: "none" }}>
            <li>Danza Teatro</li>
            <li>2023</li>
            <li>Obra para 2 bailarines y un actor</li>
          </ul>
        </p>
        <br />
        <br />
        <h2 className="bg-dark text-light">Descripcion del proyecto</h2>
        <p className="bg-dark text-light">
          <ul className="bg-dark col fs-4" style={{ listStyleType: "none" }}>
            <li>Duración 50 min</li>
            <li>Público +16</li>
          </ul>
        </p>
        <br />
        <br />
      </div>
      <div className="accordion bg-dark " id="accordionExample">
        <div className="accordion-item bg-dark text-center">
          <h2 className="accordion-header " id="headingOne">
            <button
              className="accordion-button collapsed open bg-dark text-light d-flex text-center"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              Ficha Artística
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse open text-light"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <ul className="" style={{ listStyleType: "none" }}>
                <li className="fs-2 fw-bold">Dirección</li>
                <li className="fs-4 ">Sofía Riveros Córdova</li>
                <br />

                <li className="fs-2 fw-bold">Producción</li>
                <li className="fs-4">Compañía Acto Cero</li>
                <br />

                <li className="fs-2 fw-bold">Asistencia de Dirección</li>
                <li className="fs-4">Carla Jiménez</li>
                <br />

                <li className="fs-2 fw-bold">Interpretación</li>
                <li className="fs-4">Belén Vargas</li>
                <li className="fs-4">Pascal Shuck</li>
                <li className="fs-4">Ignacio Peralta</li>

<br />
                <li className="fs-2 fw-bold">Investigaciones de Movimiento</li>
                <li className="fs-4">
                  Belén Vargas - Delfina Leonor - Pascal Shuck
                </li>
                <br />

                <li className="fs-2 fw-bold">Música Original</li>
                <li className="fs-4">Juan Aylwin</li>
                <li className="fs-4">Vicente Larroulet</li>
                <li className="fs-4">José Puga</li>
                <br />

                <li className="fs-2 fw-bold">Diseño y realización</li>
                <li className="fs-4">Arte Ciento Once</li>
              </ul>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="accordion-item bg-dark">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed bg-dark text-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              Reseña de la obra
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse bg-dark text-light"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body bg-dark text-light">
              <br />
              <p className="fs-3">
                {" "}
                Siguiendo la historia de una pareja decidida a preservar su
                amor, la trama se desenvuelve con la metáfora de un cocinero que
                los mantiene cautivos. Este cautiverio simboliza el amor
                obsesivo que los mantiene presos de sí mismos, desafiando las
                adversidades y su propia estabilidad emocional.
              </p>
              <br />
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="accordion-item bg-dark">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed bg-dark text-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Curriculum
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse bg-dark text-light"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul style={{ listStyleType: "none" }}>
              <li className="fs-2 fw-bold">2023</li>
              <br />
                <li className="fs-2 fw-bold">
                  Enero Estreno en Espacio La Higuera
                </li>
                <br />
                <li className="fs-2 fw-bold">
                  Enero Festival La Cosecha (BAJ)
                </li>
                <br />
                <li className="fs-2 fw-bold">
                  Abril V Festival de Danza del Teatro Azares
                </li>
              </ul>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="accordion-item bg-dark">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed bg-dark text-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Fotos
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse bg-dark text-light"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div>
                <img
                  src={lacocina1}
                  className="img-fluid bg-dark "
                  alt="la cocina"
                />
              </div>
              <br />
              <div>
                <img
                  src={lacocina2}
                  className="img-fluid bg-dark "
                  alt="la cocina"
                />
              </div>
              <br />
              <div>
                <img
                  src={lacocina3}
                  className="img-fluid bg-dark "
                  alt="la cocina"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
