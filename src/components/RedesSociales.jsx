import React, { useState } from "react";

function RedesSociales() {
  const [mostrar, setMostrar] = useState(false);

  return (
    <div className="text-center my-4">
      <button className="btn btn-info" onClick={() => setMostrar(!mostrar)}>
        Mis redes sociales
      </button>

      {mostrar && (
        <div className="mt-3">
          <a
            href="https://www.facebook.com/y123m"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary m-2"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/juli_09mp?igsh=MTR6MDczcDBkMjR2eQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-danger m-2"
          >
            Instagram
          </a>
        </div>
      )}
    </div>
  );
}

export default RedesSociales;
