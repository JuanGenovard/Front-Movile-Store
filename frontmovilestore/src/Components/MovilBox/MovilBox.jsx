import React from 'react';
import { Link } from 'react-router-dom';

const MovilBox = ({movil}) => {

    return (
        <Link to={`/movil/${movil.id_movil}`}>
            {movil.nombre}
            {movil.color}
            {movil.potencia}
        </Link>
    );
};

export default MovilBox;