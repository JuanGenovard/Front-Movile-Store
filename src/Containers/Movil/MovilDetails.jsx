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
    const isAdmin = JSON.parse(localStorage.getItem('isAdmin'));

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
        axios.post('https://proyectofinal-production-63cf.up.railway.app/compras/nuevocompras', comprasbody, config)
            .then(response => {
            })
            .catch(error => {
            });
    }
    function deleteClick() {
        const config = {
            headers: { Authorization: `Bearer ${token}` },
        };
        axios.delete(`https://proyectofinal-production-63cf.up.railway.app/movils/movils/${id}`,config)
            .then(response => {
            })
            .catch(error => {
            });
    }

    useEffect(() => {
        if (movil === null) {
            axios.get(`https://proyectofinal-production-63cf.up.railway.app/movils/${id}`).then(response => {
                setMovil(response.data)
                setCargando(false)
            })
        }

    }, [])

    if (cargando) {
        return <div>Cargando</div>
    }
    if(isAdmin) {
        return (
            movil ? <div className="movildiv d-flex justify-content-center align-items-center">
                <img className="movilbox" src={movil.URL} alt="imagen" /><br />
                <div className="divinfo d-flex flex-column">
                <div className="nombreinfo">{movil.nombre}</div><br />
                <div className="nombreinfo">{movil.color}</div><br />
                <div className="nombreinfo">{movil.precio}</div><br />
                </div>
                <Link className='divcomprar m-5 d-flex justify-content-center align-items-center' to="/movil" onClick={() => deleteClick()}>
                    <h1> Eliminar </h1>
                </Link>
            </div> : <div>No encontrado</div>
    
        );
    }
    else{

    return (
        movil ? <div className="movildiv d-flex justify-content-center align-items-center">
            <img className="movilbox" src={movil.URL} alt="imagen" /><br />
            <div className="divinfo d-flex flex-column">
            <div className="nombreinfo">{movil.nombre}</div><br />
            <div className="nombreinfo">{movil.color}</div><br />
            <div className="nombreinfo">{movil.precio}</div><br />
            </div>
            <Link className='divcomprar m-5 d-flex justify-content-center align-items-center' to="/venta" onClick={() => handleClick()}>
                <h1> Comprar </h1>
            </Link>
        </div> : <div>No encontrado</div>

    );
}}




export default MovilDetail;