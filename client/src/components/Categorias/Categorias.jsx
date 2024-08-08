import React from 'react';
import './Categorias.css';
import Categoria from  "./Categoria/Categoria.jsx";

const Categorias = () => {
  return (
    <div className="categorias">
        <Categoria porcentaje={90} nombre='la ganadora' />
        <Categoria porcentaje={74} nombre='la segura' />
        <Categoria porcentaje={56} nombre='moderada fácil' />
        <Categoria porcentaje={41} nombre='moderada' />
        <Categoria porcentaje={24} nombre='moderada difícil' />
        <Categoria porcentaje={10} nombre='la jugosa' />
        <Categoria porcentaje={2} nombre='la soñadora' />
        <Categoria porcentaje={1} nombre='soñadora suprema' />
    </div>
  )
}

export default Categorias