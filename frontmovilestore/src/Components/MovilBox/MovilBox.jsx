import React from 'react';
import { Link } from 'react-router-dom';
import './MovilBox.scss'

const MovilBox = ({movil}) => {

    return (
        <Link className='card' to={`/movil/${movil.id_movil}`}>
            <img className='imagen' src={movil.URL} alt="imagen" />
            <div className='letras d-flex justify-content-center align-items-center'>
            {movil.nombre}<br />
            {movil.color}<br />
            {movil.precio}
            </div>
            
        </Link>
    );
};

export default MovilBox;