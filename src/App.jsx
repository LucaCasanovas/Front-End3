import React, { useState } from "react";
import Formulario from "./Formulario";

function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs
  const [nombre, setNombre] = useState('');
  const [colorFavorito, setColorFavorito] = useState('');
  const [mostrarCard, setMostrarCard] = useState(false);

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleColorFavoritoChange = (event) => {
    setColorFavorito(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre.trim().length >= 3 && colorFavorito.length >= 6) {
      setMostrarCard(true);
    } else {
      alert('Por favor chequea que la información sea correcta');
    }
  };

  return (
    <div className="App">
      <h1>Formulario de Ejemplo</h1>
      <Formulario
        nombre={nombre}
        colorFavorito={colorFavorito}
        handleNombreChange={handleNombreChange}
        handleColorFavoritoChange={handleColorFavoritoChange}
        onSumbit= {handleSubmit}
        mostrarCard={mostrarCard}
      />
    </div>
  );
}

export default App;
