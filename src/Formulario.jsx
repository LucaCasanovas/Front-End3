import React from 'react';
import Card from './Card';

function Formulario(props) {

const {
  nombre,
  colorFavorito,
  handleNombreChange,
  handleColorFavoritoChange, 
  onSubmit,
  mostrarCard
} = props;

  return (
    <div>
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={handleNombreChange}
        />
      </div>
      <div>
        <label htmlFor="colorFavorito">Color Favorito:</label>
        <input
          type="text"
          id="colorFavorito"
          value={colorFavorito}
          onChange={handleColorFavoritoChange}
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
    {mostrarCard && (
      <div>
        <Card nombre={nombre} colorFavorito={colorFavorito} />
      </div>
    )}
  </div>
  );
}

export default Formulario;

