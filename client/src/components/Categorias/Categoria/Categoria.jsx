import React, { useState } from 'react';
import './Categoria.css';
import sound from '../../../sound/cash.mp3';
import {Link} from 'react-router-dom';

const Categoria = ({ nombre, porcentaje }) => {

    const [hovered, setHovered] = useState(false);

    const playClickSound = () => {
        const audio = new Audio(sound);
        audio.volume = 0.2;
        audio.play();
      };

    const convertirNombre = nombre.replace(" ", "-").normalize('NFD').replace(/[\u0300-\u036f]/g,"");

  return (
    <Link to={`/${convertirNombre}`}>
        <button
        className="hover-button"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={playClickSound}
        >
        <div
            className="fill"
            style={{
            width: hovered ? `${porcentaje}%` : '0%',
            }}
        ></div>
        <span className="button-text">{nombre}</span>
        <span className='porcentaje'>{porcentaje}%</span>
        </button>
    </Link>
  )
}

export default Categoria;