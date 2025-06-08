import { useState } from 'react';
import './MyModal.css';

export default function MyModal({ titulo = "Bienvenida", contenido = "Gracias por visitar mi portafolio 💖" }) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <button className="btn-modal" onClick={() => setVisible(true)}>Mostrar Modal</button>
      {visible && (
        <div className="modal-fondo" onClick={() => setVisible(false)}>
          <div className="modal-caja" onClick={(e) => e.stopPropagation()}>
            <span className="cerrar" onClick={() => setVisible(false)}>&times;</span>
            <h2>{titulo}</h2>
            <p>{contenido}</p>
          </div>
        </div>
      )}
    </>
  );
}
