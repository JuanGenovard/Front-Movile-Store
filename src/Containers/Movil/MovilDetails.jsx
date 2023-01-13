import React, { useEffect } from "react";
import axios from "axios";
import { useState } from 'react'
import { useParams, Link, Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import './MovilDetails.scss'






const MovilDetail = () => {
    const { id } = useParams();
    const token = localStorage.getItem('jwt');
    let decoded = jwt_decode(token);

    const [movil, setMovil] = useState(null)
    const [cargando, setCargando] = useState(true)

    function handleClick() {
        const comprasbody = {
            emailUsuario: decoded.email,
            id_movil: id
        };
        const config = {
            headers: { Authorization: `Bearer ${token}` },
          };
        axios.post('http://localhost:3001/compras/nuevocompras', comprasbody, config)
            .then(response => {
            })
            .catch(error => {
            });
    }

    useEffect(() => {
        if(movil === null) {       
             axios.get(`http://localhost:3001/movils/${id}`).then(response => {
            setMovil(response.data)
            setCargando(false)
        })}

    }, [])

    if (cargando) {
        return <div>Cargando</div>
    }

    return (
        movil ? <div className="movildiv d-flex justify-content-center align-items-center">
            <img  className="movilbox" src={movil.URL} alt="imagen" /><br />
            {movil.nombre}<br />
            {movil.color}<br />
            {movil.precio}<br />
            <Link className='divcomprar m-5 d-flex justify-content-center align-items-center' to="/venta" onClick={() => handleClick()}><h1> Comprar </h1></Link>
        </div> : <div>No encontrado</div>
        
    );
}



export default MovilDetail;