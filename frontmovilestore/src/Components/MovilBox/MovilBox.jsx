import React from 'react';
import { Link } from 'react-router-dom';

const MovilBox = ({movil}) => {

    return (
        <Link className='card' to={`/movil/${movil.id_movil}`}>
            <img src={movil.URL} alt="imagen" />
            {movil.nombre}<br />
            {movil.color}<br />
            {movil.precio}
            
        </Link>
    );
};

export default MovilBox;