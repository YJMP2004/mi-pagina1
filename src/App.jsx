import { useState } from "react";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/Navbar";
import Hero from "./components/Hero";
import Contacto from "./components/Contacto";
import MyModal from "./components/MyModal";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("Hola, mundo… ¡soy yo!");

  const handleAlert = () => {
    alert(
      "🌸 ¡Hola! Soy Yelena. Soy una chica apasionada por el mundo digital, me encanta transformar ideas en codigo lleno de vida. Creo que cada línea de código puede tener un toque de arte, y que lo simple también puede ser especial. Aquí comparto un pedacito de lo que amo hacer, con creatividad, dedicación y mucho corazón.✨ ¡Bienvenida/o!. Gracias por visitar mi portafolio 💖"
    );
  };

  return (
    <>
      {/* Navbar y Hero de la parte superior */}
      <MyNavbar />
      <Hero />

      {/* Contenido principal centrado */}
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <h2 className="text-primary mb-4">{title}</h2>

            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <Button onClick={handleAlert} className="btn-ver-mensaje">
                🌸 Sobre mí
              </Button>

              <Button
                onClick={() =>
                  setTitle("Construyendo sueños con código y creatividad ✨")
                }
                className="btn-cambiar-titulo"
              >
                🎀 Sorpréndeme
              </Button>

              <Button onClick={() => setShowModal(true)} className="btn-mostrar-mensaje">
                💖 Explorar más
              </Button>

              {/* Nuevo botón de contacto */}
              <Contacto />
            </div>
          </Col>
        </Row>
      </Container>

      {/* Modal con contenido personalizado */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Más sobre mí</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          🌷 Soy soñadora que transforma ideas en realidades digitales.
Creo que cada proyecto es una oportunidad para crear algo único y lleno de significado.
Me gusta que mis trabajos no solo funcionen bien, sino que también transmitan belleza y emoción.
Para mí, la tecnología es una forma de conectar personas y contar historias.
Si quieres compartir tu sueño, aquí estoy para hacerlo juntos realidad. ✨
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal personalizado hecho a mano con colores suaves */}
      <Container className="text-center my-4">
        <MyModal
          titulo="Gracias por visitar 💕"
          contenido="Si quieres saber más, escríbeme desde el formulario."
        />
      </Container>
    </>
  );
}

export default App;
