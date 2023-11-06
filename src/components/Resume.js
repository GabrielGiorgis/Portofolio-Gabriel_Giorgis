import React from "react";

import { saveAs } from "file-saver";

const DescargarCV = () => {
  const handleDescargarCV = () => {
    const url = "../../public/CV_GiorgisGabriel.pdf"; // Ruta al archivo CV en la carpeta pública

    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        saveAs(blob, "CV_GiorgisGabriel.pdf"); // Nombre del archivo a descargar
      });
  };

  return (
    <div>
      <button onClick={handleDescargarCV}>Descargar CV</button>
    </div>
  );
};

export default DescargarCV;