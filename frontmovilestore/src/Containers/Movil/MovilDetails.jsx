import React, { useEffect } from "react";
import state from '../../state';
import axios from "axios";
import { useState } from 'react'
import { useParams, Link, Navigate } from "react-router-dom";



function handleClick() {
    const { fecha_compra, emailUsuario, id_movil } = comprasbody;
    const comprasbody = {
        fecha_compra: fecha_compra,
        emailUsuario: emailUsuario,
        id_movil: id_movil
    };
    axios.post('http://localhost:3001/compras/nuevocompras', comprasbody)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        });
}


const MovilDetail = () => {
    const { id } = useParams();
    const token = localStorage.getItem('jwt');

    const [movil, setMovil] = useState(null)
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        axios.get(`http://localhost:3001/movils/${id}`).then(response => {
            setMovil(response.data)
            setCargando(false)
        })
    }, [])

    if (cargando) {
        return <div>Cargando</div>
    }

    return (
        movil ? <div>
            <img  className="movilbox" src={movil.URL} alt="imagen" /><br />
            {movil.nombre}<br />
            {movil.color}<br />
            {movil.precio}<br />
            <Link className='wordheader' to="/venta" onClick={handleClick}>Comprar</Link>
        </div> : <div>No encontrado</div>
        
    );
}



export default MovilDetail;