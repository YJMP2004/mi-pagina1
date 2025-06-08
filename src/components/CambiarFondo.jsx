import React, { useState, useEffect } from "react";

function CambiarFondo() {
  const [oscuro, setOscuro] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = oscuro ? "#000" : "#fff";
    document.body.style.color = oscuro ? "#fff" : "#000";
  }, [oscuro]);

  return (
    <div className="text-center my-4">
      <button className="btn btn-dark" onClick={() => setOscuro(!oscuro)}>
        Cambiar fondo a {oscuro ? "blanco" : "negro"}
      </button>
    </div>
  );
}

export default CambiarFondo;
