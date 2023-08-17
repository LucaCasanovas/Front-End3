//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario
import React from 'react';

function Card(props) {
  const {nombre,
  colorFavorito} = props;

  return (
    <div className="card">
      <h2>{nombre}</h2>
      <p>Color Favorito{colorFavorito}</p>
    </div>
  );
}

export default Card;
