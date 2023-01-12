import React, { useEffect } from "react";
import state from '../../state';
import axios from "axios";
import { useState } from 'react'
import { useParams, Link, Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";






const MovilDetail = () => {
    const { id } = useParams();
    const token = localStorage.getItem('jwt');
    console.log(token);
    let decoded = jwt_decode(token);
    console.log(decoded);

    const [movil, setMovil] = useState(null)
    const [cargando, setCargando] = useState(true)

    function handleClick() {
        const comprasbody = {
            emailUsuario: decoded.email,
            id_movil: id
        };
        axios.post('http://localhost:3001/compras/nuevocompras', comprasbody)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

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
            <Link className='wordheader' to="/venta" onClick={handleClick()}>Comprar</Link>
        </div> : <div>No encontrado</div>
        
    );
}



export default MovilDetail;