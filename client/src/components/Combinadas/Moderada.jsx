import React from 'react';
import "./Combinadas.css";
import { combinadas } from '../../constants/combinadas.js';

const Moderada = () => {

  const combinadasCategoria = combinadas["moderada"];

  return (
    <div className='container-combinadas'>
      <div className='combinadas'>
        <h2>
            MODERADA
        </h2>
        <h3 style={{ marginTop: '-2rem' }}>{new Date().toLocaleDateString() + ''}</h3>
        {combinadasCategoria.map((combinada) => (
          <div className='container-card' key={combinada.id}>
            <ul className='partido'>
              {combinada.partidos.map((partido, index) => (
                <li key={index}>
                  <div className={`hover-button equipo ${partido.ganador === "Equipo 1" ? "fondoGanador" : ""}`}>
                    <h4>{partido.equipo1.toUpperCase()}</h4>
                  </div> 
                  <div className={`hover-button empate ${partido.ganador === "Empate" ? "fondoGanador" : ""}`}>
                    <h4>EMPATE</h4>
                  </div> 
                  <div className={`hover-button equipo ${partido.ganador === "Equipo 2" ? "fondoGanador" : ""}`}>
                    <h4>{partido.equipo2.toUpperCase()}</h4>
                  </div>
                </li>
              ))}
            </ul>
            <div className='hover-button cuota'>{combinada.cuota}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Moderada;