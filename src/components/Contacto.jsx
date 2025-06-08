import { useState } from 'react';
import './Contacto.css';

export default function Contacto() {
  const [mostrar, setMostrar] = useState(false);
  const [formulario, setFormulario] = useState({
    nombre: '',
    correo: '',
    mensaje: ''
  });

  const enviar = (e) => {
    e.preventDefault();
    alert(`Gracias, ${formulario.nombre}. Tu mensaje ha sido enviado.`);
    setFormulario({ nombre: '', correo: '', mensaje: '' });
    setMostrar(false);
  };

  return (
    <>
      <button className="btn-contacto" onClick={() => setMostrar(true)}>⭐ Contáctame</button>
      {mostrar && (
        <div className="modal-fondo" onClick={() => setMostrar(false)}>
          <div className="modal-caja" onClick={(e) => e.stopPropagation()}>
            <span className="cerrar" onClick={() => setMostrar(false)}>&times;</span>
            <h2>Formulario de contacto</h2>
            <form onSubmit={enviar}>
              <input
                type="text"
                placeholder="Tu nombre"
                value={formulario.nombre}
                onChange={(e) => setFormulario({ ...formulario, nombre: e.target.value })}
                required
              />
              <input
                type="email"
                placeholder="Tu correo"
                value={formulario.correo}
                onChange={(e) => setFormulario({ ...formulario, correo: e.target.value })}
                required
              />
              <textarea
                placeholder="Tu mensaje"
                value={formulario.mensaje}
                onChange={(e) => setFormulario({ ...formulario, mensaje: e.target.value })}
                required
              />
              <button type="submit">Enviar</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
