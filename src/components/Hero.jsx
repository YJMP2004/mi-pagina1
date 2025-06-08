import React, { useState } from "react";
import { Button } from "react-bootstrap";
import perfil from "../assets/perfil.jpg";
import "./Hero.css";

const Hero = () => {
  const [mostrarRedes, setMostrarRedes] = useState(false); // Estado para mostrar u ocultar redes

  return (
    <header
      className="hero-section text-white py-5"
      id="inicio"
      style={{ backgroundColor: "#FEEAE6" }} // Color suave cálido para mujeres
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Imagen */}
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <img
              src={perfil}
              alt="Mi Foto"
              className="img-fluid rounded-circle shadow"
              style={{ width: "200px", height: "200px", objectFit: "cover" }}
            />
          </div>

          {/* Texto y botones */}
          <div className="col-md-8 text-center text-md-start">
            <h1 className="display-4">¡Bienvenido a mi página web!</h1>
            <p className="lead">
              Este es un sitio personal hecho con React y Bootstrap.
            </p>
            <div className="mt-4">

              {/* Botón para mostrar redes */}
              <Button
                variant="outline-light"
                onClick={() => setMostrarRedes(!mostrarRedes)}
              >
                Mis redes sociales
              </Button>
               
              {/* Opciones de redes sociales */}
              {mostrarRedes && (
                <div className="mt-3">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary me-2"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-danger"
                  >
                    Instagram
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;



